import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    
  }

  register(event: LoginResponse) {
    console.log(event);
    if(!event.error) {
      const alert = this.alertCtrl.create({
        title: 'Félicitation !',
        message: 'Votre inscription à bien été prise en compte',
        buttons: [
          {
            text: 'Annuler',
            handler: () => {
              console.log('Disagree clicked');
              this.navCtrl.push('LoginPage');
            }
          },
          {
            text: 'Créer son profil',
            handler: () => {
              console.log('Agree clicked');
              this.navCtrl.push('EditProfilePage');
            }
          }
        ]
      });
      alert.present();
    }
  }

}
