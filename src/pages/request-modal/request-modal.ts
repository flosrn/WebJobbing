import { Component, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewController, IonicPage, NavParams, Slides, ModalController, NavController, Content, Scroll, TextInput } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../../models/profile/profile.interface';
import { DataService } from './../../providers/data/data.service';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { RequestListService } from '../../providers/request/request-list.services';
import { OfferListService } from '../../providers/offer/offer-list.services';
import { CommentListService } from '../../providers/comment/comment-list.services';
import { ResponseListService } from './../../providers/response/response-list.services';

import { AuthService } from '../../providers/auth/auth.service';
import { User } from 'firebase/app';
import { AlertService } from './../../providers/util/alert.service';
import { FormBuilder, FormControl } from '@angular/forms';


import { Comment } from '../../models/comment/comment.model';
import { Response } from '../../models/response/response.model';
import { Subscription } from 'rxjs/Subscription';
import { EmailComposer } from '@ionic-native/email-composer';


@IonicPage()
@Component({
  selector: 'page-request-modal',
  templateUrl: 'request-modal.html',
})
export class RequestModalPage {
  
  
  requestList$ = [];
  offerList$ = [];
  commentList$ = [];
  responseList$ = [];
  profileList$: Observable<Profile[]>;
  
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;
  
  photoNumber: number;
  pluralPhoto: boolean = false;
  showPhoto: boolean = false;
  
  offerAlreadyPost: boolean = false;
  
  request: any;
  
  @Input() profile: Profile;
  
  public userProfile: Profile;
  
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  
  @Output() existingProfile: EventEmitter<Profile>;
  
  // @ViewChild(Content) content: Content;
  // @ViewChild('scroll') private myScrollContainer: ElementRef;
  // @ViewChild('chatScroll') chatScroll: Scroll;
  
  public messageForm: any;
  
  showEmojiPicker = false;
  
  comment: Comment = {
    uidProfile: '',
    uidRequest: '',
    uidComment: '',
    uidResponse: '',
    comment: '',
    date:'',
    time:'',
  }
  
  onResponse = '';
  
  response: Response = {
    uidProfile: '',
    uidRequest: '',
    uidComment: '',
    comment: '',
    date:'',
    time:'',
  }
  
