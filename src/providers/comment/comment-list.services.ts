import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";

import { Comment } from "../../models/comment/comment.model";
import { Profile } from "../../models/profile/profile.interface";
import { User } from "firebase/app";



@Injectable()
export class CommentListService {
    
    profil:Profile 

    private commentListRef = this.db.list<Comment>('comment-list')
    
    private profiles = this.db.list<Comment>('profiles');

    commentObject: AngularFireObject<Comment>;
    
    constructor(private db: AngularFireDatabase) { }
    
    // Fonction obtenir commentaires
    getCommentListRef() {
        return this.db.database.ref("comment-list");    
    }
    
    
    // Fonction obtenir un commentaire
    getCommentList() {
        return this.commentListRef;    
    }
    
    getprofiles() {
        return this.profiles;    
    }

    // Fonction obtenir l'ID d'un profil
  getUidRequest(uidRequest: String) {
    this.commentObject = this.db.object(`/request/${uidRequest}`);
    return this.commentObject;
  } 


    // Fonction obtenir l'ID d'un profil
    getUidComment(uidComment: String) {
        this.commentObject = this.db.object(`/comment/${uidComment}`);
        return this.commentObject;
      } 
    
    // Fonction ajouter un commentaire
    addComment(comment: Comment) {
        return this.commentListRef.push(comment);
    }


    
    // async updateComment(uidComment: Comment) {
    //     this.commentObject = this.db.object(`/comment/${comment}`);
    //     try {
    //       await this.commentObject.update(comment);
    //       return true;
    //     }
    //     catch (e) {
    //       console.error(e);
    //       return false;
    //     }
    //   }
}