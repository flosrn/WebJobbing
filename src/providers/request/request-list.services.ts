import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Request } from "../../models/request/request.model";
import firebase from 'firebase';


@Injectable()
export class RequestListService {

  private requestListRef = this.db.list<Request>('request-list');

  requestKey: any;
  
  constructor(
    private db: AngularFireDatabase,
  ) 
  {
      
  }
    
    // Fonction qui liste tous les besoins
    getRequestListRef() {
      return this.db.database.ref("request-list");    
    }
    
    // Fonction ajouter besoin
    addRequest(request: Request) {
      return this.requestListRef.push(request).then(object => {
        // J'attribue la clé de l'objet a request.key
        request.key = object.key;
        // J'update la request pour qu'elle prenne en comte l'ajout de la clé
        this.requestKey = firebase.database().ref('request-list/').child(request.key);
        this.requestKey.update(request);
      })
    }
    
    // Fonction update besoin
    async updateRequest(request: Request) {
      this.requestKey = firebase.database().ref('request-list/').child(request.key);
      try {
        await this.requestKey.update(request);
        return true;
      }
      catch (e) {
        console.error(e);
        return false;
      }
    }
    
    // Fonction supprimer un besoin
    removeRequest(request: Request) {
      return this.requestListRef.remove(request.key);
    }
  }