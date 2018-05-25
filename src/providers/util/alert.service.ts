import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Injectable()
export class AlertService {
  constructor(
    public alertCtrl: AlertController,
  ) { }
  
  presentAlert(title: string, message: string) {
    const alert = this.alertCtrl.create(
      {
        title,
        subTitle: message,
        buttons: [
          {
            text: 'OK'
          }
        ]
      });
      
      return alert.present();
    }
    
    presentErrorAlert(message: string) {
      return this.presentAlert('An error has occurred.', message);
    }
    
    // Alerte avec retour : Oui ou annuler
    presentAlertWithCallback(title: string, message: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        const confirm = this.alertCtrl.create({
          title,
          message,
          buttons: [{
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              confirm.dismiss().then(() => resolve(false));
              return false;
            }
          }, {
            text: 'Oui',
            handler: () => {
              confirm.dismiss().then(() => resolve(true));
              return false;
            }
          }]
        });
        return confirm.present();
      });
    }
    
    // ALerte status jobbeur
    presentAlertStatut(title: string, message: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        const confirm = this.alertCtrl.create({
          title,
          message,
          buttons: [{
            text: 'Non',
            handler: () => {
              confirm.dismiss().then(() => resolve(false));
              return false;
            }
          }, {
            text: 'Oui',
            handler: () => {
              confirm.dismiss().then(() => resolve(true));
              return false;
            }
          }]
        });
        return confirm.present();
      });
    }


    // ALerte pour la personnalisation du profil
    presentAlertCustomProfile(title: string, message: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        const confirm = this.alertCtrl.create({
          title,
          message,
          buttons: [{
            text: 'Non merci',
            handler: () => {
              confirm.dismiss().then(() => resolve(false));
              return false;
            }
          }, {
            text: 'C\'est compris !',
            handler: () => {
              confirm.dismiss().then(() => resolve(true));
              return false;
            }
          }]
        });
        return confirm.present();
      });
    }
    
    // Alerte modification element avec input
    alertInput(title: string, message: string, value: string):Promise<any> {
      return new Promise((resolve, reject) => {
        const alert = this.alertCtrl.create({
          title,
          message,
          cssClass: 'alertInput',
          inputs: [
            {
              name: 'text',
              value,
            },
          ],
          buttons: [
            {
              text: 'Effacer',
              handler: (data: any) => {
                alert.dismiss().then(() => resolve(false));
                return false;
              }
            },
            {
              text: 'OK',
              handler: (data: any) => {
                alert.dismiss().then(() => resolve(true));
                resolve (data.text);
                return false;
              }
            },  
          ]
        });
        return alert.present();
      }
    )}
    
  }
  