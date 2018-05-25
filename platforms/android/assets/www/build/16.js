webpackJsonp([16],{

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOfferPageModule", function() { return EditOfferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditOfferPageModule = (function () {
    function EditOfferPageModule() {
    }
    EditOfferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_offer__["a" /* EditOfferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_offer__["a" /* EditOfferPage */]),
            ],
        })
    ], EditOfferPageModule);
    return EditOfferPageModule;
}());

//# sourceMappingURL=edit-offer.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast_services__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_offer_offer_list_services__ = __webpack_require__(315);
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








var EditOfferPage = (function () {
    function EditOfferPage(viewCtrl, navParams, navCtrl, data, modalCtrl, photoViewer, auth, toast, offerList, requests) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.data = data;
        this.modalCtrl = modalCtrl;
        this.photoViewer = photoViewer;
        this.auth = auth;
        this.toast = toast;
        this.offerList = offerList;
        this.requests = requests;
        this.requestList$ = [];
        this.offer = {
            uidProfile: '',
            uidRequest: '',
            price: undefined,
            comment: '',
        };
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
        this.existingProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // Récupère les données transmit par la request
        this.offer = this.navParams.get('offer');
        // this.profileList$ = this.data.getProfileList().snapshotChanges().map(
        //   changes => {
        //     return changes.map(c => ({
        //       key: c.payload.key, ...c.payload.val()
        //     }));
        //   });
        // // Récupère la liste des requests
        // this.requests.getRequestListRef().once('value').then(snap => {
        //   snap.forEach(element => {
        //     data.getUid(element.val().uidProfile).valueChanges().subscribe(c => {
        //       let userRequest = element.val();  
        //       userRequest['userRequest'] = c;
        //       this.requestList$.push(userRequest);
        //     });
        //   });
        // });
    }
    // Récupère les données de l'utilisateur
    EditOfferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).valueChanges().subscribe(function (profile) {
                _this.userProfile = profile;
                _this.userProfile.uid = user.uid;
                console.log('Utilisateur connecté :', _this.userProfile);
                _this.existingProfile.emit(_this.userProfile);
            });
        });
    };
    // Ajoute l'offre, message toast, redirige
    EditOfferPage.prototype.saveOffer = function (offer) {
        var _this = this;
        this.offer.uidProfile = this.userProfile.uid;
        this.offer.uidRequest = this.request.uidRequest;
        this.offerList.updateOffer(this.offer).then(function (ref) {
            _this.toast.show("Offre d'un montant de " + offer.price + "\u20AC modifi\u00E9e !");
            _this.navCtrl.pop();
        });
    };
    EditOfferPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], EditOfferPage.prototype, "existingProfile", void 0);
    EditOfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-offer',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/edit-offer/edit-offer.html"*/'<ion-header>\n  <ion-row class="header">\n    <ion-col col-8 class="col1">\n      <h4>{{ request.title }}</h4>\n      <ion-col class="info">\n        <ion-icon name="compass"></ion-icon>\n        {{ request.position }}\n      </ion-col>\n      <ion-col class="info">\n        <ion-icon name="logo-euro"></ion-icon>\n        {{ request.priceMin }} - {{ request.priceMax }}\n      </ion-col>\n    </ion-col>\n    <ion-col col-4 class="col2">\n      <div class="userContent"> \n        <img \n        src="{{request.userRequest.avatar}}" \n        alt="avatar" class="profilePic" \n        navPush="UserProfilePage" \n        [navParams]="{uidProfile: this.request.uidProfile}">\n        <div class="name">{{request.userRequest.firstName}} {{request.userRequest.lastName}}</div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n\n  <div  class="content">\n    <ion-row>\n      <ion-col text-wrap>\n        \n        <ion-item class="paiement" no-lines>\n          <ion-label stacked>Votre offre :</ion-label>\n          <ion-input\n          [(ngModel)]="offer.price" \n          type="number" \n          placeholder="Minimum {{ request.priceMin }} €" \n          min="{{ request.priceMin }}"\n          max="{{ request.priceMax }}"\n          ></ion-input>\n        </ion-item>\n        \n        <ion-item class="commentary" no-lines>\n          <ion-label stacked>Commentaire :</ion-label>\n          <!-- <ion-input type="text" [(ngModel)]="offer.comment" placeholder="Laissez un commentaire"></ion-input> -->\n          <ion-textarea [(ngModel)]="offer.comment" placeholder="Laissez un commentaire" name="dummyText" autosize></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n  \n</ion-content>\n<ion-footer>\n  <div class="align-center"> \n    <button ion-button color="danger" class="back" (click)="back()">\n      <ion-icon name="ios-arrow-back"></ion-icon>\n    </button>\n    <button ion-button color="bleu" class="offer" (click)="addOffer(offer)"> \n      ENVOYER\n    </button> \n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/edit-offer/edit-offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast_services__["a" /* ToastService2 */],
            __WEBPACK_IMPORTED_MODULE_6__providers_offer_offer_list_services__["a" /* OfferListService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_request_request_list_services__["a" /* RequestListService */]])
    ], EditOfferPage);
    return EditOfferPage;
}());

//# sourceMappingURL=edit-offer.js.map

/***/ })

});
//# sourceMappingURL=16.js.map