import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { User } from "firebase/app";
import "rxjs/add/operator/take";
import { Profile } from '../../models/profile/profile.interface';

@Injectable()
export class DataService {
  
  private profileListRef = this.database.list<Profile>('profile-list');
  
  profileObject: AngularFireObject<Profile>
  
  constructor(
    private database: AngularFireDatabase,
  ) 
  {
    
  }

  // Fonction obtenir le profil de l'utilisateur connecté
  getProfile2() {
    // this.profileObject = this.database.object(`/profiles/`);
    // return this.profileObject;
    this.profileListRef;
    return this.profileListRef;
  } 
  
  // Fonction obtenir le profil de l'utilisateur connecté
  getProfile(user: User) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    return this.profileObject;
  } 
  
  // Fonction obtenir le profil d'une personne en fonction de son ID
  getUid(uid: String) {
    this.profileObject = this.database.object(`/profiles/${uid}`);
    return this.profileObject;
  } 
  
  // Fonction obtenir le profil d'une personne en fonction de son ID
  getUidUser(uid: String) {
    let test = this.database.database.ref(`/profiles/${uid}`);
    return test; 
  } 
  
  // Fonction sauvegarder nouveau profil
  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    try {
      await this.profileObject.set(profile);
      return true;
    }
    catch (e) {
      console.error(e);
      return false;
    }
  }
  
  // Fonction update profil existant
  async updateProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    try {
      await this.profileObject.update(profile);
      return true;
    }
    catch (e) {
      console.error(e);
      return false;
    }
  }
  
  updateProfile2(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    return this.profileObject.update(profile);
      
  }
}
