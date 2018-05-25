webpackJsonp([18],{

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-request/add-request.module": [
		524,
		10
	],
	"../pages/admin/admin.module": [
		525,
		17
	],
	"../pages/edit-offer/edit-offer.module": [
		526,
		16
	],
	"../pages/edit-profile/edit-profile.module": [
		527,
		4
	],
	"../pages/edit-request/edit-request.module": [
		528,
		9
	],
	"../pages/login/login.module": [
		529,
		3
	],
	"../pages/myoffer/myoffer.module": [
		530,
		8
	],
	"../pages/myrequest/myrequest.module": [
		531,
		7
	],
	"../pages/offer/offer.module": [
		532,
		15
	],
	"../pages/photo-modal/photo-modal.module": [
		533,
		14
	],
	"../pages/profile/profile.module": [
		534,
		2
	],
	"../pages/register/register.module": [
		535,
		1
	],
	"../pages/request-modal/request-modal.module": [
		536,
		5
	],
	"../pages/request/request.module": [
		537,
		13
	],
	"../pages/settings/settings.module": [
		538,
		0
	],
	"../pages/tabs/tabs.module": [
		539,
		12
	],
	"../pages/user-profile/user-profile.module": [
		540,
		11
	],
	"../pages/welcome/welcome.module": [
		541,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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



var AuthService = (function () {
    function AuthService(auth) {
        this.auth = auth;
    }
    // Inscription
    AuthService.prototype.createUserWithEmailAndPassword = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = {};
                        return [4 /*yield*/, this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)];
                    case 1: return [2 /*return*/, (_a.result = _b.sent(),
                            _a)];
                    case 2:
                        e_1 = _b.sent();
                        return [2 /*return*/, {
                                error: e_1
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Connexion
    AuthService.prototype.signInWithEmailAndPassword = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = {};
                        return [4 /*yield*/, this.auth.auth.signInWithEmailAndPassword(account.email, account.password)];
                    case 1: return [2 /*return*/, (_a.result = _b.sent(),
                            _a)];
                    case 2:
                        e_2 = _b.sent();
                        return [2 /*return*/, {
                                error: e_2
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getAuthenticatedUser = function () {
        return this.auth.authState;
    };
    // Déconnexion
    AuthService.prototype.onLogout = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
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



var DataService = (function () {
    function DataService(database) {
        this.database = database;
        this.profileListRef = this.database.list('profile-list');
    }
    // Fonction obtenir le profil de l'utilisateur connecté
    DataService.prototype.getProfile2 = function () {
        // this.profileObject = this.database.object(`/profiles/`);
        // return this.profileObject;
        this.profileListRef;
        return this.profileListRef;
    };
    // Fonction obtenir le profil de l'utilisateur connecté
    DataService.prototype.getProfile = function (user) {
        this.profileObject = this.database.object("/profiles/" + user.uid);
        return this.profileObject;
    };
    // Fonction obtenir le profil d'une personne en fonction de son ID
    DataService.prototype.getUid = function (uid) {
        this.profileObject = this.database.object("/profiles/" + uid);
        return this.profileObject;
    };
    // Fonction obtenir le profil d'une personne en fonction de son ID
    DataService.prototype.getUidUser = function (uid) {
        var test = this.database.database.ref("/profiles/" + uid);
        return test;
    };
    // Fonction sauvegarder nouveau profil
    DataService.prototype.saveProfile = function (user, profile) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.profileObject = this.database.object("/profiles/" + user.uid);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.profileObject.set(profile)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Fonction update profil existant
    DataService.prototype.updateProfile = function (user, profile) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.profileObject = this.database.object("/profiles/" + user.uid);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.profileObject.update(profile)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DataService.prototype.updateProfile2 = function (user, profile) {
        this.profileObject = this.database.object("/profiles/" + user.uid);
        return this.profileObject.update(profile);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
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


var AlertService = (function () {
    function AlertService(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertService.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK'
                }
            ]
        });
        return alert.present();
    };
    AlertService.prototype.presentErrorAlert = function (message) {
        return this.presentAlert('An error has occurred.', message);
    };
    // Alerte avec retour : Oui ou annuler
    AlertService.prototype.presentAlertWithCallback = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Annuler',
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: 'Oui',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    // ALerte status jobbeur
    AlertService.prototype.presentAlertStatut = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Non',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: 'Oui',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    // ALerte pour la personnalisation du profil
    AlertService.prototype.presentAlertCustomProfile = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Non merci',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: 'C\'est compris !',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    // Alerte modification element avec input
    AlertService.prototype.alertInput = function (title, message, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: title,
                message: message,
                cssClass: 'alertInput',
                inputs: [
                    {
                        name: 'text',
                        value: value,
                    },
                ],
                buttons: [
                    {
                        text: 'Effacer',
                        handler: function (data) {
                            alert.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    },
                    {
                        text: 'OK',
                        handler: function (data) {
                            alert.dismiss().then(function () { return resolve(true); });
                            resolve(data.text);
                            return false;
                        }
                    },
                ]
            });
            return alert.present();
        });
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
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


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.create = function (message, ok, duration) {
        if (ok === void 0) { ok = false; }
        if (duration === void 0) { duration = 2000; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: ok ? null : duration,
            position: 'bottom',
            showCloseButton: ok,
            closeButtonText: 'OK'
        });
        this.toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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



var RequestListService = (function () {
    function RequestListService(db) {
        this.db = db;
        this.requestListRef = this.db.list('request-list');
    }
    // Fonction qui liste tous les besoins
    RequestListService.prototype.getRequestListRef = function () {
        return this.db.database.ref("request-list");
    };
    // Fonction ajouter besoin
    RequestListService.prototype.addRequest = function (request) {
        var _this = this;
        return this.requestListRef.push(request).then(function (object) {
            // J'attribue la clé de l'objet a request.key
            request.key = object.key;
            // J'update la request pour qu'elle prenne en comte l'ajout de la clé
            _this.requestKey = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('request-list/').child(request.key);
            _this.requestKey.update(request);
        });
    };
    // Fonction update besoin
    RequestListService.prototype.updateRequest = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.requestKey = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('request-list/').child(request.key);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.requestKey.update(request)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Fonction supprimer un besoin
    RequestListService.prototype.removeRequest = function (request) {
        return this.requestListRef.remove(request.key);
    };
    RequestListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RequestListService);
    return RequestListService;
}());

//# sourceMappingURL=request-list.services.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService2; });
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


var ToastService2 = (function () {
    function ToastService2(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService2.prototype.show = function (message, duration) {
        if (duration === void 0) { duration = 3000; }
        return this.toastCtrl.create({
            message: message,
            duration: duration,
        })
            .present();
    };
    ToastService2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ToastService2);
    return ToastService2;
}());

//# sourceMappingURL=toast.services.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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



var OfferListService = (function () {
    function OfferListService(db) {
        this.db = db;
        this.offerListRef = this.db.list('offer-list');
        this.profiles = this.db.list('profiles');
    }
    // Fonction obtenir offre
    OfferListService.prototype.getOfferListRef = function () {
        return this.db.database.ref("offer-list");
    };
    // Fonction obtenir une offre
    OfferListService.prototype.getOfferList = function () {
        return this.offerListRef;
    };
    OfferListService.prototype.getprofiles = function () {
        return this.profiles;
    };
    // Fonction obtenir l'ID d'un profil
    OfferListService.prototype.getUidRequest = function (uidRequest) {
        this.offerObject = this.db.object("/request/" + uidRequest);
        return this.offerObject;
    };
    // Fonction ajouter une offre
    OfferListService.prototype.addOffer = function (offer) {
        return this.offerListRef.push(offer);
    };
    OfferListService.prototype.updateOffer = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // request.key = this.key; 
                        this.req = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('offer-list/').child(offer.key);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.req.update(offer)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OfferListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], OfferListService);
    return OfferListService;
}());

//# sourceMappingURL=offer-list.services.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
var EmojiProvider = (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentListService = (function () {
    function CommentListService(db) {
        this.db = db;
        this.commentListRef = this.db.list('comment-list');
        this.profiles = this.db.list('profiles');
    }
    // Fonction obtenir commentaires
    CommentListService.prototype.getCommentListRef = function () {
        return this.db.database.ref("comment-list");
    };
    // Fonction obtenir un commentaire
    CommentListService.prototype.getCommentList = function () {
        return this.commentListRef;
    };
    CommentListService.prototype.getprofiles = function () {
        return this.profiles;
    };
    // Fonction obtenir l'ID d'un profil
    CommentListService.prototype.getUidRequest = function (uidRequest) {
        this.commentObject = this.db.object("/request/" + uidRequest);
        return this.commentObject;
    };
    // Fonction obtenir l'ID d'un profil
    CommentListService.prototype.getUidComment = function (uidComment) {
        this.commentObject = this.db.object("/comment/" + uidComment);
        return this.commentObject;
    };
    // Fonction ajouter un commentaire
    CommentListService.prototype.addComment = function (comment) {
        return this.commentListRef.push(comment);
    };
    CommentListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CommentListService);
    return CommentListService;
}());

//# sourceMappingURL=comment-list.services.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResponseListService = (function () {
    function ResponseListService(db) {
        this.db = db;
        this.responseListRef = this.db.list('response-list');
        this.profiles = this.db.list('profiles');
    }
    // Fonction obtenir responseaires
    ResponseListService.prototype.getResponseListRef = function () {
        return this.db.database.ref("response-list");
    };
    // Fonction obtenir un responseaire
    ResponseListService.prototype.getResponseList = function () {
        return this.responseListRef;
    };
    ResponseListService.prototype.getprofiles = function () {
        return this.profiles;
    };
    // Fonction obtenir l'ID d'un profil
    ResponseListService.prototype.getUidRequest = function (uidRequest) {
        this.responseObject = this.db.object("/request/" + uidRequest);
        return this.responseObject;
    };
    // Fonction ajouter un responseaire
    ResponseListService.prototype.addResponse = function (response) {
        return this.responseListRef.push(response);
    };
    ResponseListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ResponseListService);
    return ResponseListService;
}());

