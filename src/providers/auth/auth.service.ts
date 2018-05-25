import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Account } from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login-response.interface";
import firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) {

  }

  // Inscription
  async createUserWithEmailAndPassword(account) {
    try {
      return <LoginResponse> {
        result: await
        this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    }
    catch(e) {
      return <LoginResponse> {
        error: e
      }
    }
  }

  // Connexion
  async signInWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse> {
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    } 
    catch(e) {
      return <LoginResponse> {
        error: e
      };
    }
  }

  getAuthenticatedUser() {
    return this.auth.authState;
  }


  // Déconnexion
  onLogout() {
    firebase.auth().signOut();
  }
}
