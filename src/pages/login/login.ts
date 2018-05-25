import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { DataService } from '../../providers/data/data.service';

import { User } from "firebase/app";
import { Subscription } from "rxjs/Subscription";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  private profile$: Subscription; 
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private toast: ToastController, 
    private data: DataService
  ){

  }
    
    login(event: LoginResponse) {
      console.log(event);
      if(!event.error) {
        this.toast.create({
          message: `Bienvenue sur WebJobbing, ${event.result.email} !`,
          duration: 3000
        }).present();
          
        // Retrieving the AngularFireObject and use a fonction that return an Observable 
        this.profile$ = this.data.getProfile(<User>event.result)
        .snapshotChanges() // return an Observable
        .subscribe(action => {
          console.log(action.payload.val());
          action.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.push('EditProfilePage');
        });    
      }   
      else {
        this.toast.create({
          message: event.error.message,
          duration: 3000 
        }).present();
      }
    }
  }
  
  
  