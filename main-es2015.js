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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-scrollbar>\n  <div class=\"all_about_div row flex-column-reverse flex-md-row\">\n    <div class=\"col-12 col-md-6\">\n      <div class=\"text_div\">\n        <teximate #enterAnimation1 text=\"<strong>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n        <div style=\"padding-left: 20px ;\">\n          <teximate #yellowAnimation1 text=\"About me\" class=\"YellowText\" [enter]=\"yellowAnimation\"></teximate>\n        </div>\n        <teximate #enterAnimation2 text=\"</strong>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n        <div>\n          <teximate #whiteAnimation1 text=\"I am a full-stack web developer .\" class=\"whiteText\" [enter]=\"whiteAnimation\"></teximate>\n          <teximate #whiteAnimation2 text=\"professionally connected with the web development industry and information technology for many years .\" class=\"whiteText\" [enter]=\"whiteAnimation\"></teximate>\n          <teximate #whiteAnimation3 text=\"I want to make things that make a difference .\" class=\"whiteText\" [enter]=\"whiteAnimation\"></teximate>\n          <teximate #whiteAnimation4 text=\"I am also interested in freelance opportunities , especially ambitious or large projects.\" class=\"whiteText\" [enter]=\"whiteAnimation\"></teximate>\n\n        </div>\n        <button class=\"animate_all\" (click)=\"AnimationsText([enterAnimation1 , yellowAnimation1 , enterAnimation2 , whiteAnimation1 , whiteAnimation2 , whiteAnimation3 , whiteAnimation4 ])\" style=\"visibility: hidden;\">Play</button>\n\n      </div>\n\n    </div>\n    <div class=\"cube col-12 col-md-6\">\n      <div id=\"cube\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </div>\n    <!--\n      <div class=\"pyramid col-12 col-md-6\">\n        <div id=\"pyramid\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n\n      </div>\n    -->\n\n  </div>\n</ng-scrollbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container fullscreen>\n  <mat-sidenav\n    mode=\"side\"\n    [opened] = \"opennedSidenav\"\n    >\n    <ng-scrollbar shown='hover' >\n    <div class=\"allItems\">\n\n      <div class=\"topItemsSidenav\">\n            <div class=\"toggleSidenav itemSidenav\" style=\"font-size: 25px ;\">\n              <img src=\"assets/dark_yellow.png\" alt=\"\">\n            </div>\n\n          </div>\n\n          <div class=\"CenterItemsSidenav\">\n            <div class=\"homeSidenav itemSidenav activeItem\" (click)=\"GoPage('home')\">\n              <i class=\"material-icons\">home</i><span>HOME</span>\n            </div>\n            <div class=\"aboutSidenav itemSidenav\" (click)=\"GoPage('about')\">\n              <i class=\"material-icons\">perm_identity</i> <span>ABOUT</span>\n            </div>\n            <div class=\"contactSidenav itemSidenav\" (click)=\"GoPage('contact')\">\n              <i class=\"material-icons\">mail_outline</i> <span>CONTACT</span>\n            </div>\n            <div class=\"skillsSidenav itemSidenav\" (click)=\"GoPage('skills')\">\n              <i class=\"material-icons\">school</i> <span>SKILLS</span>\n            </div>\n            <div class=\"workSidenav itemSidenav\" (click)=\"GoPage('work')\">\n              <i class=\"material-icons\">remove_red_eye</i> <span>MY WORK</span>\n            </div>\n          </div>\n\n          <div class=\"bottomItemsSidenav\">\n            <div class=\"fbSidenav itemSidenav\">\n              <i class=\"fab fa-facebook-f    \" (click)=\"click_fb()\" ></i>\n            </div>\n            <div class=\"twitterSidenav itemSidenav\">\n              <i class=\"fab fa-linkedin-in    \" (click)=\"click_in()\" ></i>\n            </div>\n            <div class=\"githubSidenav itemSidenav\">\n              <i class=\"fab fa-github    \" (click)=\"click_gh()\" ></i>\n            </div>\n          </div>\n\n        </div>\n      </ng-scrollbar>\n\n  </mat-sidenav>\n  <mat-sidenav-content\n  [ngClass]=\"{'opennedSidenav' : opennedSidenav , 'closedSidenav' : !opennedSidenav }\"\n  >\n        <mat-toolbar class=\"fixed-top w-100 d-sm-none\"\n        [ngClass]=\"{'opennedSidenav' : opennedSidenav , 'closedSidenav' : !opennedSidenav }\"\n\n        >\n          <div class=\"open-sidenav\">\n            <i class=\"fa fa-align-left\" aria-hidden=\"true\" (click)=\"toggleSidenav()\"></i>\n          </div>\n          <div class=\"toolbar-logo\">\n            <img src=\"assets/yellow_dark.png\" alt=\"\">\n          </div>\n        </mat-toolbar>\n    <div class=\"loading_page_div\">\n      <div class=\"loading_div\">\n        <div class=\"loading_content\">\n            <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n            <img src=\"assets/dark_yellow.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-scrollbar>\n\n  <div class=\"all_contact row\">\n    <div class=\"col-12 col-md-6 info\">\n\n      <div class=\"text_div\">\n        <teximate #enterAnimation3 text=\"<strong>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n        <div style=\"padding-left: 20px ;\">\n          <teximate #yellowAnimation2 text=\"Contact me\" class=\"YellowText\" [enter]=\"yellowAnimation\"></teximate>\n        </div>\n        <teximate #enterAnimation4 text=\"</strong>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n        <div class=\"one_contact\">\n          <div class=\"one_contact_logo\"> <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> </div>\n          <div class=\"one_contact_content\"> fa_badeche@esi.dz </div>\n        </div>\n\n        <div class=\"one_contact\">\n          <div class=\"one_contact_logo\"> <i class=\"fa fa-phone\" aria-hidden=\"true\"></i> </div>\n          <div class=\"one_contact_content\"> (213)6 64 36 06 82 </div>\n        </div>\n        <button class=\"animate_all\" (click)=\"AnimationsText([enterAnimation3 , yellowAnimation2 , enterAnimation4 ])\" style=\"visibility: hidden;\">Play</button>\n          <div class=\"one_contact\" style=\" height: auto; font-size: 13px; width: 100%; padding: 1vw; text-align: left; font-family: 'Nunito', sans-serif;\">\n            I am interested in freelance opportunities . <br> especially ambitious or large projects. <br> However, if you have other request or question, don’t hesitate to contact me using below form either.\n          </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"col-12 col-md-6 mailer p-3\">\n\n\n        <form (ngSubmit)=\"onSubmit(form)\"  #form=\"ngForm\"  class=\"row p-4 form_mailer\" style=\"  margin-top : 40px ;\">\n\n\n          <mat-form-field color=\"accent\"  class=\"col-12\">\n            <input matInput required [(ngModel)]=\"email.mail\"  name=\"mail\" placeholder=\"Your email\" type=\"email\" email autocomplete='off'>\n          </mat-form-field>\n\n          <mat-form-field color=\"accent\" class=\"col-6\">\n            <input matInput required [(ngModel)]=\"email.name\" name=\"name\" [pattern]=\"email.pattern\" placeholder=\"Name\" type=\"text\"  autocomplete='off'>\n          </mat-form-field>\n          <mat-form-field color=\"accent\" class=\"col-6\">\n            <input matInput required [(ngModel)]=\"email.lastname\" name=\"lastname\" [pattern]=\"email.pattern\"  placeholder=\"Lastname\" type=\"text\"  autocomplete='off'>\n          </mat-form-field>\n\n          <mat-form-field color=\"accent\" class=\"col-12\">\n            <input matInput required [(ngModel)]=\"email.subject\" name=\"subject\" [pattern]=\"email.pattern\"  placeholder=\"Subject\" type=\"text\"  autocomplete='off'>\n          </mat-form-field>\n\n          <mat-form-field color=\"accent\" class=\"col-12\">\n            <textarea matInput name=\"\" id=\"\" required [(ngModel)]=\"email.content\" name=\"content\" placeholder=\"Write Your Message\" rows=\"4\" style=\"height : 200px ;\"></textarea>\n          </mat-form-field>\n\n          <div class=\"col-12\">\n            <input type=\"submit\" value=\"Send\" class=\"w-100 btn btn-dark\">\n          </div>\n\n        </form>\n\n\n    </div>\n  </div>\n</ng-scrollbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/dialog-loading/dialog-loading.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/dialog-loading/dialog-loading.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar *ngIf=\"hidden_form\"  mode=\"indeterminate\" color=\"accent\" style=\"z-index: 3 ;\"></mat-progress-bar>\n<div *ngIf=\"hidden_form\" class=\"message_dialog text-muted w-100 p-2\">\n  Sending Mail ...\n</div>\n<div *ngIf=\"succee_msg\" class=\"message flex-column justify-content-center w-100 p-2 text-success\"  style='color : #fdb82c !important ;'>\n  <i class=\"fas fa-check-circle\"></i><br>\n  <span>Mail sended with success</span>\n</div>\n\n<div *ngIf=\"error_msg\" class=\"message flex-column justify-content-center w-100 p-2 text-danger\" >\n  <i class=\"fas fa-times-circle    \"></i><br>\n  <span>Something wrong !! try again ...</span>\n</div>\n\n<button *ngIf=\"error_msg\" (click)=\"onNoClick()\"   class=\"btn btn-danger w-100\">Close</button>\n<button *ngIf=\"succee_msg\" (click)=\"onNoClick2()\"   class=\"btn btn-dark w-100\" style='background-color : #fdb82c ; border-color : #fdb82c ; '>Close</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" background_all\">\n  <div class=\"blackDiv\">\n    <div class=\"topText text_div\">\n      <teximate #enterAnimation1 text=\"<!Doctype html>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n      <div style=\"padding-left: 20px ;\">\n        <teximate #enterAnimation2 text=\"<head>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n        <div class=\"textCenter\">\n          <teximate #enterAnimation3 text=\"<title>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n          <div style=\"padding-left: 20px ;\">\n            <div class=\"whiteText texta\">\n              <div class=\"text_bg text_bg_white\"></div>\n              <div class=\"text_bg2\"></div>\n              Hello , I'm\n            </div>\n            <br>\n            <div class=\"YellowText texta\" >\n               <div class=\"text_bg text_bg_yellow\"></div>\n               <div class=\"text_bg2\"></div>\n               Badeche Abdennour .\n              </div>\n          </div>\n          <teximate #enterAnimation4 text=\"</title>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n\n        </div>\n        <teximate #enterAnimation5 text=\"</head>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n        <teximate #enterAnimation6 text=\"<body>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n      </div>\n\n    </div>\n\n    <div class=\"centerText  text_div textCenter\"  style=\"padding-left : 60px ;\">\n\n      <div class=\"whiteText texta\">\n        <div class=\"text_bg text_bg_white\"></div>\n        <div class=\"text_bg2\"></div>\n        I'm a Full-Stack Web Developer\n      </div>\n      <br>\n      <teximate #darkAnimation1 text=\"Front End Developer | Back End Developer | Cross Plateform Developer \" class=\"darkText\" [enter]=\"darkAnimation\"></teximate>\n      <button mat-stroked-button color='accent' class=\"contact_me_btn\" (click)=\"contactme()\" >  <i class=\"material-icons\">mail_outline</i> Contact Me </button>\n      <button mat-stroked-button color='warn'  class=\"cv_btn\"  (click)=\"getcv()\" > <i class=\"material-icons\">perm_identity</i> Get My Resume </button>\n      <a href=\"assets/AbdennourBadeche.jpg\" download style=\"display: none;\" class=\"get_cv_a\"></a>\n    </div>\n\n    <div class=\"bottomText text_div\">\n      <div  style=\"padding-left : 20px ;\">\n        <teximate #enterAnimation7 text=\"</body>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n      </div>\n\n\n      <teximate #enterAnimation8 text=\"</html>\" class=\"codeText\" [enter]=\"enterAnimation\"></teximate>\n    </div>\n\n    <button class=\"animate_all\" (click)=\"AnimationsText([enterAnimation1 , enterAnimation2 , enterAnimation3 , enterAnimation4 , enterAnimation5 , enterAnimation6 , enterAnimation7 , enterAnimation8 ])\" style=\"visibility: hidden;\">Play</button>\n\n  </div>\n\n\n  <div class=\"lightDiv\">\n    <div class=\"lightCircle\">\n      <div class=\"logo_div_all\">\n        <div class=\"circle1\">\n          <div class=\"circle11\"> <i class=\"fab fa-html5    \"></i> </div>\n          <div class=\"circle12\"> <i class=\"fab fa-css3    \"></i> </div>\n          <div class=\"circle13\"> <i class=\"fas fa-code    \"></i> </div>\n          <div class=\"circle14\"> <i class=\"fab fa-node-js    \"></i> </div>\n        </div>\n        <div class=\"circle2\">\n          <div class=\"circle21\"> <i class=\"fab fa-angular    \"></i> </div>\n          <div class=\"circle22\"> <i class=\"fab fa-laravel    \"></i> </div>\n          <div class=\"circle23\"> <i class=\"fas fa-database    \"></i> </div>\n          <div class=\"circle24\"> <i class=\"fab fa-react    \"></i></div>\n        </div>\n        <div class=\"circle3\">\n          <img src=\"assets/dark_dark.png\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo/photo.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo/photo.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"all_photo\">\n  <div class=\"photo_viewer\">\n    <div class=\"left_photo\">\n      <img src=\"assets/imgs/esi/acc3.png\" alt=\"\">\n    </div>\n    <div class=\"center_photo\">\n      <img src=\"assets/imgs/esi/acc2.png\" alt=\"\">\n    </div>\n    <div class=\"right_photo\">\n      <img src=\"assets/imgs/esi/0.png\" alt=\"\">\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-scrollbar>\n\n  <div class=\"all_skills row\">\n    <div class=\"frontend_div cat_skill col-12 col-md-6\" style=\"min-height: 350px;\">\n      <div class=\"div_title\">\n        <hr>\n        <div>Front-End</div>\n      </div>\n      <div class=\"one_skill_div\">\n        <div class=\"one_skill_title d-flex justify-content-between\">\n          <span class=\"name_skill\">HTML5 / CSS3</span>\n          <span class=\"stars\">\n            <i class=\"material-icons star1 active_star\">star_border</i>\n            <i class=\"material-icons star2 active_star\">star_border</i>\n            <i class=\"material-icons star3 active_star\">star_border</i>\n            <i class=\"material-icons star4 active_star\">star_border</i>\n            <i class=\"material-icons star5\">star_border</i>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"one_skill_div\">\n        <div class=\"one_skill_title d-flex justify-content-between\">\n          <span class=\"name_skill\">SCSS / BOOTSTRAP4</span>\n          <span class=\"stars\">\n            <i class=\"material-icons star1 active_star\">star_border</i>\n            <i class=\"material-icons star2 active_star\">star_border</i>\n            <i class=\"material-icons star3 active_star\">star_border</i>\n            <i class=\"material-icons star4 active_star\">star_border</i>\n            <i class=\"material-icons star5\">star_border</i>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"one_skill_div\">\n        <div class=\"one_skill_title d-flex justify-content-between\">\n          <span class=\"name_skill\">JAVASCRIPT</span>\n          <span class=\"stars\">\n            <i class=\"material-icons star1 active_star\">star_border</i>\n            <i class=\"material-icons star2 active_star\">star_border</i>\n            <i class=\"material-icons star3 active_star\">star_border</i>\n            <i class=\"material-icons star4 active_star\">star_border</i>\n            <i class=\"material-icons star5 active_star\">star_border</i>\n          </span>\n        </div>\n        <div class=\"sub_skills_div\">\n          <div class=\"one_sub_skill d-flex justify-content-between\">\n            <span class=\"name_sub_skill\">JS native / TS</span>\n            <div class=\"progress progress_sub_skill\">\n              <div class=\"progress-bar js_bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n\n          <div class=\"one_sub_skill d-flex justify-content-between\">\n            <span class=\"name_sub_skill\">JQuery</span>\n            <div class=\"progress progress_sub_skill\">\n              <div class=\"progress-bar jquery_bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n\n          <div class=\"one_sub_skill d-flex justify-content-between\">\n            <span class=\"name_sub_skill\">RxJS / AJAX / JSON </span>\n            <div class=\"progress progress_sub_skill\">\n              <div class=\"progress-bar ajax_bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n\n          <div class=\"one_sub_skill d-flex justify-content-between\">\n            <span class=\"name_sub_skill\">AngularJS</span>\n            <div class=\"progress progress_sub_skill\">\n              <div class=\"progress-bar angularjs_bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n\n          <div class=\"one_sub_skill d-flex justify-content-between\">\n            <span class=\"name_sub_skill\">Angular</span>\n            <div class=\"progress progress_sub_skill\">\n              <div class=\"progress-bar angular_bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n\n          <div class=\"one_sub_skill d-flex justify-content-between\">\n            <span class=\"name_sub_skill\">React</span>\n            <div class=\"progress progress_sub_skill\">\n              <div class=\"progress-bar react_bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n    <div class=\"backend_crossplatform_div col-12 col-md-6 row\">\n      <div class=\"backend_div  cat_skill col-12\">\n        <div class=\"div_title\">\n          <hr>\n          <div>Back-End</div>\n        </div>\n        <div class=\"one_skill_div\">\n          <div class=\"one_skill_title d-flex justify-content-between\">\n            <span class=\"name_skill\">SQL / NoSQL</span>\n            <span class=\"stars\">\n              <i class=\"material-icons star1 active_star\">star_border</i>\n              <i class=\"material-icons star2 active_star\">star_border</i>\n              <i class=\"material-icons star3 active_star\">star_border</i>\n              <i class=\"material-icons star4 active_star\">star_border</i>\n              <i class=\"material-icons star5 active_star\">star_border</i>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"one_skill_div\">\n          <div class=\"one_skill_title d-flex justify-content-between\">\n            <span class=\"name_skill\">PHP</span>\n            <span class=\"stars\">\n              <i class=\"material-icons star1 active_star\">star_border</i>\n              <i class=\"material-icons star2 active_star\">star_border</i>\n              <i class=\"material-icons star3 active_star\">star_border</i>\n              <i class=\"material-icons star4 active_star\">star_border</i>\n              <i class=\"material-icons star5 active_star\">star_border</i>\n            </span>\n          </div>\n          <div class=\"sub_skills_div\">\n\n            <div class=\"one_sub_skill d-flex justify-content-between\">\n              <span class=\"name_sub_skill\">PHP native / Ratchet / ...</span>\n              <div class=\"progress progress_sub_skill\">\n                <div class=\"progress-bar php_bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n            </div>\n\n            <div class=\"one_sub_skill d-flex justify-content-between\">\n              <span class=\"name_sub_skill\">Laravel</span>\n              <div class=\"progress progress_sub_skill\">\n                <div class=\"progress-bar laravel_bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n            </div>\n\n            <div class=\"one_sub_skill d-flex justify-content-between\">\n              <span class=\"name_sub_skill\">Lumen</span>\n              <div class=\"progress progress_sub_skill\">\n                <div class=\"progress-bar lumen_bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"crossplatform_div cat_skill col-12\">\n        <div class=\"div_title\">\n          <hr>\n          <div>Cross-Plateform</div>\n        </div>\n        <div class=\"one_skill_div\">\n          <div class=\"one_skill_title d-flex justify-content-between\">\n            <span class=\"name_skill\">IONIC4</span>\n            <span class=\"stars\">\n              <i class=\"material-icons star1 active_star\">star_border</i>\n              <i class=\"material-icons star2 active_star\">star_border</i>\n              <i class=\"material-icons star3 active_star\">star_border</i>\n              <i class=\"material-icons star4 active_star\">star_border</i>\n              <i class=\"material-icons star5\">star_border</i>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"one_skill_div\">\n          <div class=\"one_skill_title d-flex justify-content-between\">\n            <span class=\"name_skill\">ELECTRON</span>\n            <span class=\"stars\">\n              <i class=\"material-icons star1 active_star\">star_border</i>\n              <i class=\"material-icons star2 active_star\">star_border</i>\n              <i class=\"material-icons star3 active_star\">star_border</i>\n              <i class=\"material-icons star4\">star_border</i>\n              <i class=\"material-icons star5\">star_border</i>\n            </span>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"other_div col-12 cat_skill row\">\n      <div class=\"div_title col-12\">\n        <hr>\n        <div>Other</div>\n      </div>\n      <div class=\"one_other_skill col-6 col-md-3\">\n        <div class=\"one_other_skill_div\">\n          <div class=\"one_other_skill_name\">Github</div>\n          <div class=\"one_other_skill_logo\"> <i class=\"fab fa-github\" aria-hidden=\"true\"></i> </div>\n          <mat-progress-spinner color=\"warn\" [value]=\"github\" diameter=\"70\" strokeWidth='5'>\n          </mat-progress-spinner>\n        </div>\n      </div>\n\n      <div class=\"one_other_skill col-6 col-md-3\">\n        <div class=\"one_other_skill_div\">\n          <div class=\"one_other_skill_name\">Docker</div>\n          <div class=\"one_other_skill_logo\"> <i class=\"fab fa-docker\"></i></div>\n          <mat-progress-spinner color=\"warn\" [value]=\"docker\" diameter=\"70\" strokeWidth='5'>\n          </mat-progress-spinner>\n        </div>\n      </div>\n\n      <div class=\"one_other_skill col-6 col-md-3\">\n        <div class=\"one_other_skill_div\">\n          <div class=\"one_other_skill_name\">Deployement</div>\n          <div class=\"one_other_skill_logo\"> <i class=\"fa fa-server\" aria-hidden=\"true\"></i></div>\n          <mat-progress-spinner color=\"warn\" [value]=\"deployement\" diameter=\"70\" strokeWidth='5'>\n          </mat-progress-spinner>\n        </div>\n      </div>\n\n      <div class=\"one_other_skill col-6 col-md-3\">\n        <div class=\"one_other_skill_div\">\n          <div class=\"one_other_skill_name\" style=\"font-size: 11px; line-height: 15px;\">Code Documentation</div>\n          <div class=\"one_other_skill_logo\"> <i class=\"fa fa-code\" aria-hidden=\"true\"></i> </div>\n          <mat-progress-spinner color=\"warn\" [value]=\"documentation\" diameter=\"70\" strokeWidth='5'>\n          </mat-progress-spinner>\n        </div>\n      </div>\n\n      <div class=\"one_other_skill col-6 col-md-3\">\n        <div class=\"one_other_skill_div\">\n          <div class=\"one_other_skill_name\" style=\"font-size: 11px; line-height: 15px;\">Conception & Analyse</div>\n          <div class=\"one_other_skill_logo\"> <i class=\"fas fa-project-diagram    \"></i> </div>\n          <mat-progress-spinner color=\"warn\" [value]=\"conception\" diameter=\"70\" strokeWidth='5'>\n          </mat-progress-spinner>\n        </div>\n      </div>\n\n      <div class=\"one_other_skill col-6 col-md-3\">\n        <div class=\"one_other_skill_div\">\n          <div class=\"one_other_skill_name\" style=\"font-size: 11px; line-height: 15px;\">Problem Solving</div>\n          <div class=\"one_other_skill_logo\"> <i class=\"fas fa-brain    \"></i> </div>\n          <mat-progress-spinner color=\"warn\" [value]=\"problem\" diameter=\"70\" strokeWidth='5'>\n          </mat-progress-spinner>\n        </div>\n      </div>\n\n      <div class=\"one_other_skill col-6 col-md-3\">\n        <div class=\"one_other_skill_div\">\n          <div class=\"one_other_skill_name\">Design</div>\n          <div class=\"one_other_skill_logo\"> <i class=\"fas fa-pen    \"></i> </div>\n          <mat-progress-spinner color=\"warn\" [value]=\"photoshop\" diameter=\"70\" strokeWidth='5'>\n          </mat-progress-spinner>\n        </div>\n      </div>\n\n      <div class=\"one_other_skill col-6 col-md-3\">\n        <div class=\"one_other_skill_div\">\n          <div class=\"one_other_skill_name\">Testing</div>\n          <div class=\"one_other_skill_logo\"> <i class=\"fas fa-bug    \"></i> </div>\n          <mat-progress-spinner color=\"warn\" [value]=\"testing\" diameter=\"70\" strokeWidth='5'>\n          </mat-progress-spinner>\n        </div>\n      </div>\n\n\n\n    </div>\n  </div>\n</ng-scrollbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-scrollbar>\n  <div class=\"all_work_space row\">\n    <div class=\"one_card_div card_p card_r card1 col-12 col-md-4 col-lg-3\">\n      <div class=\"one_card\">\n        <div class=\"one_card_front\">\n          <div class=\"backgrounder\"></div>\n          <img src=\"assets/dark_dark.png\" alt=\"\">\n        </div>\n      </div>\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{fournishop.imgs_path + fournishop.background}}\" alt=\"\" class=\"one_card_background\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\" (click)='OnViewWork(fournishop)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{fournishop.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-js    \"></i>\n              <i class=\"fab fa-angular\"></i>\n              <br>\n              <i class=\"fab fa-laravel\"></i>\n              <i class=\"fab fa-php\"></i>\n\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"one_card_div card_p card_r card2 col-12 col-md-4 col-lg-3\">\n      <div class=\"one_card\">\n        <div class=\"one_card_front\">\n          <div class=\"backgrounder\"></div>\n          <img src=\"assets/dark_dark.png\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"one_card_back\">\n        <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n        <img src=\"{{esi.imgs_path + esi.background}}\" alt=\"\" class=\"one_card_background\">\n        <div class=\"project_detail\">\n          <div class=\"project_view_btn\"  (click)='OnViewWork(esi)'>\n            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n          </div>\n          <div class=\"project_title\">{{esi.name}}</div>\n          <div class=\"project_tech\">\n            <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n            <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n            <i class=\"fab fa-js    \"></i>\n            <i class=\"fab fa-angular\"></i>\n            <br>\n            <i class=\"fab fa-laravel\"></i>\n            <i class=\"fab fa-php\"></i>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"one_card_div  card_p card_r card3 col-12 col-md-4 col-lg-3\">\n      <div class=\"one_card \">\n        <div class=\"one_card_front\">\n          <div class=\"backgrounder\"></div>\n          <img src=\"assets/dark_dark.png\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"one_card_back\">\n        <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n        <img src=\"{{sits.imgs_path + sits.background}}\" alt=\"\" class=\"one_card_background\">\n        <div class=\"project_detail\">\n          <div class=\"project_view_btn\"  (click)='OnViewWork(sits)'>\n            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n          </div>\n          <div class=\"project_title\">{{sits.name}}</div>\n          <div class=\"project_tech\">\n            <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n            <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n            <i class=\"fab fa-js    \"></i>\n            <i class=\"fab fa-angular\"></i>\n            <br>\n            <i class=\"fab fa-php\"></i>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"one_card_div card_p card_r card4 col-12 col-md-4 col-lg-3\">\n      <div class=\"one_card\">\n        <div class=\"one_card_front\">\n          <div class=\"backgrounder\"></div>\n          <img src=\"assets/dark_dark.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"one_card_back\">\n        <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n        <img src=\"{{dictili.imgs_path + dictili.background}}\" alt=\"\" class=\"one_card_background\">\n        <div class=\"project_detail\">\n          <div class=\"project_view_btn\"  (click)='OnViewWork(dictili)'>\n            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n          </div>\n          <div class=\"project_title\">{{dictili.name}}</div>\n          <div class=\"project_tech\">\n            <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n            <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n            <i class=\"fab fa-js    \"></i>\n            <i class=\"fab fa-angular\"></i>\n            <br>\n            <i class=\"fab fa-php\"></i>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"one_card_div card_p  card5 col-12 col-md-4 col-lg-3\">\n      <div class=\"one_card\">\n        <div class=\"one_card_front\">\n          <div class=\"backgrounder\"></div>\n          <img src=\"assets/dark_dark.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"one_card_back\">\n        <div class=\"all_this_card2\">\n          <i class=\"material-icons\">cloud_upload</i>\n          <div class=\"content_this_card\">\n            I own more projects , <br>  I will upload them soon .\n          </div>\n        </div>\n\n      </div>\n\n\n    </div>\n\n    <div class=\"one_card_div card_p card_r card6 col-12 col-md-4 col-lg-3\">\n      <div class=\"one_card\">\n        <div class=\"one_card_front\">\n          <div class=\"backgrounder\"></div>\n          <img src=\"assets/dark_dark.png\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"one_card_back\">\n        <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n        <img src=\"{{portfolio.imgs_path + portfolio.background}}\" alt=\"\" class=\"one_card_background\">\n        <div class=\"project_detail\">\n          <div class=\"project_view_btn\"  (click)='OnViewWork(portfolio)'>\n            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n          </div>\n          <div class=\"project_title\">{{portfolio.name}}</div>\n          <div class=\"project_tech\">\n            <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n            <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n            <i class=\"fab fa-js    \"></i>\n            <br>\n            <i class=\"fab fa-angular\"></i>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"one_card_div card_p card_r card7 col-12 col-md-4 col-lg-3\">\n      <div class=\"one_card\">\n        <div class=\"one_card_front\">\n          <div class=\"backgrounder\"></div>\n          <img src=\"assets/dark_dark.png\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"one_card_back\">\n        <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n        <img src=\"{{sfsd.imgs_path + sfsd.background}}\" alt=\"\" class=\"one_card_background\">\n        <div class=\"project_detail\">\n          <div class=\"project_view_btn\"  (click)='OnViewWork(sfsd)'>\n            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n          </div>\n          <div class=\"project_title\">{{sfsd.name}}</div>\n          <div class=\"project_tech\">\n            <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n            <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n            <i class=\"fab fa-js    \"></i>\n            <br>\n            <i class=\"fab fa-php\"></i>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"one_card_div card_p card8 col-12 col-md-4 col-lg-3\">\n      <div class=\"one_card\">\n        <div class=\"one_card_front\">\n          <div class=\"backgrounder\"></div>\n          <img src=\"assets/dark_dark.png\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"one_card_back\">\n        <div class=\"all_this_card\">\n          <i class=\"material-icons\">code</i>\n          <div class=\"content_this_card\">\n            I have a Large experience in Backend development , <br>\n            I have worked in many projects .\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</ng-scrollbar>\n<div class=\"fake_cards row\">\n  <div class=\"one_card_div card_f card1\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card2\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card3\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card4\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card5\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card6\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card7\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card8\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"img_viewer\">\n  <div class=\"closer\"> <i class=\"fa fa-times\" (click)='OnCloseSlider()' aria-hidden=\"true\"></i>  </div>\n  <div class=\"img_div\">\n    <div *ngFor=\"let image of selected_work.imgs ; let i = index ;\" id=\"i{{i}}\"  class=\"one_image\" [ngStyle]=\"{'left': 100*i+'%' }\" >\n      <div class=\"image_bg\" [ngStyle]=\"{'background-image' : 'url(../../'+selected_work.imgs_path+image.name+')'}\"></div>\n      <mat-progress-spinner color=\"accent\" mode=\"indeterminate\" diameter='50' strokeWidth='5'> </mat-progress-spinner>\n      <img src=\"{{selected_work.imgs_path+image.name}}\" alt=\"\" [ngClass]=\"{'heighted_pic' : !image.width}\" >\n    </div>\n\n  </div>\n  <div class=\"slide_left\" *ngIf=\"current_img > 0 \"> <i class=\"fa fa-angle-left\" (click)= 'OnSlideLeft()' aria-hidden=\"true\"></i> </div>\n\n  <div class=\"slide_right\"  *ngIf=\"current_img < selected_work.imgs.length - 1  \"> <i class=\"fa fa-angle-right\" (click)= 'OnSlideRight()' aria-hidden=\"true\"></i> </div>\n\n  <div class=\"control_div\">\n\n    <div class=\"images\">\n      <div class=\"one_img\" id=\"p{{i}}\" *ngFor=\"let image of selected_work.imgs ; let i = index ;\" [ngStyle]=\"{'width': 'calc(100% /'+ selected_work.imgs.length +')' }\" >\n        <div (click)='OnClickBord(i)' class=\"img_bord\"></div>\n      </div>\n      <div class=\"one_img_selected\"  [ngStyle]=\"{'width': 'calc(100% /'+ selected_work.imgs.length +')' }\" > <div class=\"img_bord\"></div> </div>\n    </div>\n  </div>\n</div>\n");

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

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".all_about_div {\n  width: 100%;\n  min-height: 100%;\n}\n\n.row {\n  margin-left: 0;\n  margin: 0;\n}\n\n.pyramid, .cube {\n  position: relative;\n  min-height: 550px;\n  height: 100%;\n  overflow: hidden;\n  width: auto;\n}\n\n.one_contact {\n  width: 300px;\n  height: 50px;\n  position: relative;\n  display: none;\n  color: white;\n  text-align: center;\n  line-height: 48px;\n}\n\n.one_contact .one_contact_logo {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n  left: 0px;\n  font-size: 18px;\n  color: #5a5656;\n}\n\n.one_contact .one_contact_content {\n  position: absolute;\n  width: auto;\n  padding: 0 10px;\n  height: 28px;\n  left: 49px;\n  top: 10px;\n  font-size: 13px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\n#cube {\n  position: absolute;\n  left: calc( 50% - 150px );\n  top: 130px;\n  width: 300px;\n  height: 300px;\n  transform: translateZ(-150px);\n  transform-style: preserve-3d;\n  -webkit-animation: spin 10s linear infinite;\n          animation: spin 10s linear infinite;\n}\n\n#cube div {\n  position: absolute;\n  height: 300px;\n  width: 300px;\n  background-color: rgba(73, 71, 71, 0.6);\n  border: 1px solid;\n  border-color: rgba(89, 87, 87, 0.6);\n}\n\n#cube div:first-child {\n  transform: rotateY(0deg) translateZ(-150px);\n}\n\n#cube div:nth-child(2) {\n  transform: rotateY(-90deg) translateZ(-150px);\n}\n\n#cube div:nth-child(3) {\n  transform: rotateY(90deg) translateZ(-150px);\n}\n\n#cube div:nth-child(4) {\n  transform: rotateX(90deg) translateZ(-150px);\n}\n\n#cube div:nth-child(5) {\n  transform: rotateX(-90deg) translateZ(-150px);\n}\n\n#cube div:nth-child(6) {\n  transform: rotateY(-180deg) translateZ(-150px);\n}\n\n#cube div:after {\n  position: absolute;\n  color: #ef7f7f;\n  left: 75px;\n  top: 75px;\n  text-align: center;\n  opacity: 0.6;\n}\n\n#cube div:first-child:after {\n  content: url('css.png');\n}\n\n#cube div:nth-child(2):after {\n  content: url('html.png');\n}\n\n#cube div:nth-child(3):after {\n  content: url('laravel.png');\n}\n\n#cube div:nth-child(4):after {\n  content: url('angular.png');\n}\n\n#cube div:nth-child(5):after {\n  content: url('mysql.png');\n}\n\n#cube div:nth-child(6):after {\n  content: url('react.png');\n}\n\n.text_div {\n  display: none;\n  padding: 4vw;\n  margin-top: 20px;\n}\n\n.codeText {\n  line-height: 20px;\n  font-size: 17px;\n  color: #5a5656;\n  font-family: \"Ma Shan Zheng\", cursive;\n}\n\n.whiteText {\n  font-size: 15px;\n  color: white;\n  font-weight: 400;\n  line-height: 30px;\n  margin-top: 35px;\n}\n\n.YellowText {\n  padding: 0px 0;\n  line-height: 30px;\n  font-size: 35px;\n  color: #fdb82c;\n  letter-spacing: 2px;\n  text-shadow: 0px 0px 1px white;\n  font-weight: bold;\n  display: block;\n  margin: 0;\n  padding-left: 20px;\n}\n\n.darkText {\n  font-size: 12px;\n  color: white;\n  text-shadow: -1px 0px 1px #ffab00;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 576px) {\n  .whiteText {\n    font-size: 15px;\n  }\n\n  .YellowText {\n    font-size: 15px;\n    padding: 0;\n  }\n\n  .darkText {\n    font-size: 9px;\n  }\n}\n\n#pyramid {\n  position: absolute;\n  left: 5%;\n  margin-left: 120px;\n  top: 100px;\n  height: 500px;\n  width: 100px;\n  -webkit-transform-style: preserve-3d;\n  -webkit-animation: spin 10s linear infinite;\n  -webkit-transform-origin: 116px 200px 116px;\n  -moz-transform-style: preserve-3d;\n  -moz-animation: spin 10s linear infinite;\n  -moz-transform-origin: 116px 200px 116px;\n  -ms-transform-style: preserve-3d;\n  -ms-animation: spin 10s linear infinite;\n  -ms-transform-origin: 116px 200px 116px;\n  transform-style: preserve-3d;\n  animation: spin 10s linear infinite;\n  transform-origin: 116px 200px 116px;\n}\n\n#pyramid div {\n  position: absolute;\n  border-style: solid;\n  border-width: 200px 0 200px 346px;\n  transform-origin: 0 0;\n}\n\n#pyramid div:first-child {\n  border-color: transparent transparent transparent rgba(50, 50, 50, 0.6);\n  transform: rotateY(-19.5deg) rotateX(180deg) translateY(-400px);\n}\n\n#pyramid div:nth-child(2) {\n  border-color: transparent transparent transparent rgba(50, 50, 50, 0.6);\n  transform: rotateY(90deg) rotateZ(60deg) rotateX(180deg) translateY(-400px);\n}\n\n#pyramid div:nth-child(3) {\n  border-color: transparent transparent transparent rgba(50, 50, 50, 0.9);\n  transform: rotateX(60deg) rotateY(19.5deg);\n}\n\n#pyramid div:nth-child(4) {\n  border-color: transparent transparent transparent rgba(50, 50, 50, 0.8);\n  transform: rotateX(-60deg) rotateY(19.5deg) translateX(-116px) translateY(-200px) translateZ(326px);\n}\n\n#pyramid div:after {\n  position: absolute;\n  color: #ef7f7f;\n  left: -311px;\n  top: -69px;\n  text-align: center;\n  opacity: 0.6;\n}\n\n#pyramid div:first-child:after {\n  content: url('css.png');\n}\n\n#pyramid div:nth-child(2):after {\n  content: url('html.png');\n}\n\n#pyramid div:nth-child(3):after {\n  content: url('laravel.png');\n}\n\n#pyramid div:nth-child(4):after {\n  content: url('angular.png');\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWRvd19hY2t5L2J1cmVhdS9hbmd1bGFyLXByb2pldC9wb3J0ZWZvbGlvL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUFhLGdCQUFBO0FDRWY7O0FEQ0E7RUFBTSxjQUFBO0VBQWdCLFNBQUE7QUNJdEI7O0FESEE7RUFDRSxrQkFBQTtFQUFxQixpQkFBQTtFQUFvQixZQUFBO0VBQWUsZ0JBQUE7RUFBa0IsV0FBQTtBQ1U1RTs7QURQQTtFQUNFLFlBQUE7RUFBZSxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsYUFBQTtFQUNqRCxZQUFBO0VBQWUsa0JBQUE7RUFBb0IsaUJBQUE7QUNlckM7O0FEZEU7RUFDRSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsV0FBQTtFQUNsQyxRQUFBO0VBQVUsU0FBQTtFQUFVLGVBQUE7RUFBaUIsY0FBQTtBQ3FCekM7O0FEbkJFO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGVBQUE7RUFBaUIsWUFBQTtFQUNsRCxVQUFBO0VBQVksU0FBQTtFQUFXLGVBQUE7RUFBaUIsaUJBQUE7RUFDeEMsaUJBQUE7RUFBbUIsbUJBQUE7QUM0QnZCOztBRHpCQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFBNEIsVUFBQTtFQUFZLFlBQUE7RUFBZSxhQUFBO0VBQ3ZELDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDK0JGOztBRDlCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7QUNnQ0o7O0FEM0JFO0VBQ0UsMkNBQUE7QUM2Qko7O0FEMUJFO0VBQ0UsNkNBQUE7QUM0Qko7O0FEekJFO0VBQ0UsNENBQUE7QUMyQko7O0FEeEJFO0VBQ0UsNENBQUE7QUMwQko7O0FEdkJFO0VBQ0UsNkNBQUE7QUN5Qko7O0FEdEJFO0VBQ0UsOENBQUE7QUN3Qko7O0FEdEJFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUN3Qko7O0FEdEJFO0VBQ0UsdUJBQUE7QUN3Qko7O0FEdEJFO0VBQ0Usd0JBQUE7QUN3Qko7O0FEdEJFO0VBQ0UsMkJBQUE7QUN3Qko7O0FEdEJFO0VBQ0UsMkJBQUE7QUN3Qko7O0FEdEJFO0VBQ0UseUJBQUE7QUN3Qko7O0FEdEJFO0VBQ0UseUJBQUE7QUN3Qko7O0FEbkJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ3NCRjs7QURwQkE7RUFDRSxpQkFBQTtFQUFvQixlQUFBO0VBQWtCLGNBQUE7RUFBa0IscUNBQUE7QUMwQjFEOztBRHZCQTtFQUNFLGVBQUE7RUFBbUIsWUFBQTtFQUNsQixnQkFBQTtFQUFvQixpQkFBQTtFQUNwQixnQkFBQTtBQzRCSDs7QUQxQkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFBcUIsZUFBQTtFQUFtQixjQUFBO0VBQWtCLG1CQUFBO0VBQzFELDhCQUFBO0VBQWtDLGlCQUFBO0VBQXFCLGNBQUE7RUFBaUIsU0FBQTtFQUN4RSxrQkFBQTtBQ21DRjs7QURqQ0E7RUFDRSxlQUFBO0VBQWtCLFlBQUE7RUFBZSxpQ0FBQTtFQUNqQyxpQkFBQTtBQ3NDRjs7QURuQ0E7RUFDRTtJQUNFLGVBQUE7RUNzQ0Y7O0VEcENBO0lBQ0UsZUFBQTtJQUFpQixVQUFBO0VDd0NuQjs7RUR0Q0E7SUFDRSxjQUFBO0VDeUNGO0FBQ0Y7O0FENUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7QUM4QkY7O0FENUJFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBSUEscUJBQUE7QUM4Qko7O0FEM0JFO0VBQ0UsdUVBQUE7RUFJQSwrREFBQTtBQzZCSjs7QUQxQkU7RUFDRSx1RUFBQTtFQUlBLDJFQUFBO0FDNEJKOztBRHpCRTtFQUNFLHVFQUFBO0VBSUEsMENBQUE7QUMyQko7O0FEeEJFO0VBQ0UsdUVBQUE7RUFJQSxtR0FBQTtBQzBCSjs7QUR2QkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3lCSjs7QUR2QkU7RUFDRSx1QkFBQTtBQ3lCSjs7QUR2QkU7RUFDRSx3QkFBQTtBQ3lCSjs7QUR2QkU7RUFDRSwyQkFBQTtBQ3lCSjs7QUR2QkU7RUFDRSwyQkFBQTtBQ3lCSjs7QURuQkE7RUFFRTtJQUNFLG9EQUFBO0VDcUJGO0VEbkJBO0lBQ0UsMERBQUE7RUNxQkY7QUFDRjs7QUQ1QkE7RUFFRTtJQUNFLG9EQUFBO0VDcUJGO0VEbkJBO0lBQ0UsMERBQUE7RUNxQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbF9hYm91dF9kaXYge1xuICB3aWR0aDogMTAwJTsgbWluLWhlaWdodDogMTAwJSA7XG5cbn1cbi5yb3cge21hcmdpbi1sZWZ0OiAwOyBtYXJnaW46IDA7fVxuLnB5cmFtaWQgLCAuY3ViZSB7XG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7IG1pbi1oZWlnaHQ6IDU1MHB4IDsgaGVpZ2h0OiAxMDAlIDsgb3ZlcmZsb3c6IGhpZGRlbjsgd2lkdGg6IGF1dG87XG59XG5cbi5vbmVfY29udGFjdCB7XG4gIHdpZHRoOiAzMDBweCA7IGhlaWdodDogNTBweDsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBub25lIDtcbiAgY29sb3I6IHdoaXRlIDsgdGV4dC1hbGlnbjogY2VudGVyOyBsaW5lLWhlaWdodDogNDhweDtcbiAgLm9uZV9jb250YWN0X2xvZ28ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiA0OHB4OyB3aWR0aDogNDhweDtcbiAgICB0b3A6IDBweDsgbGVmdDogMHB4O2ZvbnQtc2l6ZTogMThweDsgY29sb3I6ICM1YTU2NTYgO1xuICB9XG4gIC5vbmVfY29udGFjdF9jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiBhdXRvOyBwYWRkaW5nOiAwIDEwcHg7IGhlaWdodDogMjhweDtcbiAgICBsZWZ0OiA0OXB4OyB0b3A6IDEwcHg7IGZvbnQtc2l6ZTogMTNweDsgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn1cbiNjdWJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKCA1MCUgLSAxNTBweCApIDsgdG9wOiAxMzBweDsgd2lkdGg6IDMwMHB4IDsgaGVpZ2h0OiAzMDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xNTBweCk7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGFuaW1hdGlvbjogc3BpbiAxMHMgbGluZWFyIGluZmluaXRlO1xuICBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNzMsIDcxLCA3MSwgMC42KSA7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAgcmdiYSg4OSwgODcsIDg3LCAwLjYpO1xuXG5cbiAgfVxuXG4gIGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooLTE1MHB4KSA7XG4gIH1cbiAgLy9yaWdodFxuICBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKC0xNTBweCkgO1xuICB9XG4gIC8vbGVmdFxuICBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTE1MHB4KTtcbiAgfVxuICAvL3RvcFxuICBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooLTE1MHB4KSA7XG4gIH1cbiAgLy9ib3R0b21cbiAgZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigtMTUwcHgpIDtcbiAgfVxuICAvL2JhY2tcbiAgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooLTE1MHB4KTtcbiAgfVxuICBkaXY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2VmN2Y3ZjtcbiAgICBsZWZ0OiA3NXB4O1xuICAgIHRvcDogNzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogLjY7XG4gIH1cbiAgZGl2OmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgICBjb250ZW50OiB1cmwoLi4vLi4vYXNzZXRzL2Nzcy5wbmcpO1xuICB9XG4gIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvaHRtbC5wbmcpO1xuICB9XG4gIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvbGFyYXZlbC5wbmcpO1xuICB9XG4gIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvYW5ndWxhci5wbmcpO1xuICB9XG4gIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvbXlzcWwucG5nKTtcbiAgfVxuICBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgICBjb250ZW50OiB1cmwoLi4vLi4vYXNzZXRzL3JlYWN0LnBuZyk7XG4gIH1cbn1cblxuXG4udGV4dF9kaXZ7XG4gIGRpc3BsYXk6IG5vbmUgO1xuICBwYWRkaW5nIDogNHZ3IDtcbiAgbWFyZ2luLXRvcCA6IDIwcHggO1xufVxuLmNvZGVUZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDIwcHggOyBmb250LXNpemU6IDE3cHggOyBjb2xvcjogIzVhNTY1NiA7ICBmb250LWZhbWlseTogJ01hIFNoYW4gWmhlbmcnLCBjdXJzaXZlO1xuXG59XG4ud2hpdGVUZXh0IHtcbiAgZm9udC1zaXplIDogMTVweCA7IGNvbG9yIDogd2hpdGUgO1xuICAgZm9udC13ZWlnaHQgOiA0MDAgOyBsaW5lLWhlaWdodCA6IDMwcHggO1xuICAgbWFyZ2luLXRvcCA6IDM1cHggO1xufVxuLlllbGxvd1RleHQge1xuICBwYWRkaW5nIDogMHB4IDAgO1xuICBsaW5lLWhlaWdodCA6IDMwcHggOyBmb250LXNpemUgOiAzNXB4IDsgY29sb3IgOiAjZmRiODJjIDsgbGV0dGVyLXNwYWNpbmc6IDJweCA7XG4gIHRleHQtc2hhZG93IDogMHB4IDBweCAxcHggd2hpdGUgOyBmb250LXdlaWdodCA6IGJvbGQgOyBkaXNwbGF5OiBibG9jayA7IG1hcmdpbjogMCA7XG4gIHBhZGRpbmctbGVmdDogMjBweCA7XG59XG4uZGFya1RleHQge1xuICBmb250LXNpemU6IDEycHggOyBjb2xvcjogd2hpdGUgOyB0ZXh0LXNoYWRvdzogLTFweCAwcHggMXB4ICNmZmFiMDAgO1xuICBmb250LXdlaWdodDogYm9sZCA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1NzZweCkge1xuICAud2hpdGVUZXh0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLlllbGxvd1RleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDsgcGFkZGluZzogMDtcbiAgfVxuICAuZGFya1RleHQge1xuICAgIGZvbnQtc2l6ZTogOXB4IDtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbiNweXJhbWlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICB0b3A6IDEwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMTZweCAyMDBweCAxMTZweDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LWFuaW1hdGlvbjogc3BpbiAxMHMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDExNnB4IDIwMHB4IDExNnB4O1xuICAtbXMtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1zLWFuaW1hdGlvbjogc3BpbiAxMHMgbGluZWFyIGluZmluaXRlO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTE2cHggMjAwcHggMTE2cHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGFuaW1hdGlvbjogc3BpbiAxMHMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMTZweCAyMDBweCAxMTZweDtcblxuICBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMjAwcHggMCAyMDBweCAzNDZweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgfVxuXG4gIGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDUwLDUwLDUwLC42KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTkuNWRlZykgcm90YXRlWCgxODBkZWcpIHRyYW5zbGF0ZVkoLTQwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTkuNWRlZykgcm90YXRlWCgxODBkZWcpIHRyYW5zbGF0ZVkoLTQwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC0xOS41ZGVnKSByb3RhdGVYKDE4MGRlZykgdHJhbnNsYXRlWSgtNDAwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTkuNWRlZykgcm90YXRlWCgxODBkZWcpIHRyYW5zbGF0ZVkoLTQwMHB4KTtcbiAgfVxuXG4gIGRpdjpudGgtY2hpbGQoMikge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSg1MCw1MCw1MCwuNik7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVgoMTgwZGVnKSB0cmFuc2xhdGVZKC00MDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVgoMTgwZGVnKSB0cmFuc2xhdGVZKC00MDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgcm90YXRlWig2MGRlZykgcm90YXRlWCgxODBkZWcpIHRyYW5zbGF0ZVkoLTQwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVgoMTgwZGVnKSB0cmFuc2xhdGVZKC00MDBweCk7XG4gIH1cblxuICBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoNTAsNTAsNTAsLjkpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDYwZGVnKSByb3RhdGVZKDE5LjVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDYwZGVnKSByb3RhdGVZKDE5LjVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoNjBkZWcpIHJvdGF0ZVkoMTkuNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDYwZGVnKSByb3RhdGVZKDE5LjVkZWcpO1xuICB9XG5cbiAgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDUwLDUwLDUwLC44KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpIHJvdGF0ZVkoMTkuNWRlZykgdHJhbnNsYXRlWCgtMTE2cHgpIHRyYW5zbGF0ZVkoLTIwMHB4KSB0cmFuc2xhdGVaKDMyNnB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpIHJvdGF0ZVkoMTkuNWRlZykgdHJhbnNsYXRlWCgtMTE2cHgpIHRyYW5zbGF0ZVkoLTIwMHB4KSB0cmFuc2xhdGVaKDMyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZykgcm90YXRlWSgxOS41ZGVnKSB0cmFuc2xhdGVYKC0xMTZweCkgdHJhbnNsYXRlWSgtMjAwcHgpIHRyYW5zbGF0ZVooMzI2cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpIHJvdGF0ZVkoMTkuNWRlZykgdHJhbnNsYXRlWCgtMTE2cHgpIHRyYW5zbGF0ZVkoLTIwMHB4KSB0cmFuc2xhdGVaKDMyNnB4KTtcbiAgfVxuXG4gIGRpdjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjZWY3ZjdmO1xuICAgIGxlZnQ6IC0zMTFweDtcbiAgICB0b3A6IC02OXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAuNjtcbiAgfVxuICBkaXY6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvY3NzLnBuZyk7XG4gIH1cbiAgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gICAgY29udGVudDogdXJsKC4uLy4uL2Fzc2V0cy9odG1sLnBuZyk7XG4gIH1cbiAgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gICAgY29udGVudDogdXJsKC4uLy4uL2Fzc2V0cy9sYXJhdmVsLnBuZyk7XG4gIH1cbiAgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG4gICAgY29udGVudDogdXJsKC4uLy4uL2Fzc2V0cy9hbmd1bGFyLnBuZyk7XG4gIH1cblxufVxuXG5cbkBrZXlmcmFtZXMgc3BpbiB7XG5cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZykgcm90YXRlWSgzNjBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufVxuIiwiLmFsbF9hYm91dF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5weXJhbWlkLCAuY3ViZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNTUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5vbmVfY29udGFjdCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDhweDtcbn1cbi5vbmVfY29udGFjdCAub25lX2NvbnRhY3RfbG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzVhNTY1Njtcbn1cbi5vbmVfY29udGFjdCAub25lX2NvbnRhY3RfY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsZWZ0OiA0OXB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4jY3ViZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyggNTAlIC0gMTUwcHggKTtcbiAgdG9wOiAxMzBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTE1MHB4KTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYW5pbWF0aW9uOiBzcGluIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG4jY3ViZSBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MywgNzEsIDcxLCAwLjYpO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDg5LCA4NywgODcsIDAuNik7XG59XG4jY3ViZSBkaXY6Zmlyc3QtY2hpbGQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigtMTUwcHgpO1xufVxuI2N1YmUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooLTE1MHB4KTtcbn1cbiNjdWJlIGRpdjpudGgtY2hpbGQoMykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTE1MHB4KTtcbn1cbiNjdWJlIGRpdjpudGgtY2hpbGQoNCkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooLTE1MHB4KTtcbn1cbiNjdWJlIGRpdjpudGgtY2hpbGQoNSkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKC0xNTBweCk7XG59XG4jY3ViZSBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooLTE1MHB4KTtcbn1cbiNjdWJlIGRpdjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNlZjdmN2Y7XG4gIGxlZnQ6IDc1cHg7XG4gIHRvcDogNzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjY7XG59XG4jY3ViZSBkaXY6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoLi4vLi4vYXNzZXRzL2Nzcy5wbmcpO1xufVxuI2N1YmUgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvaHRtbC5wbmcpO1xufVxuI2N1YmUgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvbGFyYXZlbC5wbmcpO1xufVxuI2N1YmUgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvYW5ndWxhci5wbmcpO1xufVxuI2N1YmUgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvbXlzcWwucG5nKTtcbn1cbiNjdWJlIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoLi4vLi4vYXNzZXRzL3JlYWN0LnBuZyk7XG59XG5cbi50ZXh0X2RpdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDR2dztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvZGVUZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICM1YTU2NTY7XG4gIGZvbnQtZmFtaWx5OiBcIk1hIFNoYW4gWmhlbmdcIiwgY3Vyc2l2ZTtcbn1cblxuLndoaXRlVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLlllbGxvd1RleHQge1xuICBwYWRkaW5nOiAwcHggMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICNmZGI4MmM7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmRhcmtUZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMXB4IDBweCAxcHggI2ZmYWIwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC53aGl0ZVRleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC5ZZWxsb3dUZXh0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5kYXJrVGV4dCB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbn1cbiNweXJhbWlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICB0b3A6IDEwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMTZweCAyMDBweCAxMTZweDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LWFuaW1hdGlvbjogc3BpbiAxMHMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDExNnB4IDIwMHB4IDExNnB4O1xuICAtbXMtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1zLWFuaW1hdGlvbjogc3BpbiAxMHMgbGluZWFyIGluZmluaXRlO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTE2cHggMjAwcHggMTE2cHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGFuaW1hdGlvbjogc3BpbiAxMHMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMTZweCAyMDBweCAxMTZweDtcbn1cbiNweXJhbWlkIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAyMDBweCAwIDIwMHB4IDM0NnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbn1cbiNweXJhbWlkIGRpdjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSg1MCwgNTAsIDUwLCAwLjYpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTkuNWRlZykgcm90YXRlWCgxODBkZWcpIHRyYW5zbGF0ZVkoLTQwMHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE5LjVkZWcpIHJvdGF0ZVgoMTgwZGVnKSB0cmFuc2xhdGVZKC00MDBweCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoLTE5LjVkZWcpIHJvdGF0ZVgoMTgwZGVnKSB0cmFuc2xhdGVZKC00MDBweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTkuNWRlZykgcm90YXRlWCgxODBkZWcpIHRyYW5zbGF0ZVkoLTQwMHB4KTtcbn1cbiNweXJhbWlkIGRpdjpudGgtY2hpbGQoMikge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoNTAsIDUwLCA1MCwgMC42KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVgoMTgwZGVnKSB0cmFuc2xhdGVZKC00MDBweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSByb3RhdGVaKDYwZGVnKSByb3RhdGVYKDE4MGRlZykgdHJhbnNsYXRlWSgtNDAwcHgpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSByb3RhdGVaKDYwZGVnKSByb3RhdGVYKDE4MGRlZykgdHJhbnNsYXRlWSgtNDAwcHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVgoMTgwZGVnKSB0cmFuc2xhdGVZKC00MDBweCk7XG59XG4jcHlyYW1pZCBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDUwLCA1MCwgNTAsIDAuOSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDYwZGVnKSByb3RhdGVZKDE5LjVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg2MGRlZykgcm90YXRlWSgxOS41ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCg2MGRlZykgcm90YXRlWSgxOS41ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDYwZGVnKSByb3RhdGVZKDE5LjVkZWcpO1xufVxuI3B5cmFtaWQgZGl2Om50aC1jaGlsZCg0KSB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSg1MCwgNTAsIDUwLCAwLjgpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpIHJvdGF0ZVkoMTkuNWRlZykgdHJhbnNsYXRlWCgtMTE2cHgpIHRyYW5zbGF0ZVkoLTIwMHB4KSB0cmFuc2xhdGVaKDMyNnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKSByb3RhdGVZKDE5LjVkZWcpIHRyYW5zbGF0ZVgoLTExNnB4KSB0cmFuc2xhdGVZKC0yMDBweCkgdHJhbnNsYXRlWigzMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKSByb3RhdGVZKDE5LjVkZWcpIHRyYW5zbGF0ZVgoLTExNnB4KSB0cmFuc2xhdGVZKC0yMDBweCkgdHJhbnNsYXRlWigzMjZweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpIHJvdGF0ZVkoMTkuNWRlZykgdHJhbnNsYXRlWCgtMTE2cHgpIHRyYW5zbGF0ZVkoLTIwMHB4KSB0cmFuc2xhdGVaKDMyNnB4KTtcbn1cbiNweXJhbWlkIGRpdjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNlZjdmN2Y7XG4gIGxlZnQ6IC0zMTFweDtcbiAgdG9wOiAtNjlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjY7XG59XG4jcHlyYW1pZCBkaXY6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoLi4vLi4vYXNzZXRzL2Nzcy5wbmcpO1xufVxuI3B5cmFtaWQgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvaHRtbC5wbmcpO1xufVxuI3B5cmFtaWQgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvbGFyYXZlbC5wbmcpO1xufVxuI3B5cmFtaWQgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvYW5ndWxhci5wbmcpO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDM2MGRlZykgcm90YXRlWigzNjBkZWcpO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-animate */ "./node_modules/ng-animate/fesm2015/ng-animate.js");




