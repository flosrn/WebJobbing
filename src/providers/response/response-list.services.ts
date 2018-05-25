import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";

import { Response } from "../../models/response/response.model";
import { Profile } from "../../models/profile/profile.interface";
import { User } from "firebase/app";



@Injectable()
export class ResponseListService {
    
    profil:Profile 

    private responseListRef = this.db.list<Response>('response-list')
    
    private profiles = this.db.list<Response>('profiles');

    responseObject: AngularFireObject<Response>;
    
    constructor(private db: AngularFireDatabase) { }
    
    // Fonction obtenir responseaires
    getResponseListRef() {
        return this.db.database.ref("response-list");    
    }
    
    
    // Fonction obtenir un responseaire
    getResponseList() {
        return this.responseListRef;    
    }
    
    getprofiles() {
        return this.profiles;    
    }

    // Fonction obtenir l'ID d'un profil
  getUidRequest(uidRequest: String) {
    this.responseObject = this.db.object(`/request/${uidRequest}`);
    return this.responseObject;
  } 
    
    // Fonction ajouter un responseaire
    addResponse(response: Response) {
        return this.responseListRef.push(response);
    }
    
    // // Fonction editer un besoin
    // editRequest(request: Request) {
    //     return this.requestListRef.update(request.key, request);
    // }
    
    // // Fonction supprimer un besoin
    // removeRequest(request: Request) {
    //     return this.requestListRef.remove(request.key);
    // }
}