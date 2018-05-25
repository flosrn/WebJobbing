import { Component, Injectable } from "@angular/core";
import { IonicPage, AlertController, Platform, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';



@Injectable()
export class PhotoService {

  request: any;

  pic: string;

  basePath: string = 'requests/';

  constructor(
    // public navParams: NavParams,
    private camera: Camera,
    public alertCtrl: AlertController,
    public platform: Platform,
    public loadingCtrl: LoadingController,
  ) {
      // Récupère les données transmit par la request
    // this.request = this.navParams.get('request');
    }
    

    uploadPhoto(sType) {
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
        
        const userPic = firebase.storage().ref('/requests/aaaa.jpg');
        userPic.putString(image, 'data_url')
        .then(()=> {
          this.loadPhoto();
        })
        
      })
      .catch(error => { 
        console.log(error);
      })
    }
    
    loadPhoto(){
      const loading = this.loadingCtrl.create({
        content: 'Chargement en cours...'
      });
      loading.present();
      const userPic = firebase.storage().ref('/requests/aaaa.jpg');
      userPic.getDownloadURL()
      .then((url)=> {
        this.pic = url;
        this.request.photo   = url;
        loading.dismiss();
      })
      .catch(e =>{
        const userPic = firebase.storage().ref('/requests/aaaa.jpg');
        userPic.getDownloadURL().then((url)=> {
          this.pic = url;
          console.log('this PIC ====' +this.pic);
          loading.dismiss();
        })
      });
    }

  }