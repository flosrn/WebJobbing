webpackJsonp([8],{

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyofferPageModule", function() { return MyofferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myoffer__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyofferPageModule = (function () {
    function MyofferPageModule() {
    }
    MyofferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myoffer__["a" /* MyofferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myoffer__["a" /* MyofferPage */]),
            ],
        })
    ], MyofferPageModule);
    return MyofferPageModule;
}());

//# sourceMappingURL=myoffer.module.js.map

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

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyofferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_offer_offer_list_services__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_profile_profile_interface__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast_services__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_request_request_list_services__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyofferPage = (function () {
    function MyofferPage(navCtrl, navParams, offers, requests, toast, modalCtrl, data, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offers = offers;
        this.requests = requests;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.data = data;
        this.auth = auth;
        this.offerList$ = [];
        this.requestList$ = [];
        this.showContainer = true;
        this.existingProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
        // Récupère la liste des offres
        this.offers.getOfferListRef().once('value').then(function (snap) {
            snap.forEach(function (element) {
                _this.data.getUid(element.val().uidProfile).valueChanges().subscribe(function (c) {
                    var userOffer = element.val();
                    userOffer['uidOffer'] = element.key;
                    userOffer['userOffer'] = c;
                    if (userOffer.uidProfile == _this.userProfile.uid) {
                        _this.showContainer = false;
                        _this.offerList$.push(userOffer);
                    }
                });
            });
        });
    }
    MyofferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).valueChanges().subscribe(function (profile) {
                _this.userProfile = profile;
                _this.userProfile.uid = user.uid;
                _this.existingProfile.emit(_this.userProfile);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MyofferPage.prototype, "existingProfile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_profile_profile_interface__["a" /* Profile */])
    ], MyofferPage.prototype, "profile", void 0);
    MyofferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myoffer',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/myoffer/myoffer.html"*/'<ion-header>\n  <ion-navbar color="bleu">\n    <ion-title>Mes offres</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content \n    pullingText="Pull to refresh"\n    refreshingText="Refreshing..."> \n  </ion-refresher-content>\n</ion-refresher>\n<ion-list>\n  \n  <ion-item-sliding #item *ngFor="let offer of offerList$">  \n    <ion-item>\n      <div item-start>\n        <img src="{{offer.userOffer.avatar}}" class="avatar">\n      </div>\n      <h2 class="h2">{{offer.userOffer.firstName}} {{offer.userOffer.lastName.slice(0,1)}}.</h2>\n      <p class="offerComment">{{offer.comment}}</p> \n      <ion-note item-right color="orangé">{{offer.price}} €</ion-note> \n    </ion-item>\n    \n    <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="create"></ion-icon>\n        Modifier  \n      </button>\n      <button ion-button color="danger">\n        <ion-icon name="trash"></ion-icon>\n        Supprimer\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n<div class="container1" *ngIf="this.showContainer === true">  \n  <p class="container__text1">Vous n\'avez pas encore posté d\'offre !</p>\n</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/myoffer/myoffer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_offer_offer_list_services__["a" /* OfferListService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_request_request_list_services__["a" /* RequestListService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast_services__["a" /* ToastService2 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth_service__["a" /* AuthService */]])
    ], MyofferPage);
    return MyofferPage;
}());

//# sourceMappingURL=myoffer.js.map

/***/ })

});
//# sourceMappingURL=8.js.map