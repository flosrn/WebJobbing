import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: string;
  tab2Root: string;
  tab3Root: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tab1Root = 'SettingsPage' ;
    this.tab2Root = 'RequestPage';
    this.tab3Root = 'ProfilePage';
  }

}
