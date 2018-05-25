import { Component, ViewChild, NgZone, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, App, Platform, AlertController, ActionSheetController, ModalController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { RequestPage } from "../../pages/request/request";
import { Request } from '../../models/request/request.model';
import { RequestListService } from '../../providers/request/request-list.services';
import { ToastService2 } from '../../providers/toast/toast.services';

import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from "firebase/app";
import { Profile } from "../../models/profile/profile.interface";
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../../providers/util/alert.service';
import { EmailComposer } from '@ionic-native/email-composer';

declare var google: any;

@IonicPage()
@Component({  
  selector: 'page-add-request',
  templateUrl: 'add-request.html',
})
export class AddRequestPage {
  
  @ViewChild(Slides) slides: Slides;
  
  showItem: boolean;
  showCharactereCountTitle: boolean = false;
  showCharactereCountText: boolean = false;
  
  openMenu = false;
  
  togglePhoto = false;
  
  
  public price: any = {
    lower: 50,
    upper: 100
  }
  
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  
  @Input() profile: Profile;
  
  public userProfile: Profile;
  @Output() existingProfile: EventEmitter<Profile>;
  
  request: Request = {
    key: '',
    uidProfile: '',
    title: '',
    description: '',
    category: '',
    photo: '',
    photo2: '',
    photo3: '',
    position: '',
    date: '',
    date2: '',
    priceMin: undefined,
    priceMax: undefined,
  }
  
  key: string;
  pic: string;
  
  basePath: string = 'requests/'
  
  autocomplete = { input: ''};
  
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;
  addressElement: HTMLInputElement = null;
  
  listSearch: string = '';
  map: any;
  marker: any;
  loading: any;
  search: boolean = false;
  error: any;
  switch: string = "map";
  regionals: any = [];
  currentregional: any;
  
  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private toast: ToastService2,
    public alertCtrl: AlertController,
    private alertCtrl2: AlertService,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public navParams: NavParams, 
    
    private requestList: RequestListService,
    
    public app: App,
    public zone: NgZone,
    public platform: Platform,
    public storage: Storage,
    public geolocation: Geolocation,
    
    private data: DataService, 
    private auth: AuthService, 
    private actionsheetCtrl: ActionSheetController,
    private camera: Camera,
    private emailComposer: EmailComposer,
    
  ) {
    
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    }) 
    
    
    this.platform.ready().then(() => this.loadMaps());
    
    this.existingProfile = new EventEmitter<Profile>();
    
    this.profile = {} as Profile;
  }
  
  // Récupère les données de l'utilisateur
  ngOnInit(): void {  
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).valueChanges().subscribe((profile: Profile) => {
        this.userProfile = <Profile>profile;
        this.userProfile.uid = user.uid;
        this.existingProfile.emit(this.userProfile);
      })
    })
  }
  
  // Bloque le swipe des slides 
  ionViewDidLoad() {
    this.slides.lockSwipes(true);
  }
  
  // Ajoute le besoin, message toast, redirige
  addRequest(request: Request) {
    if(this.userProfile.userPermission === 1) {
    // Attribue l'ID de l'utilisateur qui poste le besoin à request.uidProfile
    this.request.uidProfile = this.userProfile.uid;  
    // Appel de la fonction dans le service qui ajoute le besoin 
    this.requestList.addRequest(this.request).then(ref => {
      // Message toast
      this.toast.show(`${request.title} ajouté !`);

      // Incrémente le nombre de besoins postés
      this.userProfile.requestPost =  this.userProfile.requestPost + 1;
      // Passe le statut du profil en tant qu'utilisateur
      this.userProfile.jobberStatut = false;
      // Met le profil à jour grâce à la fonction dans le service updateProfile
      this.data.updateProfile(this.authenticatedUser, this.userProfile);

      // Redirige sur la page d'accueil
      this.navCtrl.setRoot('TabsPage');  
    })
  } else {
          this.alertCtrl2.presentAlertWithCallback('Permission non accordée', 'Pour des raisons de sécurité, une autorisation de l\'administrateur de cette application est nécessaire pour effectuer cette action, contacter l\'administrateur ?').then(ok => {
        if(ok) {
          let email = {
            to: 'florian.seran@gmail.com',
            attachments: [
            ],
            subject: 'WebJobbing permission',
            body: 'prenom:' + this.userProfile.firstName +'<br  \>' + 'nom: '+ this.userProfile.lastName + '<br  \>' + 'email: ' + this.userProfile.email + '<br  \><br  \>' + 'Bonjour, je souhaiterais accéder à toutes les fonctionnalités de l\'application.',
            isHtml: true
          };
          // Send a text message using default options
          this.emailComposer.open(email);
        } else {

        }
      });
  }
  }
  
  goToNextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  
  goToSlideOne() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 500); 
    this.slides.lockSwipes(true); 
  }
  
  goToSlideTwo() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1, 500);  
    this.slides.lockSwipes(true);
  }
  
  goToSlideThree() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(2, 500); 
    this.slides.lockSwipes(true); 
  }
  
  goToSlideFour() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(3, 500); 
    this.slides.lockSwipes(true); 
  }
  
  // Renvoie l'index de la slide actuelle
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
  }
  
  // Montre ou cache les dates lorsque le premier radio bouton est cliqué
  toggleCheckbox() {
    this.showItem = !this.showItem;
  }
  
  // Cache les dates lorsque le 2ème radio bouton est cliqué SI le premier est sélectionné
  toggleCheckbox2() {
    if (this.showItem = true) {
      this.showItem = false;
    }
  }
  
  setPrice() {
    this.request.priceMin = this.price.lower;
    this.request.priceMax = this.price.upper;
  }
  
  // Affiche le nombre de charactères du titre 
  onKeyTitlePressed(event) {
    this.showCharactereCountTitle = true;
  }
  
  // Affiche le nombre de charactères de la description
  onKeyTextPressed(event) {
    this.showCharactereCountText = true;
  }
  
  // Ouverture du modal Photo
  openModal(request) { 
    let modal = this.modalCtrl.create('PhotoModalPage', {request: request} , { cssClass: 'inset-modal2' });
    modal.present();
    modal.onDidDismiss(data => console.log(data));
  } 
  
  
  
  // Popup menu
  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }
  
  // *************   Catégories **************** //
  
  catPc() {
    this.togglePopupMenu();
    this.request.category = "Ordinateur";
  }
  
  catTablet() {
    this.togglePopupMenu();
    this.request.category = "Tablette";
  }
  
  catPhone() {
    this.togglePopupMenu();
    this.request.category = "SmartPhone";
  }
  
  catTv() {
    this.togglePopupMenu();
    this.request.category = "Télévision";
  }
  
  catCourse() {
    this.togglePopupMenu();
    this.request.category = "Formation";
  }
  
  catOthers() {
    this.togglePopupMenu();
    this.request.category = "Autres";
  }
  
  
  
  
  
  
  
  
  choosePhoto() {
    this.togglePhoto = !this.togglePhoto;
    
    const actionsheet = this.actionsheetCtrl.create({
      title: 'Uploader une photo depuis',
      buttons: [
        {
          text: 'Camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.uploadPhoto(1);
          }
        },
        {
          text: !this.platform.is('ios') ? 'Gallerie' : 'Gallerie',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.uploadPhoto(0);
          }
        },
        {
          text: 'Annuler',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }
  
  uploadPhoto(sType) {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 720,
      targetHeight: 720,
      sourceType: sType,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(options)
    .then(data => {
      var randomNumber = Math.floor(Math.random() * 256);
      const image = `data:image/jpef;base64,${data}`;
      const userPic = firebase.storage().ref(this.basePath + randomNumber + '.jpg');
      userPic.putString(image, 'data_url')
      .then(()=> {
        this.loadPhoto();
      })
      
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  loadPhoto(){
    const loading = this.loadingCtrl.create({
      content: 'Chargement en cours...'
    });
    loading.present();
    var randomNumber = Math.floor(Math.random() * 256);
    const userPic = firebase.storage().ref(this.basePath + randomNumber + '.jpg');
    userPic.getDownloadURL()
    .then((url)=> {
      this.pic = url;
      this.request.photo = url;
      loading.dismiss();
    })
    .catch(e =>{
      const userPic = firebase.storage().ref('requests/default.jpg');
      userPic.getDownloadURL().then((url)=> {
        this.pic = url;
        console.log('this PIC ====' +this.pic);
        loading.dismiss();
      })
    });
  }
  
  
  
  
  
  
  
  
  
  
  
  viewPlace(id) {
    console.log('Clicked Marker', id);
  }
  
  loadMaps() {
    if (!!google) {
      this.initializeMap();
      this.initAutocomplete();
    } else {
      this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.')
    }
  }
  
  errorAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.loadMaps();
          }
        }
      ]
    });
    alert.present();
  }
  
  mapsSearchBar(ev: any) {
    // set input to the value of the searchbar
    //this.search = ev.target.value;
    console.log(ev);
    const autocomplete = new google.maps.places.Autocomplete(ev);
    autocomplete.bindTo('bounds', this.map);
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        
        console.log(place);
        if (!place.geometry) {
          sub.error({
            message: 'Autocomplete returned place with no geometry'
          });
        } else {
          sub.next(place.geometry.location);
          sub.complete();
        }
      });
    });
  }
  
  initAutocomplete(): void {
    // reference : https://github.com/driftyco/ionic/issues/7223
    this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
    this.createAutocomplete(this.addressElement).subscribe((location) => {
      let options = {
        center: location,
        zoom: 10
      };
      this.map.setOptions(options);
      this.addMarker(location, "Ma position recherchée");
      
    });
  }
  
  createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
    const autocomplete = new google.maps.places.Autocomplete(addressEl);
    autocomplete.bindTo('bounds', this.map);
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        console.log(place);
        this.request.position = place.vicinity;
        console.log(this.request.position);
        if (!place.geometry) {
          sub.error({
            message: 'Autocomplete returned place with no geometry'
          });
        } else {
          console.log('Search Lat', place.geometry.location.lat());
          console.log('Search Lng', place.geometry.location.lng());
          sub.next(place.geometry.location);
          //sub.complete();
        }
      });
    });
  }
  
  initializeMap() {
    this.zone.run(() => {
      var mapEle = this.mapElement.nativeElement;
      this.map = new google.maps.Map(mapEle, {
        zoom: 14,
        center: { lat: 51.165691, lng: 10.451526 },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
        disableDoubleClickZoom: false,
        disableDefaultUI: true,
        zoomControl: true,
        scaleControl: true,
      });
      
      let markers = [];
      for (let regional of this.regionals) {
        regional.distance = 0;
        regional.visible = false;
        regional.current = false;
        
        let markerData = {
          position: {
            lat: regional.latitude,
            lng: regional.longitude
          },
          map: this.map,
          title: regional.title,
        };
        
        regional.marker = new google.maps.Marker(markerData);
        markers.push(regional.marker);
        
        regional.marker.addListener('click', () => {
          for (let c of this.regionals) {
            c.current = false;
            //c.infoWindow.close();
          }
          this.currentregional = regional;
          regional.current = true;
          
          //regional.infoWindow.open(this.map, regional.marker);
          this.map.panTo(regional.marker.getPosition());
        });
      }
      
      // new MarkerClusterer(this.map, markers, {
      //   styles: [
      //     { 
      //       height: 53,
      //       url: "assets/img/cluster/MapMarkerJS.png",
      //       width: 53,
      //       textColor: '#fff'
      //     },
      //     {
      //       height: 56,
      //       url: "assets/img/cluster/MapMarkerJS.png",
      //       width: 56,
      //       textColor: '#fff'
      //     },
      //     {
      //       height: 66,
      //       url: "assets/img/cluster/MapMarkerJS.png",
      //       width: 66,
      //       textColor: '#fff'
      //     },
      //     {
      //       height: 78,
      //       url: "assets/img/cluster/MapMarkerJS.png",
      //       width: 78,
      //       textColor: '#fff'
      //     },
      //     {
      //       height: 90,
      //       url: "assets/img/cluster/MapMarkerJS.png",
      //       width: 90,
      //       textColor: '#fff'
      //     }
      //   ]
      // });
      
      
      
      
      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        google.maps.event.trigger(this.map, 'resize');
        mapEle.classList.add('show-map');
        this.bounceMap(markers);
        this.getCurrentPositionfromStorage(markers)
      });
      
      google.maps.event.addListener(this.map, 'bounds_changed', () => {
        this.zone.run(() => {
          this.resizeMap();
        });
      });
      
      
    });
  }
  
  //Center zoom
  //http://stackoverflow.com/questions/19304574/center-set-zoom-of-map-to-cover-all-visible-markers
  bounceMap(markers) {
    let bounds = new google.maps.LatLngBounds();
    
    for (var i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].getPosition());
    }
    
    this.map.fitBounds(bounds);
  }
  
  resizeMap() {
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 200);
  }
  
  getCurrentPositionfromStorage(markers) {
    this.storage.get('lastLocation').then((result) => {
      if (result) {
        let myPos = new google.maps.LatLng(result.lat, result.long);
        this.map.setOptions({
          center: myPos,
          zoom: 14
        });
        let marker = this.addMarker(myPos, "Ma dernière position sauvegardée");
        
        markers.push(marker);
        this.bounceMap(markers);
        
        this.resizeMap();
      }
    });
  }
  
  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  
  choosePosition() {
    this.storage.get('lastLocation').then((result) => {
      if (result) {
        let actionSheet = this.actionSheetCtrl.create({
          title: 'Dernière position: ' + result.location,
          buttons: [
            {
              text: 'Recharger',
              handler: () => {
                this.getCurrentPosition();
              }
            },
            {
              text: 'Supprimer',
              handler: () => {
                this.storage.set('lastLocation', null);
                this.showToast('Position supprimée !');
                this.initializeMap();
              }
            },
            {
              text: 'Annuler',
              role: 'cancel',
              handler: () => {
              }
            }
          ]
        });
        actionSheet.present();
      } else {
        this.getCurrentPosition();
        
      }
    });
  }
  
  // go show currrent location
  getCurrentPosition() {
    this.loading = this.loadingCtrl.create({
      content: 'Recherche de la postion...'
    });
    this.loading.present();
    
    let locationOptions = { timeout: 10000, enableHighAccuracy: true };
    
    this.geolocation.getCurrentPosition(locationOptions).then(
      (position) => {
        this.loading.dismiss().then(() => {
          
          this.showToast('Position trouvée !');
          
          console.log(position.coords.latitude, position.coords.longitude);
          let myPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          let options = {
            center: myPos,
            zoom: 14
          };
          this.map.setOptions(options);
          this.addMarker(location, "Ma localisation!");
          
          let alert = this.alertCtrl.create({
            title: 'Location',
            message: 'Voulez vous sauvegarder cette position ?',
            buttons: [
              {
                text: 'Annuler' 
              },
              {
                text: 'Sauvegarder',
                handler: data => {
                  let lastLocation = { lat: position.coords.latitude, long: position.coords.longitude };
                  console.log(lastLocation);
                  this.storage.set('lastLocation', lastLocation).then(() => {
                    this.showToast('Position sauvegardée !');
                  });
                }
              }
            ]
          });
          alert.present();
          
        });
      },
      (error) => {
        this.loading.dismiss().then(() => {
          this.showToast('Position non trouvée, veuillez activer votre GPS');
          
          console.log(error);
        });
      }
    )
  }
  
  toggleSearch() {
    if (this.search) {
      this.search = false;
    } else {
      this.search = true;
    }
  }
  
  addMarker(position, content) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position
    });
    
    this.addInfoWindow(marker, content);
    return marker;
  }
  
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
  
  
}