let AboutComponent = class AboutComponent {
    constructor() {
        this.enterAnimation = {
            animation: ng_animate__WEBPACK_IMPORTED_MODULE_3__["fadeInDown"],
            delay: 50,
            type: 'word'
        };
        this.whiteAnimation = {
            animation: ng_animate__WEBPACK_IMPORTED_MODULE_3__["fadeInDown"],
            delay: 50,
            type: 'word'
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
        jquery__WEBPACK_IMPORTED_MODULE_2__(".aboutSidenav").addClass('activeItem');
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            setTimeout(() => {
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".text_div").fadeIn(0);
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".animate_all").click();
                }, 2000);
            }, 600);
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".one_contact").fadeIn(500);
            }, 3500);
        });
    }
    AnimationsText(table) {
        table.forEach(element => {
            element.enterPlayer.play();
        });
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
    })
], AboutComponent);



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
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photo/photo.component */ "./src/app/photo/photo.component.ts");









const routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"]
    },
    {
        path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
    },
    {
        path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"]
    },
    {
        path: "myWork", component: _work_work_component__WEBPACK_IMPORTED_MODULE_7__["WorkComponent"]
    },
    {
        path: "photo", component: _photo_photo_component__WEBPACK_IMPORTED_MODULE_8__["PhotoComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".ng-scroll-view {\n  width: calc(100% + 18px ) !important;\n}\n\nmat-sidenav-container {\n  background-color: #2d2d2d;\n}\n\nmat-sidenav-container mat-sidenav {\n  width: 70px;\n  height: 100%;\n  background-color: #fdb82c;\n  overflow: hidden;\n  direction: rtl;\n}\n\nmat-sidenav-container mat-sidenav ng-scrollbar {\n  --scroll-view-margin: 0 0 0 -18px ;\n  --scrollbar-size: 0 ;\n}\n\nmat-sidenav-container mat-sidenav .allItems {\n  min-height: 500px;\n  height: 100%;\n  width: 70px;\n  position: relative;\n}\n\nmat-sidenav-container mat-sidenav .allItems .topItemsSidenav {\n  position: relative;\n  height: 50px;\n  width: 100%;\n  margin: 0;\n  margin-top: 20px;\n  padding: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .topItemsSidenav .itemSidenav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\nmat-sidenav-container mat-sidenav .allItems .topItemsSidenav .itemSidenav img {\n  position: absolute;\n  width: 50px;\n  top: 0;\n  height: auto;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav {\n  position: absolute;\n  width: 100%;\n  height: 250px;\n  top: 50%;\n  left: 0;\n  transform: translateY(-60%);\n  margin: 0;\n  padding: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav {\n  position: relative;\n  cursor: pointer;\n  height: 50px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 0;\n  line-height: 50px;\n  font-size: 25px;\n  color: rgba(45, 45, 45, 0.42);\n  text-align: center;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav i {\n  opacity: 1;\n  -webkit-animation: itemsidenavH 100ms linear;\n          animation: itemsidenavH 100ms linear;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav span {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  font-size: 11px;\n  font-weight: bold;\n  text-align: center;\n  opacity: 0;\n  -webkit-animation: itemsidenavV 100ms linear;\n          animation: itemsidenavV 100ms linear;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav.activeItem {\n  color: #2d2d2d;\n  text-shadow: 0 0 9px white;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav:hover {\n  color: #2d2d2d;\n  text-shadow: 0 0 9px white;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav:hover i {\n  -webkit-animation: itemsidenavV 300ms linear;\n          animation: itemsidenavV 300ms linear;\n  opacity: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .CenterItemsSidenav .itemSidenav:hover span {\n  -webkit-animation: itemsidenavH 300ms linear;\n          animation: itemsidenavH 300ms linear;\n  opacity: 1;\n}\n\nmat-sidenav-container mat-sidenav .allItems .bottomItemsSidenav {\n  position: absolute;\n  height: 120px;\n  width: 100%;\n  bottom: 20px;\n  margin: 0;\n  padding: 0;\n}\n\nmat-sidenav-container mat-sidenav .allItems .bottomItemsSidenav .itemSidenav {\n  height: 40px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  line-height: 40px;\n  font-size: 13px;\n  color: #2d2d2d;\n  text-align: center;\n}\n\nmat-sidenav-container mat-sidenav .allItems .bottomItemsSidenav .itemSidenav i {\n  cursor: pointer;\n}\n\nmat-sidenav-container mat-toolbar {\n  height: 60px;\n  background-color: #2d2d2d;\n  box-shadow: 0 0 4px 1px #121211;\n}\n\nmat-sidenav-container mat-toolbar .open-sidenav {\n  position: absolute;\n  height: 100%;\n  width: 50px;\n  color: #fdb82c;\n  text-align: center;\n  line-height: 60px;\n}\n\nmat-sidenav-container mat-toolbar .open-sidenav i {\n  cursor: pointer;\n}\n\nmat-sidenav-container mat-toolbar .toolbar-logo {\n  position: absolute;\n  height: 100%;\n  width: 80px;\n  right: 0;\n  overflow: hidden;\n}\n\nmat-sidenav-container mat-toolbar .toolbar-logo img {\n  position: absolute;\n  height: 70%;\n  width: auto;\n  top: 15%;\n  left: 50%;\n  transform: translateX(-50%);\n  -webkit-filter: drop-shadow(0 0 2px black);\n          filter: drop-shadow(0 0 2px black);\n}\n\nmat-sidenav-container mat-toolbar.closedSidenav {\n  padding-left: 0px;\n}\n\nmat-sidenav-container mat-toolbar.opennedSidenav {\n  padding-left: 70px;\n}\n\nmat-sidenav-container mat-sidenav-content.closedSidenav {\n  margin-left: 0px;\n}\n\nmat-sidenav-container mat-sidenav-content.opennedSidenav {\n  margin-left: 70px;\n}\n\nmat-sidenav-container mat-sidenav-content {\n  position: relative;\n  background-color: #2d2d2d;\n  overflow: hidden;\n}\n\n@media screen and (max-width: 576px) {\n  mat-sidenav-container mat-sidenav-content {\n    padding-top: 60px;\n  }\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: hidden;\n  display: none;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50%;\n  left: 50%;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #2d2d2d;\n  overflow: hidden;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content {\n  position: absolute;\n  width: 200px;\n  height: 210px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: none;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content img {\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  top: 0;\n  left: 0;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content mat-progress-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\nmat-sidenav-container mat-sidenav-content .loading_page_div .loading_div .loading_content mat-progress-bar .mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #222222 !important;\n}\n\n.teximate-paragraph {\n  margin: 0 !important;\n}\n\n@keyframes rota2 {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes rota2 {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rota1 {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n@-webkit-keyframes rota1 {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n@-webkit-keyframes rota3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n\n@keyframes rota3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n\n@-webkit-keyframes rota4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rota4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes itemsidenavV {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes itemsidenavV {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes itemsidenavH {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes itemsidenavH {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWRvd19hY2t5L2J1cmVhdS9hbmd1bGFyLXByb2pldC9wb3J0ZWZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURERTtFQU9FLFdBQUE7RUFBYyxZQUFBO0VBQWUseUJBQUE7RUFBNEIsZ0JBQUE7RUFBa0IsY0FBQTtBQ0MvRTs7QURMUTtFQUNFLGtDQUFBO0VBQ0Esb0JBQUE7QUNPVjs7QURKSTtFQUNHLGlCQUFBO0VBQW1CLFlBQUE7RUFBZSxXQUFBO0VBQWEsa0JBQUE7QUNTdEQ7O0FEUk07RUFDRSxrQkFBQTtFQUFxQixZQUFBO0VBQWUsV0FBQTtFQUFjLFNBQUE7RUFBWSxnQkFBQTtFQUM5RCxVQUFBO0FDY1I7O0FEYlE7RUFDRSxrQkFBQTtFQUFxQixNQUFBO0VBQVMsT0FBQTtFQUFXLFdBQUE7RUFBYyxZQUFBO0FDbUJqRTs7QURsQlU7RUFDRSxrQkFBQTtFQUFxQixXQUFBO0VBQWMsTUFBQTtFQUFTLFlBQUE7RUFBZSxTQUFBO0VBQzNELDJCQUFBO0FDd0JaOztBRG5CTTtFQUNFLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxhQUFBO0VBQWUsUUFBQTtFQUFVLE9BQUE7RUFBUywyQkFBQTtFQUNuRSxTQUFBO0VBQVcsVUFBQTtBQzJCbkI7O0FEMUJRO0VBQ0Usa0JBQUE7RUFBb0IsZUFBQTtFQUNwQixZQUFBO0VBQWUsV0FBQTtFQUFjLFNBQUE7RUFBYSxVQUFBO0VBQzFDLGdCQUFBO0VBQ0EsaUJBQUE7RUFBcUIsZUFBQTtFQUFrQiw2QkFBQTtFQUFnQyxrQkFBQTtBQ21DakY7O0FEbENVO0VBQUcsVUFBQTtFQUFZLDRDQUFBO1VBQUEsb0NBQUE7QUNzQ3pCOztBRHJDVTtFQUFNLGtCQUFBO0VBQW9CLFlBQUE7RUFBZSxXQUFBO0VBQWEsTUFBQTtFQUFRLE9BQUE7RUFBUyxlQUFBO0VBQWtCLGlCQUFBO0VBQW1CLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSw0Q0FBQTtVQUFBLG9DQUFBO0FDaUR0Sjs7QUQvQ1E7RUFBMEIsY0FBQTtFQUFrQiwwQkFBQTtBQ21EcEQ7O0FEbERRO0VBQ0UsY0FBQTtFQUFrQiwwQkFBQTtBQ3FENUI7O0FEcERVO0VBQUcsNENBQUE7VUFBQSxvQ0FBQTtFQUF1QyxVQUFBO0FDd0RwRDs7QUR2RFU7RUFBTSw0Q0FBQTtVQUFBLG9DQUFBO0VBQXVDLFVBQUE7QUMyRHZEOztBRHRETTtFQUNFLGtCQUFBO0VBQXFCLGFBQUE7RUFBZ0IsV0FBQTtFQUFjLFlBQUE7RUFBZSxTQUFBO0VBQ2xFLFVBQUE7QUM0RFI7O0FEM0RRO0VBQ0UsWUFBQTtFQUFlLFdBQUE7RUFBYyxTQUFBO0VBQWEsVUFBQTtFQUMxQyxpQkFBQTtFQUFxQixlQUFBO0VBQWtCLGNBQUE7RUFBaUIsa0JBQUE7QUNtRWxFOztBRGxFVTtFQUNFLGVBQUE7QUNvRVo7O0FEekRFO0VBQ0UsWUFBQTtFQUFlLHlCQUFBO0VBQ2YsK0JBQUE7QUM0REo7O0FEMURJO0VBQ0Usa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFdBQUE7RUFBYyxjQUFBO0VBQ2hELGtCQUFBO0VBQXFCLGlCQUFBO0FDZ0UzQjs7QUQvRE07RUFDRSxlQUFBO0FDaUVSOztBRDlESTtFQUNFLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxXQUFBO0VBQWEsUUFBQTtFQUFVLGdCQUFBO0FDb0UvRDs7QURuRU07RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsV0FBQTtFQUFhLFFBQUE7RUFBVSxTQUFBO0VBQVcsMkJBQUE7RUFDbkUsMENBQUE7VUFBQSxrQ0FBQTtBQzBFUjs7QURyRUU7RUFDRSxpQkFBQTtBQ3VFSjs7QURwRUU7RUFDRSxrQkFBQTtBQ3NFSjs7QURuRUU7RUFDRSxnQkFBQTtBQ3FFSjs7QURsRUU7RUFDRSxpQkFBQTtBQ29FSjs7QURoRUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQTRCLGdCQUFBO0FDbUVoQzs7QURsRUk7RUFIRjtJQUlJLGlCQUFBO0VDcUVKO0FBQ0Y7O0FEcEVJO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7RUFBYyxNQUFBO0VBQVEsT0FBQTtFQUN0RCxhQUFBO0VBQWUsZ0JBQUE7RUFBa0IsYUFBQTtBQzRFeEM7O0FEM0VNO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7RUFBYyxRQUFBO0VBQVUsU0FBQTtFQUFXLGtCQUFBO0VBQ3BFLGdDQUFBO0VBQW1DLHlCQUFBO0VBQTJCLGdCQUFBO0FDb0Z0RTs7QURsRlE7RUFDRSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsYUFBQTtFQUFlLFFBQUE7RUFBVSxTQUFBO0VBQVcsZ0NBQUE7RUFDdEUsYUFBQTtBQ3lGVjs7QUR4RlU7RUFDRSxrQkFBQTtFQUFvQixZQUFBO0VBQWUsYUFBQTtFQUFlLE1BQUE7RUFBUSxPQUFBO0FDOEZ0RTs7QUQ1RlU7RUFJRSxrQkFBQTtFQUFvQixTQUFBO0VBQVcsT0FBQTtFQUFTLFdBQUE7QUM4RnBEOztBRGpHWTtFQUNFLG9DQUFBO0FDbUdkOztBRHhGQTtFQUFzQixvQkFBQTtBQzRGdEI7O0FEMUZBO0VBQ0M7SUFBTSx1QkFBQTtFQzhGTDtFRDdGRDtJQUFLLHlCQUFBO0VDZ0dKO0FBQ0Y7O0FEckZBO0VBQ0M7SUFBTSx1QkFBQTtFQ3dHTDtFRHZHRDtJQUFLLHlCQUFBO0VDMEdKO0FBQ0Y7O0FEeEdBO0VBQ0M7SUFBTSx5QkFBQTtFQzJHTDtFRDFHRDtJQUFLLHVCQUFBO0VDNkdKO0FBQ0Y7O0FEbEdBO0VBQ0M7SUFBTSx5QkFBQTtFQ3FITDtFRHBIRDtJQUFLLHVCQUFBO0VDdUhKO0FBQ0Y7O0FEckhBO0VBQ0U7SUFBSSx1QkFBQTtFQ3dISjtFRHZIQTtJQUFNLDBCQUFBO0VDMEhOO0FBQ0Y7O0FEN0hBO0VBQ0U7SUFBSSx1QkFBQTtFQ3dISjtFRHZIQTtJQUFNLDBCQUFBO0VDMEhOO0FBQ0Y7O0FEeEhBO0VBQ0U7SUFBSSx1QkFBQTtFQzJISjtFRDFIQTtJQUFNLHlCQUFBO0VDNkhOO0FBQ0Y7O0FEaElBO0VBQ0U7SUFBSSx1QkFBQTtFQzJISjtFRDFIQTtJQUFNLHlCQUFBO0VDNkhOO0FBQ0Y7O0FEM0hBO0VBQ0U7SUFBSSxVQUFBO0VDOEhKO0VEN0hBO0lBQU0sVUFBQTtFQ2dJTjtBQUNGOztBRG5JQTtFQUNFO0lBQUksVUFBQTtFQzhISjtFRDdIQTtJQUFNLFVBQUE7RUNnSU47QUFDRjs7QUQ5SEE7RUFDRTtJQUFJLFVBQUE7RUNpSUo7RURoSUE7SUFBTSxVQUFBO0VDbUlOO0FBQ0Y7O0FEdElBO0VBQ0U7SUFBSSxVQUFBO0VDaUlKO0VEaElBO0lBQU0sVUFBQTtFQ21JTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXNjcm9sbC12aWV3e1xuICB3aWR0aDogY2FsYygxMDAlICsgMThweCApICFpbXBvcnRhbnQ7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkIDtcbiAgbWF0LXNpZGVuYXYge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA1NzZweCkge1xuICAgIH1cbiAgICAgICAgbmctc2Nyb2xsYmFyIHtcbiAgICAgICAgICAtLXNjcm9sbC12aWV3LW1hcmdpbiA6IDAgMCAwIC0xOHB4IDtcbiAgICAgICAgICAtLXNjcm9sbGJhci1zaXplIDogMCA7XG4gICAgICAgIH1cbiAgICB3aWR0aDogNzBweCA7IGhlaWdodDogMTAwJSA7IGJhY2tncm91bmQtY29sb3IgOiNmZGI4MmMgOyBvdmVyZmxvdzogaGlkZGVuOyBkaXJlY3Rpb246IHJ0bDtcbiAgICAuYWxsSXRlbXMge1xuICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4OyBoZWlnaHQ6IDEwMCUgOyB3aWR0aDogNzBweDsgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLnRvcEl0ZW1zU2lkZW5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSA7IGhlaWdodDogNTBweCA7IHdpZHRoOiAxMDAlIDsgbWFyZ2luIDowIDsgbWFyZ2luLXRvcDogMjBweCA7XG4gICAgICAgIHBhZGRpbmc6IDAgO1xuICAgICAgICAuaXRlbVNpZGVuYXZ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlIDsgdG9wOiAwIDsgbGVmdCA6IDAgOyB3aWR0aDogMTAwJSA7IGhlaWdodDogMTAwJSA7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IHdpZHRoOiA1MHB4IDsgdG9wOiAwIDsgaGVpZ2h0OiBhdXRvIDsgbGVmdDogNTAlIDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5DZW50ZXJJdGVtc1NpZGVuYXYge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDI1MHB4OyB0b3A6IDUwJTsgbGVmdDogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02MCUpO1xuICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XG4gICAgICAgIC5pdGVtU2lkZW5hdntcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHggOyB3aWR0aDogMTAwJSA7IG1hcmdpbiA6IDAgOyBwYWRkaW5nOiAwIDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4IDsgIGZvbnQtc2l6ZTogMjVweCA7IGNvbG9yOiByZ2JhKDQ1LCA0NSwgNDUsIDAuNDIpIDsgdGV4dC1hbGlnbjogY2VudGVyIDtcbiAgICAgICAgICBpIHtvcGFjaXR5OiAxOyBhbmltYXRpb246IGl0ZW1zaWRlbmF2SCAxMDBtcyBsaW5lYXI7IH1cbiAgICAgICAgICBzcGFuIHtwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogMTAwJSA7IHdpZHRoOiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7IGZvbnQtc2l6ZTogMTFweCA7IGZvbnQtd2VpZ2h0OiBib2xkOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG9wYWNpdHk6IDA7IGFuaW1hdGlvbjogaXRlbXNpZGVuYXZWIDEwMG1zIGxpbmVhcjt9XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW1TaWRlbmF2LmFjdGl2ZUl0ZW0geyBjb2xvciA6ICMyZDJkMmQgOyB0ZXh0LXNoYWRvdzogMCAwIDlweCB3aGl0ZTsgfVxuICAgICAgICAuaXRlbVNpZGVuYXY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yIDogIzJkMmQyZCA7IHRleHQtc2hhZG93OiAwIDAgOXB4IHdoaXRlO1xuICAgICAgICAgIGkge2FuaW1hdGlvbjogaXRlbXNpZGVuYXZWIDMwMG1zIGxpbmVhciA7IG9wYWNpdHk6IDA7fVxuICAgICAgICAgIHNwYW4ge2FuaW1hdGlvbjogaXRlbXNpZGVuYXZIIDMwMG1zIGxpbmVhciA7IG9wYWNpdHk6IDE7fVxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgLmJvdHRvbUl0ZW1zU2lkZW5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IGhlaWdodDogMTIwcHggOyB3aWR0aDogMTAwJSA7IGJvdHRvbTogMjBweCA7IG1hcmdpbiA6MCA7XG4gICAgICAgIHBhZGRpbmc6IDAgO1xuICAgICAgICAuaXRlbVNpZGVuYXYge1xuICAgICAgICAgIGhlaWdodDogNDBweCA7IHdpZHRoOiAxMDAlIDsgbWFyZ2luIDogMCA7IHBhZGRpbmc6IDAgO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4IDsgIGZvbnQtc2l6ZTogMTNweCA7IGNvbG9yOiAjMmQyZDJkIDsgdGV4dC1hbGlnbjogY2VudGVyIDtcbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgfVxuXG4gIG1hdC10b29sYmFyIHtcbiAgICBoZWlnaHQ6IDYwcHggOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggMXB4ICMxMjEyMTE7XG5cbiAgICAub3Blbi1zaWRlbmF2IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogNTBweCA7IGNvbG9yOiAjZmRiODJjO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyIDsgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICBpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudG9vbGJhci1sb2dvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogODBweDsgcmlnaHQ6IDA7IG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogNzAlOyB3aWR0aDogYXV0bzsgdG9wOiAxNSU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAycHggYmxhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1hdC10b29sYmFyLmNsb3NlZFNpZGVuYXYge1xuICAgIHBhZGRpbmctbGVmdCA6IDBweCA7XG4gIH1cblxuICBtYXQtdG9vbGJhci5vcGVubmVkU2lkZW5hdiB7XG4gICAgcGFkZGluZy1sZWZ0IDogNzBweCA7XG4gIH1cblxuICBtYXQtc2lkZW5hdi1jb250ZW50LmNsb3NlZFNpZGVuYXYge1xuICAgIG1hcmdpbi1sZWZ0IDogMHB4IDtcbiAgfVxuXG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQub3Blbm5lZFNpZGVuYXYge1xuICAgIG1hcmdpbi1sZWZ0IDogNzBweCA7XG4gIH1cblxuXG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICAgIHBvc2l0aW9uIDogcmVsYXRpdmUgO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQgOyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1NzZweCkge1xuICAgICAgcGFkZGluZy10b3AgOiA2MHB4IDtcbiAgICB9XG4gICAgLmxvYWRpbmdfcGFnZV9kaXYge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgICAgei1pbmRleDogMTAwMDsgb3ZlcmZsb3c6IGhpZGRlbjsgZGlzcGxheSA6IG5vbmUgO1xuICAgICAgLmxvYWRpbmdfZGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4OyB0b3A6IDUwJTsgbGVmdDogNTAlOyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCAtNTAlKTsgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDsgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAubG9hZGluZ19jb250ZW50e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDIwMHB4OyBoZWlnaHQ6IDIxMHB4OyB0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgLTUwJSk7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMjAwcHggOyBoZWlnaHQ6IDIwMHB4OyB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1hdC1wcm9ncmVzcy1iYXIge1xuICAgICAgICAgICAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbn1cbi50ZXhpbWF0ZS1wYXJhZ3JhcGggeyBtYXJnaW46IDAgIWltcG9ydGFudDt9XG5cbkBrZXlmcmFtZXMgcm90YTIge1xuXHRmcm9teyB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO31cblx0dG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbn1cblxuQC1vLWtleWZyYW1lcyByb3RhMiB7XG5cdGZyb217IHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7fVxuXHR0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxufVxuXG5ALW1vei1rZXlmcmFtZXMgcm90YTIge1xuXHRmcm9teyB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO31cblx0dG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhMiB7XG5cdGZyb217IHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7fVxuXHR0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGExIHtcblx0ZnJvbXsgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO31cblx0dG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG59XG5cbkAtby1rZXlmcmFtZXMgcm90YTEge1xuXHRmcm9teyB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7fVxuXHR0byB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbn1cblxuQC1tb3ota2V5ZnJhbWVzIHJvdGExIHtcblx0ZnJvbXsgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO31cblx0dG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YTEge1xuXHRmcm9teyB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7fVxuXHR0byB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbn1cblxuQGtleWZyYW1lcyByb3RhMyB7XG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyl9XG59XG5cbkBrZXlmcmFtZXMgcm90YTQge1xuICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyl9XG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XG59XG5cbkBrZXlmcmFtZXMgaXRlbXNpZGVuYXZWIHtcbiAgMCUge29wYWNpdHk6IDE7fVxuICAxMDAlIHtvcGFjaXR5OiAwO31cbn1cblxuQGtleWZyYW1lcyBpdGVtc2lkZW5hdkgge1xuICAwJSB7b3BhY2l0eTogMDt9XG4gIDEwMCUge29wYWNpdHk6IDE7fVxufVxuXG4iLCIubmctc2Nyb2xsLXZpZXcge1xuICB3aWR0aDogY2FsYygxMDAlICsgMThweCApICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiODJjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiBuZy1zY3JvbGxiYXIge1xuICAtLXNjcm9sbC12aWV3LW1hcmdpbjogMCAwIDAgLTE4cHggO1xuICAtLXNjcm9sbGJhci1zaXplOiAwIDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMge1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAudG9wSXRlbXNTaWRlbmF2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC50b3BJdGVtc1NpZGVuYXYgLml0ZW1TaWRlbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLmFsbEl0ZW1zIC50b3BJdGVtc1NpZGVuYXYgLml0ZW1TaWRlbmF2IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLkNlbnRlckl0ZW1zU2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYwJSk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLkNlbnRlckl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjQyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAuQ2VudGVySXRlbXNTaWRlbmF2IC5pdGVtU2lkZW5hdiBpIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uOiBpdGVtc2lkZW5hdkggMTAwbXMgbGluZWFyO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAuQ2VudGVySXRlbXNTaWRlbmF2IC5pdGVtU2lkZW5hdiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBpdGVtc2lkZW5hdlYgMTAwbXMgbGluZWFyO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAuQ2VudGVySXRlbXNTaWRlbmF2IC5pdGVtU2lkZW5hdi5hY3RpdmVJdGVtIHtcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIHRleHQtc2hhZG93OiAwIDAgOXB4IHdoaXRlO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAuQ2VudGVySXRlbXNTaWRlbmF2IC5pdGVtU2lkZW5hdjpob3ZlciB7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICB0ZXh0LXNoYWRvdzogMCAwIDlweCB3aGl0ZTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLkNlbnRlckl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXY6aG92ZXIgaSB7XG4gIGFuaW1hdGlvbjogaXRlbXNpZGVuYXZWIDMwMG1zIGxpbmVhcjtcbiAgb3BhY2l0eTogMDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLkNlbnRlckl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXY6aG92ZXIgc3BhbiB7XG4gIGFuaW1hdGlvbjogaXRlbXNpZGVuYXZIIDMwMG1zIGxpbmVhcjtcbiAgb3BhY2l0eTogMTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLmJvdHRvbUl0ZW1zU2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5hbGxJdGVtcyAuYm90dG9tSXRlbXNTaWRlbmF2IC5pdGVtU2lkZW5hdiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuYWxsSXRlbXMgLmJvdHRvbUl0ZW1zU2lkZW5hdiAuaXRlbVNpZGVuYXYgaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtdG9vbGJhciB7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAxcHggIzEyMTIxMTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtdG9vbGJhciAub3Blbi1zaWRlbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MHB4O1xuICBjb2xvcjogI2ZkYjgyYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNjBweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtdG9vbGJhciAub3Blbi1zaWRlbmF2IGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXRvb2xiYXIgLnRvb2xiYXItbG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogODBweDtcbiAgcmlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXRvb2xiYXIgLnRvb2xiYXItbG9nbyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogYXV0bztcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAycHggYmxhY2spO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC10b29sYmFyLmNsb3NlZFNpZGVuYXYge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtdG9vbGJhci5vcGVubmVkU2lkZW5hdiB7XG4gIHBhZGRpbmctbGVmdDogNzBweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50LmNsb3NlZFNpZGVuYXYge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQub3Blbm5lZFNpZGVuYXYge1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICB9XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAubG9hZGluZ19wYWdlX2RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBub25lO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYgLmxvYWRpbmdfZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYgLmxvYWRpbmdfZGl2IC5sb2FkaW5nX2NvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMTBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAubG9hZGluZ19wYWdlX2RpdiAubG9hZGluZ19kaXYgLmxvYWRpbmdfY29udGVudCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmxvYWRpbmdfcGFnZV9kaXYgLmxvYWRpbmdfZGl2IC5sb2FkaW5nX2NvbnRlbnQgbWF0LXByb2dyZXNzLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5sb2FkaW5nX3BhZ2VfZGl2IC5sb2FkaW5nX2RpdiAubG9hZGluZ19jb250ZW50IG1hdC1wcm9ncmVzcy1iYXIgLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xufVxuXG4udGV4aW1hdGUtcGFyYWdyYXBoIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YTIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyByb3RhMiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcm90YTIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGEyIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YTEge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyByb3RhMSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcm90YTEge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGExIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YTMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YTQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBpdGVtc2lkZW5hdlYge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGl0ZW1zaWRlbmF2SCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

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
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/fesm2015/ng-image-slider.js");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./photo/photo.component */ "./src/app/photo/photo.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_dialog_loading_dialog_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./contact/dialog-loading/dialog-loading.component */ "./src/app/contact/dialog-loading/dialog-loading.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
            _work_work_component__WEBPACK_IMPORTED_MODULE_20__["WorkComponent"],
            _photo_photo_component__WEBPACK_IMPORTED_MODULE_23__["PhotoComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_24__["ContactComponent"],
            _contact_dialog_loading_dialog_loading_component__WEBPACK_IMPORTED_MODULE_25__["DialogLoadingComponent"],
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
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_22__["NgImageSliderModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_34__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"]
        ],
        entryComponents: [
            _contact_dialog_loading_dialog_loading_component__WEBPACK_IMPORTED_MODULE_25__["DialogLoadingComponent"]
        ],
        providers: [
            _projects_service__WEBPACK_IMPORTED_MODULE_21__["ProjectsService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".all_contact {\n  margin-left: 0;\n  overflow-y: auto;\n  height: auto;\n  width: 100%;\n  min-height: 100%;\n}\n.all_contact .info .one_contact {\n  width: 300px;\n  height: 50px;\n  position: relative;\n  display: none;\n  color: white;\n  text-align: center;\n  line-height: 48px;\n}\n.all_contact .info .one_contact .one_contact_logo {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n  left: 0px;\n  font-size: 18px;\n  color: #5a5656;\n}\n.all_contact .info .one_contact .one_contact_content {\n  position: absolute;\n  width: auto;\n  padding: 0 10px;\n  height: 28px;\n  left: 49px;\n  top: 10px;\n  font-size: 13px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.all_contact .mailer mat-card-title {\n  font-size: 15px;\n  color: #3a444d;\n}\n.all_contact .mailer matInput {\n  background-color: #2d2d2d !important;\n  color: #9e9e9e;\n}\n.all_contact .mailer input {\n  background-color: #2d2d2d !important;\n  color: #9e9e9e;\n}\n.all_contact .mailer input:focus {\n  color: white;\n}\n.all_contact .mailer textarea:focus {\n  color: white;\n}\n.text_div {\n  display: none;\n  padding: 4vw;\n  margin-top: 20px;\n}\n.codeText {\n  line-height: 20px;\n  font-size: 17px;\n  color: #5a5656;\n  font-family: \"Ma Shan Zheng\", cursive;\n}\n.whiteText {\n  font-size: 15px;\n  color: white;\n  font-weight: 400;\n  line-height: 30px;\n  margin-top: 35px;\n}\n.YellowText {\n  padding: 0px 0;\n  line-height: 30px;\n  font-size: 35px;\n  color: #fdb82c;\n  letter-spacing: 2px;\n  text-shadow: 0px 0px 1px white;\n  font-weight: bold;\n  display: block;\n  margin: 0;\n  padding-left: 20px;\n}\n.darkText {\n  font-size: 12px;\n  color: white;\n  text-shadow: -1px 0px 1px #ffab00;\n  font-weight: bold;\n}\n@media screen and (max-width: 576px) {\n  .whiteText {\n    font-size: 15px;\n  }\n\n  .YellowText {\n    font-size: 15px;\n    padding: 0;\n  }\n\n  .darkText {\n    font-size: 9px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWRvd19hY2t5L2J1cmVhdS9hbmd1bGFyLXByb2pldC9wb3J0ZWZvbGlvL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQWdCLGdCQUFBO0VBQ2hCLFlBQUE7RUFDQSxXQUFBO0VBQWEsZ0JBQUE7QUNHZjtBREFJO0VBQ0UsWUFBQTtFQUFlLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixhQUFBO0VBQ2pELFlBQUE7RUFBZSxrQkFBQTtFQUFvQixpQkFBQTtBQ096QztBRE5NO0VBQ0Usa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFdBQUE7RUFDbEMsUUFBQTtFQUFVLFNBQUE7RUFBVSxlQUFBO0VBQWlCLGNBQUE7QUNhN0M7QURYTTtFQUNFLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxlQUFBO0VBQWlCLFlBQUE7RUFDbEQsVUFBQTtFQUFZLFNBQUE7RUFBVyxlQUFBO0VBQWlCLGlCQUFBO0VBQ3hDLGlCQUFBO0VBQW1CLG1CQUFBO0FDb0IzQjtBRGRJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNnQk47QURYSTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtBQ2FOO0FEWEk7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUNhTjtBRFZJO0VBQ0UsWUFBQTtBQ1lOO0FEVkk7RUFDRSxZQUFBO0FDWU47QURMQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNRRjtBRE5BO0VBQ0UsaUJBQUE7RUFBb0IsZUFBQTtFQUFrQixjQUFBO0VBQWtCLHFDQUFBO0FDWTFEO0FEVEE7RUFDRSxlQUFBO0VBQW1CLFlBQUE7RUFDbEIsZ0JBQUE7RUFBb0IsaUJBQUE7RUFDcEIsZ0JBQUE7QUNjSDtBRFpBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQXFCLGVBQUE7RUFBbUIsY0FBQTtFQUFrQixtQkFBQTtFQUMxRCw4QkFBQTtFQUFrQyxpQkFBQTtFQUFxQixjQUFBO0VBQWlCLFNBQUE7RUFDeEUsa0JBQUE7QUNxQkY7QURuQkE7RUFDRSxlQUFBO0VBQWtCLFlBQUE7RUFBZSxpQ0FBQTtFQUNqQyxpQkFBQTtBQ3dCRjtBRHJCQTtFQUNFO0lBQ0UsZUFBQTtFQ3dCRjs7RUR0QkE7SUFDRSxlQUFBO0lBQWlCLFVBQUE7RUMwQm5COztFRHhCQTtJQUNFLGNBQUE7RUMyQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGxfY29udGFjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwOyBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlOyBtaW4taGVpZ2h0OiAxMDAlIDtcblxuICAuaW5mbyB7XG4gICAgLm9uZV9jb250YWN0IHtcbiAgICAgIHdpZHRoOiAzMDBweCA7IGhlaWdodDogNTBweDsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBub25lIDtcbiAgICAgIGNvbG9yOiB3aGl0ZSA7IHRleHQtYWxpZ246IGNlbnRlcjsgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICAub25lX2NvbnRhY3RfbG9nbyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiA0OHB4OyB3aWR0aDogNDhweDtcbiAgICAgICAgdG9wOiAwcHg7IGxlZnQ6IDBweDtmb250LXNpemU6IDE4cHg7IGNvbG9yOiAjNWE1NjU2IDtcbiAgICAgIH1cbiAgICAgIC5vbmVfY29udGFjdF9jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogYXV0bzsgcGFkZGluZzogMCAxMHB4OyBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIGxlZnQ6IDQ5cHg7IHRvcDogMTBweDsgZm9udC1zaXplOiAxM3B4OyBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1haWxlciB7XG4gICAgbWF0LWNhcmQtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNXB4IDtcbiAgICAgIGNvbG9yIDojM2E0NDRkIDtcbiAgICB9XG5cblxuXG4gICAgbWF0SW5wdXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZCAhaW1wb3J0YW50IDtcbiAgICAgIGNvbG9yOiByZ2IoMTU4LCAxNTgsIDE1OCkgO1xuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkICFpbXBvcnRhbnQgO1xuICAgICAgY29sb3I6IHJnYigxNTgsIDE1OCwgMTU4KSA7XG4gICAgfVxuXG4gICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgY29sb3IgOiB3aGl0ZSA7XG4gICAgfVxuICAgIHRleHRhcmVhOmZvY3Vze1xuICAgICAgY29sb3IgOiB3aGl0ZSA7XG4gICAgfVxuICB9XG59XG5cblxuXG4udGV4dF9kaXZ7XG4gIGRpc3BsYXk6IG5vbmUgO1xuICBwYWRkaW5nIDogNHZ3IDtcbiAgbWFyZ2luLXRvcCA6IDIwcHggO1xufVxuLmNvZGVUZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDIwcHggOyBmb250LXNpemU6IDE3cHggOyBjb2xvcjogIzVhNTY1NiA7ICBmb250LWZhbWlseTogJ01hIFNoYW4gWmhlbmcnLCBjdXJzaXZlO1xuXG59XG4ud2hpdGVUZXh0IHtcbiAgZm9udC1zaXplIDogMTVweCA7IGNvbG9yIDogd2hpdGUgO1xuICAgZm9udC13ZWlnaHQgOiA0MDAgOyBsaW5lLWhlaWdodCA6IDMwcHggO1xuICAgbWFyZ2luLXRvcCA6IDM1cHggO1xufVxuLlllbGxvd1RleHQge1xuICBwYWRkaW5nIDogMHB4IDAgO1xuICBsaW5lLWhlaWdodCA6IDMwcHggOyBmb250LXNpemUgOiAzNXB4IDsgY29sb3IgOiAjZmRiODJjIDsgbGV0dGVyLXNwYWNpbmc6IDJweCA7XG4gIHRleHQtc2hhZG93IDogMHB4IDBweCAxcHggd2hpdGUgOyBmb250LXdlaWdodCA6IGJvbGQgOyBkaXNwbGF5OiBibG9jayA7IG1hcmdpbjogMCA7XG4gIHBhZGRpbmctbGVmdDogMjBweCA7XG59XG4uZGFya1RleHQge1xuICBmb250LXNpemU6IDEycHggOyBjb2xvcjogd2hpdGUgOyB0ZXh0LXNoYWRvdzogLTFweCAwcHggMXB4ICNmZmFiMDAgO1xuICBmb250LXdlaWdodDogYm9sZCA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1NzZweCkge1xuICAud2hpdGVUZXh0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLlllbGxvd1RleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDsgcGFkZGluZzogMDtcbiAgfVxuICAuZGFya1RleHQge1xuICAgIGZvbnQtc2l6ZTogOXB4IDtcbiAgfVxufVxuXG4iLCIuYWxsX2NvbnRhY3Qge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5hbGxfY29udGFjdCAuaW5mbyAub25lX2NvbnRhY3Qge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG4uYWxsX2NvbnRhY3QgLmluZm8gLm9uZV9jb250YWN0IC5vbmVfY29udGFjdF9sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNWE1NjU2O1xufVxuLmFsbF9jb250YWN0IC5pbmZvIC5vbmVfY29udGFjdCAub25lX2NvbnRhY3RfY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsZWZ0OiA0OXB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmFsbF9jb250YWN0IC5tYWlsZXIgbWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjM2E0NDRkO1xufVxuLmFsbF9jb250YWN0IC5tYWlsZXIgbWF0SW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuLmFsbF9jb250YWN0IC5tYWlsZXIgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuLmFsbF9jb250YWN0IC5tYWlsZXIgaW5wdXQ6Zm9jdXMge1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWxsX2NvbnRhY3QgLm1haWxlciB0ZXh0YXJlYTpmb2N1cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHRfZGl2IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogNHZ3O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29kZVRleHQge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzVhNTY1NjtcbiAgZm9udC1mYW1pbHk6IFwiTWEgU2hhbiBaaGVuZ1wiLCBjdXJzaXZlO1xufVxuXG4ud2hpdGVUZXh0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4uWWVsbG93VGV4dCB7XG4gIHBhZGRpbmc6IDBweCAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogI2ZkYjgyYztcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZGFya1RleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0xcHggMHB4IDFweCAjZmZhYjAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLndoaXRlVGV4dCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgLlllbGxvd1RleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmRhcmtUZXh0IHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-animate */ "./node_modules/ng-animate/fesm2015/ng-animate.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dialog_loading_dialog_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-loading/dialog-loading.component */ "./src/app/contact/dialog-loading/dialog-loading.component.ts");








let ContactComponent = class ContactComponent {
    constructor(dialog, http, router) {
        this.dialog = dialog;
        this.http = http;
        this.router = router;
        this.enterAnimation = {
            animation: ng_animate__WEBPACK_IMPORTED_MODULE_3__["fadeInDown"],
            delay: 50,
            type: 'word'
        };
        this.whiteAnimation = {
            animation: ng_animate__WEBPACK_IMPORTED_MODULE_3__["fadeInDown"],
            delay: 50,
            type: 'word'
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
        this.email = {
            name: '',
            lastname: '',
            mail: '',
            subject: '',
            content: '',
            pattern: "[A-Za-z]+"
        };
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
        jquery__WEBPACK_IMPORTED_MODULE_2__(".contactSidenav").addClass('activeItem');
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".form_mailer").slideUp(0);
            setTimeout(() => {
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".text_div").fadeIn(0);
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".animate_all").click();
                }, 2000);
            }, 600);
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".one_contact").fadeIn(500);
                setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".form_mailer").slideDown(1000);
                }, 500);
            }, 3500);
        });
    }
    AnimationsText(table) {
        table.forEach(element => {
            element.enterPlayer.play();
        });
    }
    onSubmit(form) {
        if (form.valid) {
            this.form = form;
            this.openDialog();
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(_dialog_loading_dialog_loading_component__WEBPACK_IMPORTED_MODULE_7__["DialogLoadingComponent"], {
            width: '250px',
            panelClass: 'dialog_window',
            data: { email: this.email }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'yep') {
                this.form.reset();
            }
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/contact/dialog-loading/dialog-loading.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/contact/dialog-loading/dialog-loading.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message_dialog {\n  height: 100px;\n  line-height: 100px;\n}\n\n.message {\n  font-size: 50px;\n  text-align: center;\n}\n\n.message span {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWRvd19hY2t5L2J1cmVhdS9hbmd1bGFyLXByb2pldC9wb3J0ZWZvbGlvL3NyYy9hcHAvY29udGFjdC9kaWFsb2ctbG9hZGluZy9kaWFsb2ctbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9kaWFsb2ctbG9hZGluZy9kaWFsb2ctbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDREY7O0FERUU7RUFDRSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2RpYWxvZy1sb2FkaW5nL2RpYWxvZy1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5tZXNzYWdlX2RpYWxvZyB7XG4gICAgaGVpZ2h0IDogMTAwcHggO1xuICAgIGxpbmUtaGVpZ2h0IDogMTAwcHggO1xufVxuXG4ubWVzc2FnZXtcbiAgZm9udC1zaXplOiA1MHB4IDtcbiAgdGV4dC1hbGlnbjogY2VudGVyIDtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4IDtcbiAgfVxufVxuIiwiLm1lc3NhZ2VfZGlhbG9nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xufVxuXG4ubWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1lc3NhZ2Ugc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/dialog-loading/dialog-loading.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/contact/dialog-loading/dialog-loading.component.ts ***!
  \********************************************************************/
/*! exports provided: DialogLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogLoadingComponent", function() { return DialogLoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");





let DialogLoadingComponent = class DialogLoadingComponent {
    constructor(dialogRef, data, router, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.http = http;
        this.hidden_form = true;
        this.succee_msg = false;
        this.error_msg = false;
        this.hidden_form = true;
        this.succee_msg = false;
        this.error_msg = false;
        dialogRef.disableClose = true;
        this.email = this.data.email;
        console.log(this.email);
        var fd = new FormData();
        fd.append("name", this.email.name);
        fd.append("lastname", this.email.lastname);
        fd.append("email", this.email.mail);
        fd.append("subject", this.email.subject);
        fd.append("content", this.email.content);
        this.http.post('https://abdennourbadeche.website/api/sendmail', fd)
            .subscribe((response) => {
            console.log(response);
            this.hidden_form = false;
            this.succee_msg = true;
        }, (err) => {
            console.log(err);
            this.hidden_form = false;
            this.succee_msg = false;
            this.error_msg = true;
        });
    }
    onNoClick() {
        this.dialogRef.close('nop');
    }
    onNoClick2() {
        this.dialogRef.close('yep');
    }
    ngOnInit() {
    }
};
DialogLoadingComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DialogLoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dialog-loading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/dialog-loading/dialog-loading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-loading.component.scss */ "./src/app/contact/dialog-loading/dialog-loading.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], DialogLoadingComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 798px) {\n  .blackDiv {\n    min-height: 100%;\n    width: 100%;\n    height: auto;\n    margin-left: 50px;\n    padding-right: 440px;\n    padding-left: 70px;\n    padding-top: 50px !important;\n  }\n  .blackDiv .textCenter {\n    padding-right: 450px;\n    padding-left: 20px;\n  }\n\n  .lightDiv {\n    position: fixed;\n    width: 440px;\n    height: 100vh;\n    top: 0;\n    right: 0;\n  }\n\n  .lightCircle {\n    border-top-left-radius: 200px;\n    border-bottom-left-radius: 200px;\n    top: 50%;\n    height: 440px;\n    width: 200%;\n    left: 5px;\n    transform: translateY(-50%);\n  }\n\n  .logo_div_all {\n    left: 25%;\n    top: 50%;\n  }\n}\n@media screen and (max-width: 797px) {\n  .blackDiv {\n    min-height: 600px;\n    width: 100%;\n    padding: 0;\n    padding-top: 500px !important;\n    margin: 0;\n  }\n\n  .lightDiv {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-height: 450px;\n    width: 100%;\n  }\n\n  .lightCircle {\n    border-bottom-left-radius: 190px;\n    border-bottom-right-radius: 190px;\n    top: 0%;\n    height: 150%;\n    width: 100%;\n    left: 0%;\n  }\n\n  .logo_div_all {\n    left: 50%;\n    top: 35%;\n  }\n}\n.background_all {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin-left: 0;\n  overflow: hidden;\n  overflow-y: auto;\n  font-family: \"Nunito\", sans-serif;\n  word-spacing: 3vw;\n}\n.background_all .lightDiv {\n  overflow: hidden;\n  z-index: 2;\n}\n.background_all .lightDiv .lightCircle {\n  position: absolute;\n  display: none;\n  min-height: 340px;\n}\n.background_all .lightDiv .lightCircle .logo_div_all {\n  position: absolute;\n  height: 400px;\n  width: 400px;\n  transform: translate(-50%, -50%);\n}\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 {\n  position: absolute;\n  height: 380px;\n  width: 380px;\n  top: 10px;\n  left: 10px;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  animation: rota2 6000ms linear infinite;\n  -moz-animation: rota2 6000ms linear infinite;\n  -o-animation: rota2 6000ms linear infinite;\n  -webkit-animation: rota2 6000ms linear infinite;\n}\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle11, .background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle12, .background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle13, .background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle14 {\n  position: absolute;\n  width: 26px;\n  height: 26px;\n  background-color: #fdb82c;\n  color: #fdb82c;\n  font-size: 16px;\n  text-align: center;\n  line-height: 26px;\n  top: 0%;\n  left: 50%;\n  border-radius: 50%;\n  animation: rota3 6000ms linear infinite;\n  -moz-animation: rota3 6000ms linear infinite;\n  -o-animation: rota3 6000ms linear infinite;\n  -webkit-animation: rota3 6000ms linear infinite;\n}\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle12 {\n  top: 50%;\n  left: 0%;\n}\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle13 {\n  top: 100%;\n  left: 50%;\n}\n.background_all .lightDiv .lightCircle .logo_div_all .circle1 .circle14 {\n  top: 50%;\n  left: 100%;\n}\n.background_all .lightDiv .lightCircle .logo_div_all .circle2 {\n  animation: rota1 6000ms linear infinite;\n  -moz-animation: rota1 6000ms linear infinite;\n  -o-animation: rota1 6000ms linear infinite;\n  -webkit-animation: rota1 6000ms linear infinite;\n  position: relative;\n  height: 330px;\n  width: 330px;\n  top: 35px;\n  left: 35px;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n}\n.background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle21, .background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle22, .background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle23, .background_all .lightDiv .lightCircle .logo_div_all .circle2 .circle24 {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-color: #212121;\n  color: #212121;\n  font-size: 10px;\n  text-align: center;\n  line-height: 20px;\n  top: 12%;\n  left: 12%;\n  border-radius: 50%;\n  animation: rota4 6000ms linear infinite;\n  -moz-animation: rota4 6000ms linear infinite;\n  -o-animation: rota4 6000ms linear infinite;\n  -webkit-animation: rota4 6000ms linear infinite;\n}\n.background_all .lightDiv .lightCircle .logo_div_all .circle3 {\n  position: absolute;\n  height: 280px;\n  width: 280px;\n  top: 60px;\n  left: 60px;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  background-color: #2d2d2d;\n}\n.background_all .lightDiv .lightCircle .logo_div_all .circle3 img {\n  position: absolute;\n  height: 103%;\n  width: 103%;\n  top: -1.5%;\n  left: -1.5%;\n  opacity: 0.5;\n  -webkit-filter: drop-shadow(2px 4px 6px black);\n          filter: drop-shadow(2px 4px 6px black);\n}\n.background_all .blackDiv {\n  padding: 15px 10px;\n  color: white;\n  font-size: 13px;\n  min-height: 500px;\n  padding-bottom: 0;\n}\n.background_all .blackDiv .text_bg {\n  position: absolute;\n  width: 0;\n  height: 5px;\n  border-radius: 2.5px;\n  bottom: 0;\n  z-index: 2;\n}\n.background_all .blackDiv .text_bg_white {\n  background-color: white;\n  box-shadow: 0 0 2px 0px white;\n}\n.background_all .blackDiv .text_bg2 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  top: 0;\n  background-color: #2d2d2d;\n}\n.background_all .blackDiv .text_bg_yellow {\n  background-color: #fdb82c;\n  box-shadow: 0 0 2px 0px #fdb82c;\n}\n.background_all .blackDiv .text_div {\n  display: none;\n}\n.background_all .blackDiv .codeText {\n  line-height: 20px;\n  font-size: 17px;\n  color: #5a5656;\n  font-family: \"Ma Shan Zheng\", cursive;\n}\n.background_all .blackDiv .whiteText {\n  text-align: left;\n  position: relative;\n  display: inline-block;\n  line-height: 30px;\n  font-size: 3vw;\n  color: white;\n  padding: 5px 10px;\n  font-weight: bold;\n  word-spacing: 5px;\n  width: auto;\n  margin: 15px 0;\n}\n.background_all .blackDiv .YellowText {\n  padding: 5px;\n  position: relative;\n  width: auto;\n  line-height: 30px;\n  font-size: 3vw;\n  color: #fdb82c;\n  letter-spacing: 2px;\n  font-weight: bold;\n  display: block;\n  margin: 15px 0;\n  padding-left: 20px;\n  word-spacing: 5px;\n  display: inline-block;\n}\n.background_all .blackDiv .darkText {\n  font-size: 13px;\n  color: #5a5a5a;\n  font-weight: bold;\n  margin-top: 10px;\n}\n@media screen and (max-width: 576px) {\n  .background_all .blackDiv .whiteText {\n    font-size: 15px;\n  }\n  .background_all .blackDiv .YellowText {\n    font-size: 15px;\n  }\n  .background_all .blackDiv .darkText {\n    font-size: 9px;\n  }\n}\n.background_all .blackDiv .btns {\n  margin-left: 0;\n}\n.background_all .blackDiv .contact_me_btn {\n  margin-right: 20px;\n  border-color: #ffa726 !important;\n  visibility: hidden;\n  margin-bottom: 20px;\n}\n.background_all .blackDiv .cv_btn {\n  border-color: #9e9e96 !important;\n  margin-bottom: 20px;\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWRvd19hY2t5L2J1cmVhdS9hbmd1bGFyLXByb2pldC9wb3J0ZWZvbGlvL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGdCQUFBO0lBQW1CLFdBQUE7SUFBYyxZQUFBO0lBQWMsaUJBQUE7SUFDL0Msb0JBQUE7SUFBdUIsa0JBQUE7SUFBc0IsNEJBQUE7RUNNL0M7RURKRTtJQUNFLG9CQUFBO0lBQXVCLGtCQUFBO0VDTzNCOztFREpBO0lBQ0UsZUFBQTtJQUFrQixZQUFBO0lBQWUsYUFBQTtJQUNqQyxNQUFBO0lBQVMsUUFBQTtFQ1VYOztFRFJBO0lBQ0UsNkJBQUE7SUFBZ0MsZ0NBQUE7SUFBb0MsUUFBQTtJQUNwRSxhQUFBO0lBQWdCLFdBQUE7SUFBYyxTQUFBO0lBQVksMkJBQUE7RUNnQjVDOztFRGRBO0lBQ0UsU0FBQTtJQUFhLFFBQUE7RUNrQmY7QUFDRjtBRGRBO0VBQ0U7SUFDRSxpQkFBQTtJQUFvQixXQUFBO0lBQ3BCLFVBQUE7SUFBYyw2QkFBQTtJQUFnQyxTQUFBO0VDbUJoRDs7RURoQkE7SUFDRSxrQkFBQTtJQUFxQixNQUFBO0lBQVUsT0FBQTtJQUFVLGlCQUFBO0lBQ3pDLFdBQUE7RUNzQkY7O0VEbkJBO0lBQ0UsZ0NBQUE7SUFDQSxpQ0FBQTtJQUFxQyxPQUFBO0lBQ3JDLFlBQUE7SUFBZSxXQUFBO0lBQWMsUUFBQTtFQ3lCL0I7O0VEdkJBO0lBQ0UsU0FBQTtJQUFhLFFBQUE7RUMyQmY7QUFDRjtBRHhCQTtFQUNFLGtCQUFBO0VBQXFCLFdBQUE7RUFBZ0IsWUFBQTtFQUFlLGNBQUE7RUFDcEQsZ0JBQUE7RUFBbUIsZ0JBQUE7RUFBbUIsaUNBQUE7RUFBbUMsaUJBQUE7QUNnQzNFO0FEOUJFO0VBQ0UsZ0JBQUE7RUFBa0IsVUFBQTtBQ2lDdEI7QURoQ0k7RUFDRSxrQkFBQTtFQUFxQixhQUFBO0VBRXJCLGlCQUFBO0FDa0NOO0FEakNNO0VBQ0Usa0JBQUE7RUFBcUIsYUFBQTtFQUFpQixZQUFBO0VBQ3RDLGdDQUFBO0FDcUNSO0FEbkNRO0VBdUJFLGtCQUFBO0VBQXFCLGFBQUE7RUFBZ0IsWUFBQTtFQUNyQyxTQUFBO0VBQVksVUFBQTtFQUNaLGtCQUFBO0VBQXFCLFNBQUE7RUFBWSxVQUFBO0VBQ2pDLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLCtDQUFBO0FDb0JWO0FEL0NVO0VBQ0Usa0JBQUE7RUFBcUIsV0FBQTtFQUFjLFlBQUE7RUFDbkMseUJBQUE7RUFBNEIsY0FBQTtFQUFpQixlQUFBO0VBQzdDLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0VBQVUsU0FBQTtFQUNWLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSw0Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsK0NBQUE7QUNzRFo7QURwRFU7RUFDRSxRQUFBO0VBQVcsUUFBQTtBQ3VEdkI7QURyRFU7RUFDRSxTQUFBO0VBQVksU0FBQTtBQ3dEeEI7QUR0RFU7RUFDRSxRQUFBO0VBQVcsVUFBQTtBQ3lEdkI7QUQ3Q1E7RUFjRSx1Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQXFCLGFBQUE7RUFBZ0IsWUFBQTtFQUFlLFNBQUE7RUFBWSxVQUFBO0VBQ2hFLGtCQUFBO0VBQXFCLFNBQUE7RUFBWSxVQUFBO0FDd0MzQztBRDFEVTtFQUNFLGtCQUFBO0VBQXFCLFdBQUE7RUFBYyxZQUFBO0VBQ25DLHlCQUFBO0VBQ0EsY0FBQTtFQUFpQixlQUFBO0VBQWtCLGtCQUFBO0VBQ25DLGlCQUFBO0VBQ0EsUUFBQTtFQUFVLFNBQUE7RUFDVixrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLCtDQUFBO0FDaUVaO0FEdERRO0VBQ0Usa0JBQUE7RUFBcUIsYUFBQTtFQUFnQixZQUFBO0VBQWUsU0FBQTtFQUFZLFVBQUE7RUFDaEUsa0JBQUE7RUFBcUIsU0FBQTtFQUFZLFVBQUE7RUFBYSx5QkFBQTtBQytEeEQ7QUQ5RFU7RUFDRSxrQkFBQTtFQUFxQixZQUFBO0VBQWUsV0FBQTtFQUNwQyxVQUFBO0VBQWEsV0FBQTtFQUFhLFlBQUE7RUFBZSw4Q0FBQTtVQUFBLHNDQUFBO0FDcUVyRDtBRDNERTtFQUNHLGtCQUFBO0VBQXNCLFlBQUE7RUFBZSxlQUFBO0VBQ3RDLGlCQUFBO0VBQW9CLGlCQUFBO0FDZ0V4QjtBRC9ESTtFQUNFLGtCQUFBO0VBQXNCLFFBQUE7RUFBWSxXQUFBO0VBQWUsb0JBQUE7RUFBdUIsU0FBQTtFQUFhLFVBQUE7QUNzRTNGO0FEbkVJO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtBQ3FFTjtBRG5FSTtFQUNFLGtCQUFBO0VBQXNCLFdBQUE7RUFBZSxZQUFBO0VBQWdCLFFBQUE7RUFBWSxNQUFBO0VBQ2pFLHlCQUFBO0FDeUVOO0FEdEVJO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtBQ3dFTjtBRHJFSTtFQUNFLGFBQUE7QUN1RU47QURyRUk7RUFDRSxpQkFBQTtFQUFvQixlQUFBO0VBQWtCLGNBQUE7RUFBa0IscUNBQUE7QUMwRTlEO0FEeEVJO0VBQ0UsZ0JBQUE7RUFBb0Isa0JBQUE7RUFBc0IscUJBQUE7RUFDMUMsaUJBQUE7RUFBcUIsY0FBQTtFQUFrQixZQUFBO0VBQWdCLGlCQUFBO0VBQ3RELGlCQUFBO0VBQXFCLGlCQUFBO0VBQXFCLFdBQUE7RUFBZSxjQUFBO0FDa0ZoRTtBRGhGSTtFQUNHLFlBQUE7RUFBZ0Isa0JBQUE7RUFBc0IsV0FBQTtFQUN2QyxpQkFBQTtFQUFxQixjQUFBO0VBQWtCLGNBQUE7RUFBa0IsbUJBQUE7RUFDekQsaUJBQUE7RUFBcUIsY0FBQTtFQUFpQixjQUFBO0VBQ3RDLGtCQUFBO0VBQXFCLGlCQUFBO0VBQXFCLHFCQUFBO0FDMkZoRDtBRHhGSTtFQUNFLGVBQUE7RUFBa0IsY0FBQTtFQUNsQixpQkFBQTtFQUFvQixnQkFBQTtBQzRGMUI7QUR6Rkk7RUFDRTtJQUNFLGVBQUE7RUMyRk47RUR6Rkk7SUFDRSxlQUFBO0VDMkZOO0VEekZJO0lBQ0UsY0FBQTtFQzJGTjtBQUNGO0FEekZJO0VBQ0UsY0FBQTtBQzJGTjtBRHhGSTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDMEZOO0FEdkZJO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDeUZOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDc5OHB4ICl7XG4gIC5ibGFja0RpdiB7XG4gICAgbWluLWhlaWdodDogMTAwJSA7IHdpZHRoOiAxMDAlIDsgaGVpZ2h0OiBhdXRvOyBtYXJnaW4tbGVmdCA6IDUwcHggO1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ0MHB4IDsgcGFkZGluZy1sZWZ0IDogNzBweCA7IHBhZGRpbmctdG9wIDogNTBweCAhaW1wb3J0YW50IDtcblxuICAgIC50ZXh0Q2VudGVyIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQ1MHB4IDsgcGFkZGluZy1sZWZ0OiAyMHB4IDtcbiAgICB9XG4gIH1cbiAgLmxpZ2h0RGl2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQgOyB3aWR0aDogNDQwcHggOyBoZWlnaHQ6IDEwMHZoIDtcbiAgICB0b3A6IDAgOyByaWdodDogMCA7XG4gIH1cbiAgLmxpZ2h0Q2lyY2xlIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMDBweCA7IGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwMHB4IDsgIHRvcDogNTAlICA7XG4gICAgaGVpZ2h0OiA0NDBweCA7IHdpZHRoOiAyMDAlIDsgbGVmdDogNXB4IDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIDtcbiAgfVxuICAubG9nb19kaXZfYWxsIHtcbiAgICBsZWZ0OiAyNSUgOyAgdG9wOiA1MCUgO1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc5N3B4ICkge1xuICAuYmxhY2tEaXYge1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4IDsgd2lkdGg6IDEwMCUgO1xuICAgIHBhZGRpbmc6IDAgOyAgcGFkZGluZy10b3A6IDUwMHB4ICFpbXBvcnRhbnQgOyBtYXJnaW46IDA7XG4gIH1cblxuICAubGlnaHREaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IHRvcCA6IDAgOyBsZWZ0OiAwIDsgbWluLWhlaWdodDogNDUwcHggO1xuICAgIHdpZHRoOiAxMDAlIDtcbiAgfVxuXG4gIC5saWdodENpcmNsZSB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTkwcHggO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxOTBweCA7ICB0b3A6IDAlICA7XG4gICAgaGVpZ2h0OiAxNTAlIDsgd2lkdGg6IDEwMCUgOyBsZWZ0OiAwJSA7XG4gIH1cbiAgLmxvZ29fZGl2X2FsbCB7XG4gICAgbGVmdDogNTAlIDsgIHRvcDogMzUlIDtcbiAgfVxuXG59XG4uYmFja2dyb3VuZF9hbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgOyB3aWR0aDogMTAwJSA7ICAgaGVpZ2h0OiAxMDAlIDsgbWFyZ2luLWxlZnQ6IDAgO1xuICBvdmVyZmxvdzogaGlkZGVuIDsgb3ZlcmZsb3cteTogYXV0byA7IGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjsgd29yZC1zcGFjaW5nOiAzdncgO1xuXG4gIC5saWdodERpdiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgei1pbmRleDogMiA7XG4gICAgLmxpZ2h0Q2lyY2xlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7IGRpc3BsYXk6IG5vbmUgO1xuXG4gICAgICBtaW4taGVpZ2h0OiAzNDBweCA7XG4gICAgICAubG9nb19kaXZfYWxsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlIDsgaGVpZ2h0IDogNDAwcHggOyB3aWR0aDogNDAwcHggO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgLTUwJSApIDtcblxuICAgICAgICAuY2lyY2xlMSB7XG5cbiAgICAgICAgICAuY2lyY2xlMTEgLCAuY2lyY2xlMTIgLCAuY2lyY2xlMTMgLCAuY2lyY2xlMTQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlIDsgd2lkdGg6IDI2cHggOyBoZWlnaHQ6IDI2cHggO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjgyYyA7IGNvbG9yOiAjZmRiODJjIDsgZm9udC1zaXplOiAxNnB4IDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweCA7XG4gICAgICAgICAgICB0b3A6IDAlIDsgbGVmdDogNTAlIDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA7XG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGEzIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICAtbW96LWFuaW1hdGlvbjogcm90YTMgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIC1vLWFuaW1hdGlvbjogcm90YTMgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhMyA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2lyY2xlMTIge1xuICAgICAgICAgICAgdG9wOiA1MCUgOyBsZWZ0OiAwJSA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaXJjbGUxMyB7XG4gICAgICAgICAgICB0b3A6IDEwMCUgOyBsZWZ0OiA1MCUgO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2lyY2xlMTQge1xuICAgICAgICAgICAgdG9wOiA1MCUgOyBsZWZ0OiAxMDAlIDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlIDsgaGVpZ2h0OiAzODBweCA7IHdpZHRoOiAzODBweCA7XG4gICAgICAgICAgdG9wOiAxMHB4IDsgbGVmdDogMTBweCA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDsgbWFyZ2luOiAwIDsgcGFkZGluZzogMCA7XG4gICAgICAgICAgYW5pbWF0aW9uOiByb3RhMiA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiByb3RhMiA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIC1vLWFuaW1hdGlvbjogcm90YTIgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YTIgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcblxuXG4gICAgICAgIH1cbiAgICAgICAgLmNpcmNsZTIge1xuICAgICAgICAgIC5jaXJjbGUyMSAsIC5jaXJjbGUyMiAsIC5jaXJjbGUyMyAsIC5jaXJjbGUyNCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgOyB3aWR0aDogMjBweCA7IGhlaWdodDogMjBweCA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxIDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxIDsgZm9udC1zaXplOiAxMHB4IDsgdGV4dC1hbGlnbjogY2VudGVyIDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4IDtcbiAgICAgICAgICAgIHRvcDoxMiUgOyBsZWZ0OjEyJSA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhNCA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgLW1vei1hbmltYXRpb246IHJvdGE0IDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICAtby1hbmltYXRpb246IHJvdGE0IDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YTQgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhbmltYXRpb246IHJvdGExIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgLW1vei1hbmltYXRpb246IHJvdGExIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgLW8tYW5pbWF0aW9uOiByb3RhMSA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhMSA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSA7IGhlaWdodDogMzMwcHggOyB3aWR0aDogMzMwcHggOyB0b3A6IDM1cHggOyBsZWZ0OiAzNXB4IDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgOyBtYXJnaW46IDAgOyBwYWRkaW5nOiAwIDtcblxuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGUzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgOyBoZWlnaHQ6IDI4MHB4IDsgd2lkdGg6IDI4MHB4IDsgdG9wOiA2MHB4IDsgbGVmdDogNjBweCA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDsgbWFyZ2luOiAwIDsgcGFkZGluZzogMCA7IGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQgO1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgOyBoZWlnaHQ6IDEwMyUgOyB3aWR0aDogMTAzJSA7XG4gICAgICAgICAgICB0b3A6IC0xLjUlIDsgbGVmdDogLTEuNSU7IG9wYWNpdHk6IDAuNSA7IGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggYmxhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgIH1cblxuXG4gICAgfVxuICB9XG4gIC5ibGFja0RpdiB7XG4gICAgIHBhZGRpbmcgOiAxNXB4IDEwcHggOyBjb2xvcjogd2hpdGUgOyBmb250LXNpemU6IDEzcHggO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4IDsgcGFkZGluZy1ib3R0b206IDA7XG4gICAgLnRleHRfYmcge1xuICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZSA7IHdpZHRoIDogMCA7IGhlaWdodCA6IDVweCA7IGJvcmRlci1yYWRpdXM6IDIuNXB4IDsgYm90dG9tIDogMCA7IHotaW5kZXggOiAyIDtcblxuICAgIH1cbiAgICAudGV4dF9iZ193aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogd2hpdGUgO1xuICAgICAgYm94LXNoYWRvdyA6IDAgMCAycHggMHB4IHdoaXRlIDtcbiAgICB9XG4gICAgLnRleHRfYmcyIHtcbiAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGUgOyB3aWR0aCA6IDEwMCUgOyBoZWlnaHQgOiAxMDAlIDsgcmlnaHQgOiAwIDsgdG9wIDogMCA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogIzJkMmQyZCA7XG4gICAgfVxuXG4gICAgLnRleHRfYmdfeWVsbG93IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjZmRiODJjIDtcbiAgICAgIGJveC1zaGFkb3cgOiAwIDAgMnB4IDBweCAjZmRiODJjIDtcbiAgICB9XG5cbiAgICAudGV4dF9kaXZ7XG4gICAgICBkaXNwbGF5OiBub25lIDtcbiAgICB9XG4gICAgLmNvZGVUZXh0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4IDsgZm9udC1zaXplOiAxN3B4IDsgY29sb3I6ICM1YTU2NTYgOyAgZm9udC1mYW1pbHk6ICdNYSBTaGFuIFpoZW5nJywgY3Vyc2l2ZTtcbiAgICB9XG4gICAgLndoaXRlVGV4dCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0IDsgIHBvc2l0aW9uIDogcmVsYXRpdmUgOyBkaXNwbGF5IDogaW5saW5lLWJsb2NrIDtcbiAgICAgIGxpbmUtaGVpZ2h0IDogMzBweCA7IGZvbnQtc2l6ZSA6IDN2dyA7IGNvbG9yIDogd2hpdGUgOyBwYWRkaW5nIDogNXB4IDEwcHggO1xuICAgICAgIGZvbnQtd2VpZ2h0IDogYm9sZCA7IHdvcmQtc3BhY2luZyA6IDVweCA7IHdpZHRoIDogYXV0byA7IG1hcmdpbiA6IDE1cHggMCA7XG4gICAgfVxuICAgIC5ZZWxsb3dUZXh0IHtcbiAgICAgICBwYWRkaW5nIDogNXB4IDsgcG9zaXRpb24gOiByZWxhdGl2ZSA7IHdpZHRoIDogYXV0byA7XG4gICAgICBsaW5lLWhlaWdodCA6IDMwcHggOyBmb250LXNpemUgOiAzdncgOyBjb2xvciA6ICNmZGI4MmMgOyBsZXR0ZXItc3BhY2luZzogMnB4IDtcbiAgICAgIGZvbnQtd2VpZ2h0IDogYm9sZCA7IGRpc3BsYXk6IGJsb2NrIDsgbWFyZ2luOiAxNXB4IDAgO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4IDsgd29yZC1zcGFjaW5nIDogNXB4IDsgZGlzcGxheSA6IGlubGluZS1ibG9jayA7XG5cbiAgICB9XG4gICAgLmRhcmtUZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweCA7IGNvbG9yOiAjNWE1YTVhIDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkIDsgbWFyZ2luLXRvcCA6IDEwcHggO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1NzZweCkge1xuICAgICAgLndoaXRlVGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICAgIC5ZZWxsb3dUZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgICAgLmRhcmtUZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA5cHggO1xuICAgICAgfVxuICAgIH1cbiAgICAuYnRucyB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuY29udGFjdF9tZV9idG4ge1xuICAgICAgbWFyZ2luLXJpZ2h0IDogMjBweCA7XG4gICAgICBib3JkZXItY29sb3IgOiByZ2IoMjU1LCAxNjcsIDM4KSAhaW1wb3J0YW50IDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHggO1xuXG4gICAgfVxuICAgIC5jdl9idG4ge1xuICAgICAgYm9yZGVyLWNvbG9yIDogcmdiKDE1OCwgMTU4LCAxNTApICFpbXBvcnRhbnQgO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweCA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG59XG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3OThweCkge1xuICAuYmxhY2tEaXYge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ0MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNzBweDtcbiAgICBwYWRkaW5nLXRvcDogNTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5ibGFja0RpdiAudGV4dENlbnRlciB7XG4gICAgcGFkZGluZy1yaWdodDogNDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgLmxpZ2h0RGl2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDQ0MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmxpZ2h0Q2lyY2xlIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cblxuICAubG9nb19kaXZfYWxsIHtcbiAgICBsZWZ0OiAyNSU7XG4gICAgdG9wOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5N3B4KSB7XG4gIC5ibGFja0RpdiB7XG4gICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLXRvcDogNTAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAubGlnaHREaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5saWdodENpcmNsZSB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTkwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE5MHB4O1xuICAgIHRvcDogMCU7XG4gICAgaGVpZ2h0OiAxNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDAlO1xuICB9XG5cbiAgLmxvZ29fZGl2X2FsbCB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMzUlO1xuICB9XG59XG4uYmFja2dyb3VuZF9hbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgd29yZC1zcGFjaW5nOiAzdnc7XG59XG4uYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMjtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBtaW4taGVpZ2h0OiAzNDBweDtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM4MHB4O1xuICB3aWR0aDogMzgwcHg7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGFuaW1hdGlvbjogcm90YTIgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHJvdGEyIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogcm90YTIgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGEyIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUxIC5jaXJjbGUxMSwgLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMSAuY2lyY2xlMTIsIC5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTEgLmNpcmNsZTEzLCAuYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUxIC5jaXJjbGUxNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjgyYztcbiAgY29sb3I6ICNmZGI4MmM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgdG9wOiAwJTtcbiAgbGVmdDogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogcm90YTMgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHJvdGEzIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogcm90YTMgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGEzIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUxIC5jaXJjbGUxMiB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwJTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTEgLmNpcmNsZTEzIHtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUxIC5jaXJjbGUxNCB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAxMDAlO1xufVxuLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMiB7XG4gIGFuaW1hdGlvbjogcm90YTEgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHJvdGExIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogcm90YTEgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGExIDYwMDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMzBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICB0b3A6IDM1cHg7XG4gIGxlZnQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMiAuY2lyY2xlMjEsIC5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTIgLmNpcmNsZTIyLCAuYmFja2dyb3VuZF9hbGwgLmxpZ2h0RGl2IC5saWdodENpcmNsZSAubG9nb19kaXZfYWxsIC5jaXJjbGUyIC5jaXJjbGUyMywgLmJhY2tncm91bmRfYWxsIC5saWdodERpdiAubGlnaHRDaXJjbGUgLmxvZ29fZGl2X2FsbCAuY2lyY2xlMiAuY2lyY2xlMjQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiAxMiU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiByb3RhNCA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogcm90YTQgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiByb3RhNCA2MDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YTQgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjgwcHg7XG4gIHdpZHRoOiAyODBweDtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAubGlnaHREaXYgLmxpZ2h0Q2lyY2xlIC5sb2dvX2Rpdl9hbGwgLmNpcmNsZTMgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMyU7XG4gIHdpZHRoOiAxMDMlO1xuICB0b3A6IC0xLjUlO1xuICBsZWZ0OiAtMS41JTtcbiAgb3BhY2l0eTogMC41O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4IGJsYWNrKTtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYge1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC50ZXh0X2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIuNXB4O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDI7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC50ZXh0X2JnX3doaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMHB4IHdoaXRlO1xufVxuLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAudGV4dF9iZzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC50ZXh0X2JnX3llbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGI4MmM7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMHB4ICNmZGI4MmM7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC50ZXh0X2RpdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC5jb2RlVGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjNWE1NjU2O1xuICBmb250LWZhbWlseTogXCJNYSBTaGFuIFpoZW5nXCIsIGN1cnNpdmU7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC53aGl0ZVRleHQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd29yZC1zcGFjaW5nOiA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLlllbGxvd1RleHQge1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDN2dztcbiAgY29sb3I6ICNmZGI4MmM7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgd29yZC1zcGFjaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLmRhcmtUZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzVhNWE1YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC53aGl0ZVRleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC5ZZWxsb3dUZXh0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmJhY2tncm91bmRfYWxsIC5ibGFja0RpdiAuZGFya1RleHQge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC5idG5zIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uYmFja2dyb3VuZF9hbGwgLmJsYWNrRGl2IC5jb250YWN0X21lX2J0biB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZhNzI2ICFpbXBvcnRhbnQ7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5iYWNrZ3JvdW5kX2FsbCAuYmxhY2tEaXYgLmN2X2J0biB7XG4gIGJvcmRlci1jb2xvcjogIzllOWU5NiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */");

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
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".circle11 , .circle12 , .circle13 , .circle14 ").css("color", "#212121");
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
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".circle21 , .circle22 , .circle23 , .circle24 ").css({ "color": "#fdb82c", "box-shadow": "0 0 6px 0px #fdb82c" });
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
        window.open('assets/cv1.pdf');
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

/***/ "./src/app/photo/photo.component.scss":
/*!********************************************!*\
  !*** ./src/app/photo/photo.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".all_photo {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-image: url('back.jpg');\n  background-size: cover;\n  background-position: center;\n}\n.all_photo .photo_viewer {\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  height: 395px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.all_photo .photo_viewer .left_photo {\n  position: absolute;\n  width: 40%;\n  height: 100%;\n  left: 2%;\n  top: 0%;\n}\n.all_photo .photo_viewer .left_photo img {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  height: auto;\n  left: 0;\n  transform: translateY(-50%) rotate3d(0, 1, 0, 45deg);\n  box-shadow: -4px 0 8px 2px #6b6262;\n}\n.all_photo .photo_viewer .right_photo {\n  position: absolute;\n  width: 40%;\n  height: 100%;\n  right: 2%;\n  top: 0%;\n}\n.all_photo .photo_viewer .right_photo img {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  height: auto;\n  left: 0;\n  transform: translateY(-50%) rotate3d(0, 1, 0, -45deg);\n  box-shadow: 4px 0 8px 2px #6b6262;\n}\n.all_photo .photo_viewer .center_photo {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  left: 50%;\n  top: 0%;\n  transform: translateX(-50%);\n  z-index: 2;\n}\n.all_photo .photo_viewer .center_photo img {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  height: auto;\n  left: 0;\n  transform: translateY(-50%);\n  box-shadow: 0px -1px 7px 1px black;\n}\n.all_photo .photo_viewer div {\n  transform-style: preserve-3d;\n  perspective: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWRvd19hY2t5L2J1cmVhdS9hbmd1bGFyLXByb2pldC9wb3J0ZWZvbGlvL3NyYy9hcHAvcGhvdG8vcGhvdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bob3RvL3Bob3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7RUFBYyxNQUFBO0VBQy9DLE9BQUE7RUFBUyxpQ0FBQTtFQUNULHNCQUFBO0VBQXdCLDJCQUFBO0FDTTFCO0FESkU7RUFDRSxrQkFBQTtFQUFvQixVQUFBO0VBQVksUUFBQTtFQUFVLGFBQUE7RUFBZSxRQUFBO0VBQVUsMkJBQUE7QUNXdkU7QURUSTtFQUNFLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxZQUFBO0VBQWMsUUFBQTtFQUFVLE9BQUE7QUNlOUQ7QURkTTtFQUNFLGtCQUFBO0VBQW9CLFdBQUE7RUFBYyxRQUFBO0VBQVUsWUFBQTtFQUFnQixPQUFBO0VBRTVELG9EQUFBO0VBQ0Esa0NBQUE7QUNtQlI7QURmSTtFQUNFLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxZQUFBO0VBQWMsU0FBQTtFQUFXLE9BQUE7QUNxQi9EO0FEcEJNO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFjLFFBQUE7RUFBVSxZQUFBO0VBQWdCLE9BQUE7RUFFNUQscURBQUE7RUFDQSxpQ0FBQTtBQ3lCUjtBRHJCSTtFQUNFLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxZQUFBO0VBQWMsU0FBQTtFQUFXLE9BQUE7RUFBUywyQkFBQTtFQUNsRSxVQUFBO0FDNEJOO0FEM0JNO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFjLFFBQUE7RUFBVSxZQUFBO0VBQWdCLE9BQUE7RUFFNUQsMkJBQUE7RUFDQSxrQ0FBQTtBQ2dDUjtBRDVCSTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7QUM4Qk4iLCJmaWxlIjoic3JjL2FwcC9waG90by9waG90by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGxfcGhvdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRvcDogMDtcbiAgbGVmdDogMDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL2JhY2suanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gIC5waG90b192aWV3ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDkwJTsgbGVmdDogNSU7IGhlaWdodDogMzk1cHg7IHRvcDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cbiAgICAubGVmdF9waG90byB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiA0MCU7IGhlaWdodDogMTAwJTsgbGVmdDogMiU7IHRvcDogMCU7XG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlIDsgdG9wOiA1MCU7IGhlaWdodDogYXV0byAgOyBsZWZ0OiAwO1xuXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSAgcm90YXRlM2QoMCwgMSwgMCwgNDVkZWcpO1xuICAgICAgICBib3gtc2hhZG93OiAtNHB4IDAgOHB4IDJweCAjNmI2MjYyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yaWdodF9waG90byB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiA0MCU7IGhlaWdodDogMTAwJTsgcmlnaHQ6IDIlOyB0b3A6IDAlO1xuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJSA7IHRvcDogNTAlOyBoZWlnaHQ6IGF1dG8gIDsgbGVmdDogMDtcblxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlM2QoMCwgMSwgMCwgLTQ1ZGVnKTtcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDAgOHB4IDJweCAjNmI2MjYyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jZW50ZXJfcGhvdG8ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogNTAlOyBoZWlnaHQ6IDEwMCU7IGxlZnQ6IDUwJTsgdG9wOiAwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCUgOyB0b3A6IDUwJTsgaGVpZ2h0OiBhdXRvICA7IGxlZnQ6IDA7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggLTFweCA3cHggMXB4IGJsYWNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpdiB7XG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xuXG4gIH1cblxuICB9XG59XG4iLCIuYWxsX3Bob3RvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1ncy9iYWNrLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5hbGxfcGhvdG8gLnBob3RvX3ZpZXdlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbGVmdDogNSU7XG4gIGhlaWdodDogMzk1cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uYWxsX3Bob3RvIC5waG90b192aWV3ZXIgLmxlZnRfcGhvdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMiU7XG4gIHRvcDogMCU7XG59XG4uYWxsX3Bob3RvIC5waG90b192aWV3ZXIgLmxlZnRfcGhvdG8gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZTNkKDAsIDEsIDAsIDQ1ZGVnKTtcbiAgYm94LXNoYWRvdzogLTRweCAwIDhweCAycHggIzZiNjI2Mjtcbn1cbi5hbGxfcGhvdG8gLnBob3RvX3ZpZXdlciAucmlnaHRfcGhvdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcmlnaHQ6IDIlO1xuICB0b3A6IDAlO1xufVxuLmFsbF9waG90byAucGhvdG9fdmlld2VyIC5yaWdodF9waG90byBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlM2QoMCwgMSwgMCwgLTQ1ZGVnKTtcbiAgYm94LXNoYWRvdzogNHB4IDAgOHB4IDJweCAjNmI2MjYyO1xufVxuLmFsbF9waG90byAucGhvdG9fdmlld2VyIC5jZW50ZXJfcGhvdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDI7XG59XG4uYWxsX3Bob3RvIC5waG90b192aWV3ZXIgLmNlbnRlcl9waG90byBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDdweCAxcHggYmxhY2s7XG59XG4uYWxsX3Bob3RvIC5waG90b192aWV3ZXIgZGl2IHtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcGVyc3BlY3RpdmU6IDYwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/photo/photo.component.ts":
/*!******************************************!*\
  !*** ./src/app/photo/photo.component.ts ***!
  \******************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhotoComponent = class PhotoComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo/photo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo.component.scss */ "./src/app/photo/photo.component.scss")).default]
    })
], PhotoComponent);



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

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".all_skills_row {\n  width: 100%;\n}\n\n.row {\n  margin-left: 0;\n  margin: 0;\n}\n\n.cat_skill .div_title {\n  position: relative;\n  height: 50px;\n  width: 100%;\n}\n\n.cat_skill .div_title hr {\n  position: absolute;\n  top: 24.5px;\n  transform: translateY(-50%);\n  border-color: #373737;\n  margin: 0 !important;\n  width: 100%;\n  height: 1px;\n  background-color: #2f2b2b;\n}\n\n.cat_skill .div_title div {\n  position: absolute;\n  height: 30px;\n  top: 10px;\n  left: 25px;\n  overflow: hidden;\n  padding: 0 10px;\n  color: #4a4a4a;\n  line-height: 30px;\n  background-color: #2d2d2d;\n  display: inline-block;\n  font-family: \"Ma Shan Zheng\", cursive;\n  font-size: 18px;\n}\n\n.cat_skill .one_skill_div {\n  width: 90%;\n  margin-left: 5%;\n  font-family: \"Nunito\", sans-serif;\n  font-size: 16px;\n}\n\n.cat_skill .one_skill_div .one_skill_title {\n  min-height: 35px;\n}\n\n.cat_skill .one_skill_div .one_skill_title .name_skill {\n  color: white;\n}\n\n.cat_skill .one_skill_div .one_skill_title .stars {\n  color: #222222;\n}\n\n.cat_skill .one_skill_div .one_skill_title .stars .active_star {\n  color: #222222;\n}\n\n.cat_skill .one_skill_div .sub_skills_div {\n  width: 90%;\n  margin-left: 5%;\n  font-size: 13px;\n}\n\n.cat_skill .one_skill_div .sub_skills_div .name_sub_skill {\n  color: gray;\n}\n\n.cat_skill .one_skill_div .sub_skills_div .progress_sub_skill {\n  width: 50%;\n  height: 3px;\n  margin-top: 8px;\n  background-color: #222222;\n}\n\n.cat_skill .one_skill_div .sub_skills_div .progress_sub_skill .progress-bar {\n  background-color: #737373;\n}\n\n.cat_skill .one_other_skill {\n  position: relative;\n  height: 120px;\n  min-width: 70px;\n  color: white;\n  text-align: center;\n  font-weight: bold;\n}\n\n.cat_skill .one_other_skill .one_other_skill_div {\n  position: absolute;\n  width: 70px;\n  height: 100px;\n  top: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.cat_skill .one_other_skill .one_other_skill_div .one_other_skill_name {\n  position: absolute;\n  width: 100%;\n  height: 30px;\n  bottom: 0;\n  left: 0;\n  line-height: 30px;\n  font-size: 13px;\n}\n\n.cat_skill .one_other_skill .one_other_skill_div .one_other_skill_logo {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 10px;\n  left: 10px;\n  line-height: 50px;\n  font-size: 20px;\n}\n\n@media screen and (max-width: 576px) {\n  .cat_skill .one_skill_div {\n    font-size: 11px;\n  }\n  .cat_skill .one_skill_div .sub_skills_div {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWRvd19hY2t5L2J1cmVhdS9hbmd1bGFyLXByb2pldC9wb3J0ZWZvbGlvL3NyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUFNLGNBQUE7RUFBZ0IsU0FBQTtBQ0d0Qjs7QURERTtFQUNDLGtCQUFBO0VBQW9CLFlBQUE7RUFBZSxXQUFBO0FDTXRDOztBRExJO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLDJCQUFBO0VBQTZCLHFCQUFBO0VBQzlELG9CQUFBO0VBQXVCLFdBQUE7RUFBYSxXQUFBO0VBQWMseUJBQUE7QUNheEQ7O0FEWEk7RUFDRSxrQkFBQTtFQUFvQixZQUFBO0VBQWUsU0FBQTtFQUFZLFVBQUE7RUFBWSxnQkFBQTtFQUFrQixlQUFBO0VBQzdFLGNBQUE7RUFBZ0IsaUJBQUE7RUFBbUIseUJBQUE7RUFBMkIscUJBQUE7RUFDOUQscUNBQUE7RUFBdUMsZUFBQTtBQ3NCN0M7O0FEbkJFO0VBQ0UsVUFBQTtFQUFZLGVBQUE7RUFBaUIsaUNBQUE7RUFBbUMsZUFBQTtBQ3dCcEU7O0FEdkJJO0VBQ0UsZ0JBQUE7QUN5Qk47O0FEeEJNO0VBQ0UsWUFBQTtBQzBCUjs7QUR4Qk07RUFDRSxjQUFBO0FDMEJSOztBRHpCUTtFQUNDLGNBQUE7QUMyQlQ7O0FEdEJJO0VBQ0UsVUFBQTtFQUFZLGVBQUE7RUFBaUIsZUFBQTtBQzBCbkM7O0FEekJNO0VBQ0UsV0FBQTtBQzJCUjs7QUR6Qk07RUFDRSxVQUFBO0VBQWEsV0FBQTtFQUFjLGVBQUE7RUFDM0IseUJBQUE7QUM2QlI7O0FENUJRO0VBQ0UseUJBQUE7QUM4QlY7O0FEeEJFO0VBQ0Usa0JBQUE7RUFBb0IsYUFBQTtFQUFnQixlQUFBO0VBQWlCLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixpQkFBQTtBQytCM0Y7O0FEOUJJO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGFBQUE7RUFBZSxTQUFBO0VBQVcsU0FBQTtFQUFXLDJCQUFBO0FDcUM1RTs7QURwQ007RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtFQUFjLFNBQUE7RUFBVyxPQUFBO0VBQVMsaUJBQUE7RUFDbkUsZUFBQTtBQzJDUjs7QUR6Q007RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtFQUFjLFNBQUE7RUFBVyxVQUFBO0VBQVksaUJBQUE7RUFDdEUsZUFBQTtBQ2dEUjs7QUQxQ0E7RUFFSTtJQUNFLGVBQUE7RUM0Q0o7RUQzQ0k7SUFDRSxlQUFBO0VDNkNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbF9za2lsbHNfcm93IHtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cbi5yb3cge21hcmdpbi1sZWZ0OiAwOyBtYXJnaW46IDA7fVxuLmNhdF9za2lsbCB7XG4gIC5kaXZfdGl0bGUge1xuICAgcG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDUwcHggOyB3aWR0aDogMTAwJTtcbiAgICBociB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMjQuNXB4OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IGJvcmRlci1jb2xvcjogIzM3MzczNztcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50IDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMXB4IDsgYmFja2dyb3VuZC1jb2xvcjogIzJmMmIyYjtcbiAgICB9XG4gICAgZGl2IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiAzMHB4IDsgdG9wOiAxMHB4OyAgbGVmdDogMjVweDsgb3ZlcmZsb3c6IGhpZGRlbjsgcGFkZGluZzogMCAxMHB4O1xuICAgICAgY29sb3I6ICM0YTRhNGE7IGxpbmUtaGVpZ2h0OiAzMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LWZhbWlseTogJ01hIFNoYW4gWmhlbmcnLCBjdXJzaXZlOyBmb250LXNpemU6IDE4cHggO1xuICAgIH1cbiAgfVxuICAub25lX3NraWxsX2RpdiB7XG4gICAgd2lkdGg6IDkwJTsgbWFyZ2luLWxlZnQ6IDUlOyBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTZweDtcbiAgICAub25lX3NraWxsX3RpdGxle1xuICAgICAgbWluLWhlaWdodDogMzVweDtcbiAgICAgIC5uYW1lX3NraWxsIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLnN0YXJzIHtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIC5hY3RpdmVfc3RhciB7XG4gICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJfc2tpbGxzX2RpdiB7XG4gICAgICB3aWR0aDogOTAlOyBtYXJnaW4tbGVmdDogNSU7IGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIC5uYW1lX3N1Yl9za2lsbCB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgfVxuICAgICAgLnByb2dyZXNzX3N1Yl9za2lsbCB7XG4gICAgICAgIHdpZHRoOiA1MCUgOyBoZWlnaHQ6IDNweCA7IG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM3MztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG4gIC5vbmVfb3RoZXJfc2tpbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiAxMjBweCA7IG1pbi13aWR0aDogNzBweDsgY29sb3I6IHdoaXRlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC5vbmVfb3RoZXJfc2tpbGxfZGl2IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDcwcHg7IGhlaWdodDogMTAwcHg7IHRvcDogMTBweDsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAub25lX290aGVyX3NraWxsX25hbWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDMwcHg7IGJvdHRvbTogMDsgbGVmdDogMDsgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICAgIC5vbmVfb3RoZXJfc2tpbGxfbG9nbyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDsgdG9wOiAxMHB4OyBsZWZ0OiAxMHB4OyBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNTc2cHgpIHtcbiAgLmNhdF9za2lsbHtcbiAgICAub25lX3NraWxsX2RpdiB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAuc3ViX3NraWxsc19kaXYge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG5cbiAgICB9XG5cblxuICB9XG59XG4iLCIuYWxsX3NraWxsc19yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jYXRfc2tpbGwgLmRpdl90aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXRfc2tpbGwgLmRpdl90aXRsZSBociB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNC41cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLWNvbG9yOiAjMzczNzM3O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyYjJiO1xufVxuLmNhdF9za2lsbCAuZGl2X3RpdGxlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDI1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIk1hIFNoYW4gWmhlbmdcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNhdF9za2lsbCAub25lX3NraWxsX2RpdiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jYXRfc2tpbGwgLm9uZV9za2lsbF9kaXYgLm9uZV9za2lsbF90aXRsZSB7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG59XG4uY2F0X3NraWxsIC5vbmVfc2tpbGxfZGl2IC5vbmVfc2tpbGxfdGl0bGUgLm5hbWVfc2tpbGwge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2F0X3NraWxsIC5vbmVfc2tpbGxfZGl2IC5vbmVfc2tpbGxfdGl0bGUgLnN0YXJzIHtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uY2F0X3NraWxsIC5vbmVfc2tpbGxfZGl2IC5vbmVfc2tpbGxfdGl0bGUgLnN0YXJzIC5hY3RpdmVfc3RhciB7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLmNhdF9za2lsbCAub25lX3NraWxsX2RpdiAuc3ViX3NraWxsc19kaXYge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5jYXRfc2tpbGwgLm9uZV9za2lsbF9kaXYgLnN1Yl9za2lsbHNfZGl2IC5uYW1lX3N1Yl9za2lsbCB7XG4gIGNvbG9yOiBncmF5O1xufVxuLmNhdF9za2lsbCAub25lX3NraWxsX2RpdiAuc3ViX3NraWxsc19kaXYgLnByb2dyZXNzX3N1Yl9za2lsbCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogM3B4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG59XG4uY2F0X3NraWxsIC5vbmVfc2tpbGxfZGl2IC5zdWJfc2tpbGxzX2RpdiAucHJvZ3Jlc3Nfc3ViX3NraWxsIC5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM3MzczO1xufVxuLmNhdF9za2lsbCAub25lX290aGVyX3NraWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXRfc2tpbGwgLm9uZV9vdGhlcl9za2lsbCAub25lX290aGVyX3NraWxsX2RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uY2F0X3NraWxsIC5vbmVfb3RoZXJfc2tpbGwgLm9uZV9vdGhlcl9za2lsbF9kaXYgLm9uZV9vdGhlcl9za2lsbF9uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uY2F0X3NraWxsIC5vbmVfb3RoZXJfc2tpbGwgLm9uZV9vdGhlcl9za2lsbF9kaXYgLm9uZV9vdGhlcl9za2lsbF9sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jYXRfc2tpbGwgLm9uZV9za2lsbF9kaXYge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAuY2F0X3NraWxsIC5vbmVfc2tpbGxfZGl2IC5zdWJfc2tpbGxzX2RpdiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let SkillsComponent = class SkillsComponent {
    constructor() {
        this.js = '98%';
        this.jquery = '90%';
        this.ajax = '98%';
        this.angularjs = '95%';
        this.angular = "95%";
        this.react = "80%";
        this.php = '98%';
        this.laravel = "98%";
        this.lumen = "98%";
        this.github = 0;
        this.docker = 0;
        this.deployement = 0;
        this.documentation = 0;
        this.conception = 0;
        this.problem = 0;
        this.photoshop = 0;
        this.testing = 0;
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
        jquery__WEBPACK_IMPORTED_MODULE_2__(".skillsSidenav").addClass('activeItem');
    }
    ngAfterViewInit() {
        setTimeout(() => {
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".star1.active_star").animate({ 'font-size': "26px" }, 100, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".star1.active_star").css({ "color": "#8e8e8e" });
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".star1.active_star").animate({ 'font-size': "24px" }, 100, function () { });
                });
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".star2.active_star").animate({ 'font-size': "26px" }, 100, function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".star2.active_star").css({ "color": "#8e8e8e" });
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".star2.active_star").animate({ 'font-size': "24px" }, 100, function () { });
                    });
                    setTimeout(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".star3.active_star").animate({ 'font-size': "26px" }, 100, function () {
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".star3.active_star").css({ "color": "#8e8e8e" });
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".star3.active_star").animate({ 'font-size': "24px" }, 100, function () { });
                        });
                        setTimeout(function () {
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".star4.active_star").animate({ 'font-size': "26px" }, 100, function () {
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".star4.active_star").css({ "color": "#8e8e8e" });
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".star4.active_star").animate({ 'font-size': "24px" }, 100, function () { });
                            });
                            setTimeout(function () {
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".star5.active_star").animate({ 'font-size': "26px" }, 100, function () {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".star5.active_star").css({ "color": "#8e8e8e" });
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".star5.active_star").animate({ 'font-size': "24px" }, 100, function () { });
                                });
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
            jquery__WEBPACK_IMPORTED_MODULE_2__(".js_bar").animate({ "width": this.js }, 1000, function () { });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".jquery_bar").animate({ "width": this.jquery }, 1000, function () { });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".ajax_bar").animate({ "width": this.ajax }, 1000, function () { });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".angularjs_bar").animate({ "width": this.angularjs }, 1000, function () { });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".angular_bar").animate({ "width": this.angular }, 1000, function () { });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".react_bar").animate({ "width": this.react }, 1000, function () { });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".php_bar").animate({ "width": this.php }, 1000, function () { });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".laravel_bar").animate({ "width": this.laravel }, 1000, function () { });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".lumen_bar").animate({ "width": this.lumen }, 1000, function () { });
            setTimeout(() => {
                this.docker = 45;
                this.github = 40;
                this.deployement = 50;
                this.documentation = 50;
                this.conception = 40;
                this.problem = 45;
                this.photoshop = 40;
                this.testing = 40;
            }, 1500);
            setTimeout(() => {
                this.docker = 70;
                this.github = 60;
                this.deployement = 75;
                this.documentation = 75;
                this.conception = 60;
                this.problem = 70;
                this.photoshop = 60;
                this.testing = 60;
            }, 1700);
            setTimeout(() => {
                this.docker = 90;
                this.github = 80;
                this.deployement = 95;
                this.documentation = 95;
                this.conception = 80;
                this.problem = 90;
                this.photoshop = 80;
                this.testing = 80;
            }, 1900);
        }, 2000);
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")).default]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/app/work/work.component.scss":
/*!******************************************!*\
  !*** ./src/app/work/work.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  margin-left: 0;\n}\n\n.all_work_space {\n  width: 100%;\n  min-height: 100%;\n}\n\n.one_card_div {\n  position: relative;\n  height: 400px;\n  min-width: 220px;\n  transform-style: preserve-3d;\n  transition: transform 1s;\n}\n\n.one_card_div .one_card {\n  position: relative;\n  height: 350px;\n  width: 200px;\n  top: 25px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 15px;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.one_card_div .one_card .one_card_front {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-image: url('back_card.png');\n  background-size: contain;\n  background-color: #0b0b0b;\n  overflow: hidden;\n}\n\n.one_card_div .one_card .one_card_front .backgrounder {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(5, 5, 5, 0.55);\n}\n\n.one_card_div .one_card .one_card_front img {\n  position: absolute;\n  width: 100px;\n  height: auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-filter: drop-shadow(0px 0px 3px black);\n          filter: drop-shadow(0px 0px 3px black);\n}\n\n.one_card_div .one_card_back {\n  position: absolute;\n  height: 350px;\n  width: 200px;\n  top: 25px;\n  left: 50%;\n  border-radius: 15px;\n  background-color: white;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform: translateX(-50%) rotateY(180deg);\n  -webkit-filter: drop-shadow(2px 4px 6px black);\n          filter: drop-shadow(2px 4px 6px black);\n  overflow: hidden;\n  z-index: 2;\n}\n\n.one_card_div .one_card_back mat-progress-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.one_card_div .one_card_back mat-progress-bar .mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #d1d0d0 !important;\n}\n\n.one_card_div .one_card_back .one_card_background {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: none;\n}\n\n.one_card_div .one_card_back .project_detail {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.72);\n  opacity: 0;\n  transition: ease-in 0.2s;\n}\n\n.one_card_div .one_card_back .project_detail .project_view_btn {\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  top: 150px;\n  left: 0px;\n  line-height: 50px;\n  text-align: center;\n  color: #a67e2d;\n  background-color: #fdb72b;\n  cursor: pointer;\n  font-size: 25px;\n  opacity: 0.7;\n}\n\n.one_card_div .one_card_back .project_detail .project_view_btn:hover {\n  opacity: 1;\n  color: #2d2d2d;\n}\n\n.one_card_div .one_card_back .project_detail .project_title {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  top: 50px;\n  left: 0;\n  line-height: 50px;\n  font-size: 20px;\n  color: white;\n  font-weight: bold;\n  letter-spacing: 1px;\n  text-align: center;\n  font-family: \"Indie Flower\", cursive;\n  text-shadow: -2px -1px 5px black;\n}\n\n.one_card_div .one_card_back .project_detail .project_tech {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  line-height: 50px;\n  bottom: 25px;\n  left: 0;\n  padding-left: 15px;\n  letter-spacing: 15px;\n  text-align: center;\n  color: white;\n  font-size: 25px;\n}\n\n.one_card_div .one_card_back:hover .project_detail {\n  opacity: 1;\n}\n\n.card_p {\n  opacity: 0;\n}\n\n.fake_cards {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.fake_cards .one_card_div {\n  position: absolute;\n  bottom: -400px;\n  left: 20px;\n}\n\n.fake_cards .card_f.card8 .one_card {\n  box-shadow: 0 0 5px 1px white;\n}\n\n.img_viewer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  min-height: 400px;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.92);\n  display: none;\n}\n\n@media screen and (max-width: 576px) {\n  .img_viewer {\n    height: calc(100% - 60px);\n    top: 60px;\n  }\n}\n\n.img_viewer .img_div {\n  position: absolute;\n  width: calc(100% - 80px);\n  height: calc(100% - 80px);\n  top: 40px;\n  left: 40px;\n  overflow: hidden;\n}\n\n.img_viewer .img_div .one_image {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.img_viewer .img_div .one_image .image_bg {\n  position: absolute;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n  top: 20px;\n  left: 20px;\n  background-size: cover;\n  background-position: center;\n  -webkit-filter: opacity(0.09);\n          filter: opacity(0.09);\n  display: none;\n}\n\n.img_viewer .img_div .one_image mat-progress-spinner {\n  position: absolute;\n  top: calc(50% - 25px);\n  left: calc(50% - 25px);\n}\n\n.img_viewer .img_div .one_image mat-progress-spinner .mat-progress-spinner.mat-accent .mat-progress-spinner-buffer {\n  background-color: #d1d0d0 !important;\n}\n\n.img_viewer .img_div .one_image img {\n  position: absolute;\n  width: 90%;\n  height: auto;\n  top: 50%;\n  left: 5%;\n  transform: translateY(-50%);\n  -webkit-filter: drop-shadow(2px 4px 6px black);\n          filter: drop-shadow(2px 4px 6px black);\n  z-index: 2;\n  display: none;\n}\n\n.img_viewer .img_div .one_image img.heighted_pic {\n  height: 100%;\n  width: auto;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n}\n\n.img_viewer .closer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  text-align: right;\n  padding-right: 20px;\n  font-size: 25px;\n}\n\n.img_viewer .closer i {\n  color: #777474;\n  cursor: pointer;\n}\n\n.img_viewer .closer i:hover {\n  color: #fdb82c;\n}\n\n.img_viewer .slide_left, .img_viewer .slide_right {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  top: 50%;\n  line-height: 40px;\n  text-align: center;\n  font-size: 40px;\n  transform: translateY(-50%);\n  font-size: 35px;\n}\n\n.img_viewer .slide_left i, .img_viewer .slide_right i {\n  color: #777474;\n  cursor: pointer;\n}\n\n.img_viewer .slide_left i:hover, .img_viewer .slide_right i:hover {\n  color: #fdb82c;\n}\n\n.img_viewer .slide_right {\n  right: 0;\n}\n\n.img_viewer .control_div {\n  position: absolute;\n  width: 100%;\n  height: 40px;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.img_viewer .control_div .images {\n  position: absolute;\n  width: calc(100% - 80px);\n  height: 100%;\n  left: 40px;\n  padding: 0;\n}\n\n.img_viewer .control_div .images .one_img {\n  height: 100%;\n  width: calc(100% / 5 );\n  display: inline-block;\n  padding: 0;\n  position: relative;\n}\n\n.img_viewer .control_div .images .one_img .img_bord {\n  position: absolute;\n  width: 40%;\n  height: 6px;\n  border-radius: 2px;\n  background-color: #191919;\n  top: 50%;\n  left: 50%;\n  -webkit-animation: 0.8s ease-in;\n          animation: 0.8s ease-in;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  max-width: 100px;\n}\n\n.img_viewer .control_div .images .one_img_selected {\n  height: 100%;\n  width: calc(100% / 5 );\n  padding: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n}\n\n.img_viewer .control_div .images .one_img_selected .img_bord {\n  position: absolute;\n  width: 40%;\n  height: 6px;\n  border-radius: 2px;\n  top: 50%;\n  left: 50%;\n  -webkit-animation: 0.8s ease-in;\n          animation: 0.8s ease-in;\n  transform: translate(-50%, -50%);\n  background-color: #fdb82c;\n  max-width: 100px;\n}\n\n.all_this_card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #3c362b, #333232);\n}\n\n.all_this_card i {\n  position: absolute;\n  height: 50%;\n  width: 100%;\n  font-size: 192px;\n  top: 20px;\n  left: 0;\n  text-align: center;\n  color: rgba(181, 175, 175, 0.14);\n}\n\n.all_this_card .content_this_card {\n  position: absolute;\n  height: calc(50% - 40px);\n  bottom: 0;\n  font-size: 11px;\n  line-height: 31px;\n  text-align: center;\n  color: rgba(181, 175, 175, 0.6);\n  font-weight: 500;\n  width: 100%;\n  left: 0;\n}\n\n.all_this_card2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #a8abc5, #d2b6d0);\n}\n\n.all_this_card2 i {\n  position: absolute;\n  height: 50%;\n  width: 100%;\n  font-size: 170px;\n  top: 20px;\n  left: 0;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.31);\n}\n\n.all_this_card2 .content_this_card {\n  position: absolute;\n  height: calc(50% - 40px);\n  bottom: 0;\n  font-size: 11px;\n  line-height: 51px;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 500;\n  width: 100%;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWRvd19hY2t5L2J1cmVhdS9hbmd1bGFyLXByb2pldC9wb3J0ZWZvbGlvL3NyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxjQUFBO0FDRU47O0FEREE7RUFDRSxXQUFBO0VBQWEsZ0JBQUE7QUNLZjs7QURGQTtFQUNFLGtCQUFBO0VBQW9CLGFBQUE7RUFBZSxnQkFBQTtFQUFvQiw0QkFBQTtFQUErQix3QkFBQTtBQ1N4Rjs7QURSRTtFQUNFLGtCQUFBO0VBQW9CLGFBQUE7RUFBZSxZQUFBO0VBQWEsU0FBQTtFQUFXLFNBQUE7RUFDM0QsMkJBQUE7RUFBNkIsbUJBQUE7RUFBcUIsZ0JBQUE7RUFDbEQsNEJBQUE7RUFBOEIsbUNBQUE7VUFBQSwyQkFBQTtBQ2lCbEM7O0FEaEJJO0VBQ0Usa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFdBQUE7RUFBYSxNQUFBO0VBQVEsT0FBQTtFQUN2RCxzQ0FBQTtFQUFtRCx3QkFBQTtFQUNuRCx5QkFBQTtFQUNBLGdCQUFBO0FDdUJOOztBRHRCTTtFQUNFLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxZQUFBO0VBQWMsTUFBQTtFQUFRLE9BQUE7RUFDdkQscUNBQUE7QUM0QlI7O0FEMUJNO0VBQ0Usa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFlBQUE7RUFBYyxRQUFBO0VBQVUsU0FBQTtFQUMxRCxnQ0FBQTtFQUFrQyw4Q0FBQTtVQUFBLHNDQUFBO0FDaUMxQzs7QUQ3QkU7RUFDRSxrQkFBQTtFQUFvQixhQUFBO0VBQWUsWUFBQTtFQUFhLFNBQUE7RUFBVyxTQUFBO0VBQzNELG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQXlDLGdCQUFBO0VBQ3pDLFVBQUE7QUNvQ0o7O0FEbENJO0VBSUUsa0JBQUE7RUFBb0IsTUFBQTtFQUFRLE9BQUE7RUFBUyxXQUFBO0FDb0MzQzs7QUR2Q007RUFDRSxvQ0FBQTtBQ3lDUjs7QURwQ0k7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtFQUFjLE1BQUE7RUFBUSxPQUFBO0VBQVMsYUFBQTtBQzJDdEU7O0FEekNJO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7RUFBYyxNQUFBO0VBQVEsT0FBQTtFQUN2RCxxQ0FBQTtFQUNBLFVBQUE7RUFBWSx3QkFBQTtBQ2dEbEI7O0FEL0NNO0VBQ0Usa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFlBQUE7RUFBYyxVQUFBO0VBQWEsU0FBQTtFQUM3RCxpQkFBQTtFQUFtQixrQkFBQTtFQUFvQixjQUFBO0VBQ3ZDLHlCQUFBO0VBQXlDLGVBQUE7RUFBaUIsZUFBQTtFQUMxRCxZQUFBO0FDeURSOztBRHZETTtFQUNFLFVBQUE7RUFBWSxjQUFBO0FDMERwQjs7QUR2RE07RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtFQUFjLFNBQUE7RUFBVyxPQUFBO0VBQzFELGlCQUFBO0VBQW1CLGVBQUE7RUFBaUIsWUFBQTtFQUFjLGlCQUFBO0VBQ2xELG1CQUFBO0VBQXNCLGtCQUFBO0VBQW1CLG9DQUFBO0VBQ3pDLGdDQUFBO0FDa0VSOztBRC9ETTtFQUNFLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxhQUFBO0VBQWUsaUJBQUE7RUFBbUIsWUFBQTtFQUFjLE9BQUE7RUFDakYsa0JBQUE7RUFBb0Isb0JBQUE7RUFBc0Isa0JBQUE7RUFBb0IsWUFBQTtFQUFjLGVBQUE7QUMwRXBGOztBRG5FSTtFQUNFLFVBQUE7QUNxRU47O0FEOURBO0VBQ0UsVUFBQTtBQ2lFRjs7QUQ5REE7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtFQUFjLE1BQUE7RUFBUSxPQUFBO0VBQVMsZ0JBQUE7QUNzRWxFOztBRHJFRTtFQUNFLGtCQUFBO0VBQW9CLGNBQUE7RUFBZ0IsVUFBQTtBQ3lFeEM7O0FEdEVJO0VBQ0UsNkJBQUE7QUN3RU47O0FEbkVBO0VBQ0Usa0JBQUE7RUFBc0IsV0FBQTtFQUFhLFlBQUE7RUFBYyxNQUFBO0VBQVEsT0FBQTtFQUFTLGlCQUFBO0VBQXFCLGdCQUFBO0VBQ3ZGLHFDQUFBO0VBQ0EsYUFBQTtBQzRFRjs7QUQzRUU7RUFKRjtJQUtJLHlCQUFBO0lBQTZCLFNBQUE7RUMrRS9CO0FBQ0Y7O0FEOUVFO0VBQ0Usa0JBQUE7RUFBb0Isd0JBQUE7RUFBMkIseUJBQUE7RUFBMkIsU0FBQTtFQUFXLFVBQUE7RUFDckYsZ0JBQUE7QUNvRko7O0FEbkZJO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7RUFBYyxNQUFBO0VBQVEsT0FBQTtFQUN2RCxnQkFBQTtBQ3lGTjs7QUR4Rk07RUFDRSxrQkFBQTtFQUFvQix3QkFBQTtFQUEwQix5QkFBQTtFQUEyQixTQUFBO0VBQVcsVUFBQTtFQUNwRixzQkFBQTtFQUF3QiwyQkFBQTtFQUE2Qiw2QkFBQTtVQUFBLHFCQUFBO0VBQ3JELGFBQUE7QUNnR1I7O0FEOUZNO0VBSUUsa0JBQUE7RUFBb0IscUJBQUE7RUFBdUIsc0JBQUE7QUMrRm5EOztBRGxHUTtFQUNFLG9DQUFBO0FDb0dWOztBRC9GTTtFQUNFLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxZQUFBO0VBQWMsUUFBQTtFQUFVLFFBQUE7RUFBVSwyQkFBQTtFQUNsRSw4Q0FBQTtVQUFBLHNDQUFBO0VBQXlDLFVBQUE7RUFBWSxhQUFBO0FDd0c3RDs7QUR0R007RUFDRSxZQUFBO0VBQWMsV0FBQTtFQUFhLFNBQUE7RUFBVyxNQUFBO0VBQVEsMkJBQUE7QUM0R3REOztBRHZHRTtFQUNFLGtCQUFBO0VBQW9CLE1BQUE7RUFBUSxPQUFBO0VBQVMsV0FBQTtFQUFhLFlBQUE7RUFBYyxpQkFBQTtFQUNoRSxpQkFBQTtFQUFtQixtQkFBQTtFQUFzQixlQUFBO0FDZ0g3Qzs7QUQvR0k7RUFDRSxjQUFBO0VBQWdCLGVBQUE7QUNrSHRCOztBRGhISTtFQUNFLGNBQUE7QUNrSE47O0FEOUdFO0VBQ0Usa0JBQUE7RUFBc0IsV0FBQTtFQUFjLFlBQUE7RUFBYyxRQUFBO0VBQVcsaUJBQUE7RUFDNUQsa0JBQUE7RUFBb0IsZUFBQTtFQUFrQiwyQkFBQTtFQUE4QixlQUFBO0FDdUh6RTs7QUR0SEk7RUFDRSxjQUFBO0VBQWdCLGVBQUE7QUN5SHRCOztBRHZISTtFQUNFLGNBQUE7QUN5SE47O0FEdEhFO0VBQ0UsUUFBQTtBQ3dISjs7QURySEU7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtFQUFjLFNBQUE7RUFBVyxPQUFBO0VBQVMsZ0JBQUE7QUM0SHZFOztBRDNISTtFQUNFLGtCQUFBO0VBQXNCLHdCQUFBO0VBQTBCLFlBQUE7RUFBYyxVQUFBO0VBQVksVUFBQTtBQ2lJaEY7O0FEL0hNO0VBQ0UsWUFBQTtFQUFjLHNCQUFBO0VBQXlCLHFCQUFBO0VBQXVCLFVBQUE7RUFBWSxrQkFBQTtBQ3FJbEY7O0FEcElRO0VBQ0Usa0JBQUE7RUFBb0IsVUFBQTtFQUFhLFdBQUE7RUFBYSxrQkFBQTtFQUFvQix5QkFBQTtFQUNsRSxRQUFBO0VBQVUsU0FBQTtFQUFXLCtCQUFBO1VBQUEsdUJBQUE7RUFBeUIsZ0NBQUE7RUFDOUMsZUFBQTtFQUFtQixnQkFBQTtBQzhJN0I7O0FEM0lNO0VBQ0UsWUFBQTtFQUFjLHNCQUFBO0VBQTBCLFVBQUE7RUFBWSxrQkFBQTtFQUNwRCxPQUFBO0VBQVMsTUFBQTtFQUFRLFVBQUE7QUNrSnpCOztBRGpKUTtFQUNFLGtCQUFBO0VBQW9CLFVBQUE7RUFBYSxXQUFBO0VBQWEsa0JBQUE7RUFDOUMsUUFBQTtFQUFVLFNBQUE7RUFBVywrQkFBQTtVQUFBLHVCQUFBO0VBQXlCLGdDQUFBO0VBQzlDLHlCQUFBO0VBQTJCLGdCQUFBO0FDMEpyQzs7QUQvSUE7RUFDRSxrQkFBQTtFQUFvQixNQUFBO0VBQVEsT0FBQTtFQUFTLFdBQUE7RUFBYSxZQUFBO0VBQ2xELG9EQUFBO0FDc0pGOztBRHJKRTtFQUNFLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxXQUFBO0VBQWEsZ0JBQUE7RUFBa0IsU0FBQTtFQUFZLE9BQUE7RUFDNUUsa0JBQUE7RUFBb0IsZ0NBQUE7QUM2SnhCOztBRDNKRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFBMkIsU0FBQTtFQUFZLGVBQUE7RUFBaUIsaUJBQUE7RUFBb0Isa0JBQUE7RUFDNUUsK0JBQUE7RUFBa0MsZ0JBQUE7RUFBb0IsV0FBQTtFQUFhLE9BQUE7QUNvS3ZFOztBRGhLQTtFQUNFLGtCQUFBO0VBQW9CLE1BQUE7RUFBUSxPQUFBO0VBQVMsV0FBQTtFQUFhLFlBQUE7RUFDbEQsb0RBQUE7QUN1S0Y7O0FEdEtFO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFdBQUE7RUFBYSxnQkFBQTtFQUFrQixTQUFBO0VBQVksT0FBQTtFQUM1RSxrQkFBQTtFQUFvQiwwQkFBQTtBQzhLeEI7O0FENUtFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUEyQixTQUFBO0VBQVksZUFBQTtFQUFpQixpQkFBQTtFQUFvQixrQkFBQTtFQUM1RSx5QkFBQTtFQUE0QixnQkFBQTtFQUFxQixXQUFBO0VBQWEsT0FBQTtBQ3FMbEUiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHttYXJnaW4tbGVmdDogMDt9XG4uYWxsX3dvcmtfc3BhY2Uge1xuICB3aWR0aDogMTAwJTsgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm9uZV9jYXJkX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiA0MDBweDsgbWluLXdpZHRoOiAyMjBweCA7ICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOyAgdHJhbnNpdGlvbiA6IHRyYW5zZm9ybSAxcyA7XG4gIC5vbmVfY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDM1MHB4OyB3aWR0aDogMjAwcHg7dG9wOiAyNXB4OyBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyBib3JkZXItcmFkaXVzOiAxNXB4OyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7IGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAub25lX2NhcmRfZnJvbnQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2tfY2FyZC5wbmcpOyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIwYjBiO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC5iYWNrZ3JvdW5kZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRvcDogMDsgbGVmdDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCA1LCA1LCAwLjU1KTtcbiAgICAgIH1cbiAgICAgIGltZ3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwcHg7IGhlaWdodDogYXV0bzsgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO2ZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAzcHggYmxhY2spIDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm9uZV9jYXJkX2JhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiAzNTBweDsgd2lkdGg6IDIwMHB4O3RvcDogMjVweDsgbGVmdDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGVZKDE4MGRlZyk7XG4gICAgZmlsdGVyIDpkcm9wLXNoYWRvdygycHggNHB4IDZweCBibGFjaykgOyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICBtYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDBkMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5vbmVfY2FyZF9iYWNrZ3JvdW5kIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgdG9wOiAwOyBsZWZ0OiAwOyBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAucHJvamVjdF9kZXRhaWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICAgICAgb3BhY2l0eTogMDsgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xuICAgICAgLnByb2plY3Rfdmlld19idG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAyMDBweDsgaGVpZ2h0OiA1MHB4OyB0b3A6IDE1MHB4IDsgbGVmdDogMHB4IDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6ICNhNjdlMmQgO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMTgzLCA0MywgMSk7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG4gICAgICAucHJvamVjdF92aWV3X2J0bjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7IGNvbG9yOiAjMmQyZDJkIDtcbiAgICAgIH1cblxuICAgICAgLnByb2plY3RfdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDUwcHg7IHRvcDogNTBweDsgbGVmdDogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7IGZvbnQtc2l6ZTogMjBweDsgY29sb3I6IHdoaXRlOyBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDsgIHRleHQtYWxpZ246IGNlbnRlcjtmb250LWZhbWlseTogJ0luZGllIEZsb3dlcicsIGN1cnNpdmU7XG4gICAgICAgIHRleHQtc2hhZG93Oi0ycHggLTFweCA1cHggYmxhY2s7XG4gICAgICB9XG5cbiAgICAgIC5wcm9qZWN0X3RlY2gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMHB4OyBsaW5lLWhlaWdodDogNTBweDsgYm90dG9tOiAyNXB4OyBsZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7IGxldHRlci1zcGFjaW5nOiAxNXB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOiAyNXB4O1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLm9uZV9jYXJkX2JhY2s6aG92ZXIge1xuICAgIC5wcm9qZWN0X2RldGFpbCB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG5cbn1cblxuLmNhcmRfcCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5mYWtlX2NhcmRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7IG92ZXJmbG93OiBoaWRkZW47XG4gIC5vbmVfY2FyZF9kaXZ7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IC00MDBweDsgbGVmdDogMjBweDtcbiAgfVxuICAuY2FyZF9mLmNhcmQ4IHtcbiAgICAub25lX2NhcmQge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi5pbWdfdmlld2VyIHtcbiAgcG9zaXRpb24gOiBhYnNvbHV0ZSA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRvcDogMDsgbGVmdDogMDsgbWluLWhlaWdodCA6IDQwMHB4IDsgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvciA6IHJnYmEoMCwgMCwgMCwgMC45Mik7XG4gIGRpc3BsYXkgOiBub25lIDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDU3NnB4KSB7XG4gICAgaGVpZ2h0IDogY2FsYygxMDAlIC0gNjBweCkgOyB0b3AgOiA2MHB4IDtcbiAgfVxuICAuaW1nX2RpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7ICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpOyB0b3A6IDQwcHg7IGxlZnQ6IDQwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAub25lX2ltYWdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgdG9wOiAwOyBsZWZ0OiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC5pbWFnZV9iZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpOyBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpOyB0b3A6IDIwcHg7IGxlZnQ6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgZmlsdGVyOiBvcGFjaXR5KDAuMDkpO1xuICAgICAgICBkaXNwbGF5IDogbm9uZSA7XG4gICAgICB9XG4gICAgICBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gICAgICAgIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1idWZmZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQwZDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogY2FsYyg1MCUgLSAyNXB4KTsgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogOTAlOyBoZWlnaHQ6IGF1dG87IHRvcDogNTAlOyBsZWZ0OiA1JTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4IGJsYWNrKSA7IHotaW5kZXg6IDI7IGRpc3BsYXkgOiBub25lIDtcbiAgICAgIH1cbiAgICAgIGltZy5oZWlnaHRlZF9waWMge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7IHdpZHRoOiBhdXRvOyBsZWZ0OiA1MCU7IHRvcDogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jbG9zZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MHB4OyBsaW5lLWhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgcGFkZGluZy1yaWdodDogMjBweCA7IGZvbnQtc2l6ZTogMjVweDtcbiAgICBpIHtcbiAgICAgIGNvbG9yOiAjNzc3NDc0OyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIGk6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZGI4MmM7XG4gICAgfVxuICB9XG5cbiAgLnNsaWRlX2xlZnQgLCAuc2xpZGVfcmlnaHQge1xuICAgIHBvc2l0aW9uIDogYWJzb2x1dGUgOyB3aWR0aDogNDBweCA7IGhlaWdodDogNDBweDsgdG9wOiA1MCU7ICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDQwcHggOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7ICBmb250LXNpemU6IDM1cHg7XG4gICAgaSB7XG4gICAgICBjb2xvcjogIzc3NzQ3NDsgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBpOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmRiODJjO1xuICAgIH1cbiAgfVxuICAuc2xpZGVfcmlnaHR7XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICAuY29udHJvbF9kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogNDBweCA7Ym90dG9tOiAwOyBsZWZ0OiAwOyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC5pbWFnZXMge1xuICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZSA7IHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTsgaGVpZ2h0OiAxMDAlOyBsZWZ0OiA0MHB4OyBwYWRkaW5nOiAwO1xuXG4gICAgICAub25lX2ltZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTsgd2lkdGg6IGNhbGMoMTAwJSAvIDUgKSA7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgcGFkZGluZzogMDsgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuaW1nX2JvcmQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDQwJSA7IGhlaWdodDogNnB4OyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gICAgICAgICAgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgYW5pbWF0aW9uOiAwLjhzIGVhc2UtaW47IHRyYW5zZm9ybSA6IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSA7XG4gICAgICAgICAgY3Vyc29yIDogcG9pbnRlciA7IG1heC13aWR0aCA6IDEwMHB4IDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm9uZV9pbWdfc2VsZWN0ZWQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7IHdpZHRoOiBjYWxjKDEwMCUgLyA1ICkgOyAgcGFkZGluZzogMDsgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwOyB0b3A6IDA7IHotaW5kZXg6IDI7XG4gICAgICAgIC5pbWdfYm9yZCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogNDAlIDsgaGVpZ2h0OiA2cHg7IGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICB0b3A6IDUwJTsgbGVmdDogNTAlOyBhbmltYXRpb246IDAuOHMgZWFzZS1pbjsgdHJhbnNmb3JtIDogdHJhbnNsYXRlKC01MCUsIC01MCUpIDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiODJjOyBtYXgtd2lkdGggOiAxMDBweCA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG5cblxufVxuXG4uYWxsX3RoaXNfY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kIDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjM2MzNjJiLCAjMzMzMjMyKTtcbiAgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBoZWlnaHQ6IDUwJTsgd2lkdGg6IDEwMCU7IGZvbnQtc2l6ZTogMTkycHg7IHRvcDogMjBweCA7IGxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogcmdiYSgxODEsIDE3NSwgMTc1LCAwLjE0KSA7XG4gIH1cbiAgLmNvbnRlbnRfdGhpc19jYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiBjYWxjKDUwJSAtIDQwcHgpIDsgYm90dG9tOiAwIDsgZm9udC1zaXplOiAxMXB4OyBsaW5lLWhlaWdodDogMzFweCA7IHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgxODEsIDE3NSwgMTc1LCAwLjYpIDsgZm9udC13ZWlnaHQgOiA1MDAgOyB3aWR0aDogMTAwJTsgbGVmdDogMDtcbiAgfVxufVxuXG4uYWxsX3RoaXNfY2FyZDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2E4YWJjNSwgI2QyYjZkMCk7XG4gIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiA1MCU7IHdpZHRoOiAxMDAlOyBmb250LXNpemU6IDE3MHB4OyB0b3A6IDIwcHggOyBsZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMSkgO1xuICB9XG4gIC5jb250ZW50X3RoaXNfY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogY2FsYyg1MCUgLSA0MHB4KSA7IGJvdHRvbTogMCA7IGZvbnQtc2l6ZTogMTFweDsgbGluZS1oZWlnaHQ6IDUxcHggOyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSA7IGZvbnQtd2VpZ2h0IDogNTAwIDsgIHdpZHRoOiAxMDAlOyBsZWZ0OiAwO1xuICB9XG59XG4iLCIucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5hbGxfd29ya19zcGFjZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ub25lX2NhcmRfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtaW4td2lkdGg6IDIyMHB4O1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG4ub25lX2NhcmRfZGl2IC5vbmVfY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0b3A6IDI1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ub25lX2NhcmRfZGl2IC5vbmVfY2FyZCAub25lX2NhcmRfZnJvbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrX2NhcmQucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIwYjBiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm9uZV9jYXJkX2RpdiAub25lX2NhcmQgLm9uZV9jYXJkX2Zyb250IC5iYWNrZ3JvdW5kZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCA1LCA1LCAwLjU1KTtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkIC5vbmVfY2FyZF9mcm9udCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDNweCBibGFjayk7XG59XG4ub25lX2NhcmRfZGl2IC5vbmVfY2FyZF9iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHRvcDogMjVweDtcbiAgbGVmdDogNTAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlWSgxODBkZWcpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4IGJsYWNrKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMjtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgbWF0LXByb2dyZXNzLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgbWF0LXByb2dyZXNzLWJhciAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQwZDAgIWltcG9ydGFudDtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLm9uZV9jYXJkX2JhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLnByb2plY3RfZGV0YWlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLnByb2plY3RfZGV0YWlsIC5wcm9qZWN0X3ZpZXdfYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2E2N2UyZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjcyYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLnByb2plY3RfZGV0YWlsIC5wcm9qZWN0X3ZpZXdfYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICMyZDJkMmQ7XG59XG4ub25lX2NhcmRfZGl2IC5vbmVfY2FyZF9iYWNrIC5wcm9qZWN0X2RldGFpbCAucHJvamVjdF90aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkluZGllIEZsb3dlclwiLCBjdXJzaXZlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAtMXB4IDVweCBibGFjaztcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLnByb2plY3RfZGV0YWlsIC5wcm9qZWN0X3RlY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYm90dG9tOiAyNXB4O1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLm9uZV9jYXJkX2RpdiAub25lX2NhcmRfYmFjazpob3ZlciAucHJvamVjdF9kZXRhaWwge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2FyZF9wIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZha2VfY2FyZHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mYWtlX2NhcmRzIC5vbmVfY2FyZF9kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTQwMHB4O1xuICBsZWZ0OiAyMHB4O1xufVxuLmZha2VfY2FyZHMgLmNhcmRfZi5jYXJkOCAub25lX2NhcmQge1xuICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCB3aGl0ZTtcbn1cblxuLmltZ192aWV3ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45Mik7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW1nX3ZpZXdlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICB0b3A6IDYwcHg7XG4gIH1cbn1cbi5pbWdfdmlld2VyIC5pbWdfZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWdfdmlld2VyIC5pbWdfZGl2IC5vbmVfaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWdfdmlld2VyIC5pbWdfZGl2IC5vbmVfaW1hZ2UgLmltYWdlX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBmaWx0ZXI6IG9wYWNpdHkoMC4wOSk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIG1hdC1wcm9ncmVzcy1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMjVweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIG1hdC1wcm9ncmVzcy1zcGlubmVyIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMGQwICFpbXBvcnRhbnQ7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCBibGFjayk7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIGltZy5oZWlnaHRlZF9waWMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmltZ192aWV3ZXIgLmNsb3NlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5pbWdfdmlld2VyIC5jbG9zZXIgaSB7XG4gIGNvbG9yOiAjNzc3NDc0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1nX3ZpZXdlciAuY2xvc2VyIGk6aG92ZXIge1xuICBjb2xvcjogI2ZkYjgyYztcbn1cbi5pbWdfdmlld2VyIC5zbGlkZV9sZWZ0LCAuaW1nX3ZpZXdlciAuc2xpZGVfcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRvcDogNTAlO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuLmltZ192aWV3ZXIgLnNsaWRlX2xlZnQgaSwgLmltZ192aWV3ZXIgLnNsaWRlX3JpZ2h0IGkge1xuICBjb2xvcjogIzc3NzQ3NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmltZ192aWV3ZXIgLnNsaWRlX2xlZnQgaTpob3ZlciwgLmltZ192aWV3ZXIgLnNsaWRlX3JpZ2h0IGk6aG92ZXIge1xuICBjb2xvcjogI2ZkYjgyYztcbn1cbi5pbWdfdmlld2VyIC5zbGlkZV9yaWdodCB7XG4gIHJpZ2h0OiAwO1xufVxuLmltZ192aWV3ZXIgLmNvbnRyb2xfZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nX3ZpZXdlciAuY29udHJvbF9kaXYgLmltYWdlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDQwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uaW1nX3ZpZXdlciAuY29udHJvbF9kaXYgLmltYWdlcyAub25lX2ltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDUgKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW1nX3ZpZXdlciAuY29udHJvbF9kaXYgLmltYWdlcyAub25lX2ltZyAuaW1nX2JvcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGFuaW1hdGlvbjogMC44cyBlYXNlLWluO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuLmltZ192aWV3ZXIgLmNvbnRyb2xfZGl2IC5pbWFnZXMgLm9uZV9pbWdfc2VsZWN0ZWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyA1ICk7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xufVxuLmltZ192aWV3ZXIgLmNvbnRyb2xfZGl2IC5pbWFnZXMgLm9uZV9pbWdfc2VsZWN0ZWQgLmltZ19ib3JkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBhbmltYXRpb246IDAuOHMgZWFzZS1pbjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGI4MmM7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5hbGxfdGhpc19jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzNjMzYyYiwgIzMzMzIzMik7XG59XG4uYWxsX3RoaXNfY2FyZCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTkycHg7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgxODEsIDE3NSwgMTc1LCAwLjE0KTtcbn1cbi5hbGxfdGhpc19jYXJkIC5jb250ZW50X3RoaXNfY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIDQwcHgpO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMTgxLCAxNzUsIDE3NSwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG59XG5cbi5hbGxfdGhpc19jYXJkMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNhOGFiYzUsICNkMmI2ZDApO1xufVxuLmFsbF90aGlzX2NhcmQyIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNzBweDtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzEpO1xufVxuLmFsbF90aGlzX2NhcmQyIC5jb250ZW50X3RoaXNfY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIDQwcHgpO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDUxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects.service */ "./src/app/projects.service.ts");




