import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { AuthService } from '../../providers/auth/auth.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

 
  existingProfile = {} as Profile;

  profile = {} as Profile;

  constructor(
    private auth: AuthService,
    private navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    
  ) {
    this.profile = this.navParams.get('existingProfile');
  }

  getExistingProfile(profile: Profile) {
    this.existingProfile = profile;
  }

}
