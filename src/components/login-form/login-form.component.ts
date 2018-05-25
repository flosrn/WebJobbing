import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NavController, App } from "ionic-angular";

import { Account } from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login-response.interface";
import { AuthService } from "../../providers/auth/auth.service";
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { DataService } from '../../providers/data/data.service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent  implements OnInit {
  
  public type = 'password';
  public showPass = false;
  
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  
  public userProfile: Profile;
  
  @Output() existingProfile: EventEmitter<Profile>;
  
  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;
  
  constructor(
    private navCtrl: NavController, 
    private auth: AuthService,
    private data: DataService, 
    private alertCtrl2: AlertService,
    private toastCtrl: ToastService,
    private app: App,
  ) 
  {
    this.existingProfile = new EventEmitter<Profile>();
    
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    }) 
    
    this.loginStatus = new EventEmitter<LoginResponse>();
  }
  
  ngOnInit(): void {  
    if(this.authenticatedUser) {
      this.auth.getAuthenticatedUser().subscribe((user: User) => {
        this.data.getProfile(user).valueChanges().subscribe((profile: Profile) => {
          this.userProfile = <Profile>profile;
          this.userProfile.uid = user.uid;
          console.log('Utilisateur connecté: ',this.userProfile);
          
          this.existingProfile.emit(this.userProfile);
        })
      })
    }
  }
  
  async login() {
    if(this.authenticatedUser) {
      this.toastCtrl.create(`Bienvenue sur WebJobbing ${this.userProfile.firstName} !`, false, 3000);
      this.navCtrl.setRoot('TabsPage');
    } else {
      const LoginResponse = await this.auth.signInWithEmailAndPassword(this.account);
      this.loginStatus.emit(LoginResponse);
    }
  }
  
  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }
  
  // Bouton retour
  back() {
    // Si l'utilisateur est connecté
    if(this.authenticatedUser) {
      this.navCtrl.pop();
    } else {
      this.navCtrl.setRoot('WelcomePage');
    }
  }
  
  // Change le type du password en text ou password
  showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password'; 
    }
  }
  
  // Déconnexion 
  logOut() {
    this.alertCtrl2.presentAlertWithCallback('Etes vous sûr ?',
    'Cela va vous déconnecter de l\'application.').then((yes) => {
      if (yes) {
        this.auth.onLogout();
        this.app.getRootNav().setRoot('LoginPage'); 
        this.toastCtrl.create('Déconnexion réussie');
      }
    });
  }
}
