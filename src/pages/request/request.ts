import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RequestListService } from '../../providers/request/request-list.services';
import { Observable } from 'rxjs/Observable';
import { Request } from '../../models/request/request.model';
import { Profile } from '../../models/profile/profile.interface';
//import { EditItemPage } from "../../pages/edit-item/edit-item";
//import { AdditemPage } from '../add-item/add-item';
import { ToastService2 } from './../../providers/toast/toast.services';
import { DataService } from '../../providers/data/data.service';


@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class RequestPage {
  
  requestList$ = [];
  profileList$: Observable<Profile[]>;
  
  public request: any;
  
  constructor(
    public navCtrl: NavController,  
    public navParams: NavParams,
    private requests: RequestListService, 
    private toast: ToastService2,
    public modalCtrl: ModalController,
    private data: DataService
  ) 
  {
    
  }
  
  // Au chargement de la page
  ionViewWillEnter() {
    this.requestList$ = [];
    // Appel de la fonction dans mon service qui liste les besoins 
    this.requests.getRequestListRef().once('value').then(snap => {
      // Pour chaque besoin
      snap.forEach(element => {
        // On réccupère l'ID du profil qui à posté le besoin
        this.data.getUid(element.val().uidProfile).valueChanges().subscribe(profileData => {
          let userRequest = element.val();
          userRequest['uidRequest'] = element.key;
          userRequest['userRequest'] = profileData;
          this.requestList$.push(userRequest);
        });
      });
    });  
  }
  
  // Refresher    
  doRefresh(refresher) {
    // Délai de 2,5 secondes
    setTimeout(() => {
      // Vide le tableau de données
      this.requestList$ = [];
      // Recharge les données de la page
      this.ionViewWillEnter();
      // Disparition du refresher
      refresher.complete();
    }, 2500); 
  }
  
  // Ouverture du modal 
  openModal(request) { 
    let modal = this.modalCtrl.create('RequestModalPage', {request: request} , { cssClass: 'inset-modal' });
    modal.present();
    modal.onDidDismiss(data => console.log(data));
  } 
  
}


