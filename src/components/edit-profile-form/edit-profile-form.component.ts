import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { User } from "firebase/app";
import { Profile } from "../../models/profile/profile.interface";
import { DataService } from "../../providers/data/data.service";
import { AuthService } from "../../providers/auth/auth.service";
import { AlertController, NavController, ActionSheetController, Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';




@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {
  
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  
  // Loader
  private loader;
  
  uid: string;
  
  // Avatar par défaut
  pic: string = './assets/img/default.jpg';
  
  // Photo de couverture par défaut
  cov: string = './assets/img/cover.jpg'
  
  @Output() saveProfileResult: EventEmitter<Boolean>
  @Input() profile: Profile;
  
  
  constructor(
    private data: DataService, 
    private auth: AuthService, 
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private actionsheetCtrl: ActionSheetController,
    private camera: Camera,
    private platform: Platform,
    
    
  ) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    }) 
  }
  
  // Chargement de la photo
  ionViewDidLoad() {
    this.loadAvatar();
    this.loadCover();
  }
  
  async saveProfile() {
    if(this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      this.profile.jobberStatut = false;
      this.profile.userPermission = 0;
      this.profile.cover = './assets/img/cover.jpg';
      this.profile.knowledgeNumber = 0;
      this.profile.requestPost = 0;
      this.profile.workDone = 0;
      this.profile.commentPost = 0;
      this.profile.date = new Date().toString();

      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      console.log(result);
      
      if(!this.loader){
        // Création du loader
        this.loader = this.loadingCtrl.create({
          content: 'Création du profil en cours... Veuillez patienter, cette opération ne prendra que quelques instants'
        });
        // Affichage du loader
        this.loader.present();
      }
      // Délai de 4 secondes
      setTimeout(() => {
        // Création de l'alerte
        const alert = this.alertCtrl.create({
          title: 'Bienvenue ' + this.profile.firstName + ' !',
          message: 'Votre compte a bien été créé. Vous pouvez maintenant poster un besoin !',
          buttons: [
            {
              text: 'C\'est parti !',
              handler: () => {
                this.navCtrl.push('TabsPage');
              }
            }
          ]
        });
        alert.present();
        if(this.loader){
          // Disparition du loader
          this.loader.dismiss();
          this.loader = null;
        }
      },4000); 
    }
  }
  
  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }
  
  // Si l'utilisateur ne met pas d'avatar on met l'avatar par défaut
  ngOnInit(): void {
    if(!this.profile) {
      this.profile = {} as Profile;
      this.profile.avatar = this.pic;
    }
  } 
  
  // Retour sur la page Welcome
  back() {
    this.navCtrl.pop();  
  }
  
  
  
  choosePicture() {
    
    const actionsheet = this.actionsheetCtrl.create({
      title: 'Uploader une image depuis',
      buttons: [
        {
          text: 'Camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.uploadPicture(1);
          }
        },
        {
          text: !this.platform.is('ios') ? 'Gallerie' : 'Gallerie',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.uploadPicture(0);
          }
        },
        {
          text: 'Annuler',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }
  
  uploadPicture(sType) {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 720,
      targetHeight: 720,
      sourceType: sType,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(options)
    .then(data => {
      const image = `data:image/jpef;base64,${data}`;
      const userPic = firebase.storage().ref('avatars/'+firebase.auth().currentUser.uid);
      userPic.putString(image, 'data_url')
      .then(()=> {
        this.loadAvatar();
      })
      
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  loadAvatar(){
    const loading = this.loadingCtrl.create({
      content: 'Chargement en cours...'
    });
    loading.present();
    const userPic = firebase.storage().ref('avatars/'+firebase.auth().currentUser.uid);
    userPic.getDownloadURL() 
    .then((url)=> {
      this.pic = url;
      this.profile.avatar = url;
      loading.dismiss();
    })
    .catch(e =>{
      const userPic = firebase.storage().ref('avatars/default.jpg');
      userPic.getDownloadURL().then((url)=> {
        this.pic = url;
        console.log('this PIC ====' +this.pic);
        loading.dismiss();
      })
    });
  }
  
  
  uploadCover() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 720,
      targetHeight: 720,
      sourceType: 0,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(options)
    .then(data => {
      const image = `data:image/jpef;base64,${data}`;
      const userPic = firebase.storage().ref('covers/'+firebase.auth().currentUser.uid);
      userPic.putString(image, 'data_url')
      .then(()=> {
        this.loadCover();
      })
      
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  loadCover(){
    const loading = this.loadingCtrl.create({
      content: 'Chargement en cours...'
    });
    loading.present();
    const userPic = firebase.storage().ref('covers/'+firebase.auth().currentUser.uid);
    userPic.getDownloadURL()
    .then((url)=> {
      this.cov = url;
      this.profile.cover = url;
      console.log(this.profile.cover);
      loading.dismiss();
    })  
    .catch(e =>{
      const userPic = firebase.storage().ref('covers/default.jpg');
      userPic.getDownloadURL().then((url)=> {
        this.pic = url;
        console.log('this PIC ====' +this.pic);
        loading.dismiss();
      })
    });
  }
}
