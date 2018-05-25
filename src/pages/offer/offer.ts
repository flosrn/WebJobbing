import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ViewController, IonicPage, NavParams, Slides, ModalController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../../models/profile/profile.interface';
import { DataService } from './../../providers/data/data.service';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from "firebase/app";
import { ToastService2 } from '../../providers/toast/toast.services';
import { RequestModalPage } from '../request-modal/request-modal';
import { Offer } from '../../models/offer/offer.model';
import { OfferListService } from '../../providers/offer/offer-list.services';
import { RequestListService } from '../../providers/request/request-list.services';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../../providers/util/alert.service';
import { EmailComposer } from '@ionic-native/email-composer';


@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage {
  
  requestList$ = [];
  profileList$: Observable<Profile[]>;
  
  
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  
  request: any;
  
  offer: Offer = {
    uidProfile: '',
    uidRequest: '',
    price: undefined,
    comment: '',
  }
  
  public userProfile: Profile;
  @Output() existingProfile: EventEmitter<Profile>;
  
  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public navCtrl: NavController,
    private data: DataService,
    public modalCtrl: ModalController,
    private photoViewer: PhotoViewer,
    private auth: AuthService, 
    private toast: ToastService2,
    private offerList: OfferListService,
    private requests: RequestListService,
    private alertCtrl2: AlertService,
    private emailComposer: EmailComposer,
  ) {
    
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    }) 
    
    this.existingProfile = new EventEmitter<Profile>();
    
    // Récupère les données transmit par la request
    this.request = this.navParams.get('request');
    
    
    // this.profileList$ = this.data.getProfileList().snapshotChanges().map(
    //   changes => {
    //     return changes.map(c => ({
    //       key: c.payload.key, ...c.payload.val()
    //     }));
    //   });
    
    // // Récupère la liste des requests
    // this.requests.getRequestListRef().once('value').then(snap => {
    //   snap.forEach(element => {
    //     data.getUid(element.val().uidProfile).valueChanges().subscribe(c => {
    //       let userRequest = element.val();  
    //       userRequest['userRequest'] = c;
    
    //       this.requestList$.push(userRequest);
    //     });
    //   });
    // });
  }  
  
  // Récupère les données de l'utilisateur
  ngOnInit(): void {  
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).valueChanges().subscribe((profile: Profile) => {
        this.userProfile = <Profile>profile;
        this.userProfile.uid = user.uid;
        console.log('Utilisateur connecté :',this.userProfile); 
        this.existingProfile.emit(this.userProfile);
      })
    })
  }
  
  // Ajoute l'offre, message toast, redirige
  addOffer(offer: Offer) {
    if(this.userProfile.userPermission === 1) {
      this.offer.uidProfile = this.userProfile.uid;
      this.offer.uidRequest = this.request.uidRequest;
      this.offerList.addOffer(this.offer).then(ref => {
        
        this.userProfile.workDone =  this.userProfile.workDone + 1;
        this.data.updateProfile(this.authenticatedUser, this.userProfile);
        
        this.toast.show(`${offer.price} ajouté !`);
        this.navCtrl.pop();
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
  
  back() { 
    this.viewCtrl.dismiss();
  }
  
}
