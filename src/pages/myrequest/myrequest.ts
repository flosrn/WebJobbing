import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RequestListService } from '../../providers/request/request-list.services';
import { Observable } from 'rxjs/Observable';
import { Request } from '../../models/request/request.model';
import { Profile } from '../../models/profile/profile.interface';
import { ToastService2 } from './../../providers/toast/toast.services';
import { DataService } from '../../providers/data/data.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';
import { AuthService } from '../../providers/auth/auth.service';

@IonicPage()
@Component({
  selector: 'page-myrequest',
  templateUrl: 'myrequest.html',
})
export class MyrequestPage {
  
  requestList$ = [];
  profileList$: Observable<Profile[]>;
  
  public request: any;
  
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  
  //private authUser: User;
  public userProfile: Profile;
  // private loader: Loading;
  
  @Output() existingProfile: EventEmitter<Profile>;
  @Input() profile: Profile;

  showContainer: boolean = true;
  
  constructor(
    public navCtrl: NavController,  
    public navParams: NavParams,
    private requests: RequestListService, 
    private toast: ToastService2,
    public modalCtrl: ModalController,
    private data: DataService,
    private auth: AuthService, 
  ) {
    
    this.existingProfile = new EventEmitter<Profile>();
    
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user; 
    })
    
    this.profile = {} as Profile;
    
    this.requests.getRequestListRef().once('value').then(snap => {
      snap.forEach(element => {  
        data.getUid(element.val().uidProfile).valueChanges().subscribe(c => {
          let userRequest = element.val();  
          userRequest['uidRequest'] = element.key;
          userRequest['userRequest'] = c;
          // Affiche seulement les requests de l'utilisateur connecté
          if(userRequest.uidProfile ==  this.userProfile.uid) {
            this.showContainer = false;
            this.requestList$.push(userRequest);
          }
        });
      });
    });
  }
    
  ngOnInit(): void {  
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).valueChanges().subscribe((profile: Profile) => {
        this.userProfile = <Profile>profile;
        this.userProfile.uid = user.uid; 
        this.existingProfile.emit(this.userProfile);
      })
    })
  }
  
  // Refresh
  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000); 
  }
  
  // Ouverture du modal 
  openModal(request) { 
    let modal = this.modalCtrl.create('RequestModalPage', {request: request} , { cssClass: 'inset-modal' });
    modal.present();
    modal.onDidDismiss(data => console.log(data));
  } 
  
  goToUserProfilePage() {
    this.navCtrl.push('UserProfilePage');
  }
  
}
