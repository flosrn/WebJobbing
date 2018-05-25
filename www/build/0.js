webpackJsonp([0],{

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(543);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

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

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_form_edit_profile_form_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__ = __webpack_require__(548);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__["a" /* RegisterFormComponent */],
                __WEBPACK_IMPORTED_MODULE_4__edit_profile_form_edit_profile_form_component__["a" /* EditProfileFormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__["a" /* ProfileViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__["a" /* SettingsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__["a" /* RegisterFormComponent */],
                __WEBPACK_IMPORTED_MODULE_4__edit_profile_form_edit_profile_form_component__["a" /* EditProfileFormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__["a" /* ProfileViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__["a" /* SettingsComponent */],
            ],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_alert_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LoginFormComponent = (function () {
    function LoginFormComponent(navCtrl, auth, data, alertCtrl2, toastCtrl, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.data = data;
        this.alertCtrl2 = alertCtrl2;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.type = 'password';
        this.showPass = false;
        this.account = {};
        this.existingProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
        this.loginStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authenticatedUser) {
            this.auth.getAuthenticatedUser().subscribe(function (user) {
                _this.data.getProfile(user).valueChanges().subscribe(function (profile) {
                    _this.userProfile = profile;
                    _this.userProfile.uid = user.uid;
                    console.log('Utilisateur connecté: ', _this.userProfile);
                    _this.existingProfile.emit(_this.userProfile);
                });
            });
        }
    };
    LoginFormComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var LoginResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticatedUser) return [3 /*break*/, 1];
                        this.toastCtrl.create("Bienvenue sur WebJobbing " + this.userProfile.firstName + " !", false, 3000);
                        this.navCtrl.setRoot('TabsPage');
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.auth.signInWithEmailAndPassword(this.account)];
                    case 2:
                        LoginResponse = _a.sent();
                        this.loginStatus.emit(LoginResponse);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginFormComponent.prototype.navigateToRegisterPage = function () {
        this.navCtrl.push('RegisterPage');
    };
    // Bouton retour
    LoginFormComponent.prototype.back = function () {
        // Si l'utilisateur est connecté
        if (this.authenticatedUser) {
            this.navCtrl.pop();
        }
        else {
            this.navCtrl.setRoot('WelcomePage');
        }
    };
    // Change le type du password en text ou password
    LoginFormComponent.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    // Déconnexion 
    LoginFormComponent.prototype.logOut = function () {
        var _this = this;
        this.alertCtrl2.presentAlertWithCallback('Etes vous sûr ?', 'Cela va vous déconnecter de l\'application.').then(function (yes) {
            if (yes) {
                _this.auth.onLogout();
                _this.app.getRootNav().setRoot('LoginPage');
                _this.toastCtrl.create('Déconnexion réussie');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], LoginFormComponent.prototype, "existingProfile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], LoginFormComponent.prototype, "loginStatus", void 0);
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-login-form',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/login-form/login-form.component.html"*/'<form #loginForm="ngForm" novalidate>\n\n  <div padding class="center">  \n\n    <ion-row>\n\n      <ion-col>\n\n        <img class="logo" src="./assets/img/logo2.png" />\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    <ion-row *ngIf="!userProfile">\n\n      <ion-col>\n\n        <ion-list inset class="no-border">\n\n          <ion-item styles="font-size:5px;">  \n\n            <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n\n            <ion-input clearInput [(ngModel)]="account.email" placeholder="Adresse mail" type="email" name="email" #email="ngModel" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label><ion-icon name="ios-key"></ion-icon></ion-label>\n\n            <ion-input clearInput [(ngModel)]="account.password" placeholder="Mot de passe" type="{{type}}" name="password" #password="ngModel" required></ion-input>\n\n            <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="eye"></ion-icon></button>\n\n            <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="eye-off"></ion-icon></button>\n\n          </ion-item>\n\n        </ion-list>\n\n        <div>\n\n          <button ion-button class="back" color="danger" (click)="back()"><ion-icon name="ios-arrow-back"></ion-icon></button>\n\n          <button ion-button class="login" color="bleu" (click)="login()">Connexion</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    <ion-row *ngIf="userProfile" class="connect"> \n\n      <ion-col>\n\n        <h2>Rebonjour {{userProfile.firstName}}</h2>\n\n        <img src="{{userProfile.avatar}}" class="avatar">\n\n      </ion-col>\n\n    </ion-row>\n\n    <div *ngIf="userProfile" class="connect__button">\n\n      <button ion-button class="back" color="danger" (click)="back()"><ion-icon name="ios-arrow-back"></ion-icon></button>\n\n      <button ion-button class="login" color="bleu" (click)="login()">Entrer</button>\n\n    </div>\n\n    \n\n    <ion-row> \n\n      <ion-col> \n\n        <div>\n\n          <span (click)="navigateToRegisterPage()" *ngIf="!userProfile">Ou créer un nouveau compte</span>\n\n          <span (click)="logOut()" *ngIf="userProfile">Se déconnecter de ce compte</span>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</form>'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/login-form/login-form.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());

//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RegisterFormComponent = (function () {
    function RegisterFormComponent(auth, navCtrl, loading) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.loading = loading;
        // Initialise le type du mot de passe sur password
        this.type = 'password';
        // Initialise showPass sur false
        this.showPass = false;
        // Initialise isToggled sur false
        this.isToggled = false;
        // Model de l'account
        this.account = {};
        this.registerStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    // Passe le toggle de false à true
    RegisterFormComponent.prototype.toggle = function () {
        this.isToggled = !this.isToggled;
    };
    RegisterFormComponent.prototype.ngOnInit = function () {
        var EMAILPATTERN = /^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        var PASSWORDPATTERN = /^(?=.*?[a-z])(?=.*?[0-9]).{1,}$/;
        this.signupform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(EMAILPATTERN)]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(PASSWORDPATTERN), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(12)]),
            password2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(PASSWORDPATTERN), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(12)]),
        });
    };
    RegisterFormComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.auth.createUserWithEmailAndPassword(this.account)];
                    case 1:
                        result_1 = _a.sent();
                        // Reférence à l'erreur : https://stackoverflow.com/a/45097885/9092948
                        if (!this.loader) {
                            // Création du loader
                            this.loader = this.loading.create({
                                content: 'Inscription en cours... Veuillez patienter, cette opération ne prendra que quelques instants'
                            });
                            // Affichage du loader
                            this.loader.present();
                        }
                        // Délai de 4 secondes
                        setTimeout(function () {
                            // Emet le resultat de l'event (l'alert dans register.ts)
                            _this.registerStatus.emit(result_1);
                            if (_this.loader) {
                                // Disparition du loader
                                _this.loader.dismiss();
                                _this.loader = null;
                            }
                        }, 4000);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        this.registerStatus.emit(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Renvoi sur la page Login
    RegisterFormComponent.prototype.navigateToLoginPage = function () {
        this.navCtrl.push('LoginPage');
    };
    // Retour sur la page Welcome
    RegisterFormComponent.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Fonction showPassword()
    RegisterFormComponent.prototype.showPassword = function () {
        // Passe showPass à true
        this.showPass = !this.showPass;
        // Change le type du mot de passe en text ou password
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], RegisterFormComponent.prototype, "registerStatus", void 0);
    RegisterFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-register-form',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/register-form/register-form.component.html"*/'\n\n<!-- <form #loginForm="ngForm" novalidate> -->\n\n  <form novalidate (ngSubmit)="register()" [formGroup]="signupform">\n\n    <div padding>  \n\n      <ion-row>\n\n        <ion-col>\n\n          <img class="logo" src="./assets/img/logo2.png" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col no-padding>\n\n          <ion-list inset class="no-border">\n\n            \n\n            <!-- Input de l\'email -->\n\n            <ion-item>\n\n              <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n\n              <ion-input clearInput [(ngModel)]="account.email" placeholder="Adresse mail" formControlName="email" [class.error1]="!signupform.controls.email.valid && signupform.controls.email.dirty"></ion-input>\n\n            </ion-item>\n\n            <!-- Messages d\'erreur de l\'email -->\n\n            <ion-item no-lines *ngIf="( signupform.get(\'email\').hasError(\'minlength\') || signupform.get(\'email\').hasError(\'pattern\') ||signupform.get(\'email\').hasError(\'required\') ) && signupform.get(\'email\').touched">\n\n              <div class="error" *ngIf="signupform.get(\'email\').hasError(\'required\') && signupform.get(\'email\').touched">\n\n                Veuillez entrer votre adresse email\n\n              </div>\n\n              <div class="error" *ngIf="signupform.get(\'email\').hasError(\'pattern\') && signupform.get(\'email\').touched">\n\n                L\'adresse email est invalide\n\n              </div>\n\n            </ion-item>     \n\n            \n\n            <!-- Input du mot de passe -->\n\n            <ion-item>\n\n              <ion-label><ion-icon name="ios-key"></ion-icon></ion-label>\n\n              <ion-input clearInput [(ngModel)]="account.password" placeholder="Mot de passe" type="{{type}}" formControlName="password" [class.error1]="!signupform.controls.password.valid && signupform.controls.password.dirty"></ion-input>\n\n              <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="eye"></ion-icon></button>\n\n              <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="eye-off"></ion-icon></button>  \n\n            </ion-item>   \n\n            <!-- Messages d\'erreur du mot de passe -->\n\n            <ion-item no-lines *ngIf="( signupform.get(\'password\').hasError(\'minlength\') || signupform.get(\'password\').hasError(\'maxlength\') || signupform.get(\'password\').hasError(\'pattern\') || signupform.get(\'password\').hasError(\'required\') ) && signupform.get(\'password\').touched">\n\n              <div class="error" *ngIf="signupform.get(\'password\').hasError(\'required\') && signupform.get(\'password\').touched">\n\n                Veuillez entrer votre mot de passe  \n\n              </div>\n\n              <div class="error" *ngIf="signupform.get(\'password\').hasError(\'minlength\') && signupform.get(\'password\').touched">\n\n                6 caractères minimum\n\n              </div>\n\n              <div class="error" *ngIf="signupform.get(\'password\').hasError(\'maxlength\') && signupform.get(\'password\').touched">\n\n                12 caractères maximum   \n\n              </div>\n\n              <div class="error" *ngIf="signupform.get(\'password\').hasError(\'pattern\') && signupform.get(\'password\').touched">\n\n                Au moins une lettre et un chiffre   \n\n              </div>\n\n            </ion-item>          \n\n            \n\n            <!-- Input de la confirmation du mot de passe -->\n\n            <ion-item>  \n\n              <ion-label><ion-icon name="ios-key"></ion-icon></ion-label>\n\n              <ion-input clearInput [(ngModel)]="account.password2" placeholder="Confirmation" type="{{type}}" formControlName="password2" [class.error1]="!signupform.controls.password2.valid && signupform.controls.password2.dirty"></ion-input>\n\n              <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="eye"></ion-icon></button>\n\n              <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="eye-off"></ion-icon></button>  \n\n            </ion-item>\n\n            <!-- Messages d\'erreur de la confirmation du mot de passe -->\n\n            <ion-item no-lines *ngIf="( signupform.get(\'password2\').hasError(\'minlength\') || signupform.get(\'password2\').hasError(\'maxlength\') || signupform.get(\'password2\').hasError(\'pattern\') || signupform.get(\'password2\').hasError(\'required\') ) && signupform.get(\'password2\').touched">\n\n              <div class="error" *ngIf="signupform.get(\'password2\').hasError(\'required\') && signupform.get(\'password2\').touched">\n\n                Veuillez entrer votre mot de passe  \n\n              </div>\n\n              <div class="error" *ngIf="signupform.get(\'password2\').hasError(\'minlength\') && signupform.get(\'password2\').touched">\n\n                6 caractères minimum\n\n              </div>\n\n              <div class="error" *ngIf="signupform.get(\'password2\').hasError(\'maxlength\') && signupform.get(\'password2\').touched">\n\n                12 caractères maximum   \n\n              </div>\n\n              <div class="error" *ngIf="signupform.get(\'password2\').hasError(\'pattern\') && signupform.get(\'password2\').touched">\n\n                Doit contenir une lettre et un chiffre   \n\n              </div>\n\n              <!-- <div class="error" *ngIf="account.password != account.password2"> \n\n                Les mots de passe ne sont pas identiques     \n\n              </div> -->\n\n            </ion-item>         \n\n          </ion-list>  \n\n\n\n          <!-- Condition générale d\'utilisation -->\n\n          <ion-item class="CGU" no-lines>\n\n            <ion-label class="CGU">J\'accepte les conditions d\'utilisation</ion-label> \n\n            <ion-toggle color="secondary" [checked]="isToggled" (ionChange)="toggle()"></ion-toggle>\n\n          </ion-item> \n\n          <!-- Bouton back -->\n\n          <button type="button" ion-button class="back" color="danger" (click)="back()"><ion-icon name="ios-arrow-back"></ion-icon></button>\n\n          <!-- Inscription => Condition : que les form soient valides, que les mdp correspondent, que les CGU soit cochées -->\n\n          <button type="submit" ion-button class="login" color="bleu" (click)="register()" [disabled]="signupform.invalid || account.password != account.password2 || !isToggled">Inscription</button>   \n\n        </ion-col>\n\n      </ion-row> \n\n      <ion-row>    \n\n        <ion-col>   \n\n          <div>\n\n            <span (click)="navigateToLoginPage()">Ou se connecter</span> \n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </form>\n\n  \n\n  \n\n  \n\n  \n\n  <!-- <ion-list>\n\n    <form novalidate (ngSubmit)="signup()" [formGroup]="signupform">\n\n      \n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.email" formControlName="email" [class.error1]="!signupform.controls.email.valid && signupform.controls.email.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'email\').hasError(\'minlength\') || signupform.get(\'email\').hasError(\'pattern\') ||signupform.get(\'email\').hasError(\'required\') ) && signupform.get(\'email\').touched">\n\n        <div class="error" *ngIf="signupform.get(\'email\').hasError(\'required\') && signupform.get(\'email\').touched">\n\n          Please input your email\n\n        </div>\n\n        <div class="error" *ngIf="signupform.get(\'email\').hasError(\'pattern\') && signupform.get(\'email\').touched">\n\n          Email address invalid\n\n        </div>\n\n      </ion-item>\n\n      \n\n      \n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.password" formControlName="password" [class.error1]="!signupform.controls.password.valid && signupform.controls.password.dirty"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item no-lines *ngIf="( signupform.get(\'password\').hasError(\'minlength\') || signupform.get(\'password\').hasError(\'maxlength\') ||signupform.get(\'password\').hasError(\'required\') ) && signupform.get(\'password\').touched">\n\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'required\') && signupform.get(\'password\').touched">\n\n          Please input your password\n\n        </div>\n\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'minlength\') && signupform.get(\'password\').touched">\n\n          Minimum 6 characters\n\n        </div>\n\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'maxlength\') && signupform.get(\'password\').touched">\n\n          Maximum 12 characters\n\n        </div>\n\n      </ion-item>\n\n      <button type="submit" ion-button block color="primary" [disabled]="signupform.invalid">SIGNUP</button>\n\n    </form>\n\n  </ion-list>    -->\n\n  \n\n  <!-- <style type="text/css">\n\n    .error {\n\n      color: rgb(223, 62, 62);\n\n      font-size: 11px;\n\n    }\n\n    \n\n    .error1 {\n\n      color: rgb(75, 75, 75);\n\n      border-bottom: 1px solid #ff0000; -->'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/register-form/register-form.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());

