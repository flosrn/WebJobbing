webpackJsonp([5],{

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModalPageModule", function() { return RequestModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_modal__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_emoji_picker_emoji_picker_module__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_emoji__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RequestModalPageModule = (function () {
    function RequestModalPageModule() {
    }
    RequestModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__request_modal__["a" /* RequestModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__request_modal__["a" /* RequestModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_emoji_picker_emoji_picker_module__["a" /* EmojiPickerComponentModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__request_modal__["a" /* RequestModalPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_emoji__["a" /* EmojiProvider */]
            ]
        })
    ], RequestModalPageModule);
    return RequestModalPageModule;
}());

//# sourceMappingURL=request-modal.module.js.map

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

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_profile_profile_interface__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_request_request_list_services__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_offer_offer_list_services__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_comment_comment_list_services__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_response_response_list_services__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_util_alert_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_email_composer__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var RequestModalPage = (function () {
    function RequestModalPage(viewCtrl, navParams, navCtrl, data, modalCtrl, photoViewer, requests, offers, commentList, responseList, auth, alertCtrl2, formBuilder, emailComposer) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.data = data;
        this.modalCtrl = modalCtrl;
        this.photoViewer = photoViewer;
        this.requests = requests;
        this.offers = offers;
        this.commentList = commentList;
        this.responseList = responseList;
        this.auth = auth;
        this.alertCtrl2 = alertCtrl2;
        this.formBuilder = formBuilder;
        this.emailComposer = emailComposer;
        this.requestList$ = [];
        this.offerList$ = [];
        this.commentList$ = [];
        this.responseList$ = [];
        this.pluralPhoto = false;
        this.showPhoto = false;
        this.offerAlreadyPost = false;
        this.showEmojiPicker = false;
        this.comment = {
            uidProfile: '',
            uidRequest: '',
            uidComment: '',
            uidResponse: '',
            comment: '',
            date: '',
            time: '',
        };
        this.onResponse = '';
        this.response = {
            uidProfile: '',
            uidRequest: '',
            uidComment: '',
            comment: '',
            date: '',
            time: '',
        };
        this.showResponseInput = false;
        // Récupère les données transmit par la request
        this.request = this.navParams.get('request');
        console.log('Données de la request actuelle : ', this.request);
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
        // Vérifie le nombre de photos de la request & gère le pluriel
        if (!this.request.photo) {
            this.photoNumber = 0;
        }
        if (this.request.photo) {
            this.photoNumber = 1;
        }
        if (this.request.photo2) {
            this.photoNumber = 2;
            this.pluralPhoto = true;
        }
        if (this.request.photo3) {
            this.photoNumber = 3;
            this.pluralPhoto = true;
        }
        this.existingProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.profile = {};
    }
    RequestModalPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).valueChanges().subscribe(function (profile) {
                _this.userProfile = profile;
                _this.userProfile.uid = user.uid;
                _this.existingProfile.emit(_this.userProfile);
            });
        });
    };
    RequestModalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // Vide le tableau  
        this.offerList$ = [];
        // Récupère la liste des offres
        this.offers.getOfferListRef().once('value').then(function (snap) {
            snap.forEach(function (element) {
                // Si l'uid de la request de l'offre est égale à l'uid de la request
                if (element.val().uidRequest == _this.request.uidRequest) {
                    _this.data.getUid(element.val().uidProfile).valueChanges().subscribe(function (c) {
                        var userOffer = element.val();
                        userOffer['uidOffer'] = element.key;
                        userOffer['userOffer'] = c;
                        _this.offerList$.push(userOffer);
                        // console.log('Données d\'une des offres appartenant à la request : ',userOffer);
                        // Si le jobbeur à déjà poster une offre sur ce besoin 
                        if (userOffer.uidProfile == _this.userProfile.uid) {
                            _this.offerAlreadyPost = true;
                        }
                    });
                }
            });
        });
        this.refreshPage();
    };
    RequestModalPage.prototype.refreshPage = function () {
        var _this = this;
        // Vide le tableau 
        this.commentList$ = [];
        // Récupère la liste des commentaires
        this.commentList.getCommentListRef().once('value').then(function (snap) {
            snap.forEach(function (element) {
                // Si l'uid de la request de l'offre est égale à l'uid de la request
                if (element.val().uidRequest == _this.request.uidRequest) {
                    _this.data.getUid(element.val().uidProfile).valueChanges().subscribe(function (c) {
                        var userComment = element.val();
                        userComment['uidComment'] = element.key;
                        userComment['userComment'] = c;
                        _this.commentList$.push(userComment);
                        // console.log('1er commentaire de la request "',this.request.title,'": ',element.val());
                    });
                }
            });
        });
    };
    RequestModalPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
    };
    RequestModalPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
    };
    // Ajoute le commentaire, message toast, redirige
    RequestModalPage.prototype.addComment = function (comment) {
        var _this = this;
        if (this.userProfile.userPermission === 1) {
            this.comment.uidProfile = this.userProfile.uid;
            this.comment.uidRequest = this.request.uidRequest;
            this.commentList.addComment(this.comment).then(function (ref) {
                _this.userProfile.commentPost = _this.userProfile.commentPost + 1;
                _this.data.updateProfile(_this.authenticatedUser, _this.userProfile);
                _this.refreshPage();
                _this.comment.comment = '';
            });
        }
        else {
            this.alertCtrl2.presentAlertWithCallback('Permission non accordée', 'Pour des raisons de sécurité, une autorisation de l\'administrateur de cette application est nécessaire pour effectuer cette action, contacter l\'administrateur ?').then(function (ok) {
                if (ok) {
                    var email = {
                        to: 'florian.seran@gmail.com',
                        attachments: [],
                        subject: 'WebJobbing permission',
                        body: 'prenom:' + _this.userProfile.firstName + '<br  \>' + 'nom: ' + _this.userProfile.lastName + '<br  \>' + 'email: ' + _this.userProfile.email + '<br  \><br  \>' + 'Bonjour, je souhaiterais accéder à toutes les fonctionnalités de l\'application.',
                        isHtml: true
                    };
                    // Send a text message using default options
                    _this.emailComposer.open(email);
                }
                else {
                }
            });
        }
    };
    // Ajoute la reponse, message toast, redirige
    RequestModalPage.prototype.addResponse = function (response) {
        var _this = this;
        if (this.userProfile.userPermission === 1) {
            this.response.uidProfile = this.userProfile.uid;
            this.response.uidRequest = this.request.uidRequest;
            this.response.uidComment = this.onResponse;
            this.responseList.addResponse(this.response).then(function (ref) {
                _this.refreshPage();
                _this.showResponseInput = false;
            });
        }
        else {
            this.alertCtrl2.presentAlertWithCallback('Permission non accordée', 'Pour des raisons de sécurité, une autorisation de l\'administrateur de cette application est nécessaire pour effectuer cette action, contacter l\'administrateur ?').then(function (ok) {
                if (ok) {
                    var email = {
                        to: 'florian.seran@gmail.com',
                        attachments: [],
                        subject: 'WebJobbing permission',
                        body: 'prenom:' + _this.userProfile.firstName + '<br  \>' + 'nom: ' + _this.userProfile.lastName + '<br  \>' + 'email: ' + _this.userProfile.email + '<br  \><br  \>' + 'Bonjour, je souhaiterais accéder à toutes les fonctionnalités de l\'application.',
                        isHtml: true
                    };
                    // Send a text message using default options
                    _this.emailComposer.open(email);
                }
                else {
                }
            });
        }
    };
    // Amène vers la slide suivante
    RequestModalPage.prototype.goToNextSlide = function () {
        this.slides.slideNext();
    };
    // Amène à la premiere slide
    RequestModalPage.prototype.goToSlideOne = function () {
        this.slides.slideTo(0, 500);
    };
    // Amène à la seconde slide
    RequestModalPage.prototype.goToSlideTwo = function () {
        this.slides.slideTo(1, 500);
    };
    // Amène à la troisieme slide
    RequestModalPage.prototype.goToSlideThree = function () {
        this.refreshPage();
        this.slides.slideTo(2, 500);
    };
    // Renvoie l'index de la slide actuelle
    RequestModalPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
    };
    //Montre ou cache les photos quand on appuie sur le bouton (si photo il y a)
    RequestModalPage.prototype.toggleShowPhoto = function () {
        if (this.request.photo) {
            this.showPhoto = !this.showPhoto;
        }
        if (this.request.photo2) {
            this.showPhoto = !this.showPhoto;
        }
        if (this.request.photo3) {
            this.showPhoto = !this.showPhoto;
        }
    };
    RequestModalPage.prototype.offerAlert = function () {
        if (this.userProfile.jobberStatut === true && !this.offerAlreadyPost) {
            this.navCtrl.push('OfferPage');
        }
        if (this.userProfile.jobberStatut === true && this.offerAlreadyPost) {
            this.alertOfferAlreadyPost();
        }
        if (this.userProfile.jobberStatut === false) {
            this.alertStatut();
        }
    };
    RequestModalPage.prototype.alertStatut = function () {
        this.alertCtrl2.presentAlert('Attention !', '<br />Vous devez être Jobbeur pour poster une offre sur le besoin d\'un utilisateur.<br /><br />Veuillez changer votre statut dans les paramètres.').then(function (yes) {
        });
    };
    RequestModalPage.prototype.alertOfferAlreadyPost = function () {
        this.alertCtrl2.presentAlert('Attention !', '<br />Vous avez déja poster une offre pour ce besoin.<br /><br />Il n\'est pas possible de poster plusieurs offres sur le même besoin.').then(function (yes) {
        });
    };
    // Cache les photos quand on revient sur la premiere slide si elles sont présente 
    RequestModalPage.prototype.hidePhoto = function () {
        if (this.showPhoto) {
            this.showPhoto = !this.showPhoto;
        }
    };
    // Ferme le modal
    RequestModalPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    // Zoome sur la premiere image
    RequestModalPage.prototype.zoomImage = function () {
        this.photoViewer.show(this.request.photo);
    };
    // Zoome sur la seconde image
    RequestModalPage.prototype.zoomImage2 = function () {
        this.photoViewer.show(this.request.photo2);
    };
    // Zoome sur la troisieme image
    RequestModalPage.prototype.zoomImage3 = function () {
        this.photoViewer.show(this.request.photo3);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], RequestModalPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], RequestModalPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* TextInput */])
    ], RequestModalPage.prototype, "messageInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_profile_profile_interface__["a" /* Profile */])
    ], RequestModalPage.prototype, "profile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], RequestModalPage.prototype, "existingProfile", void 0);
    RequestModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request-modal',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/request-modal/request-modal.html"*/'<ion-header>\n\n  <ion-row class="header">\n\n    <ion-col col-8 class="col1">\n\n      <div class="align-center">\n\n        <h4>{{ request.title }}</h4>\n\n      </div>\n\n      <ion-col class="info">\n\n        <ion-icon name="compass"></ion-icon>\n\n        {{ request.position }}\n\n      </ion-col>\n\n      <ion-col class="info">\n\n        <ion-icon name="logo-euro"></ion-icon>\n\n        {{ request.priceMin }} - {{ request.priceMax }}\n\n      </ion-col>\n\n      <div class="category">\n\n        {{ request.category }}\n\n      </div>\n\n    </ion-col>\n\n    <ion-col col-4 class="col2">\n\n      <div class="userContent"> \n\n        <img \n\n        src="{{request.userRequest.avatar}}" \n\n        alt="avatar" class="profilePic" \n\n        navPush="UserProfilePage" \n\n        [navParams]="{uidProfile: this.request.uidProfile}">\n\n        <div class="name">{{request.userRequest.firstName}} {{request.userRequest.lastName.slice(0,1)}}.</div>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n  \n\n  <ion-toolbar>\n\n    <!-- Icon 1 -->\n\n    <div class="button1">\n\n      <ion-buttons start>\n\n        <button ion-button icon-only (click)="goToSlideOne()" (click)="hidePhoto()">\n\n          <ion-icon class="iconActive" color="active" name="ios-paper" *ngIf="this.slides.getActiveIndex()===0"></ion-icon>\n\n          <ion-icon class="iconInactive" name="ios-paper" color="inactive" *ngIf="this.slides.getActiveIndex()!==0"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </div>\n\n    \n\n    <!-- Icon 2 -->\n\n    <div class="button2">\n\n      <ion-buttons start>\n\n        <button ion-button icon-only (click)="goToSlideTwo()">\n\n          <ion-icon class="iconActive" color="active" name="ios-people" *ngIf="this.slides.getActiveIndex()===1"></ion-icon>\n\n          <ion-icon class="iconInactive" name="ios-people" color="inactive" *ngIf="this.slides.getActiveIndex()!==1"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </div> \n\n    \n\n    <!-- Icon 3 -->\n\n    <div class="button3">\n\n      <ion-buttons start>\n\n        <button ion-button icon-only (click)="goToSlideThree()">\n\n          <ion-icon class="iconActive" color="active" name="ios-chatboxes" *ngIf="this.slides.getActiveIndex()===2"></ion-icon>\n\n          <ion-icon class="iconInactive" name="ios-chatboxes" color="inactive" *ngIf="this.slides.getActiveIndex()!==2"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n  <ion-row>\n\n    <ion-col text-wrap>\n\n      \n\n      <!----------------- SLIDE 1 -------------------->\n\n      <ion-slides (ionSlideDidChange)="slideChanged()">\n\n        <ion-slide>\n\n          <ion-scroll scrollY="true" class="scroll1">\n\n            <div class="tamere" *ngIf="!this.showPhoto">\n\n              <ion-item no-lines>\n\n                <p class="descriptionText">{{ request.description }}</p> \n\n              </ion-item>\n\n            </div>\n\n            <ion-scroll scrollY="true" class="scroll1" *ngIf="this.showPhoto">\n\n              <ion-item no-lines class="photoContainer">\n\n                <img src="{{request.photo}}" class="photo" (click)="zoomImage()"  *ngIf="this.showPhoto && this.request.photo"> \n\n                <img src="{{request.photo2}}" class="photo" (click)="zoomImage2()"  *ngIf="this.showPhoto && this.request.photo2">\n\n                <img src="{{request.photo3}}" class="photo" (click)="zoomImage3()" *ngIf="this.showPhoto && this.request.photo3">\n\n              </ion-item>\n\n            </ion-scroll>\n\n          </ion-scroll>\n\n        </ion-slide>\n\n        \n\n        <!----------------- SLIDE 2 -------------------->\n\n        <ion-slide>\n\n          <ion-scroll scrollY="true" class="scroll2">\n\n            <div class="tamere2">\n\n              <ion-item *ngFor="let offer of offerList$" navPush="UserProfilePage" [navParams]="{uidProfile: this.offer.uidProfile}">\n\n                <div item-start>\n\n                  <img src="{{offer.userOffer.avatar}}" class="avatar">\n\n                </div>\n\n                <h2 class="h2">{{offer.userOffer.firstName}} {{offer.userOffer.lastName.slice(0,1)}}.</h2>\n\n                <p class="offerComment">{{offer.comment}}</p> \n\n                <ion-note item-right color="orangé">{{offer.price}} €</ion-note> \n\n              </ion-item>\n\n            </div>\n\n          </ion-scroll>\n\n        </ion-slide>\n\n        \n\n        <!----------------- SLIDE 3 -------------------->\n\n        <ion-slide>\n\n          <div class="tamere3" style="overflow: scroll; height: xyz;" #scrollMe [scrollTop]="scrollMe.scrollHeight">\n\n            <div class="message-wrap">\n\n              <div *ngFor="let comment of commentList$"\n\n              class="message"\n\n              [class.left]=" comment.uidProfile !== request.uidProfile "\n\n              [class.right]=" comment.uidProfile === request.uidProfile  ">\n\n              <img class="user-img" [src]="comment.userComment.avatar" navPush="UserProfilePage" [navParams]="{uidProfile: this.comment.uidProfile}"> \n\n              <div class="msg-detail">\n\n                <div class="msg-info">\n\n                  <p>{{comment.userComment.firstName}}&nbsp;&nbsp;&nbsp;</p>\n\n                </div>\n\n                <div class="msg-content">\n\n                  <span class="triangle"></span>\n\n                  <p class="line-breaker" navPush="UserProfilePage" [navParams]="{uidProfile: this.comment.uidProfile}">{{comment.comment}}</p>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div> \n\n      </ion-slide>\n\n      \n\n    </ion-slides>\n\n  </ion-col>\n\n</ion-row>\n\n</ion-content>\n\n\n\n<!---------------------------------- FOOTER  SLIDE 1 ------------------------------------------>\n\n<ion-footer *ngIf="this.slides.getActiveIndex()===0" class="footer1">\n\n  <div class="align-center"> \n\n    <div>\n\n      <!-- Bouton faite votre offre -->\n\n      <button ion-button color="bleu" class="offer" *ngIf="userProfile && this.userProfile.jobberStatut === true" (click)="goToSlideTwo()" (click)="hidePhoto()"> \n\n        FAITES VOTRE OFFRE\n\n      </button>\n\n      <button ion-button color="bleu" class="offer" *ngIf="userProfile && this.userProfile.jobberStatut === false" (click)="goToSlideTwo()" (click)="hidePhoto()"> \n\n        FAITES VOTRE OFFRE \n\n      </button>\n\n    </div>\n\n    <!-- Bouton retour -->\n\n    <button ion-button color="danger" class="back" (click)="back()">\n\n      <ion-icon name="ios-arrow-back"></ion-icon>\n\n    </button>\n\n    <!-- Bouton photo -->\n\n    <button ion-button color="orangé" *ngIf="!this.showPhoto" (click)="toggleShowPhoto()" class="buttonPhoto"> \n\n      <ion-icon name="ios-image" class="iconImage"></ion-icon>\n\n      PHOTO<p *ngIf="this.pluralPhoto === true" class="s">S</p> ({{this.photoNumber}})\n\n    </button>\n\n    <button ion-button color="orangé" *ngIf="this.showPhoto" (click)="toggleShowPhoto()" class="buttonPhoto"> \n\n      <ion-icon name="ios-paper" class="iconImage"></ion-icon>\n\n      TEXTE\n\n    </button>\n\n  </div>\n\n</ion-footer>\n\n\n\n<!---------------------------------- FOOTER SLIDE 2 ------------------------------------------>\n\n<ion-footer *ngIf="this.slides.getActiveIndex()===1" class="footer1">\n\n  <div class="align-center">\n\n    <button ion-button color="danger" class="back" (click)="back()">\n\n      <ion-icon name="ios-arrow-back"></ion-icon>\n\n    </button>\n\n    <button ion-button color="bleu" class="offerButton" *ngIf="userProfile && this.userProfile.jobberStatut === true && !this.offerAlreadyPost" navPush="OfferPage" [navParams]="{request: request}"> \n\n      FAITES VOTRE OFFRE\n\n    </button>\n\n    <button ion-button color="bleu" class="offerButton" *ngIf="userProfile && this.userProfile.jobberStatut === false" (click)="alertStatut()"> \n\n      FAITES VOTRE OFFRE \n\n    </button>\n\n    <button ion-button color="bleu" class="offerButton" *ngIf="userProfile && this.userProfile.jobberStatut === true && this.offerAlreadyPost" (click)="alertOfferAlreadyPost()"> \n\n      FAITES VOTRE OFFRE \n\n    </button>\n\n  </div>\n\n</ion-footer>\n\n\n\n<!---------------------------------- FOOTER SLIDE 3 (1) ------------------------------------------>\n\n<ion-footer no-border *ngIf="this.slides.getActiveIndex()===2 && !this.showResponseInput" [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n  <ion-grid class="input-wrap" id="footer2">\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n\n          <ion-icon name="md-happy"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <ion-textarea #chat_input\n\n        *ngIf="request.uidProfile != userProfile.uid"\n\n        placeholder="Posez une question à {{request.userRequest.firstName}}"\n\n        [(ngModel)]="comment.comment"\n\n        (keyup.enter)="addComment(comment)"\n\n        (ionFocus)="onFocus()">\n\n      </ion-textarea>\n\n      <ion-textarea #chat_input\n\n      *ngIf="request.uidProfile === userProfile.uid"\n\n      placeholder="Répondre"  \n\n      [(ngModel)]="comment.comment"\n\n      (keyup.enter)="addComment(comment)"\n\n      (ionFocus)="onFocus()">\n\n    </ion-textarea>\n\n  </ion-col>\n\n  <ion-col col-2>\n\n    <button ion-button clear icon-only item-right (click)="addComment(comment)">\n\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n    </button>\n\n  </ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n<emoji-picker *ngIf="showEmojiPicker" [(ngModel)]="comment.comment"></emoji-picker>\n\n</ion-footer>\n\n\n\n<!---------------------------------- FOOTER SLIDE 3 (2) ------------------------------------------>\n\n<ion-footer no-border *ngIf="this.slides.getActiveIndex()===2 && this.showResponseInput" [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n  <ion-grid class="input-wrap" id="footer2">\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n\n          <ion-icon name="md-happy"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <ion-textarea #chat_input\n\n        placeholder="Répondre à {{request.userRequest.firstName}}"\n\n        [(ngModel)]="response.comment"\n\n        (keyup.enter)="addResponse(response)"\n\n        (ionFocus)="onFocus()">\n\n      </ion-textarea>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <button ion-button clear icon-only item-right (click)="addResponse(response)">\n\n        <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<emoji-picker *ngIf="showEmojiPicker" [(ngModel)]="response.comment"></emoji-picker>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/request-modal/request-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_5__providers_request_request_list_services__["a" /* RequestListService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_offer_offer_list_services__["a" /* OfferListService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_comment_comment_list_services__["a" /* CommentListService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_response_response_list_services__["a" /* ResponseListService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], RequestModalPage);
    return RequestModalPage;
}());

//# sourceMappingURL=request-modal.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji_picker__ = __webpack_require__(564);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmojiPickerComponentModule = (function () {
    function EmojiPickerComponentModule() {
    }
    EmojiPickerComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]
            ]
        })
    ], EmojiPickerComponentModule);
    return EmojiPickerComponentModule;
}());

//# sourceMappingURL=emoji-picker.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_emoji__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = (function () {
    function EmojiPickerComponent(emojiProvider) {
        this.emojiArr = [];
        this.emojiArr = emojiProvider.getEmojis();
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    EmojiPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'emoji-picker',
            providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/emoji-picker/emoji-picker.html"*/'<!-- Generated template for the EmojiPickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item"\n              (click)="setValue(item)"\n              *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/emoji-picker/emoji-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_emoji__["a" /* EmojiProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

//# sourceMappingURL=emoji-picker.js.map

/***/ })

});
//# sourceMappingURL=5.js.map