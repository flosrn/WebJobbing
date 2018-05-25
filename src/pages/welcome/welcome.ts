import { Component, ViewChild, EventEmitter, Output, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { Slides } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { AuthService } from '../../providers/auth/auth.service';
import { DataService } from '../../providers/data/data.service';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage implements OnInit {

  @ViewChild(Slides) slides: Slides;

  nextPage= LoginPage;
  nextPage2= TabsPage;

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  
  public userProfile: Profile;
  
  @Output() existingProfile: EventEmitter<Profile>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: AuthService,
    private data: DataService,  
  ) {
    this.existingProfile = new EventEmitter<Profile>();
    
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    }) 
  }

  // Récuppère les infos de l'utilisateur connecté
  ngOnInit(): void {  
    if(this.authenticatedUser) {
      this.auth.getAuthenticatedUser().subscribe((user: User) => {
        this.data.getProfile(user).valueChanges().subscribe((profile: Profile) => {
          this.userProfile = <Profile>profile;
          
          this.existingProfile.emit(this.userProfile);
        })
      })
    }
  }

  // Fonction qui arrete l'autoplay sur la derniere slide
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex==3){
      this.slides.stopAutoplay();
    }
  }

  // Navigation vers la page login
  navigateToLoginPage() {
    this.navCtrl.push('LoginPage');
  }

  // Navigation vers la page register
  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }
}
