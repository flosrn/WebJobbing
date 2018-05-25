import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { OfferListService } from '../../providers/offer/offer-list.services';
import { Observable } from 'rxjs/Observable';
import { Request } from '../../models/request/request.model';
import { Profile } from '../../models/profile/profile.interface';
import { ToastService2 } from './../../providers/toast/toast.services';
import { DataService } from '../../providers/data/data.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';
import { AuthService } from '../../providers/auth/auth.service';
import { RequestListService } from '../../providers/request/request-list.services';


@IonicPage()
@Component({
  selector: 'page-myoffer',
  templateUrl: 'myoffer.html',
})
export class MyofferPage {
  
  offerList$ = [];
  requestList$ = [];

  public userProfile: Profile;

  @Output() existingProfile: EventEmitter<Profile>;
  @Input() profile: Profile;

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  showContainer: boolean = true;

  constructor(
    public navCtrl: NavController,  
    public navParams: NavParams,
    private offers: OfferListService, 
    private requests: RequestListService,
    private toast: ToastService2,
    public modalCtrl: ModalController,
    private data: DataService,
    private auth: AuthService, 
  )
  {
    this.existingProfile = new EventEmitter<Profile>();
    
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user; 
    })


    // Récupère la liste des offres
    this.offers.getOfferListRef().once('value').then(snap => { 
      snap.forEach(element => {
        this.data.getUid(element.val().uidProfile).valueChanges().subscribe(c => {
          let userOffer = element.val();   
          userOffer['uidOffer'] = element.key;
          userOffer['userOffer'] = c;
          if(userOffer.uidProfile ==  this.userProfile.uid) {
            this.showContainer = false;
            this.offerList$.push(userOffer);
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
  
}