let WorkComponent = class WorkComponent {
    constructor(projects) {
        this.projects = projects;
        this.fournishop = {
            name: "Fournishop",
            imgs_path: 'assets/imgs/fournishop/',
            background: "background.png",
            imgs: [
                {
                    name: "0.png",
                    width: true
                },
                {
                    name: "1.png",
                    width: true
                },
                {
                    name: "2.png",
                    width: true
                },
                {
                    name: "3.png",
                    width: true
                },
                {
                    name: "4.png",
                    width: true
                },
                {
                    name: "5.png",
                    width: true
                }
            ]
        };
        this.esi = {
            name: "ESI",
            imgs_path: 'assets/imgs/esi/',
            background: "background.png",
            imgs: [
                {
                    name: "0.png",
                    width: true
                },
                {
                    name: "1.png",
                    width: true
                },
                {
                    name: "2.png",
                    width: true
                },
                {
                    name: "3.png",
                    width: true
                },
                {
                    name: "4.png",
                    width: true
                },
                {
                    name: "5.png",
                    width: true
                },
                {
                    name: "6.png",
                    width: true
                }
            ]
        };
        this.sits = {
            name: "SITS",
            imgs_path: 'assets/imgs/sits/',
            background: "background.png",
            imgs: [
                {
                    name: "0.png",
                    width: true
                },
                {
                    name: "1.png",
                    width: true
                },
                {
                    name: "2.png",
                    width: true
                },
                {
                    name: "3.png",
                    width: true
                },
                {
                    name: "4.png",
                    width: true
                },
                {
                    name: "5.png",
                    width: true
                },
                {
                    name: "6.png",
                    width: true
                }
            ]
        };
        this.dictili = {
            name: "Dictili",
            imgs_path: 'assets/imgs/dictili/',
            background: "background.png",
            imgs: [
                {
                    name: "0.png",
                    width: true
                },
                {
                    name: "1.png",
                    width: false
                },
                {
                    name: "1_1.png",
                    width: true
                },
                {
                    name: "2.png",
                    width: true
                },
                {
                    name: "3_1.png",
                    width: true
                },
                {
                    name: "3.png",
                    width: true
                },
                {
                    name: "4.png",
                    width: true
                },
                {
                    name: "5.png",
                    width: true
                },
                {
                    name: "6.png",
                    width: true
                },
                {
                    name: "7.png",
                    width: true
                },
                {
                    name: "8.png",
                    width: true
                },
            ]
        };
        this.portfolio = {
            name: "Portfolio",
            imgs_path: 'assets/imgs/portefolio/',
            background: "background.png",
            imgs: [
                {
                    name: "0.png",
                    width: true
                },
                {
                    name: "1.png",
                    width: true
                },
                {
                    name: "2.png",
                    width: true
                },
                {
                    name: "3.png",
                    width: true
                }
            ]
        };
        this.tchatchet = {
            name: "Tchatchet",
            imgs_path: 'assets/imgs/tchatchet/',
            background: "background.png",
            imgs: ["log.png", "1.png", "2.png", '3.png']
        };
        this.sfsd = {
            name: "SFSD Simulation",
            imgs_path: 'assets/imgs/sfsd/',
            background: "background.png",
            imgs: [
                {
                    name: "0.png",
                    width: false
                },
                {
                    name: "1.png",
                    width: true
                },
                {
                    name: "2.png",
                    width: true
                },
                {
                    name: "3.png",
                    width: true
                }
            ]
        };
        this.selected_work = this.portfolio;
        this.current_img = 0;
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
        jquery__WEBPACK_IMPORTED_MODULE_2__(".workSidenav").addClass('activeItem');
    }
    OnCloseSlider() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".img_viewer").fadeOut(500);
        this.current_img = 0;
        jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg , .one_image img").fadeOut(500);
    }
    OnViewWork(selected_work) {
        this.selected_work = selected_work;
        this.current_img = 0;
        jquery__WEBPACK_IMPORTED_MODULE_2__(".img_viewer").fadeIn(500);
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".one_image img").fadeIn(500);
            jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeIn(1000);
        }, 500);
        for (let i = 0; i < this.selected_work.imgs.length; i++) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + i).css('left', i * 100 + '%');
        }
        jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").css('left', '0');
    }
    OnClickBord(index) {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeOut(0);
        jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").animate({ 'left': jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").width() * (index) + 'px' }, 500, function () { });
        let time_round = 200 * Math.abs(index - this.current_img);
        if (index < this.current_img) {
            for (let i = this.current_img; i >= index; i--) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + i).animate({ 'left': (i - index) * 100 + '%' }, 200, function () { });
            }
        }
        else {
            for (let i = this.current_img; i <= index; i++) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + i).animate({ 'left': (i - index) * 100 + '%' }, 200, function () { });
            }
        }
        setTimeout(() => {
            this.current_img = index;
            for (let j = 0; j < this.selected_work.imgs.length; j++) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + j).css('left', (j - this.current_img) * 100 + '%');
            }
            jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeIn(500);
        }, time_round);
    }
    OnSlideRight() {
        if (this.current_img + 1 < this.selected_work.imgs.length) {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeOut(500);
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").animate({ 'left': jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").width() * (this.current_img + 1) + 'px' }, 300, function () { });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + this.current_img).animate({ 'left': '-100%' }, 600, function () { });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + (this.current_img + 1)).animate({ 'left': '0%' }, 600, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeIn(500);
                });
                for (let i = 0; i < this.selected_work.imgs.length; i++) {
                    if (i == this.current_img || i == (this.current_img + 1)) {
                        continue;
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + i).css('left', (i - this.current_img - 1) * 100 + '%');
                }
                this.current_img++;
            }, 500);
        }
    }
    OnSlideLeft() {
        if (this.current_img > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeOut(500);
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").animate({ 'left': jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").width() * (this.current_img - 1) + 'px' }, 300, function () { });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + this.current_img).animate({ 'left': '100%' }, 600, function () { });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + (this.current_img - 1)).animate({ 'left': '0%' }, 600, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeIn(500);
                });
                for (let i = 0; i < this.selected_work.imgs.length; i++) {
                    if (i == this.current_img || i == (this.current_img - 1)) {
                        continue;
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + i).css('left', (i - this.current_img + 1) * 100 + '%');
                }
                this.current_img--;
            }, 500);
        }
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected") != undefined) {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").css({ 'left': jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").width() * (this.current_img) + 'px' });
            }
        });
        setTimeout(() => {
            let timer = 300;
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() < 768) {
                timer = 0;
            }
            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card1").animate({
                'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card1").offset()).top + 'px',
                'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card1").offset()).left + 'px'
            }, timer, function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                    if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card1").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card1").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card1").offset()).left + 'px' });
                    }
                });
                jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card2").animate({
                    'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card2").offset()).top + 'px',
                    'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card2").offset()).left + 'px'
                }, timer, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                        if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card2").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card2").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card2").offset()).left + 'px' });
                        }
                    });
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card3").animate({
                        'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card3").offset()).top + 'px',
                        'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card3").offset()).left + 'px'
                    }, timer, function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                            if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card3").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card3").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card3").offset()).left + 'px' });
                            }
                        });
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card4").animate({
                            'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card4").offset()).top + 'px',
                            'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card4").offset()).left + 'px'
                        }, timer, function () {
                            jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                                if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card4").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card4").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card4").offset()).left + 'px' });
                                }
                            });
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card5").animate({
                                'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card5").offset()).top + 'px',
                                'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card5").offset()).left + 'px'
                            }, timer, function () {
                                jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                                    if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                                        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card5").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card5").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card5").offset()).left + 'px' });
                                    }
                                });
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card6").animate({
                                    'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card6").offset()).top + 'px',
                                    'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card6").offset()).left + 'px'
                                }, timer, function () {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                                        if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                                            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card6").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card6").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card6").offset()).left + 'px' });
                                        }
                                    });
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card7").animate({
                                        'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card7").offset()).top + 'px',
                                        'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card7").offset()).left + 'px'
                                    }, timer, function () {
                                        jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                                            if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card7").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card7").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card7").offset()).left + 'px' });
                                            }
                                        });
                                        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card8 .one_card").css({ "box-shadow": "0 0 0px 0px white" });
                                        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card8").animate({
                                            'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card8").offset()).top + 'px',
                                            'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card8").offset()).left + 'px'
                                        }, timer, function () {
                                            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p").css("opacity", "1");
                                            jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards").remove();
                                            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_r").ready(() => {
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card_r").css('transform', 'rotateY(180deg)');
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card8 .one_card").mouseenter(() => {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card8").css('transform', 'rotateY(180deg)');
                                                });
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card8 .one_card_back").mouseleave(() => {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card8").css('transform', 'rotateY(0deg)');
                                                });
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card5 .one_card").mouseenter(() => {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card5").css('transform', 'rotateY(180deg)');
                                                });
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card5 .one_card_back").mouseleave(() => {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card5").css('transform', 'rotateY(0deg)');
                                                });
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".one_card_background").fadeIn(500);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }, 2000);
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).keyup((e) => {
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(".img_viewer").attr('class') != undefined && jquery__WEBPACK_IMPORTED_MODULE_2__(".img_viewer").css('display') != 'none') {
                if (e.keyCode === 27)
                    this.OnCloseSlider();
                if (e.keyCode === 37)
                    this.OnSlideLeft();
                if (e.keyCode === 39)
                    this.OnSlideRight();
            }
        });
    }
};
WorkComponent.ctorParameters = () => [
    { type: _projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }
];
WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work.component.scss */ "./src/app/work/work.component.scss")).default]
    })
], WorkComponent);



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

module.exports = __webpack_require__(/*! /home/shadow_acky/bureau/angular-projet/portefolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map