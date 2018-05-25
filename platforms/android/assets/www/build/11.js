webpackJsonp([11],{

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserProfilePageModule = (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
            ],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast_services__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProfilePage = (function () {
    function UserProfilePage(navCtrl, alertCtrl, loadingCtrl, toastCtrl, navParams, data, auth, camera) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.data = data;
        this.auth = auth;
        this.camera = camera;
        this.profile = [];
    }
    // Au chargement de la page
    UserProfilePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        // Appel de la fonction du service qui permet de reccupérer l'ID de l'utilisateur
        this.data.getUidUser(this.navParams.get('uidProfile')).ref.once('value').then(function (dataUser) {
            _this.profile = dataUser.val();
            console.log('Profil de', dataUser.val().firstName, ': ', _this.profile);
        });
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/user-profile/user-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Profil de {{profile.firstName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-------------// Photo de couverture //-------------->\n  <div class="cover">\n    <img src="{{profile.cover}}" id="profile-bg" *ngIf="this.profile.cover">\n  </div>\n  \n  <div id="content">\n    <!-------------// Info Profil //-------------->         \n    <div id="profile-info" padding>\n      <img src="{{profile.avatar}}" id="profile-image">\n      <h3 id="profile-name">{{profile.firstName}} {{profile.lastName}}</h3>\n      <div class="statut">\n        <p class="statut__line" *ngIf="this.profile.jobberStatut === true">Profil Jobbeur<ion-icon class="iconBadge" color="orangé" name="ios-ribbon" *ngIf="this.profile.jobberStatut === true"></ion-icon></p> \n        <p class="statut__line" *ngIf="this.profile.jobberStatut === false">Profil utilisateur</p>\n      </div>   \n      <p *ngIf="this.profile.jobberStatut === true" class="job">{{profile.job}}</p> \n      <p *ngIf="this.profile.jobberStatut === true && this.profile.job && this.profile.location"class="dot">&bull;</p>\n      <p class="location">{{profile.location}}</p> \n    </div>   \n    \n    <hr/>\n    \n    <p *ngIf="profile && this.profile.date" class="date">Membre depuis le {{profile.date | date:\'MM/dd/yy\'}}</p> \n    \n    <!-- Description -->\n    <div class="textDescription" *ngIf="this.profile.description && this.profile.jobberStatut === true"> \n      <p class="profile-description">{{profile.description}}</p>\n    </div>   \n    \n    <!-------------// Infos //-------------->\n    <div>\n      <div class="numbers">\n        <ion-row class="profile-numbers">\n          <ion-col col-4>   \n            <div>\n              <p>Annonces postées</p>\n              <span *ngIf="this.profile.requestPost">{{profile.requestPost}}</span>\n              <span *ngIf="!this.profile.requestPost">0</span> \n            </div>\n          </ion-col>\n          <ion-col col-4>\n            <div class="zou">\n              <p>Missions réalisées</p> \n              <span *ngIf="this.profile.workDone">{{profile.workDone}}</span>\n              <span *ngIf="!this.profile.workDone">0</span> \n            </div>\n          </ion-col>\n          <ion-col col-4> \n            <div>  \n              <p>Commentaires postés</p>\n              <span *ngIf="this.profile.commentPost">{{profile.commentPost}}</span>\n              <span *ngIf="!this.profile.commentPost">0</span>\n            </div>  \n          </ion-col>  \n        </ion-row>\n      </div> \n    </div> \n  <!-- <ion-list *ngIf="this.profile.knowledges && this.showProfileUser">\n    Compétences : {{this.profile.knowledges}}\n  </ion-list> -->\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/user-profile/user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast_services__["a" /* ToastService2 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ })

});
//# sourceMappingURL=11.js.map