  showResponseInput: boolean = false;
  
  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public navCtrl: NavController,
    private data: DataService,
    public modalCtrl: ModalController,
    private photoViewer: PhotoViewer,
    private requests: RequestListService,
    private offers: OfferListService,
    private commentList: CommentListService,
    private responseList: ResponseListService,
    private auth: AuthService, 
    private alertCtrl2: AlertService,
    public formBuilder: FormBuilder,
    private emailComposer: EmailComposer,
  ) {
    
    // Récupère les données transmit par la request
    this.request = this.navParams.get('request');
    
    console.log('Données de la request actuelle : ',this.request);
    
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    }) 
    
    // Vérifie le nombre de photos de la request & gère le pluriel
    if(!this.request.photo) {
      this.photoNumber = 0;
    }
    if(this.request.photo) {
      this.photoNumber = 1;
    }
    if(this.request.photo2) {
      this.photoNumber = 2;
      this.pluralPhoto = true;
    }
    if(this.request.photo3) {
      this.photoNumber = 3;
      this.pluralPhoto = true;
    }
    
    this.existingProfile = new EventEmitter<Profile>();
    this.profile = {} as Profile;
    
    
  }  
  
  ngOnInit(): void {  
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).valueChanges().subscribe((profile: Profile) => {
        this.userProfile = <Profile>profile;
        this.userProfile.uid = user.uid;
        this.existingProfile.emit(this.userProfile);
      })
    })
  }
  
  ionViewWillEnter() {
    // Vide le tableau  
    this.offerList$ = [];
    // Récupère la liste des offres
    this.offers.getOfferListRef().once('value').then(snap => { 
      snap.forEach(element => {
        // Si l'uid de la request de l'offre est égale à l'uid de la request
        if(element.val().uidRequest == this.request.uidRequest) {
          this.data.getUid(element.val().uidProfile).valueChanges().subscribe(c => {
            let userOffer = element.val();   
            userOffer['uidOffer'] = element.key;
            userOffer['userOffer'] = c;
            this.offerList$.push(userOffer);
            // console.log('Données d\'une des offres appartenant à la request : ',userOffer);
            
            // Si le jobbeur à déjà poster une offre sur ce besoin 
            if(userOffer.uidProfile == this.userProfile.uid) {
              this.offerAlreadyPost = true;
            }
          });
        }
      }); 
    });
    this.refreshPage();
  }
  
  refreshPage() {
    // Vide le tableau 
    this.commentList$ = [];
    // Récupère la liste des commentaires
    this.commentList.getCommentListRef().once('value').then(snap => { 
      snap.forEach(element => {
        // Si l'uid de la request de l'offre est égale à l'uid de la request
        if(element.val().uidRequest == this.request.uidRequest) {
          this.data.getUid(element.val().uidProfile).valueChanges().subscribe(c => {
            let userComment = element.val();   
            userComment['uidComment'] = element.key;
            userComment['userComment'] = c;
            this.commentList$.push(userComment);
            // console.log('1er commentaire de la request "',this.request.title,'": ',element.val());
          });
        }
      });   
    });
  }
  
  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
  }
  
  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.messageInput.setFocus();
    }
    this.content.resize();
  }
  
  // Ajoute le commentaire, message toast, redirige
  addComment(comment: Comment) {
    if(this.userProfile.userPermission === 1) {
      this.comment.uidProfile = this.userProfile.uid;
      this.comment.uidRequest = this.request.uidRequest;
      
      this.commentList.addComment(this.comment).then(ref => {
        
        this.userProfile.commentPost =  this.userProfile.commentPost + 1;
        this.data.updateProfile(this.authenticatedUser, this.userProfile);
        
        this.refreshPage();
        this.comment.comment = ''; 
      })
    } else {
      this.alertCtrl2.presentAlertWithCallback('Permission non accordée', 'Pour des raisons de sécurité, une autorisation de l\'administrateur de cette application est nécessaire pour effectuer cette action, contacter l\'administrateur ?').then(ok => {
        if(ok) {
          let email = {
            to: 'florian.seran@gmail.com',
            attachments: [
            ],
            subject: 'WebJobbing permission',
            body: 'prenom:' + this.userProfile.firstName +'<br  \>' + 'nom: '+ this.userProfile.lastName + '<br  \>' + 'email: ' + this.userProfile.email + '<br  \><br  \>' + 'Bonjour, je souhaiterais accéder à toutes les fonctionnalités de l\'application.',
            isHtml: true
          };
          // Send a text message using default options
          this.emailComposer.open(email);
        } else {

        }
      });
    }
  }
  
  // Ajoute la reponse, message toast, redirige
  addResponse(response: Response) {
    if(this.userProfile.userPermission === 1) {
      this.response.uidProfile = this.userProfile.uid;
      this.response.uidRequest = this.request.uidRequest;
      
      this.response.uidComment = this.onResponse;
      
      this.responseList.addResponse(this.response).then(ref => {
        this.refreshPage();
        this.showResponseInput = false;
      })
    } else {
      this.alertCtrl2.presentAlertWithCallback('Permission non accordée', 'Pour des raisons de sécurité, une autorisation de l\'administrateur de cette application est nécessaire pour effectuer cette action, contacter l\'administrateur ?').then(ok => {
        if(ok) {
          let email = {
            to: 'florian.seran@gmail.com',
            attachments: [
            ],
            subject: 'WebJobbing permission',
            body: 'prenom:' + this.userProfile.firstName +'<br  \>' + 'nom: '+ this.userProfile.lastName + '<br  \>' + 'email: ' + this.userProfile.email + '<br  \><br  \>' + 'Bonjour, je souhaiterais accéder à toutes les fonctionnalités de l\'application.',
            isHtml: true
          };
          // Send a text message using default options
          this.emailComposer.open(email);
        } else {

        }
      });
    }
  }
  
  
  
  
  
  // Amène vers la slide suivante
  goToNextSlide() {
    this.slides.slideNext();
  }
  
  // Amène à la premiere slide
  goToSlideOne() {
    this.slides.slideTo(0, 500); 
  }
  
  // Amène à la seconde slide
  goToSlideTwo() {
    this.slides.slideTo(1, 500);  
  }
  
  // Amène à la troisieme slide
  goToSlideThree() {
    this.refreshPage();
    this.slides.slideTo(2, 500);  
  } 
  
  // Renvoie l'index de la slide actuelle
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
  }
  
  
  //Montre ou cache les photos quand on appuie sur le bouton (si photo il y a)
  toggleShowPhoto() {
    if(this.request.photo) { 
      this.showPhoto = !this.showPhoto;
    }
    if(this.request.photo2) {
      this.showPhoto = !this.showPhoto;
    }
    if(this.request.photo3) {
      this.showPhoto = !this.showPhoto;
    }
  }
  
  offerAlert() {
    if(this.userProfile.jobberStatut === true && !this.offerAlreadyPost) {
      this.navCtrl.push('OfferPage');
    }
    if(this.userProfile.jobberStatut === true && this.offerAlreadyPost) {
      this.alertOfferAlreadyPost();
    }
    if(this.userProfile.jobberStatut === false) {
      this.alertStatut();
    }
  }
  
  alertStatut() {
    this.alertCtrl2.presentAlert('Attention !', '<br />Vous devez être Jobbeur pour poster une offre sur le besoin d\'un utilisateur.<br /><br />Veuillez changer votre statut dans les paramètres.').then((yes) => {
    });
  }
  
  alertOfferAlreadyPost() {
    this.alertCtrl2.presentAlert('Attention !', '<br />Vous avez déja poster une offre pour ce besoin.<br /><br />Il n\'est pas possible de poster plusieurs offres sur le même besoin.').then((yes) => {
    });
  }
  
  // Cache les photos quand on revient sur la premiere slide si elles sont présente 
  hidePhoto() {
    if(this.showPhoto) {
      this.showPhoto = !this.showPhoto;
    }
  }
  
  // Ferme le modal
  back() { 
    this.viewCtrl.dismiss();
  }
  
  // Zoome sur la premiere image
  zoomImage() { 
    this.photoViewer.show(this.request.photo);
  }
  
  // Zoome sur la seconde image
  zoomImage2() { 
    this.photoViewer.show(this.request.photo2);
  }
  
  // Zoome sur la troisieme image
  zoomImage3() { 
    this.photoViewer.show(this.request.photo3);
  }
  
  
  
  
  
  
}
