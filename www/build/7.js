webpackJsonp([7],{

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyrequestPageModule", function() { return MyrequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myrequest__ = __webpack_require__(557);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyrequestPageModule = (function () {
    function MyrequestPageModule() {
    }
    MyrequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myrequest__["a" /* MyrequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myrequest__["a" /* MyrequestPage */]),
            ],
        })
    ], MyrequestPageModule);
    return MyrequestPageModule;
}());

//# sourceMappingURL=myrequest.module.js.map

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

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyrequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request_list_services__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_profile_profile_interface__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast_services__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth_service__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyrequestPage = (function () {
    function MyrequestPage(navCtrl, navParams, requests, toast, modalCtrl, data, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requests = requests;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.data = data;
        this.auth = auth;
        this.requestList$ = [];
        this.showContainer = true;
        this.existingProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
        this.profile = {};
        this.requests.getRequestListRef().once('value').then(function (snap) {
            snap.forEach(function (element) {
                data.getUid(element.val().uidProfile).valueChanges().subscribe(function (c) {
                    var userRequest = element.val();
                    userRequest['uidRequest'] = element.key;
                    userRequest['userRequest'] = c;
                    // Affiche seulement les requests de l'utilisateur connecté
                    if (userRequest.uidProfile == _this.userProfile.uid) {
                        _this.showContainer = false;
                        _this.requestList$.push(userRequest);
                    }
                });
            });
        });
    }
    MyrequestPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).valueChanges().subscribe(function (profile) {
                _this.userProfile = profile;
                _this.userProfile.uid = user.uid;
                _this.existingProfile.emit(_this.userProfile);
            });
        });
    };
    // Refresh
    MyrequestPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    // Ouverture du modal 
    MyrequestPage.prototype.openModal = function (request) {
        var modal = this.modalCtrl.create('RequestModalPage', { request: request }, { cssClass: 'inset-modal' });
        modal.present();
        modal.onDidDismiss(function (data) { return console.log(data); });
    };
    MyrequestPage.prototype.goToUserProfilePage = function () {
        this.navCtrl.push('UserProfilePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MyrequestPage.prototype, "existingProfile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_profile_profile_interface__["a" /* Profile */])
    ], MyrequestPage.prototype, "profile", void 0);
    MyrequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myrequest',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/myrequest/myrequest.html"*/'<ion-header>\n  <ion-navbar color="bleu">\n    <ion-title>Mes annonces</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content \n    pullingText="Pull to refresh"\n    refreshingText="Refreshing..."> \n  </ion-refresher-content>\n</ion-refresher>\n<ion-list>\n  \n  <ion-item-sliding #item *ngFor="let request of requestList$">  \n    <ion-item> \n      <div item-end class="userContent" (click)="openModal(request)">\n        <img src="{{request.userRequest.avatar}}" class="avatar">\n        <p class="name" color="bleu">{{request.userRequest.firstName}} {{request.userRequest.lastName.slice(0,1)}}.</p>\n      </div>\n      <div (click)="openModal(request)">  \n        <h2 class="h2">{{request.title}}</h2>\n        <p class="description">{{request.description}}</p>  \n        <ion-row>\n          <ion-col col-4 class="price">\n            <ion-icon name="logo-euro"></ion-icon>\n            {{request.priceMin}} - {{request.priceMax}} \n          </ion-col>  \n          <ion-col col-8 class="pos">\n            <ion-icon name="compass"></ion-icon>\n            {{request.position}} \n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-item> \n    \n    <ion-item-options side="right">\n      <button ion-button color="primary" navPush="EditRequestPage" [navParams]="{request: request}">\n        <ion-icon name="create"></ion-icon>\n        Modifier  \n      </button>\n      <button ion-button color="danger">\n        <ion-icon name="trash"></ion-icon>\n        Supprimer\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n<div class="container1" *ngIf="this.showContainer === true">  \n  <p class="container__text1">Vous n\'avez pas encore posté d\'annonce !</p>\n</div>\n<div class="container2" *ngIf="this.showContainer === false">\n  <p class="container__text2">Pour modifier une annonce, posez votre doigt sur l\'annonce et slidez vers la gauche</p>\n</div>\n<ion-fab right bottom #fab>\n  <button ion-fab color="bleu" navPush="AddRequestPage"><ion-icon name="create"></ion-icon></button>\n</ion-fab>\n</ion-content>\n\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/myrequest/myrequest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_request_request_list_services__["a" /* RequestListService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast_services__["a" /* ToastService2 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth_service__["a" /* AuthService */]])
    ], MyrequestPage);
    return MyrequestPage;
}());

//# sourceMappingURL=myrequest.js.map

/***/ })

});
//# sourceMappingURL=7.js.map