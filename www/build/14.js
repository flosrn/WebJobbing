webpackJsonp([14],{

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoModalPageModule", function() { return PhotoModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photo_modal__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhotoModalPageModule = (function () {
    function PhotoModalPageModule() {
    }
    PhotoModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__photo_modal__["a" /* PhotoModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__photo_modal__["a" /* PhotoModalPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__photo_modal__["a" /* PhotoModalPage */]
            ]
        })
    ], PhotoModalPageModule);
    return PhotoModalPageModule;
}());

//# sourceMappingURL=photo-modal.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_viewer__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { PhotoService } from '../../providers/photo/photo.services';
var PhotoModalPage = (function () {
    function PhotoModalPage(viewCtrl, navParams, actionsheetCtrl, camera, alertCtrl, platform, loadingCtrl, db, photoViewer) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.actionsheetCtrl = actionsheetCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.db = db;
        this.photoViewer = photoViewer;
        this.basePath = 'requests/';
        this.showButton1 = true;
        this.showButton2 = false;
        this.showButton3 = false;
        this.showAllButtons = false;
        this.uploadedPhoto1 = false;
        this.uploadedPhoto2 = false;
        this.uploadedPhoto3 = false;
        this.onSuccess = function (snapshot) {
            _this.currentImage = snapshot.downloadURL;
            _this.request.photo = _this.currentImage;
            _this.uploadedPhoto1 = true;
            _this.showButton1 = false;
            _this.showButton2 = true;
            _this.loading.dismiss();
        };
        this.onError = function (error) {
            console.log('Erreur:', error);
            _this.loading.dismiss();
        };
        this.onSuccess2 = function (snapshot) {
            _this.currentImage2 = snapshot.downloadURL;
            _this.request.photo2 = _this.currentImage2;
            _this.uploadedPhoto2 = true;
            _this.showButton2 = false;
            _this.showButton3 = true;
            _this.loading.dismiss();
        };
        this.onError2 = function (error) {
            console.log('Erreur:', error);
            _this.loading.dismiss();
        };
        this.onSuccess3 = function (snapshot) {
            _this.currentImage3 = snapshot.downloadURL;
            _this.request.photo3 = _this.currentImage3;
            _this.uploadedPhoto3 = true;
            _this.showButton1 = false;
            _this.showButton2 = false;
            _this.showButton3 = false;
            _this.showAllButtons = true;
            _this.loading.dismiss();
        };
        this.onError3 = function (error) {
            console.log('Erreur:', error);
            _this.loading.dismiss();
        };
        // Récupère les données transmit par la request
        this.request = this.navParams.get('request');
    }
    PhotoModalPage.prototype.signup = function () {
        this.viewCtrl.dismiss();
    };
    PhotoModalPage.prototype.login = function () {
        this.viewCtrl.dismiss();
    };
    PhotoModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PhotoModalPage.prototype.zoomImage = function () {
        this.photoViewer.show(this.request.photo);
    };
    PhotoModalPage.prototype.zoomImage2 = function () {
        this.photoViewer.show(this.request.photo2);
    };
    PhotoModalPage.prototype.zoomImage3 = function () {
        this.photoViewer.show(this.request.photo3);
    };
    PhotoModalPage.prototype.choosePhoto = function () {
        var _this = this;
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
    PhotoModalPage.prototype.uploadPhoto = function (sType) {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 720,
            targetWidth: 720,
            sourceType: sType,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.loading = _this.loadingCtrl.create({
                content: 'Upload de la photo en cours...'
            });
            _this.loading.present();
            _this.selectedPhoto = _this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
            _this.upload();
        }, function (err) {
            console.log('Erreur:', err);
        });
    };
    PhotoModalPage.prototype.dataURItoBlob = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    PhotoModalPage.prototype.upload = function () {
        if (this.selectedPhoto) {
            var uploadTask = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref().child('requests/' + new Date().toString()).put(this.selectedPhoto);
            uploadTask.then(this.onSuccess, this.onError);
        }
    };
    // deletePhoto() {
    //   console.log('1 ',this.selectedPhoto);
    //   console.log('2 ',this.currentImage);
    //   console.log('3 ',this.request.photo);
    //   // var requestRef = firebase.storage().ref().child('requests/'+ new Date().toString()).put(this.selectedPhoto);
    //   var uploadTask = firebase.storage().ref('requests/'+this.currentImage);
    //   uploadTask.delete().then(function() {
    //     console.log('photo supprimée');
    //   }).catch(function(error) {
    //     console.log('erreur');
    //   })
    // }
    // private deleteFileDatabase(key: string) {
    //   return this.db.list(`${this.basePath}/`).remove(key)
    // }
    PhotoModalPage.prototype.choosePhoto2 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Uploader une photo depuis',
            buttons: [
                {
                    text: 'Camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.uploadPhoto2(1);
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'Gallerie' : 'Gallerie',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.uploadPhoto2(0);
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
    PhotoModalPage.prototype.uploadPhoto2 = function (sType) {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 720,
            targetWidth: 720,
            sourceType: sType,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.loading = _this.loadingCtrl.create({
                content: 'Upload de la photo en cours...'
            });
            _this.loading.present();
            _this.selectedPhoto = _this.dataURItoBlob2('data:image/jpeg;base64,' + imageData);
            _this.upload2();
        }, function (err) {
            console.log('Erreur:', err);
        });
    };
    PhotoModalPage.prototype.dataURItoBlob2 = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    PhotoModalPage.prototype.upload2 = function () {
        if (this.selectedPhoto) {
            var uploadTask = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref().child('requests/' + new Date().toString()).put(this.selectedPhoto);
            uploadTask.then(this.onSuccess2, this.onError2);
        }
    };
    PhotoModalPage.prototype.choosePhoto3 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Uploader une photo depuis',
            buttons: [
                {
                    text: 'Camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.uploadPhoto3(1);
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'Gallerie' : 'Gallerie',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.uploadPhoto3(0);
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
    PhotoModalPage.prototype.uploadPhoto3 = function (sType) {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 720,
            targetWidth: 720,
            sourceType: sType,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.loading = _this.loadingCtrl.create({
                content: 'Upload de la photo en cours...'
            });
            _this.loading.present();
            _this.selectedPhoto = _this.dataURItoBlob3('data:image/jpeg;base64,' + imageData);
            _this.upload3();
        }, function (err) {
            console.log('Erreur:', err);
        });
    };
    PhotoModalPage.prototype.dataURItoBlob3 = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    PhotoModalPage.prototype.upload3 = function () {
        if (this.selectedPhoto) {
            var uploadTask = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref().child('requests/' + new Date().toString()).put(this.selectedPhoto);
            uploadTask.then(this.onSuccess3, this.onError3);
        }
    };
    PhotoModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-photo-modal',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/photo-modal/photo-modal.html"*/'<ion-content>\n  <div class="photoContainer">\n    <div class="logoContainer" *ngIf="!this.request.photo" (click)="choosePhoto()">\n      <i class="fa fa-picture-o fa-5x" aria-hidden="true"></i>\n      <i class="fa fa-camera-retro fa-5x" aria-hidden="true"></i>\n    </div>\n    \n    <ion-slides pager autoplay="2500" class="round" *ngIf="this.request.photo">\n      <ion-slide *ngIf="this.request.photo">\n        <img src="{{request.photo}}" alt="" class="text-center slider-item">\n        <button ion-button  clear class="expand" (click)="zoomImage()">\n          <ion-icon name="ios-expand" class="arrow"></ion-icon>\n        </button>\n      </ion-slide>\n      <ion-slide *ngIf="this.request.photo2">\n        <img src="{{request.photo2}}" alt="" class="text-center slider-item" >\n        <button ion-button  clear class="expand" (click)="zoomImage2()">\n          <ion-icon name="ios-expand" class="arrow"></ion-icon>\n        </button>\n      </ion-slide>\n      <ion-slide *ngIf="this.request.photo3">\n        <img src="{{request.photo3}}" alt="" class="text-center slider-item" >\n        <button ion-button  clear class="expand" (click)="zoomImage3()">\n          <ion-icon name="ios-expand" class="arrow"></ion-icon>\n        </button>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  \n  <div *ngIf="uploadedPhoto1 === false || uploadedPhoto2 === false || uploadedPhoto3 === false" class="align-center" style="margin-left:10px">\n    <p>Vous pouvez ajouter jusqu\'à 3 photos pour illustrer votre besoin !</p>\n  </div>\n  <div *ngIf="uploadedPhoto1 === true && uploadedPhoto2 === true && uploadedPhoto3 === true" class="align-center" style="margin-left:10px; color:red; font-style: italic;">\n    <p>Vous avez atteint le nombre maximum de photos !</p>\n  </div>\n  \n  <ion-row class="align-center">\n    <ion-col>\n      <button ion-button color="danger" class="back" (click)="dismiss()" *ngIf="showAllButtons === false">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n      <button ion-button icon-end class="photo" (click)="choosePhoto()" *ngIf="showButton1 === true">\n        Photo 1  \n        <ion-icon name="ios-images"></ion-icon>\n      </button>\n      <button ion-button icon-end class="photo" (click)="choosePhoto2()" *ngIf="showButton2 === true">\n        Photo 2  \n        <ion-icon name="ios-images"></ion-icon>\n      </button>\n      <button ion-button icon-end class="photo" (click)="choosePhoto3()" *ngIf="showButton3 === true">\n        Photo 3  \n        <ion-icon name="ios-images"></ion-icon>\n      </button>\n      \n      <div class="allButtons" *ngIf="showAllButtons === true">\n        <button ion-button color="danger" class="back" (click)="dismiss()">\n          <ion-icon name="ios-arrow-back"></ion-icon>\n        </button>\n        <button ion-button icon-end class="photoSmall" (click)="choosePhoto()">\n          1  \n          <ion-icon name="ios-images"></ion-icon>\n        </button>\n        <button ion-button icon-end class="photoSmall" (click)="choosePhoto2()">\n          2  \n          <ion-icon name="ios-images"></ion-icon>\n        </button>\n        <button ion-button icon-end class="photoSmall" (click)="choosePhoto3()">\n          3  \n          <ion-icon name="ios-images"></ion-icon>\n        </button>\n      </div>\n      \n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/photo-modal/photo-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], PhotoModalPage);
    return PhotoModalPage;
}());

//# sourceMappingURL=photo-modal.js.map

/***/ })

});
//# sourceMappingURL=14.js.map