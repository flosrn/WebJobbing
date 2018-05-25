import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ToastService2 } from '../../providers/toast/toast.services';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from "firebase/app";
import { Profile } from '../../models/profile/profile.interface';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  profile = [];
  
  constructor(
    public navCtrl: NavController, 
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public toastCtrl: ToastService2,
    public navParams: NavParams,
    private data: DataService, 
    private auth: AuthService,
    private camera: Camera,
  )
  {
    
  }

  // Au chargement de la page
  ionViewWillLoad() {
    // Appel de la fonction du service qui permet de reccupérer l'ID de l'utilisateur
    this.data.getUidUser(this.navParams.get('uidProfile')).ref.once('value').then(dataUser => {
      this.profile = dataUser.val();
      console.log('Profil de',dataUser.val().firstName,': ', this.profile);
    })  
  }
  
}
