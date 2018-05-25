import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ToastService } from '../../providers/util/toast.service';
import { AlertService } from '../../providers/util/alert.service';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {
  
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  
  public userProfile: Profile;
  
  @Output() existingProfile: EventEmitter<Profile>;
  
  @Input() profile: Profile;
  
  enableJobber: boolean;
  
  constructor(
    private data: DataService, 
    private auth: AuthService, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertService,
    private alertCtrl2: AlertService,
    private toastCtrl: ToastService,
    private app: App,
  ) 
  {
    this.existingProfile = new EventEmitter<Profile>();
    
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    }) 
    
    this.profile = {} as Profile;   
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
  
  // Toggle qui permet de definir le statut de l'utilisateur en tant que jobbeur ou non
  toggleJobber() {
    // Si l'utilisateur est défini en tant qu'utilisateur non jobbeur
    if (this.userProfile.jobberStatut == true) {
      // Apparition de l'alerte
      this.alertCtrl2.presentAlert('Profil jobbeur', 'Devenir jobbeur vous offre la possibilité d\'arrondir facilement vos fins de mois.<br /><br />WebJobbing vous permet de vous mettre en relation avec des utilisateurs qui ont besoin d\'un coup de main dans le domaine du numérique.<br /><br />Rendez vous dans les paramètres de votre profil pour le personnaliser afin que les utilisateurs en apprennent plus sur vous.').then((yes) => {
        // Le profil est défini en tant que jobbeur !
        this.profile.jobberStatut = true;
        // Appel de la fonction saveStatut avec en paramètre le nouveau statut 
        this.saveStatut(this.profile.jobberStatut);
      });
    } 
    // Si l'utilisateur est défini en tant que jobbeur 
    if (this.userProfile.jobberStatut == false) {
      // Apparition de l'alerte
      this.alertCtrl2.presentAlert('Profil utilisateur', 'Vous n\'êtes plus identifié en tant que Jobbeur.').then((yes) => {
        // Le profil est défini en tant qu'utilisateur !
        this.profile.jobberStatut = false;
        // Appel de la fonction saveStatut avec en paramètre le nouveau statut 
        this.saveStatut(this.profile.jobberStatut);
      });
    }
  }
  
  // Sauvegarde le statut du profil : Jobbeur ou non Jobbeur
  saveStatut(statut) {
    // Attribution du statut passé en paramètre 
    this.profile.jobberStatut = statut;
    // Console.log
    console.log('Statut jobbeur: ',this.profile.jobberStatut);
    // Appel de la fonction qui update le profil dans le service
    this.data.updateProfile2(this.authenticatedUser, this.profile);  
  }
  
  // Navigation vers la page Profil
  navigateToProfilePage() {
    this.navCtrl.push('ProfilePage');
  }
  
  // Navigation vers la page Mes besoins
  navigateToMyRequestPage() {
    this.navCtrl.push('MyrequestPage');
  }
  
  // Navigation vers la page Mes offers
  navigateToMyOfferPage() {
    this.navCtrl.push('MyofferPage');
  }
  
  // Navigation vers la page Mes offers
  navigateToAdminPage() {
    this.navCtrl.push('AdminPage');  
  }

  // Déconnexion 
  logOut() {
    // Affichage de l'alerte 
    this.alertCtrl.presentAlertWithCallback('Etes vous sûr ?',
    'Cela va vous déconnecter de l\'application.').then((yes) => {
      // Si confirmation
      if (yes) {
        this.auth.onLogout();
        this.app.getRootNav().setRoot('WelcomePage')
        this.toastCtrl.create('Déconnexion réussie');
      }
    });
  }
  
}
