import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth/auth.service';

import { Account } from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login-response.interface";
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent implements OnInit{
  
  // Initialise le type du mot de passe sur password
  public type = 'password';
  // Initialise showPass sur false
  public showPass = false;
  

  // Loader
  private loader: Loading;
  
  // Initialise isToggled sur false
  public isToggled: boolean = false;
  
  signupform: FormGroup;  
  
  // Model de l'account
  account = {} as Account;
  
  @Output() registerStatus: EventEmitter<LoginResponse>
  
  constructor(
    private auth: AuthService, 
    private navCtrl: NavController,
    private loading: LoadingController,
    
  ) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  // Passe le toggle de false à true
  toggle() {
    this.isToggled = !this.isToggled; 
  }  
  
  ngOnInit(): void {
    let EMAILPATTERN = /^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    let PASSWORDPATTERN = /^(?=.*?[a-z])(?=.*?[0-9]).{1,}$/; 

    this.signupform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      password: new FormControl('', [Validators.required, Validators.pattern(PASSWORDPATTERN), Validators.minLength(6), 
        Validators.maxLength(12)]),
        password2: new FormControl('', [Validators.required, Validators.pattern(PASSWORDPATTERN), Validators.minLength(6), 
          Validators.maxLength(12)]), 
        }); 
      }
      
      async register() {
        try {
          const result = await this.auth.createUserWithEmailAndPassword(this.account);
    
          // Reférence à l'erreur : https://stackoverflow.com/a/45097885/9092948
          if(!this.loader){
            // Création du loader
            this.loader = this.loading.create({
              content: 'Inscription en cours... Veuillez patienter, cette opération ne prendra que quelques instants'
            });
            // Affichage du loader
            this.loader.present();
          }
          // Délai de 4 secondes
          setTimeout(() => {
            // Emet le resultat de l'event (l'alert dans register.ts)
            this.registerStatus.emit(result);
        
            if(this.loader){
              // Disparition du loader
              this.loader.dismiss();
              this.loader = null;
            }
          },4000); 
        }
        catch (e) {
          console.error(e);
          this.registerStatus.emit(e);  
        }
      }
      
      // Renvoi sur la page Login
      navigateToLoginPage() {
        this.navCtrl.push('LoginPage');
      }
      
      // Retour sur la page Welcome
      back() {
        this.navCtrl.pop();
      }
      
      // Fonction showPassword()
      showPassword() {
        // Passe showPass à true
        this.showPass = !this.showPass;
        // Change le type du mot de passe en text ou password
        if(this.showPass){
          this.type = 'text';
        } else {
          this.type = 'password'; 
        }
      }
    }
    