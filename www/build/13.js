webpackJsonp([13],{

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageModule", function() { return RequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(565);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestPageModule = (function () {
    function RequestPageModule() {
    }
    RequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */]),
            ],
        })
    ], RequestPageModule);
    return RequestPageModule;
}());

//# sourceMappingURL=request.module.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request_list_services__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast_services__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data_service__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { EditItemPage } from "../../pages/edit-item/edit-item";
//import { AdditemPage } from '../add-item/add-item';


var RequestPage = (function () {
    function RequestPage(navCtrl, navParams, requests, toast, modalCtrl, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requests = requests;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.data = data;
        this.requestList$ = [];
    }
    // Au chargement de la page
    RequestPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.requestList$ = [];
        // Appel de la fonction dans mon service qui liste les besoins 
        this.requests.getRequestListRef().once('value').then(function (snap) {
            // Pour chaque besoin
            snap.forEach(function (element) {
                // On réccupère l'ID du profil qui à posté le besoin
                _this.data.getUid(element.val().uidProfile).valueChanges().subscribe(function (profileData) {
                    var userRequest = element.val();
                    userRequest['uidRequest'] = element.key;
                    userRequest['userRequest'] = profileData;
                    _this.requestList$.push(userRequest);
                });
            });
        });
    };
    // Refresher    
    RequestPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        // Délai de 2,5 secondes
        setTimeout(function () {
            // Vide le tableau de données
            _this.requestList$ = [];
            // Recharge les données de la page
            _this.ionViewWillEnter();
            // Disparition du refresher
            refresher.complete();
        }, 2500);
    };
    // Ouverture du modal 
    RequestPage.prototype.openModal = function (request) {
        var modal = this.modalCtrl.create('RequestModalPage', { request: request }, { cssClass: 'inset-modal' });
        modal.present();
        modal.onDidDismiss(function (data) { return console.log(data); });
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/request/request.html"*/'<ion-header>\n\n  <ion-navbar color="bleu">\n\n    <ion-title>Liste des besoins</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content \n\n    pullingText="Tirez pour actualiser la page"\n\n    refreshingText="Actualisation des données..."> \n\n  </ion-refresher-content>\n\n</ion-refresher>\n\n<ion-list>\n\n  \n\n  <ion-item-sliding #item *ngFor="let request of requestList$">  \n\n    <ion-item> \n\n      <div item-end class="userContent" (click)="openModal(request)">\n\n        <img src="{{request.userRequest.avatar}}" class="avatar">\n\n        <p class="name" color="bleu">{{request.userRequest.firstName}} {{request.userRequest.lastName.slice(0,1)}}.</p>\n\n      </div>\n\n      <div (click)="openModal(request)">  \n\n        \n\n        <h2 class="h2">{{request.title}}</h2>\n\n        <p class="description">{{request.description}}</p>  \n\n        <ion-row>\n\n          <ion-col col-4 class="price">\n\n            <ion-icon name="logo-euro"></ion-icon>\n\n            {{request.priceMin}} - {{request.priceMax}} \n\n          </ion-col>  \n\n          <ion-col col-8 class="pos">\n\n            <ion-icon name="compass"></ion-icon>\n\n            {{request.position}} \n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </ion-item> \n\n    <ion-item-options side="right">\n\n      <button ion-button color="secondary">\n\n        <ion-icon name="chatbubbles"></ion-icon>\n\n        Profil\n\n      </button>\n\n      <button ion-button color="primary">\n\n        <ion-icon name="create"></ion-icon>\n\n        Modifier  \n\n      </button>\n\n      <button ion-button color="danger">\n\n        <ion-icon name="trash"></ion-icon>\n\n        Supprimer\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n</ion-list>\n\n<ion-fab right bottom #fab>\n\n  <button ion-fab color="bleu" navPush="AddRequestPage"><ion-icon name="create"></ion-icon></button>\n\n</ion-fab>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/request/request.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_request_request_list_services__["a" /* RequestListService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast_services__["a" /* ToastService2 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data_service__["a" /* DataService */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ })

});
//# sourceMappingURL=13.js.map