//# sourceMappingURL=register-form.component.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_profile_profile_interface__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var EditProfileFormComponent = (function () {
    function EditProfileFormComponent(data, auth, navCtrl, alertCtrl, loadingCtrl, actionsheetCtrl, camera, platform) {
        var _this = this;
        this.data = data;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.camera = camera;
        this.platform = platform;
        // Avatar par défaut
        this.pic = './assets/img/default.jpg';
        // Photo de couverture par défaut
        this.cov = './assets/img/cover.jpg';
        this.saveProfileResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
    }
    // Chargement de la photo
    EditProfileFormComponent.prototype.ionViewDidLoad = function () {
        this.loadAvatar();
        this.loadCover();
    };
    EditProfileFormComponent.prototype.saveProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticatedUser) return [3 /*break*/, 2];
                        this.profile.email = this.authenticatedUser.email;
                        this.profile.jobberStatut = false;
                        this.profile.userPermission = 0;
                        this.profile.cover = './assets/img/cover.jpg';
                        this.profile.knowledgeNumber = 0;
                        this.profile.requestPost = 0;
                        this.profile.workDone = 0;
                        this.profile.commentPost = 0;
                        this.profile.date = new Date().toString();
                        return [4 /*yield*/, this.data.saveProfile(this.authenticatedUser, this.profile)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (!this.loader) {
                            // Création du loader
                            this.loader = this.loadingCtrl.create({
                                content: 'Création du profil en cours... Veuillez patienter, cette opération ne prendra que quelques instants'
                            });
                            // Affichage du loader
                            this.loader.present();
                        }
                        // Délai de 4 secondes
                        setTimeout(function () {
                            // Création de l'alerte
                            var alert = _this.alertCtrl.create({
                                title: 'Bienvenue ' + _this.profile.firstName + ' !',
                                message: 'Votre compte a bien été créé. Vous pouvez maintenant poster un besoin !',
                                buttons: [
                                    {
                                        text: 'C\'est parti !',
                                        handler: function () {
                                            _this.navCtrl.push('TabsPage');
                                        }
                                    }
                                ]
                            });
                            alert.present();
                            if (_this.loader) {
                                // Disparition du loader
                                _this.loader.dismiss();
                                _this.loader = null;
                            }
                        }, 4000);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditProfileFormComponent.prototype.ngOnDestroy = function () {
        this.authenticatedUser$.unsubscribe();
    };
    // Si l'utilisateur ne met pas d'avatar on met l'avatar par défaut
    EditProfileFormComponent.prototype.ngOnInit = function () {
        if (!this.profile) {
            this.profile = {};
            this.profile.avatar = this.pic;
        }
    };
    // Retour sur la page Welcome
    EditProfileFormComponent.prototype.back = function () {
        this.navCtrl.pop();
    };
    EditProfileFormComponent.prototype.choosePicture = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Uploader une image depuis',
            buttons: [
                {
                    text: 'Camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.uploadPicture(1);
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'Gallerie' : 'Gallerie',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.uploadPicture(0);
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
    EditProfileFormComponent.prototype.uploadPicture = function (sType) {
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
            var image = "data:image/jpef;base64," + data;
            var userPic = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref('avatars/' + __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.uid);
            userPic.putString(image, 'data_url')
                .then(function () {
                _this.loadAvatar();
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    EditProfileFormComponent.prototype.loadAvatar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Chargement en cours...'
        });
        loading.present();
        var userPic = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref('avatars/' + __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.uid);
        userPic.getDownloadURL()
            .then(function (url) {
            _this.pic = url;
            _this.profile.avatar = url;
            loading.dismiss();
        })
            .catch(function (e) {
            var userPic = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref('avatars/default.jpg');
            userPic.getDownloadURL().then(function (url) {
                _this.pic = url;
                console.log('this PIC ====' + _this.pic);
                loading.dismiss();
            });
        });
    };
    EditProfileFormComponent.prototype.uploadCover = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetWidth: 720,
            targetHeight: 720,
            sourceType: 0,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options)
            .then(function (data) {
            var image = "data:image/jpef;base64," + data;
            var userPic = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref('covers/' + __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.uid);
            userPic.putString(image, 'data_url')
                .then(function () {
                _this.loadCover();
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    EditProfileFormComponent.prototype.loadCover = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Chargement en cours...'
        });
        loading.present();
        var userPic = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref('covers/' + __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.uid);
        userPic.getDownloadURL()
            .then(function (url) {
            _this.cov = url;
            _this.profile.cover = url;
            console.log(_this.profile.cover);
            loading.dismiss();
        })
            .catch(function (e) {
            var userPic = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref('covers/default.jpg');
            userPic.getDownloadURL().then(function (url) {
                _this.pic = url;
                console.log('this PIC ====' + _this.pic);
                loading.dismiss();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], EditProfileFormComponent.prototype, "saveProfileResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_profile_profile_interface__["a" /* Profile */])
    ], EditProfileFormComponent.prototype, "profile", void 0);
    EditProfileFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-edit-profile-form',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/edit-profile-form/edit-profile-form.component.html"*/'<div padding>  \n\n  <ion-row>\n\n    <ion-col>\n\n      <img class="logo" src="./assets/img/logo2.png" />   \n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col no-padding class="form">\n\n      <ion-list inset class="no-border">\n\n        <ion-item>\n\n          <div style="text-align: center">\n\n            <img src="{{profile.avatar}}" class="profilePic" (click)="choosePicture()">  \n\n            <div (click)="choosePicture()"><p class="addCover">Ajouter une photo de profil</p></div>\n\n          </div>   \n\n          \n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n\n          <ion-input clearInput [(ngModel)]="profile.firstName" placeholder="Prénom" type="text" required></ion-input>\n\n        </ion-item>   \n\n        \n\n        <ion-item>\n\n          <ion-label><ion-icon name="ios-person"></ion-icon></ion-label>\n\n          <ion-input clearInput [(ngModel)]="profile.lastName" placeholder="Nom" type="text" required></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-item>    \n\n          <ion-label><ion-icon name="ios-calendar-outline"></ion-icon></ion-label>  \n\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="profile.dateOfBirth"></ion-datetime>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n          <ion-label><ion-icon name="ios-compass"></ion-icon></ion-label>\n\n          <ion-input clearInput [(ngModel)]="profile.location" placeholder="Ville" type="text" required></ion-input>\n\n        </ion-item> \n\n        \n\n      </ion-list>  \n\n      \n\n      <button ion-button class="back" color="danger" (click)="back()"><ion-icon name="ios-arrow-back"></ion-icon></button>\n\n      <button ion-button class="login" color="bleu" (click)="saveProfile()">Enregistrer</button>\n\n      <!-- <button ion-button class="login" color="bleu" (click)="uploadCover()">Cover</button> -->\n\n    </ion-col>\n\n  </ion-row> \n\n</div>\n\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/edit-profile-form/edit-profile-form.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */]])
    ], EditProfileFormComponent);
    return EditProfileFormComponent;
}());