//# sourceMappingURL=response-list.services.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(343);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_page_transitions__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_directives_module__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_photo_viewer__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_email_composer__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_emoji__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_firebase_config__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_data_data_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_chat_chat_services__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_request_request_list_services__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_offer_offer_list_services__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_comment_comment_list_services__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_response_response_list_services__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_toast_toast_services__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_photo_photo_services__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_util_toast_service__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_util_alert_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_util_camera_service__ = __webpack_require__(523);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { AutoHideDirective } from "../directives/auto-hide/auto-hide";


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false,
                    platforms: {
                        ios: {
                            scrollAssist: false,
                            autoFocusAssist: false
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/add-request/add-request.module#AddRequestPageModule', name: 'AddRequestPage', segment: 'add-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-offer/edit-offer.module#EditOfferPageModule', name: 'EditOfferPage', segment: 'edit-offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-request/edit-request.module#EditRequestPageModule', name: 'EditRequestPage', segment: 'edit-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myoffer/myoffer.module#MyofferPageModule', name: 'MyofferPage', segment: 'myoffer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myrequest/myrequest.module#MyrequestPageModule', name: 'MyrequestPage', segment: 'myrequest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer/offer.module#OfferPageModule', name: 'OfferPage', segment: 'offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photo-modal/photo-modal.module#PhotoModalPageModule', name: 'PhotoModalPage', segment: 'photo-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request-modal/request-modal.module#RequestModalPageModule', name: 'RequestModalPage', segment: 'request-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_22__providers_data_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_23__providers_chat_chat_services__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_24__providers_request_request_list_services__["a" /* RequestListService */],
                __WEBPACK_IMPORTED_MODULE_25__providers_offer_offer_list_services__["a" /* OfferListService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_comment_comment_list_services__["a" /* CommentListService */],
                __WEBPACK_IMPORTED_MODULE_27__providers_response_response_list_services__["a" /* ResponseListService */],
                __WEBPACK_IMPORTED_MODULE_30__providers_util_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_31__providers_util_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_29__providers_photo_photo_services__["a" /* PhotoService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_28__providers_toast_toast_services__["a" /* ToastService2 */],
                __WEBPACK_IMPORTED_MODULE_32__providers_util_camera_service__["a" /* CameraService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_emoji__["a" /* EmojiProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_hide_auto_hide__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__auto_hide_auto_hide__["a" /* AutoHideDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__auto_hide_auto_hide__["a" /* AutoHideDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoHideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AutoHideDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var AutoHideDirective = (function () {
    function AutoHideDirective() {
        console.log('Hello AutoHideDirective Directive');
    }
    AutoHideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[auto-hide]' // Attribute selector
        }),
        __metadata("design:paramtypes", [])
    ], AutoHideDirective);
    return AutoHideDirective;
}());

//# sourceMappingURL=auto-hide.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        // this.auth.getAuthenticatedUser().subscribe(auth => {
        //   !auth ?
        //   this.rootPage = 'LoginPage' : this.rootPage = 'MessagePage';
        // })
        var _this = this;
        platform.ready().then(function () {
            // this.rootPage = 'WelcomePage';  
            _this.rootPage = 'WelcomePage';
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //keyboard.disableScroll(false);
            statusBar.styleDefault();
            splashScreen.hide();
            //   if (this.platform.is('ios')) {
            //     keyboard.disableScroll(true);
            // }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/flo/Documents/Code/Applications/WebJobbing/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/flo/Documents/Code/Applications/WebJobbing/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyB-pQRRNxuCvB_0mGFa-JR94fMqhfb6Kxc",
    authDomain: "chatapplication-34a08.firebaseapp.com",
    databaseURL: "https://chatapplication-34a08.firebaseio.com",
    projectId: "chatapplication-34a08",
    storageBucket: "chatapplication-34a08.appspot.com",
    messagingSenderId: "1068444477307"
    // apiKey: "AIzaSyDL_cAZagBq2GUjZO1Ya7PIB5E_lsbsfaU",
    // authDomain: "ions-ff1a2.firebaseapp.com",
    // databaseURL: "https://ions-ff1a2.firebaseio.com",
    // projectId: "ions-ff1a2",
    // storageBucket: "ions-ff1a2.appspot.com",
    // messagingSenderId: "512768178853"
    // apiKey: "AIzaSyB_aJjM0MEgXfCttEisocZ0UWkQZsaSU3I",
    //   authDomain: "webjobbing-fcbb1.firebaseapp.com",
    //   databaseURL: "https://webjobbing-fcbb1.firebaseio.com",
    //   projectId: "webjobbing-fcbb1",
    //   storageBucket: "",
    //   messagingSenderId: "838395667935"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AngularFireDatabase } from "angularfire2/database";
//import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
//import { Channel } from "../../models/channel/channel.interface";
var ChatService = (function () {
    function ChatService() {
    }
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat.services.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoService = (function () {
    function PhotoService(
        // public navParams: NavParams,
        camera, alertCtrl, platform, loadingCtrl) {
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.basePath = 'requests/';
        // Récupère les données transmit par la request
        // this.request = this.navParams.get('request');
    }
    PhotoService.prototype.uploadPhoto = function (sType) {
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
            var userPic = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref('/requests/aaaa.jpg');
            userPic.putString(image, 'data_url')
                .then(function () {
                _this.loadPhoto();
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    PhotoService.prototype.loadPhoto = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Chargement en cours...'
        });
        loading.present();
        var userPic = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref('/requests/aaaa.jpg');
        userPic.getDownloadURL()
            .then(function (url) {
            _this.pic = url;
            _this.request.photo = url;
            loading.dismiss();
        })
            .catch(function (e) {
            var userPic = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref('/requests/aaaa.jpg');
            userPic.getDownloadURL().then(function (url) {
                _this.pic = url;
                console.log('this PIC ====' + _this.pic);
                loading.dismiss();
            });
        });
    };
    PhotoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], PhotoService);
    return PhotoService;
}());

//# sourceMappingURL=photo.services.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraService = (function () {
    function CameraService(camera, loadingCtrl) {
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
    }
    CameraService.prototype.getPictureFromCamera = function () {
        return this.getImage(this.camera.PictureSourceType.CAMERA, true);
    };
    CameraService.prototype.getPictureFromPhotoLibrary = function () {
        return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY);
    };
    // This method takes optional parameters to make it more customizable
    CameraService.prototype.getImage = function (pictureSourceType, crop, quality, allowEdit, saveToAlbum) {
        if (crop === void 0) { crop = false; }
        if (quality === void 0) { quality = 50; }
        if (allowEdit === void 0) { allowEdit = true; }
        if (saveToAlbum === void 0) { saveToAlbum = true; }
        var options = {
            quality: quality,
            allowEdit: allowEdit,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: pictureSourceType,
            encodingType: this.camera.EncodingType.PNG,
            saveToPhotoAlbum: saveToAlbum
        };
        // If set to crop, restricts the image to a square of 600 by 600
        if (crop) {
            options['targetWidth'] = 600;
            options['targetHeight'] = 600;
        }
        return this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/png;base64,' + imageData;
            return base64Image;
        }, function (error) {
            console.log('CAMERA ERROR -> ' + JSON.stringify(error));
        });
    };
    CameraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]])
    ], CameraService);
    return CameraService;
}());

//# sourceMappingURL=camera.service.js.map

/***/ })

},[322]);
//# sourceMappingURL=main.js.map