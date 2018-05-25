webpackJsonp([6],{

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(568);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toast, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.data = data;
    }
    LoginPage.prototype.login = function (event) {
        var _this = this;
        console.log(event);
        if (!event.error) {
            this.toast.create({
                message: "Bienvenue sur WebJobbing, " + event.result.email + " !",
                duration: 3000
            }).present();
            // Retrieving the AngularFireObject and use a fonction that return an Observable 
            this.profile$ = this.data.getProfile(event.result)
                .snapshotChanges() // return an Observable
                .subscribe(function (action) {
                console.log(action.payload.val());
                action.payload.val() ? _this.navCtrl.setRoot('TabsPage') : _this.navCtrl.push('EditProfilePage');
            });
        }
        else {
            this.toast.create({
                message: event.error.message,
                duration: 3000
            }).present();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/login/login.html"*/'<ion-content padding class="background">\n\n  <app-login-form (loginStatus)="login($event)"></app-login-form>\n\n</ion-content>  '/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__["a" /* DataService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = 'SettingsPage';
        this.tab2Root = 'RequestPage';
        this.tab3Root = 'ProfilePage';
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="1">\n  <ion-tab [tabsHideOnSubPages]="true" [root]="tab1Root" tabTitle="Paramètres" tabIcon="ios-settings-outline"></ion-tab>\n  <ion-tab [tabsHideOnSubPages]="true" [root]="tab2Root" tabTitle="Besoins" tabIcon="search"></ion-tab>\n  <ion-tab [tabsHideOnSubPages]="true" [root]="tab3Root" tabTitle="Profil" tabIcon="contact"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, auth, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.data = data;
        this.nextPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.nextPage2 = __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */];
        this.existingProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
    }
    // Récuppère les infos de l'utilisateur connecté
    WelcomePage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authenticatedUser) {
            this.auth.getAuthenticatedUser().subscribe(function (user) {
                _this.data.getProfile(user).valueChanges().subscribe(function (profile) {
                    _this.userProfile = profile;
                    _this.existingProfile.emit(_this.userProfile);
                });
            });
        }
    };
    // Fonction qui arrete l'autoplay sur la derniere slide
    WelcomePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (currentIndex == 3) {
            this.slides.stopAutoplay();
        }
    };
    // Navigation vers la page login
    WelcomePage.prototype.navigateToLoginPage = function () {
        this.navCtrl.push('LoginPage');
    };
    // Navigation vers la page register
    WelcomePage.prototype.navigateToRegisterPage = function () {
        this.navCtrl.push('RegisterPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], WelcomePage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], WelcomePage.prototype, "existingProfile", void 0);
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/welcome/welcome.html"*/'<ion-content>\n\n  <div class="bg-logo">\n\n    <img class="logo" src="./assets/img/logo.png">\n\n  </div>\n\n  \n\n  <ion-slides autoplay="5000" speed="1000" pager (ionSlideDidChange)="slideChanged()">\n\n    <div classs="swiper-pagination">\n\n      \n\n      <!-- PREMIERE SLIDE -->\n\n      <ion-slide>\n\n        <i class="fa fa-handshake-o" style="font-size:130px; color: #2b2b2b" aria-hidden="true"></i>\n\n        <p class="text" style=" color: #2b2b2b; font-size:14px;">Web-Jobbing est la première application d\'entraide numérique entre voisins </p>\n\n      </ion-slide>\n\n    </div>\n\n    \n\n    <!-- DEUXIEME SLIDE -->\n\n    <ion-slide>\n\n      <div class="icons-conteneur">\n\n        <img class="icons" src="./assets/img/icons.png" alt="">\n\n      </div>\n\n      <div class="textIcons">\n\n        <h4 class="text" style=" color: #2b2b2b; font-size:17px; font-family: pacifico;">Un problème avec un appareil ?</h4>\n\n        <p class="text" style=" color: #2b2b2b; font-size:13px">PC, laptop, smartphone, TV... Trouvez la bonne personne pour vous aider.</p> \n\n      </div> \n\n      \n\n    </ion-slide>\n\n    \n\n    <!-- TROISIEME SLIDE -->\n\n    <ion-slide>\n\n      <i class="fa fa-briefcase " style="font-size:130px; color: #2b2b2b;" aria-hidden="true"></i>\n\n      <h4 class="text" style=" color: #2b2b2b; font-size:17px; font-family: pacifico;">Besoin d\'une formation ?</h4>\n\n      <p class="text" style=" color: #2b2b2b; font-size:13px">Vous pouvez vous former sur un nouveau logiciel ou un nouveau langage grâce à nos jobbeurs compétents</p>\n\n    </ion-slide>\n\n    \n\n    <!-- QUATRIEME SLIDE -->\n\n    <ion-slide>\n\n      <div class="howWork">\n\n        <h4 class="text2" style="color: #2b2b2b; font-family: pacifico;">Comment ça marche ?</h4>\n\n        <ion-grid>\n\n          <ion-row>\n\n            \n\n            <!-- Première colonne -->\n\n            <ion-col col-4>\n\n              <h5>Postez votre besoin</h5>\n\n              <img src="./assets/icon/file.png" alt="" style="position: relative;">\n\n              <p class="text" style="  color: #2b2b2b; font-size:13px">Décrivez votre besoin et postez</p>\n\n            </ion-col>\n\n            \n\n            <!-- Deuxième colonne -->\n\n            <ion-col col-4>\n\n              <h5>Choisissez votre jobbeur</h5>\n\n              <img src="./assets/icon/user.png" alt="" style="position: relative;">\n\n              <p class="text" style="  color: #2b2b2b; font-size:13px">Les jobbeurs disponibles vous proposent leurs services</p>\n\n            </ion-col>\n\n            \n\n            <!-- Troisième colonne -->\n\n            <ion-col col-4>\n\n              <h5>Réglez et notez le jobbeur</h5>\n\n              <img src="./assets/icon/user2.png" alt="" style="position: relative;">\n\n              <p class="text" style="  color: #2b2b2b; font-size:13px">Evaluez et réglez votre jobbeur une fois le job terminé</p>\n\n            </ion-col>\n\n            \n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  \n\n  <!-- Boutons -->\n\n  <div id="button">\n\n    <button ion-button (click)="navigateToRegisterPage()" color="orangé">S\'inscrire </button>\n\n    <button ion-button (click)="navigateToLoginPage()" color="bleu">Se connecter</button>\n\n  </div>\n\n  \n\n</ion-content>'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__["a" /* DataService */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=6.js.map