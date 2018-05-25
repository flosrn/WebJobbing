import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";

import { Offer } from "../../models/offer/offer.model";
import { Profile } from "../../models/profile/profile.interface";
import { User } from "firebase/app";
import firebase from 'firebase';



@Injectable()
export class OfferListService {

    req: any;
    
    profil:Profile 

    private offerListRef = this.db.list<Offer>('offer-list')
    
    private profiles = this.db.list<Offer>('profiles');

    offerObject: AngularFireObject<Offer>;
    
    constructor(private db: AngularFireDatabase) { }
    
    // Fonction obtenir offre
    getOfferListRef() {
        return this.db.database.ref("offer-list");    
    }
    
    
    // Fonction obtenir une offre
    getOfferList() {
        return this.offerListRef;    
    }
    
    getprofiles() {
        return this.profiles;    
    }

    // Fonction obtenir l'ID d'un profil
  getUidRequest(uidRequest: String) {
    this.offerObject = this.db.object(`/request/${uidRequest}`);
    return this.offerObject;
  } 
    
    // Fonction ajouter une offre
    addOffer(offer: Offer) {
        return this.offerListRef.push(offer);
    }
    
    async updateOffer(offer: Offer) {
        // request.key = this.key; 
         
         this.req= firebase.database().ref('offer-list/').child(offer.key);
         try {
             await this.req.update(offer);
             return true;
         }
         catch (e) {
             console.error(e);
             return false;
         }
     }
}