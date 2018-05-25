import { Component } from '@angular/core';
import { ViewController, IonicPage, NavParams, AlertController, ActionSheetController, Platform, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { PhotoViewer } from '@ionic-native/photo-viewer';
// import { PhotoService } from '../../providers/photo/photo.services';

@IonicPage()
@Component({
  selector: 'page-photo-modal',
  templateUrl: 'photo-modal.html'
})
export class PhotoModalPage {
  
  request: any;
  
  pic: string;
  
  basePath: string = 'requests/';
  
  showButton1: boolean = true;
  showButton2: boolean = false;
  showButton3: boolean = false;
  showAllButtons: boolean = false;
  uploadedPhoto1: boolean = false;
  uploadedPhoto2: boolean = false;
  uploadedPhoto3: boolean = false;
  
  someTextUrl;
  selectedPhoto;
  loading;
  currentImage;
  currentImage2;
  currentImage3;
  
  
  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private actionsheetCtrl: ActionSheetController,
    private camera: Camera,
    public alertCtrl: AlertController,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    private photoViewer: PhotoViewer,
    // private photoService: PhotoService,
  ) {
    
    // Récupère les données transmit par la request
    this.request = this.navParams.get('request');
  }
  
  signup() {
    this.viewCtrl.dismiss();
  }
  
  login() {
    this.viewCtrl.dismiss();
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

  zoomImage() { 
    this.photoViewer.show(this.request.photo);
  }

  zoomImage2() { 
    this.photoViewer.show(this.request.photo2);
  }

  zoomImage3() { 
    this.photoViewer.show(this.request.photo3);
  }
  

  
  choosePhoto() {
    
    const actionsheet = this.actionsheetCtrl.create({
      title: 'Uploader une photo depuis',
      buttons: [
        {
          text: 'Camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.uploadPhoto(1);
          }
        },
        {
          text: !this.platform.is('ios') ? 'Gallerie' : 'Gallerie',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.uploadPhoto(0);
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
  
  uploadPhoto(sType) {
    
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
        content: 'Upload de la photo en cours...'
      });
      this.loading.present();
      
      this.selectedPhoto  = this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
      
      this.upload();
    }, (err) => {
      console.log('Erreur:', err);
    });
  }
  
  dataURItoBlob(dataURI) {
    // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  };
  
  
  upload() {
    if (this.selectedPhoto) {
      var uploadTask = firebase.storage().ref().child('requests/'+ new Date().toString()).put(this.selectedPhoto);
      uploadTask.then(this.onSuccess, this.onError);
    }
  }
  
  onSuccess = (snapshot) => {
    this.currentImage = snapshot.downloadURL;
    this.request.photo = this.currentImage;
    this.uploadedPhoto1 = true;
    this.showButton1 = false;
    this.showButton2 = true;
    this.loading.dismiss();
  }
  
  onError = (error) => {
    console.log('Erreur:', error);
    this.loading.dismiss();
  }

  // deletePhoto() {
  //   console.log('1 ',this.selectedPhoto);
  //   console.log('2 ',this.currentImage);
  //   console.log('3 ',this.request.photo);
  //   // var requestRef = firebase.storage().ref().child('requests/'+ new Date().toString()).put(this.selectedPhoto);
  //   var uploadTask = firebase.storage().ref('requests/'+this.currentImage);
  //   uploadTask.delete().then(function() {
  //     console.log('photo supprimée');
  //   }).catch(function(error) {
  //     console.log('erreur');
  //   })
  // }

  // private deleteFileDatabase(key: string) {
  //   return this.db.list(`${this.basePath}/`).remove(key)
  // }
  
  
  
  
  
  choosePhoto2() {
    
    const actionsheet = this.actionsheetCtrl.create({
      title: 'Uploader une photo depuis',
      buttons: [
        {
          text: 'Camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.uploadPhoto2(1);
          }
        },
        {
          text: !this.platform.is('ios') ? 'Gallerie' : 'Gallerie',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.uploadPhoto2(0);
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
  
  uploadPhoto2(sType) {
    
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
        content: 'Upload de la photo en cours...'
      });
      this.loading.present();
      
      this.selectedPhoto  = this.dataURItoBlob2('data:image/jpeg;base64,' + imageData);
      
      this.upload2();
    }, (err) => {
      console.log('Erreur:', err);
    });
  }
  
  dataURItoBlob2(dataURI) {
    // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  };
  
  
  upload2() {
    if (this.selectedPhoto) {
      var uploadTask = firebase.storage().ref().child('requests/'+ new Date().toString()).put(this.selectedPhoto);
      uploadTask.then(this.onSuccess2, this.onError2);
    }
  }
  
  onSuccess2 = (snapshot) => {
    this.currentImage2 = snapshot.downloadURL;
    this.request.photo2 = this.currentImage2;
    this.uploadedPhoto2 = true;
    this.showButton2 = false;
    this.showButton3 = true;
    this.loading.dismiss();
  }
  
  onError2 = (error) => {
    console.log('Erreur:', error);
    this.loading.dismiss();
  }
  
  
  
  
  
  
  choosePhoto3() {
    
    const actionsheet = this.actionsheetCtrl.create({
      title: 'Uploader une photo depuis',
      buttons: [
        {
          text: 'Camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.uploadPhoto3(1);
          }
        },
        {
          text: !this.platform.is('ios') ? 'Gallerie' : 'Gallerie',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.uploadPhoto3(0);
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
  
  uploadPhoto3(sType) {
    
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
        content: 'Upload de la photo en cours...'
      });
      this.loading.present();
      
      this.selectedPhoto  = this.dataURItoBlob3('data:image/jpeg;base64,' + imageData);
      
      this.upload3();
    }, (err) => {
      console.log('Erreur:', err);
    });
  }
  
  dataURItoBlob3(dataURI) {
    // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  };
  
  
  upload3() {
    if (this.selectedPhoto) {
      var uploadTask = firebase.storage().ref().child('requests/'+ new Date().toString()).put(this.selectedPhoto);
      uploadTask.then(this.onSuccess3, this.onError3);
    }
  }
  
  onSuccess3 = (snapshot) => {
    this.currentImage3 = snapshot.downloadURL;
    this.request.photo3 = this.currentImage3;
    this.uploadedPhoto3 = true;
    this.showButton1 = false;
    this.showButton2 = false;
    this.showButton3 = false;
    this.showAllButtons = true;
    this.loading.dismiss();
  }
  
  onError3 = (error) => {
    console.log('Erreur:', error);
    this.loading.dismiss();
  }
}   
