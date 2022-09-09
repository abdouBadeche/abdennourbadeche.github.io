(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"all_portfolio_backgrouder\">\n  <img src=\"assets/img/back_all.jpg\" alt=\"\" >\n  <!-- <div class=\"waveWrapper waveAnimation\">\n    <div class=\"waveWrapperInner bgTop\">\n      <div class=\"wave waveTop\" style=\"background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')\"></div>\n    </div>\n    <div class=\"waveWrapperInner bgMiddle\">\n      <div class=\"wave waveMiddle\" style=\"background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')\"></div>\n    </div>\n    <div class=\"waveWrapperInner bgBottom\">\n      <div class=\"wave waveBottom\" style=\"background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')\"></div>\n    </div>\n  </div> -->\n</div>\n<mat-sidenav-container fullscreen class=\"mat-elevation-z8\">\n  <mat-sidenav\n    mode=\"side\"\n    [opened] = \"opennedSidenav\"\n    >\n    <ng-scrollbar shown='hover' >\n    <div class=\"allItems\">\n\n      <div class=\"topItemsSidenav\">\n            <div class=\"toggleSidenav itemSidenav\" style=\"font-size: 25px ;\">\n              <img src=\"assets/imgs/dark_yellow.png\" alt=\"\">\n            </div>\n\n          </div>\n\n          <div class=\"CenterItemsSidenav\">\n            <div class=\"homeSidenav itemSidenav activeItem\" (click)=\"GoPage('home')\">\n              <i class=\"material-icons\">home</i><span>HOME</span>\n            </div>\n            <div class=\"aboutSidenav itemSidenav\" (click)=\"GoPage('about')\">\n              <i class=\"material-icons\">perm_identity</i> <span>ABOUT</span>\n            </div>\n            <div class=\"contactSidenav itemSidenav\" (click)=\"GoPage('contact')\">\n              <i class=\"material-icons\">mail_outline</i> <span>CONTACT</span>\n            </div>\n            <div class=\"skillsSidenav itemSidenav\" (click)=\"GoPage('skills')\">\n              <i class=\"material-icons\">school</i> <span>SKILLS</span>\n            </div>\n            <div class=\"workSidenav itemSidenav\" (click)=\"GoPage('work')\">\n              <i class=\"material-icons\">remove_red_eye</i> <span>MY WORK</span>\n            </div>\n          </div>\n\n          <div class=\"bottomItemsSidenav\">\n            <div class=\"fbSidenav itemSidenav\">\n              <i class=\"fab fa-facebook-f    \" (click)=\"click_fb()\" ></i>\n            </div>\n            <div class=\"twitterSidenav itemSidenav\">\n              <i class=\"fab fa-linkedin-in    \" (click)=\"click_in()\" ></i>\n            </div>\n            <div class=\"githubSidenav itemSidenav\">\n              <i class=\"fab fa-github    \" (click)=\"click_gh()\" ></i>\n            </div>\n          </div>\n\n        </div>\n      </ng-scrollbar>\n\n  </mat-sidenav>\n  <mat-sidenav-content\n  [ngClass]=\"{'opennedSidenav' : opennedSidenav , 'closedSidenav' : !opennedSidenav }\"\n  >\n        <mat-toolbar class=\"fixed-top w-100 d-sm-none\"\n        [ngClass]=\"{'opennedSidenav' : opennedSidenav , 'closedSidenav' : !opennedSidenav }\"\n\n        >\n          <div class=\"open-sidenav\">\n            <i class=\"fa fa-align-left\" aria-hidden=\"true\" (click)=\"toggleSidenav()\"></i>\n          </div>\n          <div class=\"toolbar-logo\">\n            <img src=\"assets/imgs/yellow_dark.png\" alt=\"\">\n          </div>\n        </mat-toolbar>\n    <div class=\"loading_page_div\">\n      <div class=\"loading_div\">\n        <div class=\"loading_content\">\n            <!-- <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n            <img src=\"assets/imgs/dark_yellow.png\" alt=\"\"> -->\n\n            <!-- <div class=\"loadingio-spinner-spinner-2yh38bgz97r\"><div class=\"ldio-77ogrmnylu\">\n              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>\n              </div></div> -->\n\n              <!-- <div class=\"circle\">\n                <div class=\"wave\">\n\n                </div>\n            </div> -->\n\n            <div class=\"load\">\n              <div class=\"load-one\"></div>\n              <div class=\"load-two\"></div>\n              <div class=\"load-three\"></div>\n            </div>\n\n\n        </div>\n      </div>\n    </div>\n\n    <ng-scrollbar shown='hover' >\n      <div class=\"content_not_loading w-100\">\n        <router-outlet></router-outlet>\n      </div>\n    </ng-scrollbar>\n\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\" background_all\">\n  <div class=\"blackDiv\">\n    <div class=\"topText text_div\">\n      <teximate #enterAnimation1 text=\"<!Doctype html>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n      <div style=\"padding-left: 20px ;\">\n        <teximate #enterAnimation2 text=\"<head>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n        <div class=\"textCenter\">\n          <teximate #enterAnimation3 text=\"<title>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n          <div style=\"padding-left: 20px ;\">\n            <div class=\"whiteText texta texta1\">\n              <div class=\"text_bg text_bg_white\"></div>\n              <div class=\"text_bg2\"></div>\n              <div class=\"hellowim\">\n                Hello , I'm\n              </div>\n            </div>\n            <br>\n            <div class=\"YellowText texta texta2\" >\n               <div class=\"text_bg text_bg_yellow\"></div>\n               <div class=\"text_bg2\"></div>\n               <div class=\"badecheabdennour\">\n                 Badeche Abdennour .\n               </div>\n              </div>\n          </div>\n          <teximate #enterAnimation4 text=\"</title>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n        </div>\n        <teximate #enterAnimation5 text=\"</head>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n        <teximate #enterAnimation6 text=\"<body>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n      </div>\n\n    </div>\n\n    <div class=\"centerText  text_div textCenter\"  style=\"padding-left : 60px ;\">\n\n      <div class=\"whiteText texta texta3\">\n        <div class=\"text_bg text_bg_white\"></div>\n        <div class=\"text_bg2\"></div>\n        <div class=\"imfullstack\">\n          I'm a Full-Stack Web Developer\n        </div>\n      </div>\n      <br>\n      <teximate #darkAnimation1 text=\"Front End Developer | Back End Developer | Cross Plateform Developer \" class=\"darkText paragraph_marg\" [enter]=\"darkAnimation\"></teximate>\n      <button mat-stroked-button color='accent' class=\"contact_me_btn\" (click)=\"contactme()\" >  <i class=\"material-icons\">mail_outline</i> Contact Me </button>\n      <button mat-stroked-button color='warn'  class=\"cv_btn\"  (click)=\"getcv()\" > <i class=\"material-icons\">perm_identity</i> Get My Resume </button>\n      <a href=\"assets/imgs/AbdennourBadeche.jpg\" download style=\"display: none;\" class=\"get_cv_a\"></a>\n    </div>\n\n    <div class=\"bottomText text_div\">\n      <div  style=\"padding-left : 20px ;\">\n        <teximate #enterAnimation7 text=\"</body>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n      </div>\n\n\n      <teximate #enterAnimation8 text=\"</html>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n    </div>\n\n    <button class=\"animate_all\" (click)=\"AnimationsText([enterAnimation1 , enterAnimation2 , enterAnimation3 , enterAnimation4 , enterAnimation5 , enterAnimation6 , enterAnimation7 , enterAnimation8 ])\" style=\"visibility: hidden;\">Play</button>\n\n  </div>\n\n\n  <div class=\"lightDiv\">\n    <div class=\"lightCircle\">\n      <div class=\"logo_div_all\">\n        <div class=\"circle1\">\n          <div class=\"circle11\"> <i class=\"fab fa-html5    \"></i> </div>\n          <div class=\"circle12\"> <i class=\"fab fa-css3    \"></i> </div>\n          <div class=\"circle13\"> <i class=\"fas fa-code    \"></i> </div>\n          <div class=\"circle14\"> <i class=\"fab fa-node-js    \"></i> </div>\n        </div>\n        <div class=\"circle2\">\n          <div class=\"circle21\"> <i class=\"fab fa-angular    \"></i> </div>\n          <div class=\"circle22\"> <i class=\"fab fa-laravel    \"></i> </div>\n          <div class=\"circle23\"> <i class=\"fas fa-database    \"></i> </div>\n          <div class=\"circle24\"> <i class=\"fab fa-react    \"></i></div>\n        </div>\n        <div class=\"circle3\">\n          <img src=\"assets/imgs/home.png\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo/photo.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo/photo.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"all_photo\">\n  <div class=\"photo_viewer\">\n    <div class=\"left_photo\">\n      <img src=\"assets/imgs/esi/acc3.png\" alt=\"\">\n    </div>\n    <div class=\"center_photo\">\n      <img src=\"assets/imgs/esi/acc2.png\" alt=\"\">\n    </div>\n    <div class=\"right_photo\">\n      <img src=\"assets/imgs/esi/0.png\" alt=\"\">\n    </div>\n\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                {
                    path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
                },
                {
                    path: 'contact', loadChildren: function () { return Promise.all(/*! import() | contact-contact-module */ [__webpack_require__.e("default~contact-contact-module~skills-skills-module~work-work-module"), __webpack_require__.e("default~about-about-module~contact-contact-module"), __webpack_require__.e("contact-contact-module")]).then(__webpack_require__.bind(null, /*! ./contact/contact.module */ "./src/app/contact/contact.module.ts")).then(function (m) { return m.ContactModule; }); }
                },
                {
                    path: 'about', loadChildren: function () { return Promise.all(/*! import() | about-about-module */ [__webpack_require__.e("default~about-about-module~contact-contact-module"), __webpack_require__.e("about-about-module")]).then(__webpack_require__.bind(null, /*! ./about/about.module */ "./src/app/about/about.module.ts")).then(function (m) { return m.AboutModule; }); }
                },
                {
                    path: 'skills', loadChildren: function () { return Promise.all(/*! import() | skills-skills-module */ [__webpack_require__.e("default~contact-contact-module~skills-skills-module~work-work-module"), __webpack_require__.e("skills-skills-module")]).then(__webpack_require__.bind(null, /*! ./skills/skills.module */ "./src/app/skills/skills.module.ts")).then(function (m) { return m.SkillsModule; }); }
                },
                {
                    path: 'myWork', loadChildren: function () { return Promise.all(/*! import() | work-work-module */ [__webpack_require__.e("default~contact-contact-module~skills-skills-module~work-work-module"), __webpack_require__.e("work-work-module")]).then(__webpack_require__.bind(null, /*! ./work/work.module */ "./src/app/work/work.module.ts")).then(function (m) { return m.WorkModule; }); }
                },
                { path: "**", redirectTo: "", pathMatch: "full" },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".ng-scroll-view {\n  width: calc(100% + 18px ) !important;\n}\n\n::ng-deep app-home, ::ng-deep app-about, ::ng-deep app-work, ::ng-deep app-skills, ::ng-deep app-contact {\n  width: 100%;\n}\n\nmat-sidenav-container mat-sidenav {\n  width: 70px;\n  height: 100%;\n  background-color: #2d2d2d69 !important;\n  overflow: hidden;\n  direction: rtl;\n}\n\nmat-sidenav-container mat-sidenav ng-scrollbar {\n  --scroll-view-margin: 0 0 0 -18px ;\n  --scrollbar-size: 0 ;\n}\n\nmat-sidenav-container mat-sidenav .allItems {\n  min-height: 500px;\n  height: 100%;\n  width: 70px;\n  position: relative;\n}\n\nmat-sidenav-container mat-sidenav .allItems .topItemsSidenav {\n  position: relative;\n  height: 50px;\n  width: 100%;\n  margin: 0;\n  margin-top: 20px;\n  padding: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .topItemsSidenav .itemSidenav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\nmat-sidenav-container mat-sidenav .allItems .topItemsSidenav .itemSidenav img {\n  position: absolute;\n  width: 50px;\n  top: 0;\n  height: auto;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav {\n  position: absolute;\n  width: 100%;\n  height: 250px;\n  top: 50%;\n  left: 0;\n  transform: translateY(-60%);\n  margin: 0;\n  padding: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav {\n  position: relative;\n  cursor: pointer;\n  height: 50px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 0;\n  line-height: 50px;\n  font-size: 25px;\n  color: white;\n  text-align: center;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav i {\n  opacity: 1;\n  -webkit-animation: itemsidenavH 100ms linear;\n          animation: itemsidenavH 100ms linear;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav span {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  font-size: 11px;\n  font-weight: bold;\n  text-align: center;\n  opacity: 0;\n  -webkit-animation: itemsidenavV 100ms linear;\n          animation: itemsidenavV 100ms linear;\n  color: white;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav.activeItem {\n  color: #fdb82c;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav:hover {\n  color: #2d2d2d;\n  text-shadow: 0 0 9px white;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav:hover i {\n  -webkit-animation: itemsidenavV 300ms linear;\n          animation: itemsidenavV 300ms linear;\n  opacity: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav:hover span {\n  -webkit-animation: itemsidenavH 300ms linear;\n          animation: itemsidenavH 300ms linear;\n  opacity: 1;\n}\n\nmat-sidenav-container mat-sidenav .allItems .bottomItemsSidenav {\n  position: absolute;\n  height: 120px;\n  width: 100%;\n  bottom: 20px;\n  margin: 0;\n  padding: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .bottomItemsSidenav .itemSidenav {\n  height: 40px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  line-height: 40px;\n  font-size: 13px;\n  color: #efefef;\n  text-align: center;\n}\n\nmat-sidenav-container mat-sidenav .allItems .bottomItemsSidenav .itemSidenav i {\n  cursor: pointer;\n}\n\nmat-sidenav-container mat-toolbar {\n  height: 60px;\n  background-color: #68605000;\n  box-shadow: 0 0 4px 1px #1212114f;\n}\n\nmat-sidenav-container mat-toolbar .open-sidenav {\n  position: absolute;\n  height: 100%;\n  width: 50px;\n  color: #fdb82c;\n  text-align: center;\n  line-height: 60px;\n}\n\nmat-sidenav-container mat-toolbar .open-sidenav i {\n  cursor: pointer;\n}\n\nmat-sidenav-container mat-toolbar .toolbar-logo {\n  position: absolute;\n  height: 100%;\n  width: 80px;\n  right: 0;\n  overflow: hidden;\n}\n\nmat-sidenav-container mat-toolbar .toolbar-logo img {\n  position: absolute;\n  height: 70%;\n  width: auto;\n  top: 15%;\n  left: 50%;\n  transform: translateX(-50%);\n  -webkit-filter: drop-shadow(0 0 2px black);\n          filter: drop-shadow(0 0 2px black);\n}\n\nmat-sidenav-container mat-toolbar.closedSidenav {\n  padding-left: 0px;\n}\n\nmat-sidenav-container mat-toolbar.opennedSidenav {\n  padding-left: 70px;\n}\n\nmat-sidenav-container mat-sidenav-content.closedSidenav {\n  margin-left: 0px;\n}\n\nmat-sidenav-container mat-sidenav-content.opennedSidenav {\n  margin-left: 70px;\n}\n\nmat-sidenav-container mat-sidenav-content {\n  position: relative;\n  overflow-x: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #2d2d2d69 !important;\n}\n\n@media screen and (max-width: 576px) {\n  mat-sidenav-container mat-sidenav-content {\n    padding-top: 60px;\n    align-items: flex-start;\n  }\n  mat-sidenav-container mat-sidenav-content ::ng-deep .contact_me_btn {\n    margin-left: -30px !important;\n  }\n  mat-sidenav-container mat-sidenav-content ::ng-deep .paragraph_marg p {\n    margin-left: -50px !important;\n  }\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: hidden;\n  display: none;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .load {\n  width: 100%;\n  height: 100vh;\n  background-color: #181818;\n  /*     margin:0px; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .load div {\n  width: 25px;\n  height: 25px;\n  background-color: #eea941;\n  margin-left: 5px;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  margin-top: calc(50px - 12.5px);\n  -webkit-animation-name: loading;\n          animation-name: loading;\n  -webkit-animation-duration: 1.2s;\n          animation-duration: 1.2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .load-two {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .load-three {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50%;\n  left: 50%;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  overflow: hidden;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content {\n  position: absolute;\n  width: 200px;\n  height: 210px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: none;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content img {\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  top: 0;\n  left: 0;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content mat-progress-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content mat-progress-bar .mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #2d2d2d69 !important;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content .circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 150px;\n  height: 150px;\n  background: #ccc;\n  border: 3px solid #614b20;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content .wave {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #fdb82c;\n  border-radius: 50%;\n  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content .wave:before,\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content .wave:after {\n  content: \"\";\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -75%);\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content .wave:before {\n  border-radius: 45%;\n  background: #2d2d2d69;\n  -webkit-animation: animate 5s linear infinite;\n          animation: animate 5s linear infinite;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content .wave:after {\n  border-radius: 40%;\n  background: #2d2d2d69;\n  -webkit-animation: animate 10s linear infinite;\n          animation: animate 10s linear infinite;\n}\n\n@-webkit-keyframes animate {\n  0% {\n    transform: translate(-50%, -75%) rotate(0deg);\n  }\n  100% {\n    transform: translate(-50%, -75%) rotate(360deg);\n  }\n}\n\n@keyframes animate {\n  0% {\n    transform: translate(-50%, -75%) rotate(0deg);\n  }\n  100% {\n    transform: translate(-50%, -75%) rotate(360deg);\n  }\n}\n\n.teximate-paragraph {\n  margin: 0 !important;\n}\n\n@keyframes rota2 {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes rota2 {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rota1 {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n@-webkit-keyframes rota1 {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n@-webkit-keyframes rota3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n\n@keyframes rota3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n\n@-webkit-keyframes rota4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rota4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes itemsidenavV {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes itemsidenavV {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes itemsidenavH {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes itemsidenavH {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.all_portfolio_backgrouder {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: 1;\n  background-color: black;\n}\n\n.all_portfolio_backgrouder img {\n  position: absolute;\n  height: 100%;\n  width: auto;\n  right: 0;\n  top: 0;\n}\n\n@-webkit-keyframes move_wave {\n  0% {\n    transform: translateX(0) translateZ(0) scaleY(1);\n  }\n  50% {\n    transform: translateX(-25%) translateZ(0) scaleY(0.55);\n  }\n  100% {\n    transform: translateX(-50%) translateZ(0) scaleY(1);\n  }\n}\n\n@keyframes move_wave {\n  0% {\n    transform: translateX(0) translateZ(0) scaleY(1);\n  }\n  50% {\n    transform: translateX(-25%) translateZ(0) scaleY(0.55);\n  }\n  100% {\n    transform: translateX(-50%) translateZ(0) scaleY(1);\n  }\n}\n\n.all_portfolio_backgrouder .waveWrapper {\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  margin: auto;\n}\n\n.all_portfolio_backgrouder .waveWrapperInner {\n  position: absolute;\n  width: 100%;\n  overflow: hidden;\n  height: 100%;\n  bottom: 0;\n  background-image: linear-gradient(to top, #863737 20%, #0c0c0c 80%);\n}\n\n.all_portfolio_backgrouder .bgTop {\n  z-index: 15;\n  opacity: 0.5;\n}\n\n.all_portfolio_backgrouder .bgMiddle {\n  z-index: 10;\n  opacity: 0.75;\n}\n\n.all_portfolio_backgrouder .bgBottom {\n  z-index: 5;\n}\n\n.all_portfolio_backgrouder .wave {\n  position: absolute;\n  left: 0;\n  width: 200%;\n  height: 100%;\n  background-repeat: repeat no-repeat;\n  background-position: 0 bottom;\n  transform-origin: center bottom;\n}\n\n.all_portfolio_backgrouder .waveTop {\n  background-size: 50% 100px;\n}\n\n.all_portfolio_backgrouder .waveAnimation .waveTop {\n  animation: move-wave 3s;\n  -webkit-animation: move-wave 3s;\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n.all_portfolio_backgrouder .waveMiddle {\n  background-size: 50% 120px;\n}\n\n.all_portfolio_backgrouder .waveAnimation .waveMiddle {\n  -webkit-animation: move_wave 10s linear infinite;\n          animation: move_wave 10s linear infinite;\n}\n\n.all_portfolio_backgrouder .waveBottom {\n  background-size: 50% 100px;\n}\n\n.all_portfolio_backgrouder .waveAnimation .waveBottom {\n  -webkit-animation: move_wave 15s linear infinite;\n          animation: move_wave 15s linear infinite;\n}\n\n.content_not_loading {\n  width: 100% !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n}\n\n@-webkit-keyframes loading {\n  to {\n    opacity: 0.3;\n    transform: translateY(-25px);\n    -webkit-transform: translateY(-25px);\n    -moz-transform: translateY(-25px);\n    -ms-transform: translateY(-25px);\n    -o-transform: translateY(-25px);\n  }\n}\n\n@keyframes loading {\n  to {\n    opacity: 0.3;\n    transform: translateY(-25px);\n    -webkit-transform: translateY(-25px);\n    -moz-transform: translateY(-25px);\n    -ms-transform: translateY(-25px);\n    -o-transform: translateY(-25px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldnNoYWRvdy9Eb3dubG9hZHMvcG9ydGVmb2xpby1tYXN0ZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQ0U7RUFPRSxXQUFBO0VBQWMsWUFBQTtFQUFlLHNDQUFBO0VBQXlDLGdCQUFBO0VBQWtCLGNBQUE7QUNBNUY7O0FESlE7RUFDRSxrQ0FBQTtFQUNBLG9CQUFBO0FDTVY7O0FESEk7RUFDRyxpQkFBQTtFQUFtQixZQUFBO0VBQWUsV0FBQTtFQUFhLGtCQUFBO0FDUXREOztBRFBNO0VBQ0Usa0JBQUE7RUFBcUIsWUFBQTtFQUFlLFdBQUE7RUFBYyxTQUFBO0VBQVksZ0JBQUE7RUFDOUQsVUFBQTtBQ2FSOztBRFpRO0VBQ0Usa0JBQUE7RUFBcUIsTUFBQTtFQUFTLE9BQUE7RUFBVyxXQUFBO0VBQWMsWUFBQTtBQ2tCakU7O0FEakJVO0VBQ0Usa0JBQUE7RUFBcUIsV0FBQTtFQUFjLE1BQUE7RUFBUyxZQUFBO0VBQWUsU0FBQTtFQUMzRCwyQkFBQTtBQ3VCWjs7QURsQk07RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsYUFBQTtFQUFlLFFBQUE7RUFBVSxPQUFBO0VBQVMsMkJBQUE7RUFDbkUsU0FBQTtFQUFXLFVBQUE7QUMwQm5COztBRHpCUTtFQUNFLGtCQUFBO0VBQW9CLGVBQUE7RUFDcEIsWUFBQTtFQUFlLFdBQUE7RUFBYyxTQUFBO0VBQWEsVUFBQTtFQUMxQyxnQkFBQTtFQUNBLGlCQUFBO0VBQXFCLGVBQUE7RUFDckIsWUFBQTtFQUNBLGtCQUFBO0FDZ0NWOztBRC9CVTtFQUFHLFVBQUE7RUFBWSw0Q0FBQTtVQUFBLG9DQUFBO0FDbUN6Qjs7QURsQ1U7RUFBTSxrQkFBQTtFQUFvQixZQUFBO0VBQWUsV0FBQTtFQUFhLE1BQUE7RUFBUSxPQUFBO0VB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O0FEckhFO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUN1SE47O0FEckhFO0VBQ0ksMEJBQUE7QUN1SE47O0FEckhFO0VBQ0UsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUN1SEo7O0FEckhFO0VBQ0ksMEJBQUE7QUN1SE47O0FEckhFO0VBQ0ksZ0RBQUE7VUFBQSx3Q0FBQTtBQ3VITjs7QURySEU7RUFDSSwwQkFBQTtBQ3VITjs7QURySEU7RUFDSSxnREFBQTtVQUFBLHdDQUFBO0FDdUhOOztBRG5IQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ3NIRjs7QURuSEE7RUFDRTtJQUNJLFlBQUE7SUFDQSw0QkFBQTtJQUNBLG9DQUFBO0lBQ0EsaUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0VDc0hKO0FBQ0Y7O0FEOUhBO0VBQ0U7SUFDSSxZQUFBO0lBQ0EsNEJBQUE7SUFDQSxvQ0FBQTtJQUNBLGlDQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtFQ3NISjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXNjcm9sbC12aWV3e1xuICB3aWR0aDogY2FsYygxMDAlICsgMThweCApICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYXBwLWhvbWUgLDo6bmctZGVlcCAgYXBwLWFib3V0ICw6Om5nLWRlZXAgIGFwcC13b3JrICw6Om5nLWRlZXAgIGFwcC1za2lsbHMgLCA6Om5nLWRlZXAgYXBwLWNvbnRhY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIG1hdC1zaWRlbmF2IHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNTc2cHgpIHtcbiAgICB9XG4gICAgICAgIG5nLXNjcm9sbGJhciB7XG4gICAgICAgICAgLS1zY3JvbGwtdmlldy1tYXJnaW4gOiAwIDAgMCAtMThweCA7XG4gICAgICAgICAgLS1zY3JvbGxiYXItc2l6ZSA6IDAgO1xuICAgICAgICB9XG4gICAgd2lkdGg6IDcwcHggOyBoZWlnaHQ6IDEwMCUgOyBiYWNrZ3JvdW5kLWNvbG9yIDojMmQyZDJkNjkgIWltcG9ydGFudCA7IG92ZXJmbG93OiBoaWRkZW47IGRpcmVjdGlvbjogcnRsO1xuICAgIC5hbGxJdGVtcyB7XG4gICAgICAgbWluLWhlaWdodDogNTAwcHg7IGhlaWdodDogMTAwJSA7IHdpZHRoOiA3MHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAudG9wSXRlbXNTaWRlbmF2IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlIDsgaGVpZ2h0OiA1MHB4IDsgd2lkdGg6IDEwMCUgOyBtYXJnaW4gOjAgOyBtYXJnaW4tdG9wOiAyMHB4IDtcbiAgICAgICAgcGFkZGluZzogMCA7XG4gICAgICAgIC5pdGVtU2lkZW5hdntcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgOyB0b3A6IDAgOyBsZWZ0IDogMCA7IHdpZHRoOiAxMDAlIDsgaGVpZ2h0OiAxMDAlIDtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlIDsgd2lkdGg6IDUwcHggOyB0b3A6IDAgOyBoZWlnaHQ6IGF1dG8gOyBsZWZ0OiA1MCUgO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLkNlbnRlckl0ZW1zU2lkZW5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMjUwcHg7IHRvcDogNTAlOyBsZWZ0OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYwJSk7XG4gICAgICAgIG1hcmdpbjogMDsgcGFkZGluZzogMDtcbiAgICAgICAgLml0ZW1TaWRlbmF2e1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGhlaWdodDogNTBweCA7IHdpZHRoOiAxMDAlIDsgbWFyZ2luIDogMCA7IHBhZGRpbmc6IDAgO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHggOyAgZm9udC1zaXplOiAyNXB4IDtcbiAgICAgICAgICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1KSA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyIDtcbiAgICAgICAgICBpIHtvcGFjaXR5OiAxOyBhbmltYXRpb246IGl0ZW1zaWRlbmF2SCAxMDBtcyBsaW5lYXI7IH1cbiAgICAgICAgICBzcGFuIHtwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogMTAwJSA7IHdpZHRoOiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7IGZvbnQtc2l6ZTogMTFweCA7IGZvbnQtd2VpZ2h0OiBib2xkOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG9wYWNpdHk6IDA7IGFuaW1hdGlvbjogaXRlbXNpZGVuYXZWIDEwMG1zIGxpbmVhcjsgY29sb3I6IHdoaXRlO31cbiAgICAgICAgfVxuICAgICAgICAuaXRlbVNpZGVuYXYuYWN0aXZlSXRlbSB7IGNvbG9yIDogI2ZkYjgyYyA7IH1cbiAgICAgICAgLml0ZW1TaWRlbmF2OmhvdmVyIHtcbiAgICAgICAgICBjb2xvciA6ICMyZDJkMmQgOyB0ZXh0LXNoYWRvdzogMCAwIDlweCB3aGl0ZTtcbiAgICAgICAgICBpIHthbmltYXRpb246IGl0ZW1zaWRlbmF2ViAzMDBtcyBsaW5lYXIgOyBvcGFjaXR5OiAwO31cbiAgICAgICAgICBzcGFuIHthbmltYXRpb246IGl0ZW1zaWRlbmF2SCAzMDBtcyBsaW5lYXIgOyBvcGFjaXR5OiAxO31cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIC5ib3R0b21JdGVtc1NpZGVuYXYge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgOyBoZWlnaHQ6IDEyMHB4IDsgd2lkdGg6IDEwMCUgOyBib3R0b206IDIwcHggOyBtYXJnaW4gOjAgO1xuICAgICAgICBwYWRkaW5nOiAwIDtcbiAgICAgICAgLml0ZW1TaWRlbmF2IHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHggOyB3aWR0aDogMTAwJSA7IG1hcmdpbiA6IDAgOyBwYWRkaW5nOiAwIDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweCA7ICBmb250LXNpemU6IDEzcHggOyBjb2xvcjogI2VmZWZlZiA7IHRleHQtYWxpZ246IGNlbnRlciA7XG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cblxuXG4gIH1cblxuICBtYXQtdG9vbGJhciB7XG4gICAgaGVpZ2h0OiA2MHB4IDsgYmFja2dyb3VuZC1jb2xvcjogIzY4NjA1MDAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggMXB4ICMxMjEyMTE0ZjtcblxuICAgIC5vcGVuLXNpZGVuYXYge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiA1MHB4IDsgY29sb3I6ICNmZGI4MmM7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgOyBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgIGkge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC50b29sYmFyLWxvZ28ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiA4MHB4OyByaWdodDogMDsgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiA3MCU7IHdpZHRoOiBhdXRvOyB0b3A6IDE1JTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDJweCBibGFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWF0LXRvb2xiYXIuY2xvc2VkU2lkZW5hdiB7XG4gICAgcGFkZGluZy1sZWZ0IDogMHB4IDtcbiAgfVxuXG4gIG1hdC10b29sYmFyLm9wZW5uZWRTaWRlbmF2IHtcbiAgICBwYWRkaW5nLWxlZnQgOiA3MHB4IDtcbiAgfVxuXG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQuY2xvc2VkU2lkZW5hdiB7XG4gICAgbWFyZ2luLWxlZnQgOiAwcHggO1xuICB9XG5cbiAgbWF0LXNpZGVuYXYtY29udGVudC5vcGVubmVkU2lkZW5hdiB7XG4gICAgbWFyZ2luLWxlZnQgOiA3MHB4IDtcbiAgfVxuXG5cbiAgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgcG9zaXRpb24gOiByZWxhdGl2ZSA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDojMmQyZDJkNjkgIWltcG9ydGFudCA7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNTc2cHgpIHtcbiAgICAgIHBhZGRpbmctdG9wIDogNjBweCA7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIDo6bmctZGVlcCAuY29udGFjdF9tZV9idG4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDo6bmctZGVlcCAucGFyYWdyYXBoX21hcmcgcCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAubG9hZGluZ19wYWdlX2RpdiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRvcDogMDsgbGVmdDogMDtcbiAgICAgICB6LWluZGV4OiAxMDAwOyBvdmVyZmxvdzogaGlkZGVuOyBkaXNwbGF5IDogbm9uZSA7XG4gICAgICAgLmxvYWQge1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xuICAgICAgLyogICAgIG1hcmdpbjowcHg7ICovXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmxvYWQgZGl2IHtcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlYTk0MTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDUwcHggLSAxMi41cHgpO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBsb2FkaW5nO1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgICB9XG4gICAgICAubG9hZC10d28ge1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICAgIH1cbiAgICAgIC5sb2FkLXRocmVlIHtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gICAgICB9XG4gICAgICAubG9hZGluZ19kaXYge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7IHRvcDogNTAlOyBsZWZ0OiA1MCU7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkNjk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgLmxvYWRpbmdfY29udGVudHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAyMDBweDsgaGVpZ2h0OiAyMTBweDsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDIwMHB4IDsgaGVpZ2h0OiAyMDBweDsgdG9wOiAwOyBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ2OSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2lyY2xle1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOjUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNjE0YjIwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndhdmV7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkYjgyYztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53YXZlOmJlZm9yZSxcbiAgICAgICAgICAud2F2ZTphZnRlclxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMjAwJTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03NSUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud2F2ZTpiZWZvcmV7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1JTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJkMmQyZDY5O1xuICAgICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGUgNXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud2F2ZTphZnRlcntcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkNjk7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAxMHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIGFuaW1hdGV7XG4gICAgICAgICAgICAgIDAle1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTc1JSkgcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzUlKSByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxufVxuLnRleGltYXRlLXBhcmFncmFwaCB7IG1hcmdpbjogMCAhaW1wb3J0YW50O31cblxuQGtleWZyYW1lcyByb3RhMiB7XG5cdGZyb217IHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7fVxuXHR0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxufVxuXG5ALW8ta2V5ZnJhbWVzIHJvdGEyIHtcblx0ZnJvbXsgdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt9XG5cdHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG5cbkAtbW96LWtleWZyYW1lcyByb3RhMiB7XG5cdGZyb217IHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7fVxuXHR0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGEyIHtcblx0ZnJvbXsgdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt9XG5cdHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG5cbkBrZXlmcmFtZXMgcm90YTEge1xuXHRmcm9teyB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7fVxuXHR0byB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbn1cblxuQC1vLWtleWZyYW1lcyByb3RhMSB7XG5cdGZyb217IHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt9XG5cdHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxufVxuXG5ALW1vei1rZXlmcmFtZXMgcm90YTEge1xuXHRmcm9teyB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7fVxuXHR0byB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhMSB7XG5cdGZyb217IHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt9XG5cdHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGEzIHtcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpfVxuICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKX1cbn1cblxuQGtleWZyYW1lcyByb3RhNCB7XG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cbn1cblxuQGtleWZyYW1lcyBpdGVtc2lkZW5hdlYge1xuICAwJSB7b3BhY2l0eTogMTt9XG4gIDEwMCUge29wYWNpdHk6IDA7fVxufVxuXG5Aa2V5ZnJhbWVzIGl0ZW1zaWRlbmF2SCB7XG4gIDAlIHtvcGFjaXR5OiAwO31cbiAgMTAwJSB7b3BhY2l0eTogMTt9XG59XG5cbi5hbGxfcG9ydGZvbGlvX2JhY2tncm91ZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG4gIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogYXV0byA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuXG4gIH1cblxuICBAa2V5ZnJhbWVzIG1vdmVfd2F2ZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWigwKSBzY2FsZVkoMSlcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpIHRyYW5zbGF0ZVooMCkgc2NhbGVZKDAuNTUpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZVkoMSlcbiAgICB9XG4gIH1cbiAgLndhdmVXcmFwcGVyIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLndhdmVXcmFwcGVySW5uZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzg2MzczNyAyMCUsICMwYzBjMGMgODAlKTtcbiAgfVxuICAuYmdUb3Age1xuICAgICAgei1pbmRleDogMTU7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgLmJnTWlkZGxlIHtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgb3BhY2l0eTogMC43NTtcbiAgfVxuICAuYmdCb3R0b20ge1xuICAgICAgei1pbmRleDogNTtcbiAgfVxuICAud2F2ZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDIwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgYm90dG9tO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgfVxuICAud2F2ZVRvcCB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSAxMDBweDtcbiAgfVxuICAud2F2ZUFuaW1hdGlvbiAud2F2ZVRvcCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXdhdmUgM3M7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtd2F2ZSAzcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgfVxuICAud2F2ZU1pZGRsZSB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSAxMjBweDtcbiAgfVxuICAud2F2ZUFuaW1hdGlvbiAud2F2ZU1pZGRsZSB7XG4gICAgICBhbmltYXRpb246IG1vdmVfd2F2ZSAxMHMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIC53YXZlQm90dG9tIHtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIDEwMHB4O1xuICB9XG4gIC53YXZlQW5pbWF0aW9uIC53YXZlQm90dG9tIHtcbiAgICAgIGFuaW1hdGlvbjogbW92ZV93YXZlIDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbn1cblxuLmNvbnRlbnRfbm90X2xvYWRpbmcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgdG8ge1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbn1cblxufVxuIiwiLm5nLXNjcm9sbC12aWV3IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDE4cHggKSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgYXBwLWhvbWUsIDo6bmctZGVlcCBhcHAtYWJvdXQsIDo6bmctZGVlcCBhcHAtd29yaywgOjpuZy1kZWVwIGFwcC1za2lsbHMsIDo6bmctZGVlcCBhcHAtY29udGFjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkNjkgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgbmctc2Nyb2xsYmFyIHtcbiAgLS1zY3JvbGwtdmlldy1tYXJnaW46IDAgMCAwIC0xOHB4IDtcbiAgLS1zY3JvbGxiYXItc2l6ZTogMCA7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIHtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLnRvcEl0ZW1zU2lkZW5hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAudG9wSXRlbXNTaWRlbmF2IC5pdGVtU2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAudG9wSXRlbXNTaWRlbmF2IC5pdGVtU2lkZW5hdiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICB0b3A6IDA7XG4gIGhlaWdodDogYXV0bztcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC5DZW50ZXJJdGVtc1NpZGVuYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02MCUpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC5DZW50ZXJJdGVtc1NpZGVuYXYgLml0ZW1TaWRlbmF2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC5DZW50ZXJJdGVtc1NpZGVuYXYgLml0ZW1TaWRlbmF2IGkge1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb246IGl0ZW1zaWRlbmF2SCAxMDBtcyBsaW5lYXI7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC5DZW50ZXJJdGVtc1NpZGVuYXYgLml0ZW1TaWRlbmF2IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGl0ZW1zaWRlbmF2ViAxMDBtcyBsaW5lYXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLkNlbnRlckl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXYuYWN0aXZlSXRlbSB7XG4gIGNvbG9yOiAjZmRiODJjO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAuQ2VudGVySXRlbXNTaWRlbmF2IC5pdGVtU2lkZW5hdjpob3ZlciB7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICB0ZXh0LXNoYWRvdzogMCAwIDlweCB3aGl0ZTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLkNlbnRlckl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXY6aG92ZXIgaSB7XG4gIGFuaW1hdGlvbjogaXRlbXNpZGVuYXZWIDMwMG1zIGxpbmVhcjtcbiAgb3BhY2l0eTogMDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLkNlbnRlckl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXY6aG92ZXIgc3BhbiB7XG4gIGFuaW1hdGlvbjogaXRlbXNpZGVuYXZIIDMwMG1zIGxpbmVhcjtcbiAgb3BhY2l0eTogMTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLmJvdHRvbUl0ZW1zU2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAuYm90dG9tSXRlbXNTaWRlbmF2IC5pdGVtU2lkZW5hdiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLmJvdHRvbUl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXYgaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtdG9vbGJhciB7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NjA1MDAwO1xuICBib3gtc2hhZG93OiAwIDAgNHB4IDFweCAjMTIxMjExNGY7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXRvb2xiYXIgLm9wZW4tc2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTBweDtcbiAgY29sb3I6ICNmZGI4MmM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXRvb2xiYXIgLm9wZW4tc2lkZW5hdiBpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC10b29sYmFyIC50b29sYmFyLWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDgwcHg7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC10b29sYmFyIC50b29sYmFyLWxvZ28gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IGF1dG87XG4gIHRvcDogMTUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMnB4IGJsYWNrKTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtdG9vbGJhci5jbG9zZWRTaWRlbmF2IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXRvb2xiYXIub3Blbm5lZFNpZGVuYXYge1xuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudC5jbG9zZWRTaWRlbmF2IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50Lm9wZW5uZWRTaWRlbmF2IHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDY5ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICBtYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgOjpuZy1kZWVwIC5jb250YWN0X21lX2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgOjpuZy1kZWVwIC5wYXJhZ3JhcGhfbWFyZyBwIHtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHggIWltcG9ydGFudDtcbiAgfVxufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5sb2FkaW5nX3BhZ2VfZGl2IC5sb2FkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XG4gIC8qICAgICBtYXJnaW46MHB4OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5sb2FkaW5nX3BhZ2VfZGl2IC5sb2FkIGRpdiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWE5NDE7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IGNhbGMoNTBweCAtIDEyLjVweCk7XG4gIGFuaW1hdGlvbi1uYW1lOiBsb2FkaW5nO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAubG9hZGluZ19wYWdlX2RpdiAubG9hZC10d28ge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAubG9hZGluZ19wYWdlX2RpdiAubG9hZC10aHJlZSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5sb2FkaW5nX3BhZ2VfZGl2IC5sb2FkaW5nX2RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5sb2FkaW5nX3BhZ2VfZGl2IC5sb2FkaW5nX2RpdiAubG9hZGluZ19jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjEwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBub25lO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYgLmxvYWRpbmdfZGl2IC5sb2FkaW5nX2NvbnRlbnQgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5sb2FkaW5nX3BhZ2VfZGl2IC5sb2FkaW5nX2RpdiAubG9hZGluZ19jb250ZW50IG1hdC1wcm9ncmVzcy1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAubG9hZGluZ19wYWdlX2RpdiAubG9hZGluZ19kaXYgLmxvYWRpbmdfY29udGVudCBtYXQtcHJvZ3Jlc3MtYmFyIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ2OSAhaW1wb3J0YW50O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYgLmxvYWRpbmdfZGl2IC5sb2FkaW5nX2NvbnRlbnQgLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgYm9yZGVyOiAzcHggc29saWQgIzYxNGIyMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYgLmxvYWRpbmdfZGl2IC5sb2FkaW5nX2NvbnRlbnQgLndhdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZGI4MmM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYgLmxvYWRpbmdfZGl2IC5sb2FkaW5nX2NvbnRlbnQgLndhdmU6YmVmb3JlLFxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYgLmxvYWRpbmdfZGl2IC5sb2FkaW5nX2NvbnRlbnQgLndhdmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDIwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzUlKTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5sb2FkaW5nX3BhZ2VfZGl2IC5sb2FkaW5nX2RpdiAubG9hZGluZ19jb250ZW50IC53YXZlOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDQ1JTtcbiAgYmFja2dyb3VuZDogIzJkMmQyZDY5O1xuICBhbmltYXRpb246IGFuaW1hdGUgNXMgbGluZWFyIGluZmluaXRlO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYgLmxvYWRpbmdfZGl2IC5sb2FkaW5nX2NvbnRlbnQgLndhdmU6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiA0MCU7XG4gIGJhY2tncm91bmQ6ICMyZDJkMmQ2OTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTc1JSkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03NSUpIHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi50ZXhpbWF0ZS1wYXJhZ3JhcGgge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyByb3RhMiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHJvdGEyIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyByb3RhMiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YTIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhMSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHJvdGExIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyByb3RhMSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YTEge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhNCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGl0ZW1zaWRlbmF2ViB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaXRlbXNpZGVuYXZIIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmFsbF9wb3J0Zm9saW9fYmFja2dyb3VkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uYWxsX3BvcnRmb2xpb19iYWNrZ3JvdWRlciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5Aa2V5ZnJhbWVzIG1vdmVfd2F2ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWigwKSBzY2FsZVkoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSkgdHJhbnNsYXRlWigwKSBzY2FsZVkoMC41NSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGVZKDEpO1xuICB9XG59XG4uYWxsX3BvcnRmb2xpb19iYWNrZ3JvdWRlciAud2F2ZVdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmFsbF9wb3J0Zm9saW9fYmFja2dyb3VkZXIgLndhdmVXcmFwcGVySW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzg2MzczNyAyMCUsICMwYzBjMGMgODAlKTtcbn1cbi5hbGxfcG9ydGZvbGlvX2JhY2tncm91ZGVyIC5iZ1RvcCB7XG4gIHotaW5kZXg6IDE1O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uYWxsX3BvcnRmb2xpb19iYWNrZ3JvdWRlciAuYmdNaWRkbGUge1xuICB6LWluZGV4OiAxMDtcbiAgb3BhY2l0eTogMC43NTtcbn1cbi5hbGxfcG9ydGZvbGlvX2JhY2tncm91ZGVyIC5iZ0JvdHRvbSB7XG4gIHotaW5kZXg6IDU7XG59XG4uYWxsX3BvcnRmb2xpb19iYWNrZ3JvdWRlciAud2F2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xufVxuLmFsbF9wb3J0Zm9saW9fYmFja2dyb3VkZXIgLndhdmVUb3Age1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSAxMDBweDtcbn1cbi5hbGxfcG9ydGZvbGlvX2JhY2tncm91ZGVyIC53YXZlQW5pbWF0aW9uIC53YXZlVG9wIHtcbiAgYW5pbWF0aW9uOiBtb3ZlLXdhdmUgM3M7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLXdhdmUgM3M7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cbi5hbGxfcG9ydGZvbGlvX2JhY2tncm91ZGVyIC53YXZlTWlkZGxlIHtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgMTIwcHg7XG59XG4uYWxsX3BvcnRmb2xpb19iYWNrZ3JvdWRlciAud2F2ZUFuaW1hdGlvbiAud2F2ZU1pZGRsZSB7XG4gIGFuaW1hdGlvbjogbW92ZV93YXZlIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG4uYWxsX3BvcnRmb2xpb19iYWNrZ3JvdWRlciAud2F2ZUJvdHRvbSB7XG4gIGJhY2tncm91bmQtc2l6ZTogNTAlIDEwMHB4O1xufVxuLmFsbF9wb3J0Zm9saW9fYmFja2dyb3VkZXIgLndhdmVBbmltYXRpb24gLndhdmVCb3R0b20ge1xuICBhbmltYXRpb246IG1vdmVfd2F2ZSAxNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uY29udGVudF9ub3RfbG9hZGluZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xuICB0byB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router) {
                    var _this = this;
                    this.router = router;
                    this.title = 'home';
                    this.shown_sidenav_scroll = 'hover';
                    this.opennedSidenav = false;
                    this.f_min = false;
                    this.show_loading = false;
                    this.router.events.subscribe(function (routerEvent) {
                        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                            _this.show_loading = false;
                            _this._hideLoader();
                        }
                    });
                }
                AppComponent.prototype.toggleSidenav = function () {
                    this.opennedSidenav = !this.opennedSidenav;
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() <= 576) {
                        this.opennedSidenav = false;
                        this.f_min = false;
                    }
                    else {
                        this.opennedSidenav = true;
                        this.f_min = true;
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(function () {
                        if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() <= 576 && _this.f_min) {
                            _this.f_min = false;
                            _this.opennedSidenav = false;
                        }
                        else if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() > 576 && !_this.f_min) {
                            _this.f_min = true;
                            _this.opennedSidenav = true;
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
                };
                AppComponent.prototype._showLoader = function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".content_not_loading").fadeOut(0);
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_page_div").fadeIn(200);
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_content").fadeIn(200);
                    setTimeout(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_div").animate({ "width": "100%", "height": "100%", "border-radius": "0%" }, 500, function () {
                        });
                    }, 500);
                };
                AppComponent.prototype._hideLoader = function () {
                    var _this = this;
                    setTimeout(function () {
                        if (!_this.show_loading) {
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_content").fadeOut(400);
                            setTimeout(function () {
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_div").animate({ "width": "200px", "height": "200px", "border-radius": "50%" }, 500, function () {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_page_div").fadeOut(500);
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".content_not_loading").fadeIn(0);
                                });
                            }, 800);
                        }
                    }, 800);
                };
                AppComponent.prototype.GoPage = function (data) {
                    var _this = this;
                    switch (data) {
                        case 'skills':
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".skillsSidenav").addClass('activeItem');
                            if (location.pathname != '/skills') {
                                this._showLoader();
                                setTimeout(function () {
                                    _this.router.navigate(['skills']);
                                }, 1000);
                            }
                            break;
                        case 'home':
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".homeSidenav").addClass('activeItem');
                            if (location.pathname != '/') {
                                this._showLoader();
                                setTimeout(function () {
                                    _this.router.navigate(['']);
                                }, 1000);
                            }
                            break;
                        case 'about':
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".aboutSidenav").addClass('activeItem');
                            if (location.pathname != '/about') {
                                this._showLoader();
                                setTimeout(function () {
                                    _this.router.navigate(['about']);
                                }, 1000);
                            }
                            break;
                        case 'contact':
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".contactSidenav").addClass('activeItem');
                            if (location.pathname != '/contact') {
                                this._showLoader();
                                setTimeout(function () {
                                    _this.router.navigate(['contact']);
                                }, 1000);
                            }
                            break;
                        case 'work':
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".workSidenav").addClass('activeItem');
                            if (location.pathname != '/myWork') {
                                this._showLoader();
                                setTimeout(function () {
                                    _this.router.navigate(['myWork']);
                                }, 1000);
                            }
                            break;
                        default:
                            break;
                    }
                    if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() <= 576) {
                        this.toggleSidenav();
                    }
                };
                AppComponent.prototype.click_fb = function () {
                    window.open('https://www.facebook.com/abdou.badeche');
                };
                AppComponent.prototype.click_gh = function () {
                    window.open('https://github.com/abdouBadeche');
                };
                AppComponent.prototype.click_in = function () {
                    window.open('');
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            /* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./photo/photo.component */ "./src/app/photo/photo.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                        _photo_photo_component__WEBPACK_IMPORTED_MODULE_20__["PhotoComponent"]
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
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("app-home {\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n\n@media screen and (min-width: 798px) {\n  .blackDiv {\n    min-height: 100%;\n    width: 100%;\n    height: auto;\n    margin-left: 50px;\n    padding-right: 440px;\n    padding-left: 70px;\n    padding-top: 50px !important;\n  }\n  .blackDiv .textCenter {\n    padding-right: 450px;\n    padding-left: 20px;\n  }\n\n  .lightDiv {\n    position: fixed;\n    width: 440px;\n    height: 100vh;\n    top: 0;\n    right: 0;\n    overflow-x: hidden;\n  }\n\n  .lightCircle {\n    border-top-left-radius: 200px;\n    border-bottom-left-radius: 200px;\n    top: 50%;\n    height: 440px;\n    width: 200%;\n    left: 5px;\n    transform: translateY(-50%);\n  }\n\n  .logo_div_all {\n    left: 25%;\n    top: 50%;\n  }\n}\n\n@media screen and (max-width: 797px) {\n  .blackDiv {\n    min-height: 600px;\n    width: 100%;\n    padding: 0;\n    padding-top: 450px !important;\n    margin: 0;\n  }\n\n  .lightDiv {\n    position: absolute;\n    top: 34px;\n    left: 0;\n    min-height: 450px;\n    width: 100%;\n    overflow-x: hidden;\n  }\n\n  .lightCircle {\n    border-bottom-left-radius: 190px;\n    border-bottom-right-radius: 190px;\n    top: 0%;\n    height: 150%;\n    width: 100%;\n    left: 0%;\n  }\n\n  .logo_div_all {\n    left: 50%;\n    top: 35%;\n  }\n}\n\n.background_all {\n  width: 100%;\n  height: 100%;\n  margin-left: 0;\n  overflow: hidden;\n  overflow-y: auto;\n  font-family: \"Nunito\", sans-serif;\n  word-spacing: 3vw;\n}\n\n.background_all .lightDiv {\n  z-index: 2;\n  overflow-x: hidden;\n}\n\n.background_all .lightDiv .lightCircle {\n  position: relative;\n  display: none;\n  min-height: 600px;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all {\n  position: absolute;\n  height: 400px;\n  width: 400px;\n  transform: translate(-50%, -50%);\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 {\n  position: absolute;\n  height: 380px;\n  width: 380px;\n  top: 10px;\n  left: 10px;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  animation: rota2 6000ms linear infinite;\n  -moz-animation: rota2 6000ms linear infinite;\n  -o-animation: rota2 6000ms linear infinite;\n  -webkit-animation: rota2 6000ms linear infinite;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle11, .background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle12, .background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle13, .background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle14 {\n  position: absolute;\n  width: 26px;\n  height: 26px;\n  background-color: #eea941;\n  color: #eea941;\n  font-size: 16px;\n  text-align: center;\n  line-height: 26px;\n  top: 0%;\n  left: 50%;\n  border-radius: 50%;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle12 {\n  top: 50%;\n  left: 0%;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle13 {\n  top: 100%;\n  left: 50%;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle14 {\n  top: 50%;\n  left: 100%;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle2 {\n  animation: rota1 6000ms linear infinite;\n  -moz-animation: rota1 6000ms linear infinite;\n  -o-animation: rota1 6000ms linear infinite;\n  -webkit-animation: rota1 6000ms linear infinite;\n  position: relative;\n  height: 330px;\n  width: 330px;\n  top: 35px;\n  left: 35px;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle21, .background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle22, .background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle23, .background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle24 {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-color: #4c157d;\n  color: #4c157d;\n  font-size: 10px;\n  text-align: center;\n  line-height: 20px;\n  top: 12%;\n  left: 12%;\n  border-radius: 50%;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle3 {\n  position: absolute;\n  height: 280px;\n  width: 280px;\n  top: 60px;\n  left: 60px;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n}\n\n.background_all .lightDiv .lightCircle .logo_div_all .circle3 img {\n  position: absolute;\n  height: 103%;\n  width: 103%;\n  top: -1.5%;\n  left: -1.5%;\n}\n\n.background_all .blackDiv {\n  padding: 15px 10px;\n  color: white;\n  font-size: 13px;\n  min-height: 500px;\n  padding-bottom: 0;\n}\n\n.background_all .blackDiv .text_bg {\n  position: absolute;\n  width: 0;\n  height: 5px;\n  border-radius: 2.5px;\n  bottom: 0;\n  z-index: 2;\n}\n\n.background_all .blackDiv .text_bg_white {\n  background-color: white;\n  box-shadow: 0 0 2px 0px white;\n}\n\n.background_all .blackDiv .text_bg2 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  top: 0;\n}\n\n.background_all .blackDiv .text_bg_yellow {\n  background-color: #fdb82c;\n  box-shadow: 0 0 2px 0px #fdb82c;\n}\n\n.background_all .blackDiv .text_div {\n  display: none;\n}\n\n.background_all .blackDiv .codeText {\n  line-height: 20px;\n  font-size: 17px;\n  color: #929292;\n  font-family: \"Ma Shan Zheng\", cursive;\n}\n\n.background_all .blackDiv .whiteText {\n  text-align: left;\n  position: relative;\n  display: inline-block;\n  font-size: 3vw;\n  color: white;\n  padding: 5px 10px;\n  font-weight: bold;\n  word-spacing: 5px;\n  width: auto;\n  margin: 15px 0;\n}\n\n.background_all .blackDiv .YellowText {\n  padding: 5px;\n  position: relative;\n  width: auto;\n  font-size: 3vw;\n  color: #fdb82c;\n  letter-spacing: 2px;\n  font-weight: bold;\n  display: block;\n  margin: 15px 0;\n  padding-left: 20px;\n  word-spacing: 5px;\n  display: inline-block;\n}\n\n.background_all .blackDiv .darkText {\n  font-size: 13px;\n  color: #ffffff;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.background_all .blackDiv .texta1 {\n  width: 100%;\n}\n\n.background_all .blackDiv .texta2 {\n  width: 100%;\n}\n\n.background_all .blackDiv .texta3 {\n  width: 100%;\n}\n\n.background_all .blackDiv .texta .hellowim, .background_all .blackDiv .texta .badecheabdennour, .background_all .blackDiv .texta .imfullstack {\n  height: 70px;\n  width: 0px;\n  overflow: hidden;\n}\n\n@media screen and (max-width: 576px) {\n  .background_all .blackDiv .whiteText {\n    font-size: 15px;\n  }\n  .background_all .blackDiv .YellowText {\n    font-size: 15px;\n  }\n  .background_all .blackDiv .darkText {\n    font-size: 9px;\n  }\n}\n\n.background_all .blackDiv .btns {\n  margin-left: 0;\n}\n\n.background_all .blackDiv .contact_me_btn {\n  margin-right: 20px;\n  border-color: #ffa726 !important;\n  visibility: hidden;\n  margin-bottom: 20px;\n}\n\n.background_all .blackDiv .cv_btn {\n  border-color: #9e9e96 !important;\n  margin-bottom: 20px;\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldnNoYWRvdy9Eb3dubG9hZHMvcG9ydGVmb2xpby1tYXN0ZXIvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsZ0JBQUE7SUFBbUIsV0FBQTtJQUFjLFlBQUE7SUFBYyxpQkFBQTtJQUMvQyxvQkFBQTtJQUF1QixrQkFBQTtJQUFzQiw0QkFBQTtFQ08vQztFRExFO0lBQ0Usb0JBQUE7SUFBdUIsa0JBQUE7RUNRM0I7O0VETEE7SUFDRSxlQUFBO0lBQWtCLFlBQUE7SUFBZSxhQUFBO0lBQ2pDLE1BQUE7SUFBUyxRQUFBO0lBQ1Qsa0JBQUE7RUNXRjs7RURUQTtJQUNFLDZCQUFBO0lBQWdDLGdDQUFBO0lBQW9DLFFBQUE7SUFDcEUsYUFBQTtJQUFnQixXQUFBO0lBQWMsU0FBQTtJQUFZLDJCQUFBO0VDaUI1Qzs7RURmQTtJQUNFLFNBQUE7SUFBYSxRQUFBO0VDbUJmO0FBQ0Y7O0FEZkE7RUFDRTtJQUNFLGlCQUFBO0lBQW9CLFdBQUE7SUFDcEIsVUFBQTtJQUFjLDZCQUFBO0lBQWdDLFNBQUE7RUNvQmhEOztFRGpCQTtJQUNFLGtCQUFBO0lBQXFCLFNBQUE7SUFBWSxPQUFBO0lBQVUsaUJBQUE7SUFDM0MsV0FBQTtJQUNBLGtCQUFBO0VDdUJGOztFRHBCQTtJQUNFLGdDQUFBO0lBQ0EsaUNBQUE7SUFBcUMsT0FBQTtJQUNyQyxZQUFBO0lBQWUsV0FBQTtJQUFjLFFBQUE7RUMwQi9COztFRHhCQTtJQUNFLFNBQUE7SUFBYSxRQUFBO0VDNEJmO0FBQ0Y7O0FEekJBO0VBQ0UsV0FBQTtFQUFnQixZQUFBO0VBQWUsY0FBQTtFQUMvQixnQkFBQTtFQUFtQixnQkFBQTtFQUFtQixpQ0FBQTtFQUFtQyxpQkFBQTtB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RSxlQUFBO0VDdUVOO0VEckVJO0lBQ0UsZUFBQTtFQ3VFTjtFRHJFSTtJQUNFLGNBQUE7RUN1RU47QUFDRjs7QURyRUk7RUFDRSxjQUFBO0FDdUVOOztBRHBFSTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDc0VOOztBRG5FSTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3FFTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1ob21lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNzk4cHggKXtcbiAgLmJsYWNrRGl2IHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlIDsgd2lkdGg6IDEwMCUgOyBoZWlnaHQ6IGF1dG87IG1hcmdpbi1sZWZ0IDogNTBweCA7XG4gICAgcGFkZGluZy1yaWdodDogNDQwcHggOyBwYWRkaW5nLWxlZnQgOiA3MHB4IDsgcGFkZGluZy10b3AgOiA1MHB4ICFpbXBvcnRhbnQgO1xuXG4gICAgLnRleHRDZW50ZXIge1xuICAgICAgcGFkZGluZy1yaWdodDogNDUwcHggOyBwYWRkaW5nLWxlZnQ6IDIwcHggO1xuICAgIH1cbiAgfVxuICAubGlnaHREaXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZCA7IHdpZHRoOiA0NDBweCA7IGhlaWdodDogMTAwdmggO1xuICAgIHRvcDogMCA7IHJpZ2h0OiAwIDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgLmxpZ2h0Q2lyY2xlIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMDBweCA7IGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwMHB4IDsgIHRvcDogNTAlICA7XG4gICAgaGVpZ2h0OiA0NDBweCA7IHdpZHRoOiAyMDAlIDsgbGVmdDogNXB4IDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIDtcbiAgfVxuICAubG9nb19kaXZfYWxsIHtcbiAgICBsZWZ0OiAyNSUgOyAgdG9wOiA1MCUgO1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc5N3B4ICkge1xuICAuYmxhY2tEaXYge1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4IDsgd2lkdGg6IDEwMCUgO1xuICAgIHBhZGRpbmc6IDAgOyAgcGFkZGluZy10b3A6IDQ1MHB4ICFpbXBvcnRhbnQgOyBtYXJnaW46IDA7XG4gIH1cblxuICAubGlnaHREaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IHRvcCA6IDM0cHg7IGxlZnQ6IDAgOyBtaW4taGVpZ2h0OiA0NTBweCA7XG4gICAgd2lkdGg6IDEwMCUgO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuXG4gIC5saWdodENpcmNsZSB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTkwcHggO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxOTBweCA7ICB0b3A6IDAlICA7XG4gICAgaGVpZ2h0OiAxNTAlIDsgd2lkdGg6IDEwMCUgOyBsZWZ0OiAwJSA7XG4gIH1cbiAgLmxvZ29fZGl2X2FsbCB7XG4gICAgbGVmdDogNTAlIDsgIHRvcDogMzUlIDtcbiAgfVxuXG59XG4uYmFja2dyb3VuZF9hbGwge1xuICB3aWR0aDogMTAwJSA7ICAgaGVpZ2h0OiAxMDAlIDsgbWFyZ2luLWxlZnQ6IDAgO1xuICBvdmVyZmxvdzogaGlkZGVuIDsgb3ZlcmZsb3cteTogYXV0byA7IGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjsgd29yZC1zcGFjaW5nOiAzdncgO1xuXG4gIC5saWdodERpdiB7XG4gICAgIHotaW5kZXg6IDIgO1xuICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgLmxpZ2h0Q2lyY2xlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSA7XG4gICAgICBkaXNwbGF5OiBub25lIDtcblxuICAgICAgbWluLWhlaWdodDogNjAwcHggO1xuICAgICAgLmxvZ29fZGl2X2FsbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IGhlaWdodCA6IDQwMHB4IDsgd2lkdGg6IDQwMHB4IDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUgKSA7XG5cbiAgICAgICAgLmNpcmNsZTEge1xuXG4gICAgICAgICAgLmNpcmNsZTExICwgLmNpcmNsZTEyICwgLmNpcmNsZTEzICwgLmNpcmNsZTE0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IHdpZHRoOiAyNnB4IDsgaGVpZ2h0OiAyNnB4IDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWE5NDEgOyBjb2xvcjogI2VlYTk0MSA7IGZvbnQtc2l6ZTogMTZweCA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHggO1xuICAgICAgICAgICAgdG9wOiAwJSA7IGxlZnQ6IDUwJSA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgO1xuICAgICAgICAgICAgLy8gYW5pbWF0aW9uOiByb3RhMyA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgLy8gLW1vei1hbmltYXRpb246IHJvdGEzIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICAvLyAtby1hbmltYXRpb246IHJvdGEzIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICAvLyAtd2Via2l0LWFuaW1hdGlvbjogcm90YTMgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNpcmNsZTEyIHtcbiAgICAgICAgICAgIHRvcDogNTAlIDsgbGVmdDogMCUgO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2lyY2xlMTMge1xuICAgICAgICAgICAgdG9wOiAxMDAlIDsgbGVmdDogNTAlIDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNpcmNsZTE0IHtcbiAgICAgICAgICAgIHRvcDogNTAlIDsgbGVmdDogMTAwJSA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IGhlaWdodDogMzgwcHggOyB3aWR0aDogMzgwcHggO1xuICAgICAgICAgIHRvcDogMTBweCA7IGxlZnQ6IDEwcHggO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA7IG1hcmdpbjogMCA7IHBhZGRpbmc6IDAgO1xuICAgICAgICAgIGFuaW1hdGlvbjogcm90YTIgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAtbW96LWFuaW1hdGlvbjogcm90YTIgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAtby1hbmltYXRpb246IHJvdGEyIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGEyIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG5cblxuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGUyIHtcbiAgICAgICAgICAuY2lyY2xlMjEgLCAuY2lyY2xlMjIgLCAuY2lyY2xlMjMgLCAuY2lyY2xlMjQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlIDsgd2lkdGg6IDIwcHggOyBoZWlnaHQ6IDIwcHggO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjMTU3ZCA7XG4gICAgICAgICAgICBjb2xvcjogIzRjMTU3ZCA7IGZvbnQtc2l6ZTogMTBweCA7IHRleHQtYWxpZ246IGNlbnRlciA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweCA7XG4gICAgICAgICAgICB0b3A6MTIlIDsgbGVmdDoxMiUgO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDtcbiAgICAgICAgICAgIC8vIGFuaW1hdGlvbjogcm90YTQgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIC8vIC1tb3otYW5pbWF0aW9uOiByb3RhNCA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgLy8gLW8tYW5pbWF0aW9uOiByb3RhNCA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgLy8gLXdlYmtpdC1hbmltYXRpb246IHJvdGE0IDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYW5pbWF0aW9uOiByb3RhMSA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiByb3RhMSA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIC1vLWFuaW1hdGlvbjogcm90YTEgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YTEgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgOyBoZWlnaHQ6IDMzMHB4IDsgd2lkdGg6IDMzMHB4IDsgdG9wOiAzNXB4IDsgbGVmdDogMzVweCA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDsgbWFyZ2luOiAwIDsgcGFkZGluZzogMCA7XG5cbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlMyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlIDsgaGVpZ2h0OiAyODBweCA7IHdpZHRoOiAyODBweCA7IHRvcDogNjBweCA7IGxlZnQ6IDYwcHggO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA7IG1hcmdpbjogMCA7IHBhZGRpbmc6IDAgO1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgOyBoZWlnaHQ6IDEwMyUgOyB3aWR0aDogMTAzJSA7XG4gICAgICAgICAgICB0b3A6IC0xLjUlIDsgbGVmdDogLTEuNSU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgfVxuXG5cbiAgICB9XG4gIH1cbiAgLmJsYWNrRGl2IHtcbiAgICAgcGFkZGluZyA6IDE1cHggMTBweCA7IGNvbG9yOiB3aGl0ZSA7IGZvbnQtc2l6ZTogMTNweCA7XG4gICAgbWluLWhlaWdodDogNTAwcHggOyBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAudGV4dF9iZyB7XG4gICAgICBwb3NpdGlvbiA6IGFic29sdXRlIDsgd2lkdGggOiAwIDsgaGVpZ2h0IDogNXB4IDsgYm9yZGVyLXJhZGl1czogMi41cHggOyBib3R0b20gOiAwIDsgei1pbmRleCA6IDIgO1xuXG4gICAgfVxuICAgIC50ZXh0X2JnX3doaXRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3IgOiB3aGl0ZSA7XG4gICAgICBib3gtc2hhZG93IDogMCAwIDJweCAwcHggd2hpdGUgO1xuICAgIH1cbiAgICAudGV4dF9iZzIge1xuICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZSA7IHdpZHRoIDogMTAwJSA7IGhlaWdodCA6IDEwMCUgOyByaWdodCA6IDAgOyB0b3AgOiAwIDtcbiAgICB9XG5cbiAgICAudGV4dF9iZ195ZWxsb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICNmZGI4MmMgO1xuICAgICAgYm94LXNoYWRvdyA6IDAgMCAycHggMHB4ICNmZGI4MmMgO1xuICAgIH1cblxuICAgIC50ZXh0X2RpdntcbiAgICAgIGRpc3BsYXk6IG5vbmUgO1xuICAgIH1cbiAgICAuY29kZVRleHQge1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHggOyBmb250LXNpemU6IDE3cHggOyBjb2xvcjogIzkyOTI5MiA7ICBmb250LWZhbWlseTogJ01hIFNoYW4gWmhlbmcnLCBjdXJzaXZlO1xuICAgIH1cbiAgICAud2hpdGVUZXh0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgOyAgcG9zaXRpb24gOiByZWxhdGl2ZSA7IGRpc3BsYXkgOiBpbmxpbmUtYmxvY2sgO1xuICAgICAgIGZvbnQtc2l6ZSA6IDN2dyA7IGNvbG9yIDogd2hpdGUgOyBwYWRkaW5nIDogNXB4IDEwcHggO1xuICAgICAgIGZvbnQtd2VpZ2h0IDogYm9sZCA7IHdvcmQtc3BhY2luZyA6IDVweCA7IHdpZHRoIDogYXV0byA7IG1hcmdpbiA6IDE1cHggMCA7XG4gICAgfVxuICAgIC5ZZWxsb3dUZXh0IHtcbiAgICAgICBwYWRkaW5nIDogNXB4IDsgcG9zaXRpb24gOiByZWxhdGl2ZSA7IHdpZHRoIDogYXV0byA7XG4gICAgICAgZm9udC1zaXplIDogM3Z3IDsgY29sb3IgOiAjZmRiODJjIDsgbGV0dGVyLXNwYWNpbmc6IDJweCA7XG4gICAgICBmb250LXdlaWdodCA6IGJvbGQgOyBkaXNwbGF5OiBibG9jayA7IG1hcmdpbjogMTVweCAwIDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweCA7IHdvcmQtc3BhY2luZyA6IDVweCA7IGRpc3BsYXkgOiBpbmxpbmUtYmxvY2sgO1xuXG4gICAgfVxuICAgIC5kYXJrVGV4dCB7XG4gICAgICBmb250LXNpemU6IDEzcHggOyBjb2xvcjogI2ZmZmZmZiA7XG4gICAgICBmb250LXdlaWdodDogYm9sZCA7IG1hcmdpbi10b3AgOiAxMHB4IDtcbiAgICB9XG5cbiAgICAudGV4dGExIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50ZXh0YTIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC50ZXh0YTMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRleHRhIHtcbiAgICAgIC5oZWxsb3dpbSAsIC5iYWRlY2hlYWJkZW5ub3VyICwgLmltZnVsbHN0YWNrIHtcbiAgICAgICAgaGVpZ2h0IDogNzBweCA7XG4gICAgICAgIHdpZHRoOiAwcHggIDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNTc2cHgpIHtcbiAgICAgIC53aGl0ZVRleHQge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG4gICAgICAuWWVsbG93VGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICAgIC5kYXJrVGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4IDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJ0bnMge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmNvbnRhY3RfbWVfYnRuIHtcbiAgICAgIG1hcmdpbi1yaWdodCA6IDIwcHggO1xuICAgICAgYm9yZGVyLWNvbG9yIDogcmdiKDI1NSwgMTY3LCAzOCkgIWltcG9ydGFudCA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4IDtcblxuICAgIH1cbiAgICAuY3ZfYnRuIHtcbiAgICAgIGJvcmRlci1jb2xvciA6IHJnYigxNTgsIDE1OCwgMTUwKSAhaW1wb3J0YW50IDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHggO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgfVxufVxuIiwiYXBwLWhvbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzk4cHgpIHtcbiAgLmJsYWNrRGl2IHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuICAuYmxhY2tEaXYgLnRleHRDZW50ZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxuXG4gIC5saWdodERpdiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA0NDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cblxuICAubGlnaHRDaXJjbGUge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGhlaWdodDogNDQwcHg7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgbGVmdDogNXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuXG4gIC5sb2dvX2Rpdl9hbGwge1xuICAgIGxlZnQ6IDI1JTtcbiAgICB0b3A6IDUwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk3cHgpIHtcbiAgLmJsYWNrRGl2IHtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctdG9wOiA0NTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5saWdodERpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzRweDtcbiAgICBsZWZ0OiAwO1xuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuXG4gIC5saWdodENpcmNsZSB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTkwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE5MHB4O1xuICAgIHRvcDogMCU7XG4gICAgaGVpZ2h0OiAxNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDAlO1xuICB9XG5cbiAgLmxvZ29fZGl2X2FsbCB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMzUlO1xuICB9XG59XG4uYmFja2dyb3VuZF9hbGwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHdvcmQtc3BhY2luZzogM3Z3O1xufVxuLmJhY2tncm91bmRfYWxsIC5saWdodERpdiB7XG4gIHotaW5kZXg6IDI7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM4MHB4O1xuICB3aWR0aDogMzgwcHg7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGFuaW1hdGlvbjogcm90YTIgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHJvdGEyIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogcm90YTIgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGEyIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUxIC5jaXJjbGUxMSwgLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMSAuY2lyY2xlMTIsIC5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTEgLmNpcmNsZTEzLCAuYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUxIC5jaXJjbGUxNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlYTk0MTtcbiAgY29sb3I6ICNlZWE5NDE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgdG9wOiAwJTtcbiAgbGVmdDogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUxIC5jaXJjbGUxMiB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwJTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTEgLmNpcmNsZTEzIHtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUxIC5jaXJjbGUxNCB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAxMDAlO1xufVxuLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMiB7XG4gIGFuaW1hdGlvbjogcm90YTEgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHJvdGExIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogcm90YTEgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGExIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMzBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICB0b3A6IDM1cHg7XG4gIGxlZnQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMiAuY2lyY2xlMjEsIC5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTIgLmNpcmNsZTIyLCAuYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUyIC5jaXJjbGUyMywgLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMiAuY2lyY2xlMjQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzE1N2Q7XG4gIGNvbG9yOiAjNGMxNTdkO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiAxMiU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjgwcHg7XG4gIHdpZHRoOiAyODBweDtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTMgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMyU7XG4gIHdpZHRoOiAxMDMlO1xuICB0b3A6IC0xLjUlO1xuICBsZWZ0OiAtMS41JTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYge1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC50ZXh0X2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIuNXB4O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDI7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC50ZXh0X2JnX3doaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMHB4IHdoaXRlO1xufVxuLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAudGV4dF9iZzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC50ZXh0X2JnX3llbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGI4MmM7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMHB4ICNmZGI4MmM7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC50ZXh0X2RpdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC5jb2RlVGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjOTI5MjkyO1xuICBmb250LWZhbWlseTogXCJNYSBTaGFuIFpoZW5nXCIsIGN1cnNpdmU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC53aGl0ZVRleHQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzdnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3b3JkLXNwYWNpbmc6IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAuWWVsbG93VGV4dCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAzdnc7XG4gIGNvbG9yOiAjZmRiODJjO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTVweCAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHdvcmQtc3BhY2luZzogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC5kYXJrVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAudGV4dGExIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC50ZXh0YTIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLnRleHRhMyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAudGV4dGEgLmhlbGxvd2ltLCAuYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC50ZXh0YSAuYmFkZWNoZWFiZGVubm91ciwgLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAudGV4dGEgLmltZnVsbHN0YWNrIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAud2hpdGVUZXh0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAuWWVsbG93VGV4dCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLmRhcmtUZXh0IHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgfVxufVxuLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAuYnRucyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAuY29udGFjdF9tZV9idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1jb2xvcjogI2ZmYTcyNiAhaW1wb3J0YW50O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC5jdl9idG4ge1xuICBib3JkZXItY29sb3I6ICM5ZTllOTYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-animate */ "./node_modules/ng-animate/fesm2015/ng-animate.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(router) {
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
                HomeComponent.prototype.ngOnInit = function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".homeSidenav").addClass('activeItem');
                    jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".lightDiv").css('background', 'none');
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".darkText").css("visibility", 'hidden');
                        setTimeout(function () {
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
                            setTimeout(function () {
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".texta1  .text_bg").animate({ 'left': "0%", 'width': "20px" }, 200, function () {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".texta1  .text_bg").animate({ "left": '100%', 'width': "0" }, 400, "swing", function () { });
                                });
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".texta1  .hellowim").animate({ 'width': "20px" }, 200, function () {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".texta1  .hellowim").animate({ 'width': "100%" }, 400, "swing", function () { });
                                });
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".texta2  .text_bg").animate({ 'left': "0%", 'width': "20px" }, 200, function () {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".texta2  .text_bg").animate({ "left": '100%', 'width': "0" }, 400, "swing", function () { });
                                });
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".texta2  .badecheabdennour").animate({ 'width': "20px" }, 200, function () {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".texta2  .badecheabdennour").animate({ 'width': "100%" }, 400, "swing", function () { });
                                });
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".texta3 .text_bg").animate({ 'left': "0%", 'width': "20px" }, 200, function () {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".texta3 .text_bg").animate({ "left": '100%', 'width': "0" }, 400, "swing", function () {
                                        jquery__WEBPACK_IMPORTED_MODULE_2__(".darkText").css({ 'visibility': 'visible' });
                                        setTimeout(function () {
                                            jquery__WEBPACK_IMPORTED_MODULE_2__(".contact_me_btn , .cv_btn").css({ 'visibility': 'visible' });
                                        }, 500);
                                    });
                                });
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".texta3  .imfullstack").animate({ 'width': "20px" }, 200, function () {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".texta3  .imfullstack").animate({ 'width': "100%" }, 400, "swing", function () { });
                                });
                            }, 3000);
                        }, 600);
                    });
                };
                HomeComponent.prototype.contactme = function () {
                    var _this = this;
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".contactSidenav").addClass('activeItem');
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_page_div").fadeIn(200);
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_content").fadeIn(200);
                    setTimeout(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".loading_div").animate({ "width": "100%", "height": "100%", "border-radius": "0%" }, 500, function () { });
                    }, 500);
                    setTimeout(function () {
                        _this.router.navigate(['contact']);
                    }, 1000);
                };
                HomeComponent.prototype.getcv = function () {
                    // document.querySelector('.get_cv_a').click() ;
                    window.open('assets/imgs/cv1.pdf');
                };
                HomeComponent.prototype.AnimationsText = function (table) {
                    table.forEach(function (element) {
                        element.enterPlayer.play();
                    });
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/photo/photo.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/photo/photo.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".all_photo {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-image: url('back.jpg');\n  background-size: cover;\n  background-position: center;\n}\n.all_photo .photo_viewer {\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  height: 395px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.all_photo .photo_viewer .left_photo {\n  position: absolute;\n  width: 40%;\n  height: 100%;\n  left: 2%;\n  top: 0%;\n}\n.all_photo .photo_viewer .left_photo img {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  height: auto;\n  left: 0;\n  transform: translateY(-50%) rotate3d(0, 1, 0, 45deg);\n  box-shadow: -4px 0 8px 2px #6b6262;\n}\n.all_photo .photo_viewer .right_photo {\n  position: absolute;\n  width: 40%;\n  height: 100%;\n  right: 2%;\n  top: 0%;\n}\n.all_photo .photo_viewer .right_photo img {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  height: auto;\n  left: 0;\n  transform: translateY(-50%) rotate3d(0, 1, 0, -45deg);\n  box-shadow: 4px 0 8px 2px #6b6262;\n}\n.all_photo .photo_viewer .center_photo {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  left: 50%;\n  top: 0%;\n  transform: translateX(-50%);\n  z-index: 2;\n}\n.all_photo .photo_viewer .center_photo img {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  height: auto;\n  left: 0;\n  transform: translateY(-50%);\n  box-shadow: 0px -1px 7px 1px black;\n}\n.all_photo .photo_viewer div {\n  transform-style: preserve-3d;\n  perspective: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldnNoYWRvdy9Eb3dubG9hZHMvcG9ydGVmb2xpby1tYXN0ZXIvc3JjL2FwcC9waG90by9waG90by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGhvdG8vcGhvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtFQUFjLE1BQUE7RUFDL0MsT0FBQTtFQUFTLGlDQUFBO0VBQ1Qsc0JBQUE7RUFBd0IsMkJBQUE7QUNNMUI7QURKRTtFQUNFLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxRQUFBO0VBQVUsYUFBQTtFQUFlLFFBQUE7RUFBVSwyQkFBQTtBQ1d2RTtBRFRJO0VBQ0Usa0JBQUE7RUFBb0IsVUFBQTtFQUFZLFlBQUE7RUFBYyxRQUFBO0VBQVUsT0FBQTtBQ2U5RDtBRGRNO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFjLFFBQUE7RUFBVSxZQUFBO0VBQWdCLE9BQUE7RUFFNUQsb0RBQUE7RUFDQSxrQ0FBQTtBQ21CUjtBRGZJO0VBQ0Usa0JBQUE7RUFBb0IsVUFBQTtFQUFZLFlBQUE7RUFBYyxTQUFBO0VBQVcsT0FBQTtBQ3FCL0Q7QURwQk07RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWMsUUFBQTtFQUFVLFlBQUE7RUFBZ0IsT0FBQTtFQUU1RCxxREFBQTtFQUNBLGlDQUFBO0FDeUJSO0FEckJJO0VBQ0Usa0JBQUE7RUFBb0IsVUFBQTtFQUFZLFlBQUE7RUFBYyxTQUFBO0VBQVcsT0FBQTtFQUFTLDJCQUFBO0VBQ2xFLFVBQUE7QUM0Qk47QUQzQk07RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWMsUUFBQTtFQUFVLFlBQUE7RUFBZ0IsT0FBQTtFQUU1RCwyQkFBQTtFQUNBLGtDQUFBO0FDZ0NSO0FENUJJO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtBQzhCTiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvL3Bob3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbF9waG90byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgdG9wOiAwO1xuICBsZWZ0OiAwOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZ3MvYmFjay5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgLnBob3RvX3ZpZXdlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogOTAlOyBsZWZ0OiA1JTsgaGVpZ2h0OiAzOTVweDsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblxuICAgIC5sZWZ0X3Bob3RvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDQwJTsgaGVpZ2h0OiAxMDAlOyBsZWZ0OiAyJTsgdG9wOiAwJTtcbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCUgOyB0b3A6IDUwJTsgaGVpZ2h0OiBhdXRvICA7IGxlZnQ6IDA7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpICByb3RhdGUzZCgwLCAxLCAwLCA0NWRlZyk7XG4gICAgICAgIGJveC1zaGFkb3c6IC00cHggMCA4cHggMnB4ICM2YjYyNjI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJpZ2h0X3Bob3RvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDQwJTsgaGVpZ2h0OiAxMDAlOyByaWdodDogMiU7IHRvcDogMCU7XG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlIDsgdG9wOiA1MCU7IGhlaWdodDogYXV0byAgOyBsZWZ0OiAwO1xuXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUzZCgwLCAxLCAwLCAtNDVkZWcpO1xuICAgICAgICBib3gtc2hhZG93OiA0cHggMCA4cHggMnB4ICM2YjYyNjI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNlbnRlcl9waG90byB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiA1MCU7IGhlaWdodDogMTAwJTsgbGVmdDogNTAlOyB0b3A6IDAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJSA7IHRvcDogNTAlOyBoZWlnaHQ6IGF1dG8gIDsgbGVmdDogMDtcblxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDdweCAxcHggYmxhY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGl2IHtcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICBwZXJzcGVjdGl2ZTogNjAwcHg7XG5cbiAgfVxuXG4gIH1cbn1cbiIsIi5hbGxfcGhvdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL2JhY2suanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmFsbF9waG90byAucGhvdG9fdmlld2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTAlO1xuICBsZWZ0OiA1JTtcbiAgaGVpZ2h0OiAzOTVweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5hbGxfcGhvdG8gLnBob3RvX3ZpZXdlciAubGVmdF9waG90byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAyJTtcbiAgdG9wOiAwJTtcbn1cbi5hbGxfcGhvdG8gLnBob3RvX3ZpZXdlciAubGVmdF9waG90byBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlM2QoMCwgMSwgMCwgNDVkZWcpO1xuICBib3gtc2hhZG93OiAtNHB4IDAgOHB4IDJweCAjNmI2MjYyO1xufVxuLmFsbF9waG90byAucGhvdG9fdmlld2VyIC5yaWdodF9waG90byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByaWdodDogMiU7XG4gIHRvcDogMCU7XG59XG4uYWxsX3Bob3RvIC5waG90b192aWV3ZXIgLnJpZ2h0X3Bob3RvIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUzZCgwLCAxLCAwLCAtNDVkZWcpO1xuICBib3gtc2hhZG93OiA0cHggMCA4cHggMnB4ICM2YjYyNjI7XG59XG4uYWxsX3Bob3RvIC5waG90b192aWV3ZXIgLmNlbnRlcl9waG90byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMjtcbn1cbi5hbGxfcGhvdG8gLnBob3RvX3ZpZXdlciAuY2VudGVyX3Bob3RvIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggN3B4IDFweCBibGFjaztcbn1cbi5hbGxfcGhvdG8gLnBob3RvX3ZpZXdlciBkaXYge1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBwZXJzcGVjdGl2ZTogNjAwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/photo/photo.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/photo/photo.component.ts ***!
          \******************************************/
        /*! exports provided: PhotoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function () { return PhotoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PhotoComponent = /** @class */ (function () {
                function PhotoComponent() {
                }
                PhotoComponent.prototype.ngOnInit = function () {
                };
                return PhotoComponent;
            }());
            PhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-photo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo/photo.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo.component.scss */ "./src/app/photo/photo.component.scss")).default]
                })
            ], PhotoComponent);
            /***/ 
        }),
        /***/ "./src/app/projects.service.ts": 
        /*!*************************************!*\
          !*** ./src/app/projects.service.ts ***!
          \*************************************/
        /*! exports provided: ProjectsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function () { return ProjectsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProjectsService = /** @class */ (function () {
                function ProjectsService() {
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
                return ProjectsService;
            }());
            ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProjectsService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/devshadow/Downloads/portefolio-master/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map