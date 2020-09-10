(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container fullscreen>\n  <mat-sidenav\n    mode=\"side\"\n    [opened] = \"opennedSidenav\"\n    >\n    <ng-scrollbar shown='hover' >\n    <div class=\"allItems\">\n\n      <div class=\"topItemsSidenav\">\n            <div class=\"toggleSidenav itemSidenav\" style=\"font-size: 25px ;\">\n              <img src=\"assets/imgs/dark_yellow.png\" alt=\"\">\n            </div>\n\n          </div>\n\n          <div class=\"CenterItemsSidenav\">\n            <div class=\"homeSidenav itemSidenav activeItem\" (click)=\"GoPage('home')\">\n              <i class=\"material-icons\">home</i><span>HOME</span>\n            </div>\n            <div class=\"aboutSidenav itemSidenav\" (click)=\"GoPage('about')\">\n              <i class=\"material-icons\">perm_identity</i> <span>ABOUT</span>\n            </div>\n            <div class=\"contactSidenav itemSidenav\" (click)=\"GoPage('contact')\">\n              <i class=\"material-icons\">mail_outline</i> <span>CONTACT</span>\n            </div>\n            <div class=\"skillsSidenav itemSidenav\" (click)=\"GoPage('skills')\">\n              <i class=\"material-icons\">school</i> <span>SKILLS</span>\n            </div>\n            <div class=\"workSidenav itemSidenav\" (click)=\"GoPage('work')\">\n              <i class=\"material-icons\">remove_red_eye</i> <span>MY WORK</span>\n            </div>\n          </div>\n\n          <div class=\"bottomItemsSidenav\">\n            <div class=\"fbSidenav itemSidenav\">\n              <i class=\"fab fa-facebook-f    \" (click)=\"click_fb()\" ></i>\n            </div>\n            <div class=\"twitterSidenav itemSidenav\">\n              <i class=\"fab fa-linkedin-in    \" (click)=\"click_in()\" ></i>\n            </div>\n            <div class=\"githubSidenav itemSidenav\">\n              <i class=\"fab fa-github    \" (click)=\"click_gh()\" ></i>\n            </div>\n          </div>\n\n        </div>\n      </ng-scrollbar>\n\n  </mat-sidenav>\n  <mat-sidenav-content\n  [ngClass]=\"{'opennedSidenav' : opennedSidenav , 'closedSidenav' : !opennedSidenav }\"\n  >\n        <mat-toolbar class=\"fixed-top w-100 d-sm-none\"\n        [ngClass]=\"{'opennedSidenav' : opennedSidenav , 'closedSidenav' : !opennedSidenav }\"\n\n        >\n          <div class=\"open-sidenav\">\n            <i class=\"fa fa-align-left\" aria-hidden=\"true\" (click)=\"toggleSidenav()\"></i>\n          </div>\n          <div class=\"toolbar-logo\">\n            <img src=\"assets/imgs/yellow_dark.png\" alt=\"\">\n          </div>\n        </mat-toolbar>\n    <div class=\"loading_page_div\">\n      <div class=\"loading_div\">\n        <div class=\"loading_content\">\n            <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n            <img src=\"assets/imgs/dark_yellow.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"content_not_loading w-100\">\n      <router-outlet></router-outlet>\n    </div>\n\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" background_all\">\n  <div class=\"blackDiv\">\n    <div class=\"topText text_div\">\n      <teximate #enterAnimation1 text=\"<!Doctype html>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n      <div style=\"padding-left: 20px ;\">\n        <teximate #enterAnimation2 text=\"<head>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n        <div class=\"textCenter\">\n          <teximate #enterAnimation3 text=\"<title>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n          <div style=\"padding-left: 20px ;\">\n            <div class=\"whiteText texta\">\n              <div class=\"text_bg text_bg_white\"></div>\n              <div class=\"text_bg2\"></div>\n              Hello , I'm\n            </div>\n            <br>\n            <div class=\"YellowText texta\" >\n               <div class=\"text_bg text_bg_yellow\"></div>\n               <div class=\"text_bg2\"></div>\n               Badeche Abdennour .\n              </div>\n          </div>\n          <teximate #enterAnimation4 text=\"</title>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n        </div>\n        <teximate #enterAnimation5 text=\"</head>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n        <teximate #enterAnimation6 text=\"<body>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n      </div>\n\n    </div>\n\n    <div class=\"centerText  text_div textCenter\"  style=\"padding-left : 60px ;\">\n\n      <div class=\"whiteText texta\">\n        <div class=\"text_bg text_bg_white\"></div>\n        <div class=\"text_bg2\"></div>\n        I'm a Full-Stack Web Developer\n      </div>\n      <br>\n      <teximate #darkAnimation1 text=\"Front End Developer | Back End Developer | Cross Plateform Developer \" class=\"darkText\" [enter]=\"darkAnimation\"></teximate>\n      <button mat-stroked-button color='accent' class=\"contact_me_btn\" (click)=\"contactme()\" >  <i class=\"material-icons\">mail_outline</i> Contact Me </button>\n      <button mat-stroked-button color='warn'  class=\"cv_btn\"  (click)=\"getcv()\" > <i class=\"material-icons\">perm_identity</i> Get My Resume </button>\n      <a href=\"assets/imgs/AbdennourBadeche.jpg\" download style=\"display: none;\" class=\"get_cv_a\"></a>\n    </div>\n\n    <div class=\"bottomText text_div\">\n      <div  style=\"padding-left : 20px ;\">\n        <teximate #enterAnimation7 text=\"</body>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n      </div>\n\n\n      <teximate #enterAnimation8 text=\"</html>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n    </div>\n\n    <button class=\"animate_all\" (click)=\"AnimationsText([enterAnimation1 , enterAnimation2 , enterAnimation3 , enterAnimation4 , enterAnimation5 , enterAnimation6 , enterAnimation7 , enterAnimation8 ])\" style=\"visibility: hidden;\">Play</button>\n\n  </div>\n\n\n  <div class=\"lightDiv\">\n    <div class=\"lightCircle\">\n      <div class=\"logo_div_all\">\n        <div class=\"circle1\">\n          <div class=\"circle11\"> <i class=\"fab fa-html5    \"></i> </div>\n          <div class=\"circle12\"> <i class=\"fab fa-css3    \"></i> </div>\n          <div class=\"circle13\"> <i class=\"fas fa-code    \"></i> </div>\n          <div class=\"circle14\"> <i class=\"fab fa-node-js    \"></i> </div>\n        </div>\n        <div class=\"circle2\">\n          <div class=\"circle21\"> <i class=\"fab fa-angular    \"></i> </div>\n          <div class=\"circle22\"> <i class=\"fab fa-laravel    \"></i> </div>\n          <div class=\"circle23\"> <i class=\"fas fa-database    \"></i> </div>\n          <div class=\"circle24\"> <i class=\"fab fa-react    \"></i></div>\n        </div>\n        <div class=\"circle3\">\n          <img src=\"assets/imgs/home.png\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'contact', loadChildren: () => Promise.all(/*! import() | contact-contact-module */[__webpack_require__.e("default~contact-contact-module~skills-skills-module~work-work-module"), __webpack_require__.e("default~about-about-module~contact-contact-module"), __webpack_require__.e("contact-contact-module")]).then(__webpack_require__.bind(null, /*! ./contact/contact.module */ "./src/app/contact/contact.module.ts")).then(m => m.ContactModule)
    },
    {
        path: 'about', loadChildren: () => Promise.all(/*! import() | about-about-module */[__webpack_require__.e("default~about-about-module~contact-contact-module"), __webpack_require__.e("about-about-module")]).then(__webpack_require__.bind(null, /*! ./about/about.module */ "./src/app/about/about.module.ts")).then(m => m.AboutModule)
    },
    {
        path: 'skills', loadChildren: () => Promise.all(/*! import() | skills-skills-module */[__webpack_require__.e("default~contact-contact-module~skills-skills-module~work-work-module"), __webpack_require__.e("skills-skills-module")]).then(__webpack_require__.bind(null, /*! ./skills/skills.module */ "./src/app/skills/skills.module.ts")).then(m => m.SkillsModule)
    },
    {
        path: 'myWork', loadChildren: () => Promise.all(/*! import() | work-work-module */[__webpack_require__.e("default~contact-contact-module~skills-skills-module~work-work-module"), __webpack_require__.e("work-work-module")]).then(__webpack_require__.bind(null, /*! ./work/work.module */ "./src/app/work/work.module.ts")).then(m => m.WorkModule)
    },
    { path: "**", redirectTo: "", pathMatch: "full" },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-scroll-view {\n  width: calc(100% + 18px ) !important;\n}\n\n::ng-deep app-home, ::ng-deep app-about, ::ng-deep app-work, ::ng-deep app-skills, ::ng-deep app-contact {\n  width: 100%;\n}\n\nmat-sidenav-container {\n  background-color: #2d2d2d;\n}\n\nmat-sidenav-container mat-sidenav {\n  width: 70px;\n  height: 100%;\n  background-color: #fdb82c;\n  overflow: hidden;\n  direction: rtl;\n}\n\nmat-sidenav-container mat-sidenav ng-scrollbar {\n  --scroll-view-margin: 0 0 0 -18px ;\n  --scrollbar-size: 0 ;\n}\n\nmat-sidenav-container mat-sidenav .allItems {\n  min-height: 500px;\n  height: 100%;\n  width: 70px;\n  position: relative;\n}\n\nmat-sidenav-container mat-sidenav .allItems .topItemsSidenav {\n  position: relative;\n  height: 50px;\n  width: 100%;\n  margin: 0;\n  margin-top: 20px;\n  padding: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .topItemsSidenav .itemSidenav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\nmat-sidenav-container mat-sidenav .allItems .topItemsSidenav .itemSidenav img {\n  position: absolute;\n  width: 50px;\n  top: 0;\n  height: auto;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav {\n  position: absolute;\n  width: 100%;\n  height: 250px;\n  top: 50%;\n  left: 0;\n  transform: translateY(-60%);\n  margin: 0;\n  padding: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav {\n  position: relative;\n  cursor: pointer;\n  height: 50px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 0;\n  line-height: 50px;\n  font-size: 25px;\n  color: rgba(45, 45, 45, 0.42);\n  text-align: center;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav i {\n  opacity: 1;\n  -webkit-animation: itemsidenavH 100ms linear;\n          animation: itemsidenavH 100ms linear;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav span {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  font-size: 11px;\n  font-weight: bold;\n  text-align: center;\n  opacity: 0;\n  -webkit-animation: itemsidenavV 100ms linear;\n          animation: itemsidenavV 100ms linear;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav.activeItem {\n  color: #2d2d2d;\n  text-shadow: 0 0 9px white;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav:hover {\n  color: #2d2d2d;\n  text-shadow: 0 0 9px white;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav:hover i {\n  -webkit-animation: itemsidenavV 300ms linear;\n          animation: itemsidenavV 300ms linear;\n  opacity: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav:hover span {\n  -webkit-animation: itemsidenavH 300ms linear;\n          animation: itemsidenavH 300ms linear;\n  opacity: 1;\n}\n\nmat-sidenav-container mat-sidenav .allItems .bottomItemsSidenav {\n  position: absolute;\n  height: 120px;\n  width: 100%;\n  bottom: 20px;\n  margin: 0;\n  padding: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .bottomItemsSidenav .itemSidenav {\n  height: 40px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  line-height: 40px;\n  font-size: 13px;\n  color: #2d2d2d;\n  text-align: center;\n}\n\nmat-sidenav-container mat-sidenav .allItems .bottomItemsSidenav .itemSidenav i {\n  cursor: pointer;\n}\n\nmat-sidenav-container mat-toolbar {\n  height: 60px;\n  background-color: #2d2d2d;\n  box-shadow: 0 0 4px 1px #121211;\n}\n\nmat-sidenav-container mat-toolbar .open-sidenav {\n  position: absolute;\n  height: 100%;\n  width: 50px;\n  color: #fdb82c;\n  text-align: center;\n  line-height: 60px;\n}\n\nmat-sidenav-container mat-toolbar .open-sidenav i {\n  cursor: pointer;\n}\n\nmat-sidenav-container mat-toolbar .toolbar-logo {\n  position: absolute;\n  height: 100%;\n  width: 80px;\n  right: 0;\n  overflow: hidden;\n}\n\nmat-sidenav-container mat-toolbar .toolbar-logo img {\n  position: absolute;\n  height: 70%;\n  width: auto;\n  top: 15%;\n  left: 50%;\n  transform: translateX(-50%);\n  -webkit-filter: drop-shadow(0 0 2px black);\n          filter: drop-shadow(0 0 2px black);\n}\n\nmat-sidenav-container mat-toolbar.closedSidenav {\n  padding-left: 0px;\n}\n\nmat-sidenav-container mat-toolbar.opennedSidenav {\n  padding-left: 70px;\n}\n\nmat-sidenav-container mat-sidenav-content.closedSidenav {\n  margin-left: 0px;\n}\n\nmat-sidenav-container mat-sidenav-content.opennedSidenav {\n  margin-left: 70px;\n}\n\nmat-sidenav-container mat-sidenav-content {\n  position: relative;\n  background-color: #2d2d2d;\n  overflow-x: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media screen and (max-width: 576px) {\n  mat-sidenav-container mat-sidenav-content {\n    padding-top: 60px;\n    align-items: flex-start;\n  }\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: hidden;\n  display: none;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50%;\n  left: 50%;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #2d2d2d;\n  overflow: hidden;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content {\n  position: absolute;\n  width: 200px;\n  height: 210px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: none;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content img {\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  top: 0;\n  left: 0;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content mat-progress-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content mat-progress-bar .mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #222222 !important;\n}\n\n.teximate-paragraph {\n  margin: 0 !important;\n}\n\n@keyframes rota2 {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes rota2 {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rota1 {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n@-webkit-keyframes rota1 {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n@-webkit-keyframes rota3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n\n@keyframes rota3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n\n@-webkit-keyframes rota4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rota4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes itemsidenavV {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes itemsidenavV {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes itemsidenavH {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes itemsidenavH {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldnNoYWRvdy9Eb3dubG9hZHMvcG9ydGVmb2xpby1tYXN0ZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGOztBREZFO0VBT0UsV0FBQTtFQUFjLFlBQUE7RUFBZSx5QkFBQTtFQUE0QixnQkFBQTtFQUFrQixjQUFBO0FDRS9FOztBRE5RO0VBQ0Usa0NBQUE7RUFDQSxvQkFBQTtBQ1FWOztBRExJO0VBQ0csaUJBQUE7RUFBbUIsWUFBQTtFQUFlLFdBQUE7RUFBYSxrQkFBQTtBQ1V0RDs7QURUTTtFQUNFLGtCQUFBO0VBQXFCLFlBQUE7RUFBZSxXQUFBO0VBQWMsU0FBQTtFQUFZLGdCQUFBO0VBQzlELFVBQUE7QUNlUjs7QURkUTtFQUNFLGtCQUFBO0VBQXFCLE1BQUE7RUFBUyxPQUFBO0VBQVcsV0FBQTtFQUFjLFlBQUE7QUNvQmpFOztBRG5CVTtFQUNFLGtCQUFBO0VBQXFCLFdBQUE7RUFBYyxNQUFBO0VBQVMsWUFBQTtFQUFlLFNBQUE7RUFDM0QsMkJBQUE7QUN5Qlo7O0FEcEJNO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGFBQUE7RUFBZSxRQUFBO0VBQVUsT0FBQTtFQUFTLDJCQUFBO0VBQ25FLFNBQUE7RUFBVyxVQUFBO0FDNEJuQjs7QUQzQlE7RUFDRSxrQkFBQTtFQUFvQixlQUFBO0VBQ3BCLFlBQUE7RUFBZSxXQUFBO0VBQWMsU0FBQTtFQUFhLFVBQUE7RUFDMUMsZ0JBQUE7RUFDQSxpQkFBQTtFQUFxQixlQUFBO0VBQWtCLDZCQUFBO0VBQWdDLGtCQUFBO0FDb0NqRjs7QURuQ1U7RUFBRyxVQUFBO0VBQVksNENBQUE7VUFBQSxvQ0FBQTtBQ3VDekI7O0FEdENVO0VBQU0sa0JBQUE7RUFBb0IsWUFBQTtFQUFlLFdB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Q3lITjtBQUNGOztBRHZIQTtFQUNFO0lBQUksdUJBQUE7RUMwSEo7RUR6SEE7SUFBTSx5QkFBQTtFQzRITjtBQUNGOztBRC9IQTtFQUNFO0lBQUksdUJBQUE7RUMwSEo7RUR6SEE7SUFBTSx5QkFBQTtFQzRITjtBQUNGOztBRDFIQTtFQUNFO0lBQUksVUFBQTtFQzZISjtFRDVIQTtJQUFNLFVBQUE7RUMrSE47QUFDRjs7QURsSUE7RUFDRTtJQUFJLFVBQUE7RUM2SEo7RUQ1SEE7SUFBTSxVQUFBO0VDK0hOO0FBQ0Y7O0FEN0hBO0VBQ0U7SUFBSSxVQUFBO0VDZ0lKO0VEL0hBO0lBQU0sVUFBQTtFQ2tJTjtBQUNGOztBRHJJQTtFQUNFO0lBQUksVUFBQTtFQ2dJSjtFRC9IQTtJQUFNLFVBQUE7RUNrSU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1zY3JvbGwtdmlld3tcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDE4cHggKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGFwcC1ob21lICw6Om5nLWRlZXAgIGFwcC1hYm91dCAsOjpuZy1kZWVwICBhcHAtd29yayAsOjpuZy1kZWVwICBhcHAtc2tpbGxzICwgOjpuZy1kZWVwIGFwcC1jb250YWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkIDtcbiAgbWF0LXNpZGVuYXYge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA1NzZweCkge1xuICAgIH1cbiAgICAgICAgbmctc2Nyb2xsYmFyIHtcbiAgICAgICAgICAtLXNjcm9sbC12aWV3LW1hcmdpbiA6IDAgMCAwIC0xOHB4IDtcbiAgICAgICAgICAtLXNjcm9sbGJhci1zaXplIDogMCA7XG4gICAgICAgIH1cbiAgICB3aWR0aDogNzBweCA7IGhlaWdodDogMTAwJSA7IGJhY2tncm91bmQtY29sb3IgOiNmZGI4MmMgOyBvdmVyZmxvdzogaGlkZGVuOyBkaXJlY3Rpb246IHJ0bDtcbiAgICAuYWxsSXRlbXMge1xuICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4OyBoZWlnaHQ6IDEwMCUgOyB3aWR0aDogNzBweDsgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLnRvcEl0ZW1zU2lkZW5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSA7IGhlaWdodDogNTBweCA7IHdpZHRoOiAxMDAlIDsgbWFyZ2luIDowIDsgbWFyZ2luLXRvcDogMjBweCA7XG4gICAgICAgIHBhZGRpbmc6IDAgO1xuICAgICAgICAuaXRlbVNpZGVuYXZ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlIDsgdG9wOiAwIDsgbGVmdCA6IDAgOyB3aWR0aDogMTAwJSA7IGhlaWdodDogMTAwJSA7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IHdpZHRoOiA1MHB4IDsgdG9wOiAwIDsgaGVpZ2h0OiBhdXRvIDsgbGVmdDogNTAlIDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5DZW50ZXJJdGVtc1NpZGVuYXYge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDI1MHB4OyB0b3A6IDUwJTsgbGVmdDogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02MCUpO1xuICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XG4gICAgICAgIC5pdGVtU2lkZW5hdntcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHggOyB3aWR0aDogMTAwJSA7IG1hcmdpbiA6IDAgOyBwYWRkaW5nOiAwIDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4IDsgIGZvbnQtc2l6ZTogMjVweCA7IGNvbG9yOiByZ2JhKDQ1LCA0NSwgNDUsIDAuNDIpIDsgdGV4dC1hbGlnbjogY2VudGVyIDtcbiAgICAgICAgICBpIHtvcGFjaXR5OiAxOyBhbmltYXRpb246IGl0ZW1zaWRlbmF2SCAxMDBtcyBsaW5lYXI7IH1cbiAgICAgICAgICBzcGFuIHtwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogMTAwJSA7IHdpZHRoOiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7IGZvbnQtc2l6ZTogMTFweCA7IGZvbnQtd2VpZ2h0OiBib2xkOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG9wYWNpdHk6IDA7IGFuaW1hdGlvbjogaXRlbXNpZGVuYXZWIDEwMG1zIGxpbmVhcjt9XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW1TaWRlbmF2LmFjdGl2ZUl0ZW0geyBjb2xvciA6ICMyZDJkMmQgOyB0ZXh0LXNoYWRvdzogMCAwIDlweCB3aGl0ZTsgfVxuICAgICAgICAuaXRlbVNpZGVuYXY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yIDogIzJkMmQyZCA7IHRleHQtc2hhZG93OiAwIDAgOXB4IHdoaXRlO1xuICAgICAgICAgIGkge2FuaW1hdGlvbjogaXRlbXNpZGVuYXZWIDMwMG1zIGxpbmVhciA7IG9wYWNpdHk6IDA7fVxuICAgICAgICAgIHNwYW4ge2FuaW1hdGlvbjogaXRlbXNpZGVuYXZIIDMwMG1zIGxpbmVhciA7IG9wYWNpdHk6IDE7fVxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgLmJvdHRvbUl0ZW1zU2lkZW5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IGhlaWdodDogMTIwcHggOyB3aWR0aDogMTAwJSA7IGJvdHRvbTogMjBweCA7IG1hcmdpbiA6MCA7XG4gICAgICAgIHBhZGRpbmc6IDAgO1xuICAgICAgICAuaXRlbVNpZGVuYXYge1xuICAgICAgICAgIGhlaWdodDogNDBweCA7IHdpZHRoOiAxMDAlIDsgbWFyZ2luIDogMCA7IHBhZGRpbmc6IDAgO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4IDsgIGZvbnQtc2l6ZTogMTNweCA7IGNvbG9yOiAjMmQyZDJkIDsgdGV4dC1hbGlnbjogY2VudGVyIDtcbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgfVxuXG4gIG1hdC10b29sYmFyIHtcbiAgICBoZWlnaHQ6IDYwcHggOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggMXB4ICMxMjEyMTE7XG5cbiAgICAub3Blbi1zaWRlbmF2IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogNTBweCA7IGNvbG9yOiAjZmRiODJjO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyIDsgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICBpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudG9vbGJhci1sb2dvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogODBweDsgcmlnaHQ6IDA7IG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogNzAlOyB3aWR0aDogYXV0bzsgdG9wOiAxNSU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAycHggYmxhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1hdC10b29sYmFyLmNsb3NlZFNpZGVuYXYge1xuICAgIHBhZGRpbmctbGVmdCA6IDBweCA7XG4gIH1cblxuICBtYXQtdG9vbGJhci5vcGVubmVkU2lkZW5hdiB7XG4gICAgcGFkZGluZy1sZWZ0IDogNzBweCA7XG4gIH1cblxuICBtYXQtc2lkZW5hdi1jb250ZW50LmNsb3NlZFNpZGVuYXYge1xuICAgIG1hcmdpbi1sZWZ0IDogMHB4IDtcbiAgfVxuXG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQub3Blbm5lZFNpZGVuYXYge1xuICAgIG1hcmdpbi1sZWZ0IDogNzBweCA7XG4gIH1cblxuXG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICAgIHBvc2l0aW9uIDogcmVsYXRpdmUgO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQgO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDU3NnB4KSB7XG4gICAgICBwYWRkaW5nLXRvcCA6IDYwcHggO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIC5sb2FkaW5nX3BhZ2VfZGl2IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgdG9wOiAwOyBsZWZ0OiAwO1xuICAgICAgIHotaW5kZXg6IDEwMDA7IG92ZXJmbG93OiBoaWRkZW47IGRpc3BsYXkgOiBub25lIDtcbiAgICAgIC5sb2FkaW5nX2RpdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgLTUwJSk7IGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7IG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgLmxvYWRpbmdfY29udGVudHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAyMDBweDsgaGVpZ2h0OiAyMTBweDsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDIwMHB4IDsgaGVpZ2h0OiAyMDBweDsgdG9wOiAwOyBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG59XG4udGV4aW1hdGUtcGFyYWdyYXBoIHsgbWFyZ2luOiAwICFpbXBvcnRhbnQ7fVxuXG5Aa2V5ZnJhbWVzIHJvdGEyIHtcblx0ZnJvbXsgdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt9XG5cdHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG5cbkAtby1rZXlmcmFtZXMgcm90YTIge1xuXHRmcm9teyB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO31cblx0dG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbn1cblxuQC1tb3ota2V5ZnJhbWVzIHJvdGEyIHtcblx0ZnJvbXsgdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt9XG5cdHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YTIge1xuXHRmcm9teyB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO31cblx0dG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbn1cblxuQGtleWZyYW1lcyByb3RhMSB7XG5cdGZyb217IHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt9XG5cdHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxufVxuXG5ALW8ta2V5ZnJhbWVzIHJvdGExIHtcblx0ZnJvbXsgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO31cblx0dG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG59XG5cbkAtbW96LWtleWZyYW1lcyByb3RhMSB7XG5cdGZyb217IHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt9XG5cdHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGExIHtcblx0ZnJvbXsgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO31cblx0dG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG59XG5cbkBrZXlmcmFtZXMgcm90YTMge1xuICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyl9XG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGE0IHtcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpfVxuICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpfVxufVxuXG5Aa2V5ZnJhbWVzIGl0ZW1zaWRlbmF2ViB7XG4gIDAlIHtvcGFjaXR5OiAxO31cbiAgMTAwJSB7b3BhY2l0eTogMDt9XG59XG5cbkBrZXlmcmFtZXMgaXRlbXNpZGVuYXZIIHtcbiAgMCUge29wYWNpdHk6IDA7fVxuICAxMDAlIHtvcGFjaXR5OiAxO31cbn1cblxuIiwiLm5nLXNjcm9sbC12aWV3IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDE4cHggKSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgYXBwLWhvbWUsIDo6bmctZGVlcCBhcHAtYWJvdXQsIDo6bmctZGVlcCBhcHAtd29yaywgOjpuZy1kZWVwIGFwcC1za2lsbHMsIDo6bmctZGVlcCBhcHAtY29udGFjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjgyYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgbmctc2Nyb2xsYmFyIHtcbiAgLS1zY3JvbGwtdmlldy1tYXJnaW46IDAgMCAwIC0xOHB4IDtcbiAgLS1zY3JvbGxiYXItc2l6ZTogMCA7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIHtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLnRvcEl0ZW1zU2lkZW5hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAudG9wSXRlbXNTaWRlbmF2IC5pdGVtU2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAudG9wSXRlbXNTaWRlbmF2IC5pdGVtU2lkZW5hdiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICB0b3A6IDA7XG4gIGhlaWdodDogYXV0bztcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC5DZW50ZXJJdGVtc1NpZGVuYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02MCUpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC5DZW50ZXJJdGVtc1NpZGVuYXYgLml0ZW1TaWRlbmF2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHJnYmEoNDUsIDQ1LCA0NSwgMC40Mik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLkNlbnRlckl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXYgaSB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbjogaXRlbXNpZGVuYXZIIDEwMG1zIGxpbmVhcjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLkNlbnRlckl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXYgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaXRlbXNpZGVuYXZWIDEwMG1zIGxpbmVhcjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLkNlbnRlckl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXYuYWN0aXZlSXRlbSB7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICB0ZXh0LXNoYWRvdzogMCAwIDlweCB3aGl0ZTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLkNlbnRlckl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXY6aG92ZXIge1xuICBjb2xvcjogIzJkMmQyZDtcbiAgdGV4dC1zaGFkb3c6IDAgMCA5cHggd2hpdGU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC5DZW50ZXJJdGVtc1NpZGVuYXYgLml0ZW1TaWRlbmF2OmhvdmVyIGkge1xuICBhbmltYXRpb246IGl0ZW1zaWRlbmF2ViAzMDBtcyBsaW5lYXI7XG4gIG9wYWNpdHk6IDA7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC5DZW50ZXJJdGVtc1NpZGVuYXYgLml0ZW1TaWRlbmF2OmhvdmVyIHNwYW4ge1xuICBhbmltYXRpb246IGl0ZW1zaWRlbmF2SCAzMDBtcyBsaW5lYXI7XG4gIG9wYWNpdHk6IDE7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC5ib3R0b21JdGVtc1NpZGVuYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLmJvdHRvbUl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXYge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC5ib3R0b21JdGVtc1NpZGVuYXYgLml0ZW1TaWRlbmF2IGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXRvb2xiYXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMXB4ICMxMjEyMTE7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXRvb2xiYXIgLm9wZW4tc2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTBweDtcbiAgY29sb3I6ICNmZGI4MmM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXRvb2xiYXIgLm9wZW4tc2lkZW5hdiBpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC10b29sYmFyIC50b29sYmFyLWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDgwcHg7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC10b29sYmFyIC50b29sYmFyLWxvZ28gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IGF1dG87XG4gIHRvcDogMTUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMnB4IGJsYWNrKTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtdG9vbGJhci5jbG9zZWRTaWRlbmF2IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXRvb2xiYXIub3Blbm5lZFNpZGVuYXYge1xuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudC5jbG9zZWRTaWRlbmF2IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50Lm9wZW5uZWRTaWRlbmF2IHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5sb2FkaW5nX3BhZ2VfZGl2IC5sb2FkaW5nX2RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5sb2FkaW5nX3BhZ2VfZGl2IC5sb2FkaW5nX2RpdiAubG9hZGluZ19jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjEwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBub25lO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYgLmxvYWRpbmdfZGl2IC5sb2FkaW5nX2NvbnRlbnQgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5sb2FkaW5nX3BhZ2VfZGl2IC5sb2FkaW5nX2RpdiAubG9hZGluZ19jb250ZW50IG1hdC1wcm9ncmVzcy1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAubG9hZGluZ19wYWdlX2RpdiAubG9hZGluZ19kaXYgLmxvYWRpbmdfY29udGVudCBtYXQtcHJvZ3Jlc3MtYmFyIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcbn1cblxuLnRleGltYXRlLXBhcmFncmFwaCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGEyIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcm90YTIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHJvdGEyIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhMiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGExIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcm90YTEge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHJvdGExIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhMSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGEzIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGE0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaXRlbXNpZGVuYXZWIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBpdGVtc2lkZW5hdkgge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'home';
        this.shown_sidenav_scroll = 'hover';
        this.opennedSidenav = false;
        this.f_min = false;
        this.show_loading = false;
        this.router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.show_loading = false;
                this._hideLoader();
            }
        });
    }
    toggleSidenav() {
        this.opennedSidenav = !this.opennedSidenav;
    }
    ngOnInit() {
        if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() <= 576) {
            this.opennedSidenav = false;
            this.f_min = false;
        }
        else {
            this.opennedSidenav = true;
            this.f_min = true;
        }
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() <= 576 && this.f_min) {
                this.f_min = false;
                this.opennedSidenav = false;
            }
            else if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() > 576 && !this.f_min) {
                this.f_min = true;
                this.opennedSidenav = true;
            }
        });
        if (location.pathname != "/") {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".content_not_loading").fadeOut(0);
            jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_page_div").css("display", "inline-block");
            jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_div").css({ "width": "100%", "height": "100%", "border-radius": "0%" });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_content").css("display", "inline-block");
        }
        switch (location.pathname) {
            case "/skills":
                jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                jquery__WEBPACK_IMPORTED_MODULE_2__(".skillsSidenav").addClass('activeItem');
                break;
            case "/about":
                jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                jquery__WEBPACK_IMPORTED_MODULE_2__(".aboutSidenav").addClass('activeItem');
                break;
            case "/contact":
                jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                jquery__WEBPACK_IMPORTED_MODULE_2__(".contactSidenav").addClass('activeItem');
                break;
            case "/myWork":
                jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                jquery__WEBPACK_IMPORTED_MODULE_2__(".workSidenav").addClass('activeItem');
                break;
            default:
                break;
        }
    }
    _showLoader() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".content_not_loading").fadeOut(0);
        jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_page_div").fadeIn(200);
        jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_content").fadeIn(200);
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_div").animate({ "width": "100%", "height": "100%", "border-radius": "0%" }, 500, function () {
            });
        }, 500);
    }
    _hideLoader() {
        setTimeout(() => {
            if (!this.show_loading) {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_content").fadeOut(400);
                setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_div").animate({ "width": "200px", "height": "200px", "border-radius": "50%" }, 500, function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_page_div").fadeOut(500);
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".content_not_loading").fadeIn(0);
                    });
                }, 800);
            }
        }, 800);
    }
    GoPage(data) {
        switch (data) {
            case 'skills':
                jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                jquery__WEBPACK_IMPORTED_MODULE_2__(".skillsSidenav").addClass('activeItem');
                if (location.pathname != '/skills') {
                    this._showLoader();
                    setTimeout(() => {
                        this.router.navigate(['skills']);
                    }, 1000);
                }
                break;
            case 'home':
                jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                jquery__WEBPACK_IMPORTED_MODULE_2__(".homeSidenav").addClass('activeItem');
                if (location.pathname != '/') {
                    this._showLoader();
                    setTimeout(() => {
                        this.router.navigate(['']);
                    }, 1000);
                }
                break;
            case 'about':
                jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                jquery__WEBPACK_IMPORTED_MODULE_2__(".aboutSidenav").addClass('activeItem');
                if (location.pathname != '/about') {
                    this._showLoader();
                    setTimeout(() => {
                        this.router.navigate(['about']);
                    }, 1000);
                }
                break;
            case 'contact':
                jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                jquery__WEBPACK_IMPORTED_MODULE_2__(".contactSidenav").addClass('activeItem');
                if (location.pathname != '/contact') {
                    this._showLoader();
                    setTimeout(() => {
                        this.router.navigate(['contact']);
                    }, 1000);
                }
                break;
            case 'work':
                jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                jquery__WEBPACK_IMPORTED_MODULE_2__(".workSidenav").addClass('activeItem');
                if (location.pathname != '/myWork') {
                    this._showLoader();
                    setTimeout(() => {
                        this.router.navigate(['myWork']);
                    }, 1000);
                }
                break;
            default:
                break;
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() <= 576) {
            this.toggleSidenav();
        }
    }
    click_fb() {
        window.open('https://www.facebook.com/abdou.badeche');
    }
    click_gh() {
        window.open('https://github.com/abdouBadeche');
    }
    click_in() {
        window.open('');
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var ngx_teximate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-teximate */ "./node_modules/ngx-teximate/fesm2015/ngx-teximate.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            ngx_teximate__WEBPACK_IMPORTED_MODULE_11__["TeximateModule"],
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_13__["NgScrollbarModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"]
        ],
        entryComponents: [],
        providers: [
            _projects_service__WEBPACK_IMPORTED_MODULE_16__["ProjectsService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-home {\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n\n@media screen and (min-width: 798px) {\n  .blackDiv {\n    min-height: 100%;\n    width: 100%;\n    height: auto;\n    margin-left: 50px;\n    padding-right: 440px;\n    padding-left: 70px;\n    padding-top: 50px !important;\n  }\n  .blackDiv .textCenter {\n    padding-right: 450px;\n    padding-left: 20px;\n  }\n\n  .lightDiv {\n    position: fixed;\n    width: 440px;\n    height: 100vh;\n    top: 0;\n    right: 0;\n  }\n\n  .lightCircle {\n    border-top-left-radius: 200px;\n    border-bottom-left-radius: 200px;\n    top: 50%;\n    height: 440px;\n    width: 200%;\n    left: 5px;\n    transform: translateY(-50%);\n  }\n\n  .logo_div_all {\n    left: 25%;\n    top: 50%;\n  }\n}\n\n@media screen and (max-width: 797px) {\n  .blackDiv {\n    min-height: 600px;\n    width: 100%;\n    padding: 0;\n    padding-top: 450px !important;\n    margin: 0;\n  }\n\n  .lightDiv {\n    position: absolute;\n    top: 160px;\n    left: 0;\n    min-height: 450px;\n    width: 100%;\n  }\n\n  .lightCircle {\n    border-bottom-left-radius: 190px;\n    border-bottom-right-radius: 190px;\n    top: 0%;\n    height: 150%;\n    width: 100%;\n    left: 0%;\n  }\n\n  .logo_div_all {\n    left: 50%;\n    top: 35%;\n  }\n}\n\n.background_all {\n  width: 100%;\n  height: 100%;\n  margin-left: 0;\n  overflow: hidden;\n  overflow-y: auto;\n  font-family: \"Nunito\", sans-serif;\n  word-spacing: 3vw;\n}\n\n.background_all .lightDiv {\n  z-index: 2;\n}\n\n.background_all .lightDiv .lightCircle {\n  position: relative;\n  display: none;\n  min-height: 340px;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all {\n  position: absolute;\n  height: 400px;\n  width: 400px;\n  transform: translate(-50%, -50%);\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 {\n  position: absolute;\n  height: 380px;\n  width: 380px;\n  top: 10px;\n  left: 10px;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  animation: rota2 6000ms linear infinite;\n  -moz-animation: rota2 6000ms linear infinite;\n  -o-animation: rota2 6000ms linear infinite;\n  -webkit-animation: rota2 6000ms linear infinite;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle11, .background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle12, .background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle13, .background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle14 {\n  position: absolute;\n  width: 26px;\n  height: 26px;\n  background-color: #eea941;\n  color: #eea941;\n  font-size: 16px;\n  text-align: center;\n  line-height: 26px;\n  top: 0%;\n  left: 50%;\n  border-radius: 50%;\n  animation: rota3 6000ms linear infinite;\n  -moz-animation: rota3 6000ms linear infinite;\n  -o-animation: rota3 6000ms linear infinite;\n  -webkit-animation: rota3 6000ms linear infinite;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle12 {\n  top: 50%;\n  left: 0%;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle13 {\n  top: 100%;\n  left: 50%;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle14 {\n  top: 50%;\n  left: 100%;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle2 {\n  animation: rota1 6000ms linear infinite;\n  -moz-animation: rota1 6000ms linear infinite;\n  -o-animation: rota1 6000ms linear infinite;\n  -webkit-animation: rota1 6000ms linear infinite;\n  position: relative;\n  height: 330px;\n  width: 330px;\n  top: 35px;\n  left: 35px;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle21, .background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle22, .background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle23, .background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle24 {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-color: #4c157d;\n  color: #4c157d;\n  font-size: 10px;\n  text-align: center;\n  line-height: 20px;\n  top: 12%;\n  left: 12%;\n  border-radius: 50%;\n  animation: rota4 6000ms linear infinite;\n  -moz-animation: rota4 6000ms linear infinite;\n  -o-animation: rota4 6000ms linear infinite;\n  -webkit-animation: rota4 6000ms linear infinite;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle3 {\n  position: absolute;\n  height: 280px;\n  width: 280px;\n  top: 60px;\n  left: 60px;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  background-color: #2d2d2d;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle3 img {\n  position: absolute;\n  height: 103%;\n  width: 103%;\n  top: -1.5%;\n  left: -1.5%;\n}\n\n.background_all .blackDiv {\n  padding: 15px 10px;\n  color: white;\n  font-size: 13px;\n  min-height: 500px;\n  padding-bottom: 0;\n}\n\n.background_all .blackDiv .text_bg {\n  position: absolute;\n  width: 0;\n  height: 5px;\n  border-radius: 2.5px;\n  bottom: 0;\n  z-index: 2;\n}\n\n.background_all .blackDiv .text_bg_white {\n  background-color: white;\n  box-shadow: 0 0 2px 0px white;\n}\n\n.background_all .blackDiv .text_bg2 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  top: 0;\n  background-color: #2d2d2d;\n}\n\n.background_all .blackDiv .text_bg_yellow {\n  background-color: #fdb82c;\n  box-shadow: 0 0 2px 0px #fdb82c;\n}\n\n.background_all .blackDiv .text_div {\n  display: none;\n}\n\n.background_all .blackDiv .codeText {\n  line-height: 20px;\n  font-size: 17px;\n  color: #5a5656;\n  font-family: \"Ma Shan Zheng\", cursive;\n}\n\n.background_all .blackDiv .whiteText {\n  text-align: left;\n  position: relative;\n  display: inline-block;\n  font-size: 3vw;\n  color: white;\n  padding: 5px 10px;\n  font-weight: bold;\n  word-spacing: 5px;\n  width: auto;\n  margin: 15px 0;\n}\n\n.background_all .blackDiv .YellowText {\n  padding: 5px;\n  position: relative;\n  width: auto;\n  font-size: 3vw;\n  color: #fdb82c;\n  letter-spacing: 2px;\n  font-weight: bold;\n  display: block;\n  margin: 15px 0;\n  padding-left: 20px;\n  word-spacing: 5px;\n  display: inline-block;\n}\n\n.background_all .blackDiv .darkText {\n  font-size: 13px;\n  color: #5a5a5a;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n@media screen and (max-width: 576px) {\n  .background_all .blackDiv .whiteText {\n    font-size: 15px;\n  }\n  .background_all .blackDiv .YellowText {\n    font-size: 15px;\n  }\n  .background_all .blackDiv .darkText {\n    font-size: 9px;\n  }\n}\n\n.background_all .blackDiv .btns {\n  margin-left: 0;\n}\n\n.background_all .blackDiv .contact_me_btn {\n  margin-right: 20px;\n  border-color: #ffa726 !important;\n  visibility: hidden;\n  margin-bottom: 20px;\n}\n\n.background_all .blackDiv .cv_btn {\n  border-color: #9e9e96 !important;\n  margin-bottom: 20px;\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldnNoYWRvdy9Eb3dubG9hZHMvcG9ydGVmb2xpby1tYXN0ZXIvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsZ0JBQUE7SUFBbUIsV0FBQTtJQUFjLFlBQUE7SUFBYyxpQkFBQTtJQUMvQyxvQkFBQTtJQUF1QixrQkFBQTtJQUFzQiw0QkFBQTtFQ08vQztFRExFO0lBQ0Usb0JBQUE7SUFBdUIsa0JBQUE7RUNRM0I7O0VETEE7SUFDRSxlQUFBO0lBQWtCLFlBQUE7SUFBZSxhQUFBO0lBQ2pDLE1BQUE7SUFBUyxRQUFBO0VDV1g7O0VEVEE7SUFDRSw2QkFBQTtJQUFnQyxnQ0FBQTtJQUFvQyxRQUFBO0lBQ3BFLGFBQUE7SUFBZ0IsV0FBQTtJQUFjLFNBQUE7SUFBWSwyQkFBQTtFQ2lCNUM7O0VEZkE7SUFDRSxTQUFBO0lBQWEsUUFBQTtFQ21CZjtBQUNGOztBRGZBO0VBQ0U7SUFDRSxpQkFBQTtJQUFvQixXQUFBO0lBQ3BCLFVBQUE7SUFBYyw2QkFBQTtJQUFnQyxTQUFBO0VDb0JoRDs7RURqQkE7SUFDRSxrQkFBQTtJQUFxQixVQUFBO0lBQWEsT0FBQTtJQUFVLGlCQUFBO0lBQzVDLFdBQUE7RUN1QkY7O0VEcEJBO0lBQ0UsZ0NBQUE7SUFDQSxpQ0FBQTtJQUFxQyxPQUFBO0lBQ3JDLFlBQUE7SUFBZSxXQUFBO0lBQWMsUUFBQTtFQzBCL0I7O0VEeEJBO0lBQ0UsU0FBQTtJQUFhLFFBQUE7RUM0QmY7QUFDRjs7QUR6QkE7RUFDRSxXQUFBO0VBQWdCLFlBQUE7RUFBZSxjQUFBO0VBQy9CLGdCQUFBO0VBQW1CLGdCQUFBO0VBQW1CLGlDQUFBO0VBQW1DLGlCQUFBO0FDZ0MzRTs7QUQ5QkU7RUFDRyxVQUFB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O0VEcEZJO0lBQ0UsY0FBQTtFQ3NGTjtBQUNGOztBRHBGSTtFQUNFLGNBQUE7QUNzRk47O0FEbkZJO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNxRk47O0FEbEZJO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDb0ZOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhvbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA3OThweCApe1xuICAuYmxhY2tEaXYge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCUgOyB3aWR0aDogMTAwJSA7IGhlaWdodDogYXV0bzsgbWFyZ2luLWxlZnQgOiA1MHB4IDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NDBweCA7IHBhZGRpbmctbGVmdCA6IDcwcHggOyBwYWRkaW5nLXRvcCA6IDUwcHggIWltcG9ydGFudCA7XG5cbiAgICAudGV4dENlbnRlciB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0NTBweCA7IHBhZGRpbmctbGVmdDogMjBweCA7XG4gICAgfVxuICB9XG4gIC5saWdodERpdiB7XG4gICAgcG9zaXRpb246IGZpeGVkIDsgd2lkdGg6IDQ0MHB4IDsgaGVpZ2h0OiAxMDB2aCA7XG4gICAgdG9wOiAwIDsgcmlnaHQ6IDAgO1xuICB9XG4gIC5saWdodENpcmNsZSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjAwcHggOyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMDBweCA7ICB0b3A6IDUwJSAgO1xuICAgIGhlaWdodDogNDQwcHggOyB3aWR0aDogMjAwJSA7IGxlZnQ6IDVweCA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSA7XG4gIH1cbiAgLmxvZ29fZGl2X2FsbCB7XG4gICAgbGVmdDogMjUlIDsgIHRvcDogNTAlIDtcbiAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3OTdweCApIHtcbiAgLmJsYWNrRGl2IHtcbiAgICBtaW4taGVpZ2h0OiA2MDBweCA7IHdpZHRoOiAxMDAlIDtcbiAgICBwYWRkaW5nOiAwIDsgIHBhZGRpbmctdG9wOiA0NTBweCAhaW1wb3J0YW50IDsgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmxpZ2h0RGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgOyB0b3AgOiAxNjBweDsgbGVmdDogMCA7IG1pbi1oZWlnaHQ6IDQ1MHB4IDtcbiAgICB3aWR0aDogMTAwJSA7XG4gIH1cblxuICAubGlnaHRDaXJjbGUge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE5MHB4IDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTkwcHggOyAgdG9wOiAwJSAgO1xuICAgIGhlaWdodDogMTUwJSA7IHdpZHRoOiAxMDAlIDsgbGVmdDogMCUgO1xuICB9XG4gIC5sb2dvX2Rpdl9hbGwge1xuICAgIGxlZnQ6IDUwJSA7ICB0b3A6IDM1JSA7XG4gIH1cblxufVxuLmJhY2tncm91bmRfYWxsIHtcbiAgd2lkdGg6IDEwMCUgOyAgIGhlaWdodDogMTAwJSA7IG1hcmdpbi1sZWZ0OiAwIDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiA7IG92ZXJmbG93LXk6IGF1dG8gOyBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7IHdvcmQtc3BhY2luZzogM3Z3IDtcblxuICAubGlnaHREaXYge1xuICAgICB6LWluZGV4OiAyIDtcbiAgICAubGlnaHRDaXJjbGUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlIDsgZGlzcGxheTogbm9uZSA7XG5cbiAgICAgIG1pbi1oZWlnaHQ6IDM0MHB4IDtcbiAgICAgIC5sb2dvX2Rpdl9hbGwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgOyBoZWlnaHQgOiA0MDBweCA7IHdpZHRoOiA0MDBweCA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCAtNTAlICkgO1xuXG4gICAgICAgIC5jaXJjbGUxIHtcblxuICAgICAgICAgIC5jaXJjbGUxMSAsIC5jaXJjbGUxMiAsIC5jaXJjbGUxMyAsIC5jaXJjbGUxNCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgOyB3aWR0aDogMjZweCA7IGhlaWdodDogMjZweCA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVhOTQxIDsgY29sb3I6ICNlZWE5NDEgOyBmb250LXNpemU6IDE2cHggO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyIDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4IDtcbiAgICAgICAgICAgIHRvcDogMCUgOyBsZWZ0OiA1MCUgO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YTMgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiByb3RhMyA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgLW8tYW5pbWF0aW9uOiByb3RhMyA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGEzIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaXJjbGUxMiB7XG4gICAgICAgICAgICB0b3A6IDUwJSA7IGxlZnQ6IDAlIDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNpcmNsZTEzIHtcbiAgICAgICAgICAgIHRvcDogMTAwJSA7IGxlZnQ6IDUwJSA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaXJjbGUxNCB7XG4gICAgICAgICAgICB0b3A6IDUwJSA7IGxlZnQ6IDEwMCUgO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgOyBoZWlnaHQ6IDM4MHB4IDsgd2lkdGg6IDM4MHB4IDtcbiAgICAgICAgICB0b3A6IDEwcHggOyBsZWZ0OiAxMHB4IDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgOyBtYXJnaW46IDAgOyBwYWRkaW5nOiAwIDtcbiAgICAgICAgICBhbmltYXRpb246IHJvdGEyIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgLW1vei1hbmltYXRpb246IHJvdGEyIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgLW8tYW5pbWF0aW9uOiByb3RhMiA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhMiA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuXG5cbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlMiB7XG4gICAgICAgICAgLmNpcmNsZTIxICwgLmNpcmNsZTIyICwgLmNpcmNsZTIzICwgLmNpcmNsZTI0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IHdpZHRoOiAyMHB4IDsgaGVpZ2h0OiAyMHB4IDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzE1N2QgO1xuICAgICAgICAgICAgY29sb3I6ICM0YzE1N2QgOyBmb250LXNpemU6IDEwcHggOyB0ZXh0LWFsaWduOiBjZW50ZXIgO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHggO1xuICAgICAgICAgICAgdG9wOjEyJSA7IGxlZnQ6MTIlIDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA7XG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGE0IDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICAtbW96LWFuaW1hdGlvbjogcm90YTQgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIC1vLWFuaW1hdGlvbjogcm90YTQgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhNCA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFuaW1hdGlvbjogcm90YTEgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAtbW96LWFuaW1hdGlvbjogcm90YTEgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAtby1hbmltYXRpb246IHJvdGExIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGExIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlIDsgaGVpZ2h0OiAzMzBweCA7IHdpZHRoOiAzMzBweCA7IHRvcDogMzVweCA7IGxlZnQ6IDM1cHggO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA7IG1hcmdpbjogMCA7IHBhZGRpbmc6IDAgO1xuXG4gICAgICAgIH1cbiAgICAgICAgLmNpcmNsZTMge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IGhlaWdodDogMjgwcHggOyB3aWR0aDogMjgwcHggOyB0b3A6IDYwcHggOyBsZWZ0OiA2MHB4IDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgOyBtYXJnaW46IDAgOyBwYWRkaW5nOiAwIDsgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZCA7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IGhlaWdodDogMTAzJSA7IHdpZHRoOiAxMDMlIDtcbiAgICAgICAgICAgIHRvcDogLTEuNSUgOyBsZWZ0OiAtMS41JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICB9XG5cblxuICAgIH1cbiAgfVxuICAuYmxhY2tEaXYge1xuICAgICBwYWRkaW5nIDogMTVweCAxMHB4IDsgY29sb3I6IHdoaXRlIDsgZm9udC1zaXplOiAxM3B4IDtcbiAgICBtaW4taGVpZ2h0OiA1MDBweCA7IHBhZGRpbmctYm90dG9tOiAwO1xuICAgIC50ZXh0X2JnIHtcbiAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGUgOyB3aWR0aCA6IDAgOyBoZWlnaHQgOiA1cHggOyBib3JkZXItcmFkaXVzOiAyLjVweCA7IGJvdHRvbSA6IDAgOyB6LWluZGV4IDogMiA7XG5cbiAgICB9XG4gICAgLnRleHRfYmdfd2hpdGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvciA6IHdoaXRlIDtcbiAgICAgIGJveC1zaGFkb3cgOiAwIDAgMnB4IDBweCB3aGl0ZSA7XG4gICAgfVxuICAgIC50ZXh0X2JnMiB7XG4gICAgICBwb3NpdGlvbiA6IGFic29sdXRlIDsgd2lkdGggOiAxMDAlIDsgaGVpZ2h0IDogMTAwJSA7IHJpZ2h0IDogMCA7IHRvcCA6IDAgO1xuICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICMyZDJkMmQgO1xuICAgIH1cblxuICAgIC50ZXh0X2JnX3llbGxvdyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2ZkYjgyYyA7XG4gICAgICBib3gtc2hhZG93IDogMCAwIDJweCAwcHggI2ZkYjgyYyA7XG4gICAgfVxuXG4gICAgLnRleHRfZGl2e1xuICAgICAgZGlzcGxheTogbm9uZSA7XG4gICAgfVxuICAgIC5jb2RlVGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogMjBweCA7IGZvbnQtc2l6ZTogMTdweCA7IGNvbG9yOiAjNWE1NjU2IDsgIGZvbnQtZmFtaWx5OiAnTWEgU2hhbiBaaGVuZycsIGN1cnNpdmU7XG4gICAgfVxuICAgIC53aGl0ZVRleHQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdCA7ICBwb3NpdGlvbiA6IHJlbGF0aXZlIDsgZGlzcGxheSA6IGlubGluZS1ibG9jayA7XG4gICAgICAgZm9udC1zaXplIDogM3Z3IDsgY29sb3IgOiB3aGl0ZSA7IHBhZGRpbmcgOiA1cHggMTBweCA7XG4gICAgICAgZm9udC13ZWlnaHQgOiBib2xkIDsgd29yZC1zcGFjaW5nIDogNXB4IDsgd2lkdGggOiBhdXRvIDsgbWFyZ2luIDogMTVweCAwIDtcbiAgICB9XG4gICAgLlllbGxvd1RleHQge1xuICAgICAgIHBhZGRpbmcgOiA1cHggOyBwb3NpdGlvbiA6IHJlbGF0aXZlIDsgd2lkdGggOiBhdXRvIDtcbiAgICAgICBmb250LXNpemUgOiAzdncgOyBjb2xvciA6ICNmZGI4MmMgOyBsZXR0ZXItc3BhY2luZzogMnB4IDtcbiAgICAgIGZvbnQtd2VpZ2h0IDogYm9sZCA7IGRpc3BsYXk6IGJsb2NrIDsgbWFyZ2luOiAxNXB4IDAgO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4IDsgd29yZC1zcGFjaW5nIDogNXB4IDsgZGlzcGxheSA6IGlubGluZS1ibG9jayA7XG5cbiAgICB9XG4gICAgLmRhcmtUZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweCA7IGNvbG9yOiAjNWE1YTVhIDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkIDsgbWFyZ2luLXRvcCA6IDEwcHggO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1NzZweCkge1xuICAgICAgLndoaXRlVGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICAgIC5ZZWxsb3dUZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgICAgLmRhcmtUZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA5cHggO1xuICAgICAgfVxuICAgIH1cbiAgICAuYnRucyB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuY29udGFjdF9tZV9idG4ge1xuICAgICAgbWFyZ2luLXJpZ2h0IDogMjBweCA7XG4gICAgICBib3JkZXItY29sb3IgOiByZ2IoMjU1LCAxNjcsIDM4KSAhaW1wb3J0YW50IDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHggO1xuXG4gICAgfVxuICAgIC5jdl9idG4ge1xuICAgICAgYm9yZGVyLWNvbG9yIDogcmdiKDE1OCwgMTU4LCAxNTApICFpbXBvcnRhbnQgO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweCA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG59XG4iLCJhcHAtaG9tZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3OThweCkge1xuICAuYmxhY2tEaXYge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ0MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNzBweDtcbiAgICBwYWRkaW5nLXRvcDogNTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5ibGFja0RpdiAudGV4dENlbnRlciB7XG4gICAgcGFkZGluZy1yaWdodDogNDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgLmxpZ2h0RGl2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDQ0MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmxpZ2h0Q2lyY2xlIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cblxuICAubG9nb19kaXZfYWxsIHtcbiAgICBsZWZ0OiAyNSU7XG4gICAgdG9wOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5N3B4KSB7XG4gIC5ibGFja0RpdiB7XG4gICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLXRvcDogNDUwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAubGlnaHREaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgbWluLWhlaWdodDogNDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubGlnaHRDaXJjbGUge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE5MHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxOTBweDtcbiAgICB0b3A6IDAlO1xuICAgIGhlaWdodDogMTUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwJTtcbiAgfVxuXG4gIC5sb2dvX2Rpdl9hbGwge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDM1JTtcbiAgfVxufVxuLmJhY2tncm91bmRfYWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB3b3JkLXNwYWNpbmc6IDN2dztcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYge1xuICB6LWluZGV4OiAyO1xufVxuLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDM0MHB4O1xufVxuLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzgwcHg7XG4gIHdpZHRoOiAzODBweDtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYW5pbWF0aW9uOiByb3RhMiA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogcm90YTIgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiByb3RhMiA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YTIgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTEgLmNpcmNsZTExLCAuYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUxIC5jaXJjbGUxMiwgLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMSAuY2lyY2xlMTMsIC5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTEgLmNpcmNsZTE0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVhOTQxO1xuICBjb2xvcjogI2VlYTk0MTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB0b3A6IDAlO1xuICBsZWZ0OiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiByb3RhMyA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogcm90YTMgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiByb3RhMyA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YTMgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTEgLmNpcmNsZTEyIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDAlO1xufVxuLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMSAuY2lyY2xlMTMge1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTEgLmNpcmNsZTE0IHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDEwMCU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUyIHtcbiAgYW5pbWF0aW9uOiByb3RhMSA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogcm90YTEgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiByb3RhMSA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YTEgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMzMHB4O1xuICB3aWR0aDogMzMwcHg7XG4gIHRvcDogMzVweDtcbiAgbGVmdDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUyIC5jaXJjbGUyMSwgLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMiAuY2lyY2xlMjIsIC5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTIgLmNpcmNsZTIzLCAuYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUyIC5jaXJjbGUyNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjMTU3ZDtcbiAgY29sb3I6ICM0YzE1N2Q7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdG9wOiAxMiU7XG4gIGxlZnQ6IDEyJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHJvdGE0IDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiByb3RhNCA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IHJvdGE0IDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhNCA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xufVxuLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyODBweDtcbiAgd2lkdGg6IDI4MHB4O1xuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xufVxuLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAzJTtcbiAgd2lkdGg6IDEwMyU7XG4gIHRvcDogLTEuNSU7XG4gIGxlZnQ6IC0xLjUlO1xufVxuLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiB7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLnRleHRfYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMi41cHg7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMjtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLnRleHRfYmdfd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAwcHggd2hpdGU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC50ZXh0X2JnMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLnRleHRfYmdfeWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjgyYztcbiAgYm94LXNoYWRvdzogMCAwIDJweCAwcHggI2ZkYjgyYztcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLnRleHRfZGl2IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLmNvZGVUZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICM1YTU2NTY7XG4gIGZvbnQtZmFtaWx5OiBcIk1hIFNoYW4gWmhlbmdcIiwgY3Vyc2l2ZTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLndoaXRlVGV4dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDN2dztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdvcmQtc3BhY2luZzogNXB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC5ZZWxsb3dUZXh0IHtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LXNpemU6IDN2dztcbiAgY29sb3I6ICNmZGI4MmM7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgd29yZC1zcGFjaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLmRhcmtUZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzVhNWE1YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC53aGl0ZVRleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC5ZZWxsb3dUZXh0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAuZGFya1RleHQge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC5idG5zIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC5jb250YWN0X21lX2J0biB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZhNzI2ICFpbXBvcnRhbnQ7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLmN2X2J0biB7XG4gIGJvcmRlci1jb2xvcjogIzllOWU5NiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-animate */ "./node_modules/ng-animate/fesm2015/ng-animate.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.enterAnimation = {
            animation: ng_animate__WEBPACK_IMPORTED_MODULE_3__["fadeInDown"],
            delay: 50,
            type: 'word'
        };
        this.whiteAnimation = {
            animation: ng_animate__WEBPACK_IMPORTED_MODULE_3__["fadeInLeft"],
            delay: 50,
            type: 'letter'
        };
        this.yellowAnimation = {
            animation: ng_animate__WEBPACK_IMPORTED_MODULE_3__["fadeInRight"],
            delay: 50,
            type: 'letter'
        };
        this.darkAnimation = {
            animation: ng_animate__WEBPACK_IMPORTED_MODULE_3__["fadeInUp"],
            delay: 50,
            type: 'word'
        };
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
        jquery__WEBPACK_IMPORTED_MODULE_2__(".homeSidenav").addClass('activeItem');
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".lightDiv").css('background', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_2__(".darkText").css("visibility", 'hidden');
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".circle11 , .circle12 , .circle13 , .circle14 ")
                    .css({ "width": 0, "height": 0, "top": "50%", "left": "50%", "opacity": "0" });
                jquery__WEBPACK_IMPORTED_MODULE_2__(".circle21 , .circle22 , .circle23 , .circle24 ")
                    .css({ "width": 0, "height": 0, "top": "50%", "left": "50%", "opacity": 0 });
                jquery__WEBPACK_IMPORTED_MODULE_2__(".circle3").css({ "opacity": "0" });
                jquery__WEBPACK_IMPORTED_MODULE_2__(".lightCircle").css({ "display": "inline-block" });
                jquery__WEBPACK_IMPORTED_MODULE_2__(".circle11 , .circle12 , .circle13 , .circle14 ").animate({
                    "width": "52px", "height": "52px", 'opacity': "1"
                }, 500, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".circle11 , .circle12 , .circle13 , .circle14 ").animate({
                        "width": "26px", "height": "26px", "background-color": "#fdb82c"
                    }, 300, function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".circle11").animate({ "top": "-2.7%", "left": "47.3%" }, 200, function () { });
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".circle12").animate({ "top": "47.3%", "left": "-2.7%" }, 200, function () { });
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".circle13").animate({ "top": "97.3%", "left": "47.3%" }, 200, function () { });
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".circle14").animate({ "top": "47.3%", "left": "97.3%" }, 200, function () {
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".circle11 , .circle12 , .circle13 , .circle14 ").css("color", "#2d2d2d");
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".lightDiv").css('background', '');
                        });
                    });
                });
                jquery__WEBPACK_IMPORTED_MODULE_2__(".circle21 , .circle22 , .circle23 , .circle24 ").animate({
                    "width": "40px", "height": "40px", 'opacity': "1"
                }, 500, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".circle21 , .circle22 , .circle23 , .circle24 ").animate({
                        "width": "20px", "height": "20px"
                    }, 300, function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".circle21").animate({ "top": "12%", "left": "12%" }, 200, function () { });
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".circle22").animate({ "top": "82%", "left": "12%" }, 200, function () { });
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".circle23").animate({ "top": "12%", "left": "82%" }, 200, function () { });
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".circle24").animate({ "top": "82%", "left": "82%" }, 200, function () {
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".circle3").animate({ "opacity": "1" }, 500, function () { });
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".circle21 , .circle22 , .circle23 , .circle24 ").css({ "color": "rgb(216, 210, 254)" });
                        });
                    });
                });
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".text_div").fadeIn(0);
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".animate_all").click();
                }, 2000);
                setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".text_bg2").animate({ 'width': '98%' }, 200, function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".text_bg2").animate({ "width": "0" }, 400, "swing", function () { });
                    });
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".texta .text_bg").animate({ 'left': "0%", 'width': "20px" }, 200, function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".texta .text_bg").animate({ "left": '100%', 'width': "0" }, 400, "swing", function () {
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".darkText").css({ 'visibility': 'visible' });
                            setTimeout(() => {
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".contact_me_btn , .cv_btn").css({ 'visibility': 'visible' });
                            }, 500);
                        });
                    });
                }, 3000);
            }, 600);
        });
    }
    contactme() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
        jquery__WEBPACK_IMPORTED_MODULE_2__(".contactSidenav").addClass('activeItem');
        jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_page_div").fadeIn(200);
        jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_content").fadeIn(200);
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_div").animate({ "width": "100%", "height": "100%", "border-radius": "0%" }, 500, function () { });
        }, 500);
        setTimeout(() => {
            this.router.navigate(['contact']);
        }, 1000);
    }
    getcv() {
        // document.querySelector('.get_cv_a').click() ;
        window.open('assets/imgs/cv1.pdf');
    }
    AnimationsText(table) {
        table.forEach(element => {
            element.enterPlayer.play();
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('enterAnimation1', { read: '', static: false })
], HomeComponent.prototype, "enterAnimation1", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/projects.service.ts":
/*!*************************************!*\
  !*** ./src/app/projects.service.ts ***!
  \*************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsService = class ProjectsService {
    constructor() {
        this.projectsList = [
            {
                name: "fournishop",
                imgs_path: 'assets/imgs/fournishop/',
                background: "background.png",
                imgs: ["resp1.png", "resp2.png"]
            },
            {
                name: "esi",
                imgs_path: 'assets/imgs/esi/',
                background: "background.png",
                imgs: ["resp1.png", "resp2.png"]
            },
            {
                name: "sits",
                imgs_path: 'assets/imgs/sits/',
                background: "background.png",
                imgs: ["resp1.png", "resp2.png"]
            },
            {
                name: "dictili",
                imgs_path: 'assets/imgs/dictili/',
                background: "background.png",
                imgs: ["resp1.png", "resp2.png"]
            },
            {
                name: "portfolio",
                imgs_path: 'assets/imgs/portfolio/',
                background: "background.png",
                imgs: ["resp1.png", "resp2.png"]
            },
            {
                name: "tchatchet",
                imgs_path: 'assets/imgs/tchatchet/',
                background: "background.png",
                imgs: ["log.png", "1.png", "2.png", '3.png']
            }
        ];
    }
};
ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/devshadow/Downloads/portefolio-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map