//# sourceMappingURL=edit-profile-form.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_profile_profile_interface__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_alert_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_util_toast_service__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfileViewComponent = (function () {
    function ProfileViewComponent(data, auth, alertCtrl, alertCtrl2, camera, loadingCtrl, toastCtrl, actionsheetCtrl) {
        var _this = this;
        this.data = data;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.alertCtrl2 = alertCtrl2;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.showDescription = false;
        this.editDescriptionStatus = false;
        this.showEdit = false;
        this.showEditButtons = false;
        this.showProfileUser = false;
        this.showText = false;
        this.testCheckboxOpen = false;
        this.cov = './assets/img/cover.jpg';
        this.onSuccessPhoto = function (snapshot) {
            _this.currentPhoto = snapshot.downloadURL;
            _this.profile.avatar = _this.currentPhoto;
            console.log('Photo de profil uploadé avec succès :', _this.profile.avatar);
            _this.toastCtrl.create('Photo de profil uploadé avec succès', false, 3000);
            _this.data.updateProfile(_this.authenticatedUser, _this.profile);
            _this.loading.dismiss();
        };
        this.onSuccessCover = function (snapshot) {
            _this.currentCover = snapshot.downloadURL;
            _this.profile.cover = _this.currentCover;
            console.log('Photo de couverture uploadé avec succès :', _this.profile.cover);
            _this.toastCtrl.create('Photo de couverture uploadé avec succès', false, 3000);
            _this.data.updateProfile(_this.authenticatedUser, _this.profile);
            _this.loading.dismiss();
        };
        this.onError = function (error) {
            console.log('Erreur:', error);
            _this.toastCtrl.create("Erreur : " + error, true, 3000);
            _this.loading.dismiss();
        };
        this.existingProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.saveProfileResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
        this.profile = {};
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).valueChanges().subscribe(function (profile) {
                _this.userProfile = profile;
                _this.existingProfile.emit(_this.userProfile);
            });
        });
    };
    // Alerte modification email
    ProfileViewComponent.prototype.alertEmail = function () {
        var _this = this;
        this.alertCtrl2.alertInput('Changer d\'adresse mail', 'Quel est votre nouvelle adresse mail ?', this.userProfile.email).then(function (ok) {
            if (ok) {
                // Change l'adresse mail
                _this.profile.email = ok;
            }
            if (!ok) {
                // Bouton effacer
                _this.profile.email = '';
            }
            _this.data.updateProfile(_this.authenticatedUser, _this.profile);
        });
    };
    // Alerte modification prénom
    ProfileViewComponent.prototype.alertFirstName = function () {
        var _this = this;
        this.alertCtrl2.alertInput('Changer de prénom', 'Quel est votre prénom ?', this.userProfile.firstName).then(function (ok) {
            if (ok) {
                // Change le prénom
                _this.profile.firstName = ok;
            }
            if (!ok) {
                // Bouton effacer
                _this.profile.firstName = '';
            }
            _this.data.updateProfile(_this.authenticatedUser, _this.profile);
        });
    };
    // Alerte modification nom
    ProfileViewComponent.prototype.alertLastName = function () {
        var _this = this;
        this.alertCtrl2.alertInput('Changer de nom', 'Quel est votre nom de famille ?', this.userProfile.lastName).then(function (ok) {
            if (ok) {
                // Change le nom
                _this.profile.lastName = ok;
            }
            if (!ok) {
                // Bouton effacer
                _this.profile.lastName = '';
            }
            _this.data.updateProfile(_this.authenticatedUser, _this.profile);
        });
    };
    // Alerte modification description
    ProfileViewComponent.prototype.alertDescription = function () {
        var _this = this;
        this.alertCtrl2.alertInput('Présentez vous', 'Qui êtes vous ?', this.userProfile.description).then(function (ok) {
            if (ok) {
                // Sauvegarde la description entrée par l'utilisateur
                _this.profile.description = ok;
            }
            if (!ok) {
                // Bouton effacer
                _this.profile.description = '';
            }
            _this.data.updateProfile(_this.authenticatedUser, _this.profile);
        });
    };
    // Alerte modification métier
    ProfileViewComponent.prototype.alertJob = function () {
        var _this = this;
        this.alertCtrl2.alertInput('Quel métier exercez vous ?', 'Vous pouvez renseigner votre métier', this.userProfile.job).then(function (ok) {
            if (ok) {
                // Sauvegarde la ville entrée par l'utilisateur
                _this.profile.job = ok;
            }
            if (!ok) {
                // Bouton effacer
                _this.profile.job = '';
            }
            _this.data.updateProfile(_this.authenticatedUser, _this.profile);
        });
    };
    // Alerte modification ville
    ProfileViewComponent.prototype.alertCity = function () {
        var _this = this;
        this.alertCtrl2.alertInput('Où habitez vous ?', 'Vous pouvez renseigner la ville dans laquelle vous souhaitez accomplir vos missions', this.userProfile.location).then(function (ok) {
            if (ok) {
                // Sauvegarde la ville entrée par l'utilisateur
                _this.profile.location = ok;
            }
            if (!ok) {
                // Bouton effacer
                _this.profile.location = '';
            }
            _this.data.updateProfile(_this.authenticatedUser, _this.profile);
        });
    };
    ProfileViewComponent.prototype.alertKnowledges = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Dans quel(s) domaine(s) avez vous le plus de compétence(s) ?');
        alert.addInput({
            type: 'checkbox',
            label: 'PC',
            value: 'PC',
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Tablette',
            value: 'Tablette'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Smartphone',
            value: 'Smartphone'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'TV',
            value: 'TV'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Formation',
            value: 'Formation'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Autre',
            value: 'Autre'
        });
        alert.addButton('Annuler');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
                _this.profile.knowledgeNumber = data.length;
                _this.profile.knowledges = data;
                _this.data.updateProfile(_this.authenticatedUser, _this.profile);
            }
        });
        alert.present();
    };
    // Alerte modification photo de couverture
    ProfileViewComponent.prototype.alertCover = function () {
        var _this = this;
        this.alertCtrl2.presentAlertWithCallback('Photo de couverture', 'Voulez vous changer de photo de couverture ?').then(function (ok) {
            if (ok) {
                _this.uploadCoverImage();
            }
        });
    };
    // Renvoie l'index de la slide actuelle
    ProfileViewComponent.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('slide :', currentIndex);
    };
    ProfileViewComponent.prototype.goToNextSlide = function () {
        this.slides.slideNext();
    };
    ProfileViewComponent.prototype.goToSlideOne = function () {
        this.slides.slideTo(0, 500);
    };
    ProfileViewComponent.prototype.goToSlideTwo = function () {
        this.slides.slideTo(1, 500);
    };
    ProfileViewComponent.prototype.goToSlideThree = function () {
        this.slides.slideTo(2, 500);
    };
    // Visualise le profil tel que les utilisateurs le voient
    ProfileViewComponent.prototype.onShowProfile = function () {
        this.showProfileUser = !this.showProfileUser;
    };
    // Accordéon
    ProfileViewComponent.prototype.toggleSection = function () {
        this.showText = !this.showText;
    };
    ProfileViewComponent.prototype.choosePhoto = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Uploader une photo depuis',
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.uploadPhotoImage(1);
                    }
                },
                {
                    text: 'Gallerie',
                    icon: 'image',
                    handler: function () {
                        _this.uploadPhotoImage(0);
                    }
                },
                {
                    text: 'Annuler',
                    icon: 'close',
                    role: 'destructive',
                    handler: function () {
                        console.log('L\'utilisateur a annuler l\'opération');
                    }
                }
            ]
        });
        return actionsheet.present();
    };
    ProfileViewComponent.prototype.uploadPhotoImage = function (sType) {
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
                content: 'Upload de la photo de profil en cours...'
            });
            _this.loading.present();
            _this.selectedPhoto = _this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
            var photoPath = 'avatars/' + __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().currentUser.uid;
            _this.uploadImage(photoPath);
        }, function (err) {
            console.log('Erreur:', err);
        });
    };
    ProfileViewComponent.prototype.uploadCoverImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 720,
            targetWidth: 720,
            sourceType: 0,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.loading = _this.loadingCtrl.create({
                content: 'Upload de la photo de couverture en cours...'
            });
            _this.loading.present();
            _this.selectedCover = _this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
            var coverPath = 'covers/' + __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().currentUser.uid;
            _this.uploadCover(coverPath);
        }, function (err) {
            console.log('Erreur:', err);
        });
    };
    // Converti l'image en données binaires
    ProfileViewComponent.prototype.dataURItoBlob = function (dataURI) {
        // code adapté de: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    ProfileViewComponent.prototype.uploadImage = function (imagePath) {
        if (this.selectedPhoto) {
            var uploadTask = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.storage().ref().child(imagePath).put(this.selectedPhoto);
            uploadTask.then(this.onSuccessPhoto, this.onError);
        }
    };
    ProfileViewComponent.prototype.uploadCover = function (imagePath) {
        if (this.selectedCover) {
            var uploadTask = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.storage().ref().child(imagePath).put(this.selectedCover);
            uploadTask.then(this.onSuccessCover, this.onError);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], ProfileViewComponent.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ProfileViewComponent.prototype, "existingProfile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ProfileViewComponent.prototype, "saveProfileResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_profile_profile_interface__["a" /* Profile */])
    ], ProfileViewComponent.prototype, "profile", void 0);
    ProfileViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-profile-view',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/profile-view/profile-view.component.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Mon Profil</ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="!this.showProfileUser" (click)="onShowProfile()"><ion-icon name="ios-eye"></ion-icon></button>\n      <button ion-button *ngIf="this.showProfileUser" (click)="onShowProfile()" color="orangé"><ion-icon name="ios-eye-off"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-------------// Photo de couverture //-------------->\n  <div class="cover" *ngIf="userProfile">\n    <img src="{{userProfile.cover}}" id="profile-bg" *ngIf="this.userProfile.cover" (click)="alertCover()">\n  </div>\n  \n  <div id="content" *ngIf="userProfile">\n    <!-------------// Info Profil //-------------->         \n    <div id="profile-info" padding>\n      <img src="{{userProfile.avatar}}" id="profile-image" (click)="choosePhoto()">\n      <h3 id="profile-name">{{userProfile.firstName}} {{userProfile.lastName}}</h3>\n      <div class="statut">\n        <p class="statut__line" *ngIf="this.userProfile.jobberStatut === true">Profil Jobbeur<ion-icon class="iconBadge" color="orangé" name="ios-ribbon" *ngIf="this.userProfile.jobberStatut === true"></ion-icon></p> \n        <p class="statut__line" *ngIf="this.userProfile.jobberStatut === false">Profil utilisateur</p>\n      </div>   \n      <p *ngIf="this.userProfile.jobberStatut === true" class="job">{{userProfile.job}}</p> \n      <p *ngIf="this.userProfile.jobberStatut === true && this.userProfile.job && this.userProfile.location"class="dot">&bull;</p>\n      <p class="location">{{userProfile.location}}</p> \n    </div>   \n    \n    <hr/>\n    \n    <p *ngIf="userProfile && this.userProfile.date" class="date">Membre depuis le {{userProfile.date | date:\'MM/dd/yy\'}}</p> \n    \n    <!-------------// Infos //-------------->\n    <div class="info2" *ngIf="!showProfileUser">\n      <!-- Infos perso -->\n      <ion-list no-border>\n        <ion-list-header>  \n          Informations personnelles\n        </ion-list-header>\n        <ion-item (click)="alertEmail()">\n          <ion-icon name=\'ios-mail\' item-start></ion-icon>\n          <ion-label>Mail</ion-label>\n          <ion-note item-end *ngIf="this.userProfile.email">{{this.userProfile.email}}</ion-note>\n        </ion-item>\n        <ion-item (click)="alertLastName()">\n          <ion-icon name=\'ios-person\' item-start></ion-icon>\n          <ion-label>Nom</ion-label>\n          <ion-note item-end *ngIf="this.userProfile.lastName">{{this.userProfile.lastName}}</ion-note>\n        </ion-item>\n        <ion-item (click)="alertFirstName()">\n          <ion-icon name=\'ios-person-outline\' item-start></ion-icon>\n          <ion-label>Prénom</ion-label>\n          <ion-note item-end *ngIf="this.userProfile.firstName">{{this.userProfile.firstName}}</ion-note>\n        </ion-item>\n        <ion-item (click)="alertCity()">\n          <ion-icon name=\'ios-home\' item-start></ion-icon>\n          <ion-label>Ville</ion-label>\n          <ion-note item-end *ngIf="this.userProfile.location">{{this.userProfile.location}}</ion-note>\n        </ion-item>\n      </ion-list>\n      <!-- Infos jobbeur -->\n      <ion-list no-border *ngIf="this.userProfile.jobberStatut === true">\n        <ion-list-header>\n          Informations jobbeur\n        </ion-list-header>\n        <ion-item (click)="alertJob()">\n          <ion-icon name=\'ios-briefcase\' item-start></ion-icon>\n          <ion-label>Emploi</ion-label>\n          <ion-note item-end *ngIf="this.userProfile.job">{{this.userProfile.job}}</ion-note>\n        </ion-item>\n        <ion-item (click)="alertKnowledges()">\n          <ion-icon name=\'logo-buffer\' item-start></ion-icon>\n          <ion-label>Compétences</ion-label>\n          <ion-note item-end *ngIf="this.userProfile.knowledgeNumber">{{this.userProfile.knowledgeNumber}}</ion-note>\n        </ion-item>\n        <ion-item (click)="alertDescription()">\n          <ion-icon name=\'ios-book\' item-start></ion-icon>\n          <ion-label>Description</ion-label>\n          <ion-note item-end *ngIf="this.userProfile.description">{{this.userProfile.description.slice(0,15)}}</ion-note>\n        </ion-item>\n      </ion-list>\n    </div>\n    <!-- Description -->\n    <div *ngIf="!this.showProfileUser" class="textDescription" (click)="alertDescription()"> \n      <p class="profile-description" *ngIf="this.userProfile.description && this.userProfile.jobberStatut === true">{{userProfile.description}}</p>\n      <p class="profile-description" *ngIf="!this.userProfile.description && this.userProfile.jobberStatut === true">Vous pouvez ajouter une courte description pour parler de vous et de vos compétences afin que les utilisateurs vous connaissent un peu mieux</p>  \n    </div>  \n    \n    <!-------------// Accordéon //-------------->\n    <div *ngIf="!this.showProfileUser" class="accordeon">  \n      <ion-list class="accordion-list">\n        <!-- First Level -->\n        <ion-list-header no-lines no-padding>\n          <!-- Toggle Button -->\n          <button ion-item (click)="toggleSection()" detail-none>\n            <ion-icon item-left name="ios-arrow-forward" *ngIf="!showText"></ion-icon>\n            <ion-icon item-left name="ios-arrow-down" *ngIf="showText"></ion-icon>\n            Info\n          </button>\n        </ion-list-header>\n        <ion-item *ngIf="showText" text-wrap>\n          <p>Pour modifier les informations de votre profil, cliquez simplement sur l\'élément que vous souhaitez modifier (ça marche aussi pour la photo de profil et de couverture !)<br \><br \>Pour visualiser votre profil tel que les autres utilisateurs le voient cliquez sur <ion-icon name="ios-eye"></ion-icon> en haut de la page.</p>\n        </ion-item>\n      </ion-list>\n    </div>\n    \n    <!-------------// Infos //-------------->\n    <div>\n      <div class="numbers" *ngIf="showProfileUser">\n        <ion-row class="profile-numbers">\n          <ion-col col-4>   \n            <div>\n              <p>Annonces postées</p>\n              <span *ngIf="this.userProfile.requestPost">{{userProfile.requestPost}}</span>\n              <span *ngIf="!this.userProfile.requestPost">0</span> \n            </div>\n          </ion-col>\n          <ion-col col-4>\n            <div class="zou">\n              <p>Missions réalisées</p> \n              <span *ngIf="this.userProfile.workDone">{{userProfile.workDone}}</span>\n              <span *ngIf="!this.userProfile.workDone">0</span> \n            </div>\n          </ion-col>\n          <ion-col col-4> \n            <div>  \n              <p>Commentaires postés</p>\n              <span *ngIf="this.userProfile.commentPost">{{userProfile.commentPost}}</span>\n              <span *ngIf="!this.userProfile.commentPost">0</span>\n            </div>  \n          </ion-col>  \n        </ion-row>\n      </div> \n    </div>\n    \n    <div class="descriptionContainer" *ngIf="this.showProfileUser">  \n      <div class="yo">  \n        <p class="profile-description" *ngIf="this.userProfile.description && this.userProfile.jobberStatut === true">{{userProfile.description}}</p>\n        <p class="profile-description" *ngIf="!this.userProfile.description && this.showEdit && this.userProfile.jobberStatut === true">Vous pouvez ajouter une courte description pour parler de vous et de vos compétences afin que les utilisateurs vous connaissent un peu mieux</p> \n      </div>   \n    </div>  \n    <!-- <ion-list *ngIf="this.userProfile.knowledges && this.showProfileUser">\n      Compétences : {{this.userProfile.knowledges}}\n    </ion-list> -->\n  </div>\n  \n</ion-content>\n\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/profile-view/profile-view.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ProfileViewComponent);
    return ProfileViewComponent;
}());

