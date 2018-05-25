import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { LoadingController, AlertController, Slides, ActionSheetController } from "ionic-angular";

import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from "firebase/app";
import { Profile } from "../../models/profile/profile.interface";
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../../providers/util/alert.service';
import { CameraService } from '../../providers/util/camera.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
import { ToastService } from './../../providers/util/toast.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {
  
  @ViewChild(Slides) slides: Slides;
  
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  
  //private authUser: User;
  public userProfile: Profile;
  // private loader: Loading;
  
  @Output() existingProfile: EventEmitter<Profile>;
  
  showDescription: boolean = false;
  editDescriptionStatus: boolean = false;
  
  showEdit: boolean = false;
  showEditButtons: boolean = false;
  
  showProfileUser: boolean = false;
  showText: boolean = false;
  
  testCheckboxOpen = false;
  testCheckboxResult: any;
  
  @Output() saveProfileResult: EventEmitter<Boolean>
  @Input() profile: Profile;
  
  
  someTextUrl;
  selectedPhoto;
  selectedCover;
  loading;
  currentPhoto;
  currentCover;
  
  
  
  cov: string = './assets/img/cover.jpg'
  
  constructor(
    private data: DataService, 
    private auth: AuthService, 
    private alertCtrl: AlertController,
    private alertCtrl2: AlertService,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastService,
    private actionsheetCtrl: ActionSheetController,
  ) {
    
    this.existingProfile = new EventEmitter<Profile>();
    
    this.saveProfileResult = new EventEmitter<Boolean>();
    
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user; 
    }) 
    
    this.profile = {} as Profile;
  } 
  
  ngOnInit(): void {  
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).valueChanges().subscribe((profile: Profile) => {
        this.userProfile = <Profile>profile;
        
        this.existingProfile.emit(this.userProfile);
      })
    })
  }
  
  
  // Alerte modification email
  alertEmail() {
    this.alertCtrl2.alertInput('Changer d\'adresse mail', 'Quel est votre nouvelle adresse mail ?', this.userProfile.email).then(ok => {
      if(ok) {
        // Change l'adresse mail
        this.profile.email = ok;
      }
      if(!ok) {
        // Bouton effacer
        this.profile.email = '';
      } 
      this.data.updateProfile(this.authenticatedUser, this.profile);
    });
  }
  
  // Alerte modification prénom
  alertFirstName() {
    this.alertCtrl2.alertInput('Changer de prénom', 'Quel est votre prénom ?', this.userProfile.firstName).then(ok => {
      if(ok) {
        // Change le prénom
        this.profile.firstName = ok;
      }
      if(!ok) {
        // Bouton effacer
        this.profile.firstName = '';
      } 
      this.data.updateProfile(this.authenticatedUser, this.profile);
    });
  }
  
  // Alerte modification nom
  alertLastName() {
    this.alertCtrl2.alertInput('Changer de nom', 'Quel est votre nom de famille ?', this.userProfile.lastName).then(ok => {
      if(ok) {
        // Change le nom
        this.profile.lastName = ok;
      }
      if(!ok) {
        // Bouton effacer
        this.profile.lastName = '';
      } 
      this.data.updateProfile(this.authenticatedUser, this.profile);
    });
  }
  
  // Alerte modification description
  alertDescription() {
    this.alertCtrl2.alertInput('Présentez vous', 'Qui êtes vous ?', this.userProfile.description).then(ok => {
      if(ok) {
        // Sauvegarde la description entrée par l'utilisateur
        this.profile.description = ok;
      }
      if(!ok) { 
        // Bouton effacer
        this.profile.description = '';
      } 
      this.data.updateProfile(this.authenticatedUser, this.profile);
    });
  }
  
  // Alerte modification métier
  alertJob() {
    this.alertCtrl2.alertInput('Quel métier exercez vous ?', 'Vous pouvez renseigner votre métier', this.userProfile.job).then(ok => {
      if(ok) {
        // Sauvegarde la ville entrée par l'utilisateur
        this.profile.job = ok;
      }
      if(!ok) {
        // Bouton effacer
        this.profile.job = '';
      } 
      this.data.updateProfile(this.authenticatedUser, this.profile);
    });
  }
  
  // Alerte modification ville
  alertCity() {
    this.alertCtrl2.alertInput('Où habitez vous ?', 'Vous pouvez renseigner la ville dans laquelle vous souhaitez accomplir vos missions', this.userProfile.location).then(ok => {
      if(ok) {
        // Sauvegarde la ville entrée par l'utilisateur
        this.profile.location = ok;
      } 
      if(!ok) {
        // Bouton effacer
        this.profile.location = '';
      } 
      this.data.updateProfile(this.authenticatedUser, this.profile);
    });
  }
  
  alertKnowledges() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Dans quel(s) domaine(s) avez vous le plus de compétence(s) ?');
    
    alert.addInput({
      type: 'checkbox',
      label: 'PC',
      value: 'PC',
      // checked: true
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Tablette',
      value: 'Tablette'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Smartphone',
      value: 'Smartphone'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'TV',
      value: 'TV'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Formation',
      value: 'Formation'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Autre',
      value: 'Autre'
    });
    
    alert.addButton('Annuler');
    alert.addButton({
      text: 'OK',
      handler: (data: any) => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
        
        this.profile.knowledgeNumber = data.length;
        this.profile.knowledges = data;
        this.data.updateProfile(this.authenticatedUser, this.profile);
      }
    });  
    alert.present();
  }
  
  // Alerte modification photo de couverture
  alertCover() {
    this.alertCtrl2.presentAlertWithCallback('Photo de couverture', 'Voulez vous changer de photo de couverture ?').then(ok => {
      if(ok) {
        this.uploadCoverImage();
      }
    })
  }
  
  // Renvoie l'index de la slide actuelle
  slideChanged() { 
    let currentIndex = this.slides.getActiveIndex();
    console.log('slide :', currentIndex);
  }
  
  goToNextSlide() {
    this.slides.slideNext();
  }
  
  goToSlideOne() {
    this.slides.slideTo(0, 500); 
  }
  
  goToSlideTwo() {
    this.slides.slideTo(1, 500);  
  }
  
  goToSlideThree() {
    this.slides.slideTo(2, 500); 
  }
  
  // Visualise le profil tel que les utilisateurs le voient
  onShowProfile() {  
    this.showProfileUser = !this.showProfileUser;
  }
  
  // Accordéon
  toggleSection() {
    this.showText = !this.showText;
  }
  
  
  choosePhoto() {
    
    const actionsheet = this.actionsheetCtrl.create({
      title: 'Uploader une photo depuis',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.uploadPhotoImage(1);
          }
        },
        {
          text: 'Gallerie',
          icon: 'image',
          handler: () => {
            this.uploadPhotoImage(0);
          }
        },
        {
          text: 'Annuler',
          icon: 'close',
          role: 'destructive',
          handler: () => {
            console.log('L\'utilisateur a annuler l\'opération');
          }
        }
      ]
    });
    return actionsheet.present();
  }
  
  
  uploadPhotoImage(sType) {
    
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 720,
      targetWidth: 720,
      sourceType: sType,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.loading = this.loadingCtrl.create({
        content: 'Upload de la photo de profil en cours...'
      });
      this.loading.present();
      
      this.selectedPhoto  = this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
      
      var photoPath = 'avatars/'+ firebase.auth().currentUser.uid;
      this.uploadImage(photoPath);
      
    }, (err) => {
      console.log('Erreur:', err);
    });
  }
  
  uploadCoverImage() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 720,
      targetWidth: 720,
      sourceType: 0,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.loading = this.loadingCtrl.create({
        content: 'Upload de la photo de couverture en cours...'
      });
      this.loading.present();
      
      this.selectedCover  = this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
      
      var coverPath = 'covers/'+ firebase.auth().currentUser.uid;
      this.uploadCover(coverPath);
      
    }, (err) => {
      console.log('Erreur:', err);
    });
  }
  
  // Converti l'image en données binaires
  dataURItoBlob(dataURI) {
    // code adapté de: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  };
  
  uploadImage(imagePath) {
    if (this.selectedPhoto) {
      var uploadTask = firebase.storage().ref().child(imagePath).put(this.selectedPhoto);
      uploadTask.then(this.onSuccessPhoto, this.onError);
    }
  }
  
  uploadCover(imagePath) {
    if (this.selectedCover) {
      var uploadTask = firebase.storage().ref().child(imagePath).put(this.selectedCover);
      uploadTask.then(this.onSuccessCover, this.onError);
    }
  }
  
  onSuccessPhoto = (snapshot) => {
    this.currentPhoto = snapshot.downloadURL;
    this.profile.avatar = this.currentPhoto;
    
    console.log('Photo de profil uploadé avec succès :', this.profile.avatar);
    this.toastCtrl.create('Photo de profil uploadé avec succès', false, 3000);
    
    this.data.updateProfile(this.authenticatedUser, this.profile);
    this.loading.dismiss();
  }
  
  onSuccessCover = (snapshot) => {
    this.currentCover = snapshot.downloadURL;
    this.profile.cover = this.currentCover;
    
    console.log('Photo de couverture uploadé avec succès :', this.profile.cover);
    this.toastCtrl.create('Photo de couverture uploadé avec succès', false, 3000);
    
    this.data.updateProfile(this.authenticatedUser, this.profile);
    this.loading.dismiss();
  }
  
  onError = (error) => {
    console.log('Erreur:', error);
    this.toastCtrl.create(`Erreur : ${error}`, true, 3000);
    this.loading.dismiss();
  }
}