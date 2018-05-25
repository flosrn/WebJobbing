import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { AuthService } from '../../providers/auth/auth.service';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

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

  navigateToEditProfilePage() {
    this.navCtrl.push('EditProfilePage', { existingProfile: this.existingProfile });
  }

  saveProfileResult(event: Boolean) {
    // event ? this.navCtrl.setRoot('TabsPage') : console.log("Echec de l'authentification");
  }

  signOut() {
    this.auth.onLogout();
    this.app.getRootNav().setRoot('WelcomePage')
  }
}
