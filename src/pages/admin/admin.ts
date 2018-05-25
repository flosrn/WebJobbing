import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data/data.service';


@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data: DataService
  ) {
  }

  ionViewWillEnter() {
    this.data.getProfile2().valueChanges().subscribe();
      console.log(this.data.getProfile2().valueChanges().subscribe());
  }

}
