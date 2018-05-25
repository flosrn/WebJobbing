webpackJsonp([9],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRequestPageModule", function() { return EditRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_request__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditRequestPageModule = (function () {
    function EditRequestPageModule() {
    }
    EditRequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_request__["a" /* EditRequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_request__["a" /* EditRequestPage */]),
            ],
        })
    ], EditRequestPageModule);
    return EditRequestPageModule;
}());

//# sourceMappingURL=edit-request.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());

//# sourceMappingURL=profile.interface.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request_list_services__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast_services__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_profile_profile_interface__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var EditRequestPage = (function () {
    function EditRequestPage(navCtrl, loadingCtrl, toastCtrl, toast, alertCtrl, actionSheetCtrl, modalCtrl, navParams, requestList, app, zone, platform, storage, geolocation, data, auth, actionsheetCtrl, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.requestList = requestList;
        this.app = app;
        this.zone = zone;
        this.platform = platform;
        this.storage = storage;
        this.geolocation = geolocation;
        this.data = data;
        this.auth = auth;
        this.actionsheetCtrl = actionsheetCtrl;
        this.camera = camera;
        this.showCharactereCountTitle = false;
        this.showCharactereCountText = false;
        this.openMenu = false;
        this.togglePhoto = false;
        this.price = {
            lower: 50,
            upper: 100
        };
        this.request = {
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
        };
        this.basePath = 'requests/';
        this.autocomplete = { input: '' };
        this.addressElement = null;
        this.listSearch = '';
        this.search = false;
        this.switch = "map";
        this.regionals = [];
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
        this.platform.ready().then(function () { return _this.loadMaps(); });
        this.existingProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.profile = {};
    }
    // Récupère les données de l'item
    EditRequestPage.prototype.ionViewWillLoad = function () {
        this.request = this.navParams.get('request');
    };
    // Récupère les données de l'utilisateur
    EditRequestPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).valueChanges().subscribe(function (profile) {
                _this.userProfile = profile;
                _this.userProfile.uid = user.uid;
                console.log('coucou :', _this.userProfile);
                _this.existingProfile.emit(_this.userProfile);
            });
        });
    };
    // Bloque le swipe des slides 
    EditRequestPage.prototype.ionViewDidLoad = function () {
        this.slides.lockSwipes(true);
    };
    // sauvegarde le besoin, message toast, redirige
    EditRequestPage.prototype.saveRequest = function (request) {
        var _this = this;
        console.log('key', this.request.key);
        this.request.uidProfile = this.userProfile.uid;
        this.requestList.updateRequest(request).then(function () {
            _this.toast.show(request.title + " modifier !");
            _this.navCtrl.pop();
        });
    };
    EditRequestPage.prototype.goToNextSlide = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    EditRequestPage.prototype.goToSlideOne = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0, 500);
        this.slides.lockSwipes(true);
    };
    EditRequestPage.prototype.goToSlideTwo = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1, 500);
        this.slides.lockSwipes(true);
    };
    EditRequestPage.prototype.goToSlideThree = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(2, 500);
        this.slides.lockSwipes(true);
    };
    EditRequestPage.prototype.goToSlideFour = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(3, 500);
        this.slides.lockSwipes(true);
    };
    // Renvoie l'index de la slide actuelle
    EditRequestPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
    };
    // Montre ou cache les dates lorsque le premier radio bouton est cliqué
    EditRequestPage.prototype.toggleCheckbox = function () {
        this.showItem = !this.showItem;
    };
    // Cache les dates lorsque le 2ème radio bouton est cliqué SI le premier est sélectionné
    EditRequestPage.prototype.toggleCheckbox2 = function () {
        if (this.showItem = true) {
            this.showItem = false;
        }
    };
    EditRequestPage.prototype.setPrice = function () {
        this.request.priceMin = this.price.lower;
        this.request.priceMax = this.price.upper;
    };
    EditRequestPage.prototype.onKeyTitlePressed = function (event) {
        this.showCharactereCountTitle = true;
    };
    EditRequestPage.prototype.onKeyTextPressed = function (event) {
        this.showCharactereCountText = true;
    };
    // Ouverture du modal Photo
    EditRequestPage.prototype.openModal = function (request) {
        var modal = this.modalCtrl.create('PhotoModalPage', { request: request }, { cssClass: 'inset-modal2' });
        modal.present();
        modal.onDidDismiss(function (data) { return console.log(data); });
    };
    // Popup menu
    EditRequestPage.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    // *************   Catégories **************** //
    EditRequestPage.prototype.catPc = function () {
        this.togglePopupMenu();
        this.request.category = "Ordinateur";
    };
    EditRequestPage.prototype.catTablet = function () {
        this.togglePopupMenu();
        this.request.category = "Tablette";
    };
    EditRequestPage.prototype.catPhone = function () {
        this.togglePopupMenu();
        this.request.category = "SmartPhone";
    };
    EditRequestPage.prototype.catTv = function () {
        this.togglePopupMenu();
        this.request.category = "Télévision";
    };
    EditRequestPage.prototype.catCourse = function () {
        this.togglePopupMenu();
        this.request.category = "Formation";
    };
    EditRequestPage.prototype.catOthers = function () {
        this.togglePopupMenu();
        this.request.category = "Autres";
    };
    EditRequestPage.prototype.choosePhoto = function () {
        var _this = this;
        this.togglePhoto = !this.togglePhoto;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Uploader une photo depuis',
            buttons: [
                {
                    text: 'Camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.uploadPhoto(1);
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'Gallerie' : 'Gallerie',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.uploadPhoto(0);
                    }
                },
                {
                    text: 'Annuler',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    role: 'destructive',
                    handler: function () {
                        console.log('the user has cancelled the interaction.');
                    }
                }
            ]
        });
        return actionsheet.present();
    };
    EditRequestPage.prototype.uploadPhoto = function (sType) {
        var _this = this;
        var options = {
            quality: 100,
            targetWidth: 720,
            targetHeight: 720,
            sourceType: sType,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options)
            .then(function (data) {
            var randomNumber = Math.floor(Math.random() * 256);
            var image = "data:image/jpef;base64," + data;
            var userPic = __WEBPACK_IMPORTED_MODULE_11_firebase___default.a.storage().ref(_this.basePath + randomNumber + '.jpg');
            userPic.putString(image, 'data_url')
                .then(function () {
                _this.loadPhoto();
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    EditRequestPage.prototype.loadPhoto = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Chargement en cours...'
        });
        loading.present();
        var randomNumber = Math.floor(Math.random() * 256);
        var userPic = __WEBPACK_IMPORTED_MODULE_11_firebase___default.a.storage().ref(this.basePath + randomNumber + '.jpg');
        userPic.getDownloadURL()
            .then(function (url) {
            _this.pic = url;
            _this.request.photo = url;
            loading.dismiss();
        })
            .catch(function (e) {
            var userPic = __WEBPACK_IMPORTED_MODULE_11_firebase___default.a.storage().ref('requests/default.jpg');
            userPic.getDownloadURL().then(function (url) {
                _this.pic = url;
                console.log('this PIC ====' + _this.pic);
                loading.dismiss();
            });
        });
    };
    EditRequestPage.prototype.viewPlace = function (id) {
        console.log('Clicked Marker', id);
    };
    EditRequestPage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
            this.initAutocomplete();
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
    };
    EditRequestPage.prototype.errorAlert = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.loadMaps();
                    }
                }
            ]
        });
        alert.present();
    };
    EditRequestPage.prototype.mapsSearchBar = function (ev) {
        // set input to the value of the searchbar
        //this.search = ev.target.value;
        console.log(ev);
        var autocomplete = new google.maps.places.Autocomplete(ev);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                console.log(place);
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    sub.next(place.geometry.location);
                    sub.complete();
                }
            });
        });
    };
    EditRequestPage.prototype.initAutocomplete = function () {
        var _this = this;
        // reference : https://github.com/driftyco/ionic/issues/7223
        this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            var options = {
                center: location,
                zoom: 10
            };
            _this.map.setOptions(options);
            _this.addMarker(location, "Ma position recherchée");
        });
    };
    EditRequestPage.prototype.createAutocomplete = function (addressEl) {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                console.log(place);
                _this.request.position = place.vicinity;
                console.log(_this.request.position);
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    console.log('Search Lat', place.geometry.location.lat());
                    console.log('Search Lng', place.geometry.location.lng());
                    sub.next(place.geometry.location);
                    //sub.complete();
                }
            });
        });
    };
    EditRequestPage.prototype.initializeMap = function () {
        var _this = this;
        this.zone.run(function () {
            var mapEle = _this.mapElement.nativeElement;
            _this.map = new google.maps.Map(mapEle, {
                zoom: 14,
                center: { lat: 51.165691, lng: 10.451526 },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
                disableDoubleClickZoom: false,
                disableDefaultUI: true,
                zoomControl: true,
                scaleControl: true,
            });
            var markers = [];
            var _loop_1 = function (regional) {
                regional.distance = 0;
                regional.visible = false;
                regional.current = false;
                var markerData = {
                    position: {
                        lat: regional.latitude,
                        lng: regional.longitude
                    },
                    map: _this.map,
                    title: regional.title,
                };
                regional.marker = new google.maps.Marker(markerData);
                markers.push(regional.marker);
                regional.marker.addListener('click', function () {
                    for (var _i = 0, _a = _this.regionals; _i < _a.length; _i++) {
                        var c = _a[_i];
                        c.current = false;
                        //c.infoWindow.close();
                    }
                    _this.currentregional = regional;
                    regional.current = true;
                    //regional.infoWindow.open(this.map, regional.marker);
                    _this.map.panTo(regional.marker.getPosition());
                });
            };
            for (var _i = 0, _a = _this.regionals; _i < _a.length; _i++) {
                var regional = _a[_i];
                _loop_1(regional);
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
            google.maps.event.addListenerOnce(_this.map, 'idle', function () {
                google.maps.event.trigger(_this.map, 'resize');
                mapEle.classList.add('show-map');
                _this.bounceMap(markers);
                _this.getCurrentPositionfromStorage(markers);
            });
            google.maps.event.addListener(_this.map, 'bounds_changed', function () {
                _this.zone.run(function () {
                    _this.resizeMap();
                });
            });
        });
    };
    //Center zoom
    //http://stackoverflow.com/questions/19304574/center-set-zoom-of-map-to-cover-all-visible-markers
    EditRequestPage.prototype.bounceMap = function (markers) {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }
        this.map.fitBounds(bounds);
    };
    EditRequestPage.prototype.resizeMap = function () {
        var _this = this;
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 200);
    };
    EditRequestPage.prototype.getCurrentPositionfromStorage = function (markers) {
        var _this = this;
        this.storage.get('lastLocation').then(function (result) {
            if (result) {
                var myPos = new google.maps.LatLng(result.lat, result.long);
                _this.map.setOptions({
                    center: myPos,
                    zoom: 14
                });
                var marker = _this.addMarker(myPos, "Ma dernière position sauvegardée");
                markers.push(marker);
                _this.bounceMap(markers);
                _this.resizeMap();
            }
        });
    };
    EditRequestPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    EditRequestPage.prototype.choosePosition = function () {
        var _this = this;
        this.storage.get('lastLocation').then(function (result) {
            if (result) {
                var actionSheet = _this.actionSheetCtrl.create({
                    title: 'Dernière position: ' + result.location,
                    buttons: [
                        {
                            text: 'Recharger',
                            handler: function () {
                                _this.getCurrentPosition();
                            }
                        },
                        {
                            text: 'Supprimer',
                            handler: function () {
                                _this.storage.set('lastLocation', null);
                                _this.showToast('Position supprimée !');
                                _this.initializeMap();
                            }
                        },
                        {
                            text: 'Annuler',
                            role: 'cancel',
                            handler: function () {
                            }
                        }
                    ]
                });
                actionSheet.present();
            }
            else {
                _this.getCurrentPosition();
            }
        });
    };
    // go show currrent location
    EditRequestPage.prototype.getCurrentPosition = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Recherche de la postion...'
        });
        this.loading.present();
        var locationOptions = { timeout: 10000, enableHighAccuracy: true };
        this.geolocation.getCurrentPosition(locationOptions).then(function (position) {
            _this.loading.dismiss().then(function () {
                _this.showToast('Position trouvée !');
                console.log(position.coords.latitude, position.coords.longitude);
                var myPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var options = {
                    center: myPos,
                    zoom: 14
                };
                _this.map.setOptions(options);
                _this.addMarker(location, "Ma localisation!");
                var alert = _this.alertCtrl.create({
                    title: 'Location',
                    message: 'Voulez vous sauvegarder cette position ?',
                    buttons: [
                        {
                            text: 'Annuler'
                        },
                        {
                            text: 'Sauvegarder',
                            handler: function (data) {
                                var lastLocation = { lat: position.coords.latitude, long: position.coords.longitude };
                                console.log(lastLocation);
                                _this.storage.set('lastLocation', lastLocation).then(function () {
                                    _this.showToast('Position sauvegardée !');
                                });
                            }
                        }
                    ]
                });
                alert.present();
            });
        }, function (error) {
            _this.loading.dismiss().then(function () {
                _this.showToast('Position non trouvée, veuillez activer votre GPS');
                console.log(error);
            });
        });
    };
    EditRequestPage.prototype.toggleSearch = function () {
        if (this.search) {
            this.search = false;
        }
        else {
            this.search = true;
        }
    };
    EditRequestPage.prototype.addMarker = function (position, content) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position
        });
        this.addInfoWindow(marker, content);
        return marker;
    };
    EditRequestPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], EditRequestPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__models_profile_profile_interface__["a" /* Profile */])
    ], EditRequestPage.prototype, "profile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], EditRequestPage.prototype, "existingProfile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditRequestPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditRequestPage.prototype, "searchbar", void 0);
    EditRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-request',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/edit-request/edit-request.html"*/'<ion-header>\n  \n    <ion-navbar color="bleu">\n      <ion-title color="bleu" *ngIf="this.slides.getActiveIndex()===0">Créer un besoin</ion-title>\n      <ion-title color="bleu" *ngIf="this.slides.getActiveIndex()===1">Localisation</ion-title>\n      <ion-title color="bleu" *ngIf="this.slides.getActiveIndex()===2">Date</ion-title>\n      <ion-title color="bleu" *ngIf="this.slides.getActiveIndex()===3">Budget</ion-title>\n      <ion-buttons end *ngIf="this.slides.getActiveIndex()===1">\n        <button ion-button icon-only (click)=\'toggleSearch()\'>\n          <ion-icon name="search"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)=\'choosePosition()\'>\n          <ion-icon name="ios-locate-outline"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n    \n    <ion-toolbar>\n      \n      <!-- Icon 1 -->\n      <div class="button1">\n        <ion-buttons start>\n          <button ion-button icon-only (click)="goToSlideOne()">\n            <ion-icon class="iconActive" color="active" name="create" *ngIf="this.slides.getActiveIndex()===0"></ion-icon>\n            <ion-icon class="iconInactive" name="create" color="inactive"></ion-icon>\n          </button>\n        </ion-buttons>\n      </div>\n      \n      <!-- Icon 2 -->\n      <div class="button2">\n        <ion-buttons start>\n          <button ion-button icon-only (click)="goToSlideTwo()">\n            <ion-icon class="iconActive" color="active" name="pin" *ngIf="this.slides.getActiveIndex()===1"></ion-icon>\n            <ion-icon class="iconInactive" name="pin" color="inactive"></ion-icon>\n          </button>\n        </ion-buttons>\n      </div>\n      \n      <!-- Icon 3 -->\n      <div class="button3">\n        <ion-buttons start>\n          <button ion-button icon-only (click)="goToSlideThree()">\n            <ion-icon class="iconActive" color="active" name="calendar" *ngIf="this.slides.getActiveIndex()===2"></ion-icon>\n            <ion-icon class="iconInactive" name="calendar" color="inactive"></ion-icon>\n          </button>\n        </ion-buttons>\n      </div>\n      \n      <!-- Icon 4 -->\n      <div class="button4"> \n        <ion-buttons start>\n          <button ion-button icon-only (click)="goToSlideFour()">\n            <ion-icon class="iconActive" color="active" name="logo-euro" *ngIf="this.slides.getActiveIndex()===3"></ion-icon>\n            <ion-icon class="iconInactive" name="logo-euro" color="inactive"></ion-icon>\n          </button>\n        </ion-buttons>\n      </div>\n      \n    </ion-toolbar>\n    \n  </ion-header> \n  \n  <ion-content auto-hide>\n    \n    <ion-slides (ionSlideDidChange)="slideChanged()">\n      \n      <!-- Slide 1 -->\n      \n      <ion-slide> \n        <ion-item>\n          <ion-label class="title" color="bleu" stacked>Titre de votre besoin</ion-label>\n          <ion-input [(ngModel)]="request.title" placeholder="Exemple : Ordinateur infecté" maxlength="35" (keypress)="onKeyTitlePressed($event)"></ion-input>\n        </ion-item>\n        <p class="count" *ngIf="this.showCharactereCountTitle">Plus que {{35 - request.title.length}} caractères</p>\n        <ion-item>\n          <ion-label color="bleu" stacked>Description</ion-label>\n          <ion-textarea [(ngModel)]="request.description" placeholder="Décrivez ici votre besoin"  maxlength="400"  name="dummyText" autosize (keypress)="onKeyTextPressed($event)"></ion-textarea>\n        </ion-item>\n        <p class="count" *ngIf="this.showCharactereCountText">Plus que {{400 - request.description.length}} caractères</p>\n        \n        <div class="center">\n          <button ion-button icon-start class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}">\n            <ion-icon name="md-list-box"></ion-icon>\n            Categorie\n          </button>\n          \n          <button ion-button icon-end color="bleu" (click)="openModal(request)">\n            Photos\n            <ion-icon name="ios-images"></ion-icon>\n          </button>\n   \n        </div>\n        \n      </ion-slide>\n      \n      \n      <!-- Slide 2 -->\n      <ion-slide class="slide">\n        <!-- <div class="switch">\n          <button ion-button color="light" (click)="(switch = \'map\'); resizeMap()" [class.active]="(switch == \'map\')" icon-only><ion-icon name="map"></ion-icon></button>\n          <button ion-button color="light" (click)="(switch = \'list\'); " [class.active]="(switch == \'list\')" icon-only><ion-icon name="list"></ion-icon></button>\n        </div> -->\n        \n        <!-- <div class="currentitem" *ngIf="currentregional">\n          <button ion-item no-lines (click)="viewPlace(currentregional.title)">\n            <h2>{{ currentregional.title }}</h2>\n            <ion-note item-right icon-only><ion-icon name="ios-arrow-forward"></ion-icon></ion-note>\n          </button>\n        </div> -->\n        \n        \n        <div class="map" [class.hidemap]="!((switch == \'map\') || error)">\n          <ion-searchbar #searchbar placeholder="Rechercher" [hidden]="search" [(ngModel)]="request.position"></ion-searchbar>\n          <div id="map" #map></div>\n        </div>\n      </ion-slide>\n      \n      <!-- Slide 3 -->\n      <ion-slide>\n        <ion-list radio-group>\n          <ion-item>\n            <ion-label stacked>Je choisi mes dates</ion-label>\n            <ion-radio color="orangé" (click)="toggleCheckbox()"></ion-radio>\n          </ion-item>\n          \n          <div *ngIf="showItem">\n            <ion-item>\n              <ion-label color="bleu" stacked>Vos disponibilitées</ion-label>\n              <ion-label stacked>Du</ion-label>\n              <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="request.date" placeholder="01/01/2018"\n              doneText="Valider" cancelText="Annuler"></ion-datetime>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Au</ion-label>\n              <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="request.date2" placeholder="05/01/2018"\n              doneText="Valider" cancelText="Annuler"></ion-datetime>\n            </ion-item>\n          </div>\n          <div class="jobberDate">\n            <ion-item no-lines>\n              <ion-label stacked>Je laisse le jobber choisir la date</ion-label>\n              <ion-radio color="orangé" (click)="toggleCheckbox2()"></ion-radio>\n            </ion-item>\n          </div>\n        </ion-list>\n      </ion-slide>\n      \n      <!-- Slide 4 -->\n      <ion-slide>\n        <!-- <ion-item>\n          <ion-label color="orangé" stacked>Votre budget</ion-label>\n          <ion-input [(ngModel)]="knobValues" placeholder="Exemple: 50">€</ion-input>\n        </ion-item> -->\n        <ion-item>\n          <ion-label color="bleu" stacked>Votre budget</ion-label>\n          <ion-badge color="orangé" item-end>{{ this.request.priceMin }}</ion-badge>\n          <ion-badge color="orangé" item-end>{{ this.request.priceMax }}</ion-badge>\n        </ion-item>\n        <ion-item>\n          <!-- <ion-label>Votre budget</ion-label>  -->\n          <ion-range color="orangé" dualKnobs="true" [(ngModel)]="price" (ionChange)="setPrice()" min="15" max="500" pin="true" step="5">\n            <ion-label range-left><i class="fa fa-eur fa-lg" aria-hidden="true"></i></ion-label>\n            <ion-label range-right><i class="fa fa-eur fa-2x" aria-hidden="true"></i></ion-label>\n          </ion-range>\n        </ion-item>    \n        \n        \n      </ion-slide>\n      \n    </ion-slides>\n    \n    \n    <div class="popup-menu" *ngIf="this.slides.getActiveIndex() === 0">\n      <div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n      <!-- <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}">yoyoyoyo</div> -->\n      <!-- <button ion-button class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}">Categorie</button> -->\n      <div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n        <div class="popup-menu-item" (click)="catPc()">\n          <ion-icon><i class="fa fa-desktop fa-3x" aria-hidden="true"></i></ion-icon>\n          <span>PC</span>\n        </div>\n        <div class="popup-menu-item" (click)="catTablet()">\n          <ion-icon><i class="fa fa-tablet fa-lg" aria-hidden="true"></i></ion-icon>\n          <span>TABLETTE</span>\n        </div>\n        <div class="popup-menu-item" (click)="catPhone()">\n          <ion-icon><i class="fa fa-mobile" aria-hidden="true"></i></ion-icon>\n          <span>SMARTPHONE</span>\n        </div>\n        <div class="popup-menu-item" (click)="catTv()">\n          <ion-icon><i class="fa fa-television" aria-hidden="true"></i></ion-icon>\n          <span>TV</span>\n        </div>\n        <div class="popup-menu-item" (click)="catCourse()">\n          <ion-icon name="ios-school"></ion-icon>\n          <span>FORMATION</span>\n        </div>\n        <div class="popup-menu-item" (click)="catOthers()">\n          <ion-icon name="help"></ion-icon>\n          <span>AUTRES</span>\n        </div>\n      </div>\n    </div>\n    \n    <button *ngIf="this.slides.getActiveIndex() < 3" class="suivant" color="bleu" ion-button full (click)="goToNextSlide()">Suivant</button>\n    <!-- <button *ngIf="this.slides.getActiveIndex() === 1" class="suivant2" color="bleu" ion-button full (click)="goToNextSlide()">Suivant</button> -->\n    <button *ngIf="this.slides.getActiveIndex()===3" class="suivant" color="bleu" ion-button full (click)="saveRequest(request)">Enregistrer</button>\n    \n  </ion-content>\n  '/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/edit-request/edit-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast_services__["a" /* ToastService2 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_request_request_list_services__["a" /* RequestListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_7__providers_data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]])
    ], EditRequestPage);
    return EditRequestPage;
}());

//# sourceMappingURL=edit-request.js.map

/***/ })

});
//# sourceMappingURL=9.js.map