//# sourceMappingURL=profile-view.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_profile_profile_interface__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsComponent = (function () {
    function SettingsComponent(data, auth, navCtrl, navParams, alertCtrl, alertCtrl2, toastCtrl, app) {
        var _this = this;
        this.data = data;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.alertCtrl2 = alertCtrl2;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.existingProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
        this.profile = {};
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).valueChanges().subscribe(function (profile) {
                _this.userProfile = profile;
                _this.userProfile.uid = user.uid;
                _this.existingProfile.emit(_this.userProfile);
            });
        });
    };
    // Toggle qui permet de definir le statut de l'utilisateur en tant que jobbeur ou non
    SettingsComponent.prototype.toggleJobber = function () {
        var _this = this;
        // Si l'utilisateur est défini en tant qu'utilisateur non jobbeur
        if (this.userProfile.jobberStatut == true) {
            // Apparition de l'alerte
            this.alertCtrl2.presentAlert('Profil jobbeur', 'Devenir jobbeur vous offre la possibilité d\'arrondir facilement vos fins de mois.<br /><br />WebJobbing vous permet de vous mettre en relation avec des utilisateurs qui ont besoin d\'un coup de main dans le domaine du numérique.<br /><br />Rendez vous dans les paramètres de votre profil pour le personnaliser afin que les utilisateurs en apprennent plus sur vous.').then(function (yes) {
                // Le profil est défini en tant que jobbeur !
                _this.profile.jobberStatut = true;
                // Appel de la fonction saveStatut avec en paramètre le nouveau statut 
                _this.saveStatut(_this.profile.jobberStatut);
            });
        }
        // Si l'utilisateur est défini en tant que jobbeur 
        if (this.userProfile.jobberStatut == false) {
            // Apparition de l'alerte
            this.alertCtrl2.presentAlert('Profil utilisateur', 'Vous n\'êtes plus identifié en tant que Jobbeur.').then(function (yes) {
                // Le profil est défini en tant qu'utilisateur !
                _this.profile.jobberStatut = false;
                // Appel de la fonction saveStatut avec en paramètre le nouveau statut 
                _this.saveStatut(_this.profile.jobberStatut);
            });
        }
    };
    // Sauvegarde le statut du profil : Jobbeur ou non Jobbeur
    SettingsComponent.prototype.saveStatut = function (statut) {
        // Attribution du statut passé en paramètre 
        this.profile.jobberStatut = statut;
        // Console.log
        console.log('Statut jobbeur: ', this.profile.jobberStatut);
        // Appel de la fonction qui update le profil dans le service
        this.data.updateProfile2(this.authenticatedUser, this.profile);
    };
    // Navigation vers la page Profil
    SettingsComponent.prototype.navigateToProfilePage = function () {
        this.navCtrl.push('ProfilePage');
    };
    // Navigation vers la page Mes besoins
    SettingsComponent.prototype.navigateToMyRequestPage = function () {
        this.navCtrl.push('MyrequestPage');
    };
    // Navigation vers la page Mes offers
    SettingsComponent.prototype.navigateToMyOfferPage = function () {
        this.navCtrl.push('MyofferPage');
    };
    // Navigation vers la page Mes offers
    SettingsComponent.prototype.navigateToAdminPage = function () {
        this.navCtrl.push('AdminPage');
    };
    // Déconnexion 
    SettingsComponent.prototype.logOut = function () {
        var _this = this;
        // Affichage de l'alerte 
        this.alertCtrl.presentAlertWithCallback('Etes vous sûr ?', 'Cela va vous déconnecter de l\'application.').then(function (yes) {
            // Si confirmation
            if (yes) {
                _this.auth.onLogout();
                _this.app.getRootNav().setRoot('WelcomePage');
                _this.toastCtrl.create('Déconnexion réussie');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SettingsComponent.prototype, "existingProfile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__models_profile_profile_interface__["a" /* Profile */])
    ], SettingsComponent.prototype, "profile", void 0);
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-settings',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/settings/settings.component.html"*/'<ion-list *ngIf="userProfile">\n  <ion-list-header>\n    <div item-start>\n      <img class="profilePic" src="{{userProfile.avatar}}">\n    </div>\n    <p class="userName">{{userProfile.firstName}} {{userProfile.lastName}}</p>\n    <p class="job" color="orangé" *ngIf="this.userProfile.jobberStatut === true">Jobbeur<ion-icon class="iconBadge" color="orangé" name="ios-ribbon"></ion-icon></p>\n    <p class="job" *ngIf="this.userProfile.jobberStatut === false">Utilisateur</p>\n  </ion-list-header>\n</ion-list>\n<ion-list no-border>\n  <ion-list-header>\n    General\n  </ion-list-header>\n  <ion-item (click)="navigateToProfilePage()">\n    <ion-icon name=\'contact\' item-start></ion-icon>\n    <ion-label>Mon profil</ion-label>\n  </ion-item>\n  <ion-item>  \n    <ion-toggle *ngIf="userProfile" [(ngModel)]="userProfile.jobberStatut" (ionChange)="toggleJobber(userProfile.jobberStatut)"  color="orangé"></ion-toggle>\n    <ion-label class="label">Devenir Jobbeur</ion-label>\n    <ion-icon name=\'ios-man\' item-start></ion-icon>\n  </ion-item>\n  <ion-item (click)="navigateToAdminPage()" *ngIf="userProfile && this.userProfile.userPermission === 2">\n    <ion-icon name=\'settings\' item-start></ion-icon>\n    <ion-label>Admin</ion-label>\n  </ion-item>\n</ion-list>\n<ion-list>\n  <ion-list-header>\n    Jobbing\n  </ion-list-header>\n  <ion-item (click)="navigateToMyRequestPage()">\n    <ion-icon name=\'ios-list-box\' item-start></ion-icon>\n    <ion-label>Mes annonces</ion-label>\n  </ion-item>\n  <ion-item (click)="navigateToMyOfferPage()">\n    <ion-icon name=\'ios-calculator\' item-start></ion-icon>\n    <ion-label>Mes offres</ion-label>\n  </ion-item>\n</ion-list>\n<ion-list>\n  <ion-list-header>\n    Autre\n  </ion-list-header>\n  <ion-item>\n    <ion-icon name=\'power\' item-start></ion-icon>\n    <button ion-button (click)="logOut()" color="orangé" item-end>\n      Déconnexion\n    </button>\n  </ion-item>\n  <div class="align-center">\n    <p class="copyright">2018, WebJobbing © v0.0.1 beta</p>  \n    <p class="copyright2">An application made with <ion-icon name="heart"></ion-icon></p>\n    <p class="copyright2">Powered by Florian SERAN</p>\n  </div>\n</ion-list>'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/components/settings/settings.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], SettingsComponent);
    return SettingsComponent;
}());

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(auth, navCtrl, navParams, app) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.existingProfile = {};
        this.profile = {};
        this.profile = this.navParams.get('existingProfile');
    }
    SettingsPage.prototype.getExistingProfile = function (profile) {
        this.existingProfile = profile;
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar primary>\n    <ion-title>Réglages utilisateur</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <app-settings (existingProfile)="getExistingProfile($event)"></app-settings>\n</ion-content>\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=0.js.map