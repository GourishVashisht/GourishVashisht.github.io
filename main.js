(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _students_components_student_onboard_form_student_onboard_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./students/components/student-onboard-form/student-onboard-form.component */ "./src/app/students/components/student-onboard-form/student-onboard-form.component.ts");
/* harmony import */ var _students_components_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./students/components/student-list/student-list.component */ "./src/app/students/components/student-list/student-list.component.ts");
/* harmony import */ var _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/page-not-found/page-not-found.component */ "./src/app/shared/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth/auth.guard */ "./src/app/shared/auth/auth.guard.ts");








var routes = [
    {
        path: 'adminLogin',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'studentOnboardForm',
        canActivate: [_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _students_components_student_onboard_form_student_onboard_form_component__WEBPACK_IMPORTED_MODULE_4__["StudentOnboardFormComponent"],
        children: [
            {
                path: '',
                component: _students_components_student_onboard_form_student_onboard_form_component__WEBPACK_IMPORTED_MODULE_4__["StudentOnboardFormComponent"]
            },
            {
                path: 'edit',
                component: _students_components_student_onboard_form_student_onboard_form_component__WEBPACK_IMPORTED_MODULE_4__["StudentOnboardFormComponent"]
            },
            {
                path: 'view',
                component: _students_components_student_onboard_form_student_onboard_form_component__WEBPACK_IMPORTED_MODULE_4__["StudentOnboardFormComponent"]
            }
        ]
    },
    {
        path: 'studentList',
        canActivate: [_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _students_components_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentListComponent"]
    },
    {
        path: '',
        redirectTo: 'adminLogin',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.cl-header {\r\n  background: #2f4053;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.cl-header::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: block;\r\n  visibility: none;\r\n}\r\n\r\n.cl-container {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.cl-logo {\r\n  width: 100px;\r\n  height: 70px;\r\n  padding-left: 40px;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  float: left;\r\n}\r\n\r\n.cl-school-name {\r\n  padding-left: 10px;\r\n  padding-top: 20px;\r\n  font-size: 30px;\r\n  float: left;\r\n  color: white;\r\n}\r\n\r\n.header-content {\r\n  float: right;\r\n  margin-top: 17px;\r\n}\r\n\r\n.admin-name {\r\n  float: left;\r\n  color: aliceblue;\r\n  margin-right: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.logout-button {\r\n  margin-right: 30px;\r\n}\r\n\r\n.logout-icon {\r\n  margin-left: 6px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jbC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyZjQwNTM7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuLmNsLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdmlzaWJpbGl0eTogbm9uZTtcclxufVxyXG5cclxuLmNsLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jbC1sb2dvIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNsLXNjaG9vbC1uYW1lIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaGVhZGVyLWNvbnRlbnQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG59XHJcbi5hZG1pbi1uYW1lIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5sb2dvdXQtYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLmxvZ291dC1pY29uIHtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"cl-header\">\r\n    <img src=\"../../assets/images/school-logo.png\" alt=\"logo\" class=\"cl-logo\" />\r\n    <h3 class=\"cl-school-name\">\r\n        <b>{{appName}}</b>\r\n    </h3>\r\n    <div *ngIf=\"adminName\" class=\"header-content\">\r\n        <h6 class=\"admin-name\">\r\n            <i class=\"fas fa-user-alt\"></i>\r\n            <span style=\"margin-left:6px;\">Hi, {{adminName}}</span>\r\n        </h6>\r\n        <button type=\"button\" class=\"btn btn-success logout-button\" (click)=\"logout()\">\r\n            Logout<i class=\"fas fa-sign-out-alt logout-icon\"></i>\r\n        </button>\r\n    </div>\r\n</header>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/datasource.service */ "./src/app/shared/services/datasource.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(datasourceService, router) {
        this.datasourceService = datasourceService;
        this.router = router;
        this.appName = 'On Boarding App';
        this.adminName = '';
        this.isUserLoggedIn = false;
        console.log('s' + this.isUserLoggedIn);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datasourceService.getAdminUser().subscribe(function (value) {
            if (value) {
                _this.adminName = value.name;
            }
            else {
                _this.adminName = null;
            }
        });
        if (JSON.parse(localStorage.getItem('studentList'))) {
            console.log('context loaded again');
            this.datasourceService.setStudentList(JSON.parse(localStorage.getItem('studentList')));
        }
        if (JSON.parse(localStorage.getItem('adminUser'))) {
            console.log(this.adminName);
            this.adminName = JSON.parse(localStorage.getItem('adminUser')).name;
        }
        this.datasourceService.getIsUserLoggedIn().subscribe(function (value) {
            _this.isUserLoggedIn = value;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        localStorage.removeItem('adminUser');
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('adminUser');
        this.datasourceService.setAdminUser(null);
        this.router.navigate(['/adminLogin']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_2__["DatasourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _students_components_student_onboard_form_student_onboard_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./students/components/student-onboard-form/student-onboard-form.component */ "./src/app/students/components/student-onboard-form/student-onboard-form.component.ts");
/* harmony import */ var _students_components_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./students/components/student-list/student-list.component */ "./src/app/students/components/student-list/student-list.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _students_components_student_onboard_form_student_onboard_form_component__WEBPACK_IMPORTED_MODULE_13__["StudentOnboardFormComponent"],
                _students_components_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_14__["StudentListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"]
            ],
            providers: [
                _login_login_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-box {\r\n  width: 420px;\r\n  height: 470px;\r\n  margin-top: 40px;\r\n  background-color: rgb(146, 209, 219);\r\n  box-shadow: 4px 6px 8px #5a5454;\r\n  padding: 20px 20px;\r\n  margin-left: 34%;\r\n  border-radius: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.login-logo {\r\n  font-size: 60px;\r\n  color: #333333;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 120px;\r\n  height: 120px;\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  margin: 0 auto;\r\n}\r\n\r\nfieldset {\r\n  display: block;\r\n  -webkit-margin-start: 2px;\r\n  -webkit-margin-end: 2px;\r\n  -webkit-padding-before: 0.35em;\r\n  -webkit-padding-start: 0.75em;\r\n  -webkit-padding-end: 0.75em;\r\n  -webkit-padding-after: 0.625em;\r\n  min-width: -webkit-min-content;\r\n}\r\n\r\n.register-title {\r\n  font-size: 32px;\r\n  margin-top: 15px;\r\n  color: #535766;\r\n}\r\n\r\n.register-input-item {\r\n  position: relative;\r\n}\r\n\r\n.register-user-input {\r\n  display: block;\r\n  color: #282c3f;\r\n  font-size: 15px;\r\n  padding-right: 40px;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n}\r\n\r\n.register-user-input-password {\r\n  border-top: 1px solid #d5d6d9;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n}\r\n\r\n.icon-username {\r\n  float: left;\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\n.icon-password {\r\n  float: left;\r\n  margin-top: 30px;\r\n  margin-right: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\n.register-user-input-username {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n\r\n.register-input-container {\r\n  margin: 20px;\r\n  margin-bottom: 0px;\r\n  border: 1px solid #bfc0c6;\r\n  border-radius: 5px;\r\n  padding: 0;\r\n}\r\n\r\n.register-register-button-container {\r\n  padding: 10px 20px;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\n\r\n.register-register-button {\r\n  background-color: #816a6e;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  padding: 12px;\r\n  border: 0;\r\n  margin-left: 7px;\r\n  margin-right: 7px;\r\n  text-transform: uppercase;\r\n  border-radius: 4px;\r\n  font-family: Whitney;\r\n  cursor: pointer;\r\n  box-shadow: 2px 3px 4px #494747;\r\n}\r\n\r\n.register-register-reset-button {\r\n  background-color: #ff4a74;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFLZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItYm94IHtcclxuICB3aWR0aDogNDIwcHg7XHJcbiAgaGVpZ2h0OiA0NzBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDYsIDIwOSwgMjE5KTtcclxuICBib3gtc2hhZG93OiA0cHggNnB4IDhweCAjNWE1NDU0O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICBtYXJnaW4tbGVmdDogMzQlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tbG9nbyB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtd2Via2l0LW1hcmdpbi1zdGFydDogMnB4O1xyXG4gIC13ZWJraXQtbWFyZ2luLWVuZDogMnB4O1xyXG4gIC13ZWJraXQtcGFkZGluZy1iZWZvcmU6IDAuMzVlbTtcclxuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDAuNzVlbTtcclxuICAtd2Via2l0LXBhZGRpbmctZW5kOiAwLjc1ZW07XHJcbiAgLXdlYmtpdC1wYWRkaW5nLWFmdGVyOiAwLjYyNWVtO1xyXG4gIG1pbi13aWR0aDogLXdlYmtpdC1taW4tY29udGVudDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBjb2xvcjogIzUzNTc2NjtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWlucHV0LWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLXVzZXItaW5wdXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjMjgyYzNmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItdXNlci1pbnB1dC1wYXNzd29yZCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNWQ2ZDk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pY29uLXVzZXJuYW1lIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5pY29uLXBhc3N3b3JkIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci11c2VyLWlucHV0LXVzZXJuYW1lIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmZjMGM2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItcmVnaXN0ZXItYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1yZWdpc3Rlci1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTZhNmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LWZhbWlseTogV2hpdG5leTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMnB4IDNweCA0cHggIzQ5NDc0NztcclxufVxyXG5cclxuLnJlZ2lzdGVyLXJlZ2lzdGVyLXJlc2V0LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGE3NDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-box\">\n  <div class=\"container\">\n    <div>\n      <span class=\"login-logo\">\n        <i class=\"fas fa-user-tie\"></i>\n      </span>\n      <p class=\"register-title\">Admin User Login</p>\n    </div>\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"submitLoginForm(loginForm)\" class=\"register-register-form\">\n      <span class=\"icon-username\">\n        <i class=\"fas fa-user-alt\"></i>\n      </span>\n      <fieldset class=\"register-input-container\">\n        <div class=\"form-group\" class=\"register-input-item\">\n          <span class=\"ui-float-label\">\n            <input id=\"float-username\" type=\"text\" [(ngModel)]=\"adminUser.username\" name=\"username\" #username=\"ngModel\"\n              class=\"register-user-input-username register-user-input\" required pInputText>\n            <label for=\"float-username\">Username</label>\n          </span>\n        </div>\n      </fieldset>\n      <div style=\"height: 20px;\">\n        <app-error-message *ngIf=\"username.touched && !username.valid\" [checkedFieldName]=\"'Username'\"\n          [isRequiredField]=\"true\">\n        </app-error-message>\n      </div>\n      <span class=\"icon-password\">\n        <i class=\"fas fa-unlock-alt\"></i>\n      </span>\n      <fieldset class=\"register-input-container register-password\">\n        <div class=\"form-group\" class=\"register-input-item\">\n          <span class=\"ui-float-label\">\n            <input id=\"float-password\" type=\"password\" [(ngModel)]=\"adminUser.password\" name=\"password\"\n              #password=\"ngModel\" class=\"register-user-input-password register-user-input\" required pInputText>\n            <label for=\"float-password\">Password</label>\n          </span>\n        </div>\n      </fieldset>\n      <div style=\"height: 20px;\">\n        <app-error-message *ngIf=\"password.touched && !password.valid\" [checkedFieldName]=\"'Password'\"\n          [isRequiredField]=\"true\">\n        </app-error-message>\n      </div>\n      <div class=\"register-register-button-container\">\n        <button type=\"submit\" class=\"register-register-button\">\n          Submit\n        </button>\n        <button type=\"reset\" class=\"register-register-button register-register-reset-button\"\n          (click)=\"resetLoginForm(loginForm)\">\n          Reset\n        </button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _shared_models_AdminUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/AdminUser */ "./src/app/shared/models/AdminUser.ts");
/* harmony import */ var _shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/datasource.service */ "./src/app/shared/services/datasource.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService, datasource) {
        this.router = router;
        this.loginService = loginService;
        this.datasource = datasource;
        this.adminUser = new _shared_models_AdminUser__WEBPACK_IMPORTED_MODULE_5__["AdminUser"]();
    }
    LoginComponent.prototype.submitLoginForm = function (loginForm) {
        var _this = this;
        this.loginService.getUsersList().subscribe(function (adminUserList) {
            _this.adminUserList = adminUserList;
        }, function (error) { return console.error(error); }, function () {
            if (_this.isAdminUserPrsesent(loginForm.value.username, loginForm.value.password)) {
                _this.loginSuccessAlert();
            }
            else {
                _this.loginErrorAlert();
            }
        });
    };
    LoginComponent.prototype.isAdminUserPrsesent = function (username, password) {
        for (var _i = 0, _a = this.adminUserList; _i < _a.length; _i++) {
            var adminUser = _a[_i];
            if (adminUser.username === username) {
                if (adminUser.password === password) {
                    this.adminUser = adminUser;
                    return true;
                }
            }
        }
        return false;
    };
    LoginComponent.prototype.resetLoginForm = function (loginForm) {
        loginForm.reset();
    };
    LoginComponent.prototype.loginSuccessAlert = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            type: 'success',
            title: this.adminUser.name + " logged in successfully.",
            showConfirmButton: false,
            timer: 1500
        }).then(function () {
            _this.datasource.setAdminUser(_this.adminUser);
            localStorage.setItem('adminUser', JSON.stringify(_this.adminUser));
            _this.router.navigateByUrl('studentOnboardForm');
        });
    };
    LoginComponent.prototype.loginErrorAlert = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            type: 'error',
            title: "Please enter valid username or password.",
            showConfirmButton: true
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_6__["DatasourceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.getUsersList = function () {
        return this.http.get('../../assets/config-files/AdminUserList.json');
    };
    LoginService.prototype.isUserLoggedIn = function () {
        if (localStorage.getItem('adminUser')) {
            return true;
        }
        else
            return false;
    };
    LoginService.prototype.logoutUser = function () {
        localStorage.removeItem('adminUser');
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/auth/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/login/login.service */ "./src/app/login/login.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.loginService.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['/adminLogin']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/components/error-message/error-message.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/error-message/error-message.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\r\n  font-size: 14px;\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/error-message/error-message.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/error-message/error-message.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-message\">\n  <span *ngIf=\"isRequiredField\">{{checkedFieldName}} is required.</span>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/error-message/error-message.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/error-message/error-message.component.ts ***!
  \****************************************************************************/
/*! exports provided: ErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function() { return ErrorMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent() {
        this.isRequiredField = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorMessageComponent.prototype, "checkedFieldName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ErrorMessageComponent.prototype, "isRequiredField", void 0);
    ErrorMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-message',
            template: __webpack_require__(/*! ./error-message.component.html */ "./src/app/shared/components/error-message/error-message.component.html"),
            styles: [__webpack_require__(/*! ./error-message.component.css */ "./src/app/shared/components/error-message/error-message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/filter/filter.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-box {\r\n  margin-top: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.filter-box-input {\r\n  border: 1px solid red;\r\n  border-radius: 10px;\r\n  padding: 7px;\r\n  font-size: 16px;\r\n  margin-left: 10px;\r\n  margin-bottom: 10px;\r\n  margin-top: 6px;\r\n  text-align: center;\r\n  width: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1ib3gge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItYm94LWlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/filter/filter.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select class=\"filter-box-input\" [(ngModel)]=\"filterText\" (change)=\"filterStudentList()\">\n  <option value=\"All\">All</option>\n  <option value=\"Domestic\">Domestic</option>\n  <option value=\"International\">International</option>\n</select>"

/***/ }),

/***/ "./src/app/shared/components/filter/filter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.ts ***!
  \**************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Constants */ "./src/app/shared/constants/Constants.ts");



var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.filteredStudentList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterText = 'All';
    }
    FilterComponent.prototype.filterStudentList = function () {
        var filteredList = new Array();
        if (this.filterText === _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ALL) {
            this.filteredStudentList.emit(this.studentList);
        }
        else {
            for (var _i = 0, _a = this.studentList; _i < _a.length; _i++) {
                var student = _a[_i];
                if (student.category === this.filterText) {
                    filteredList.push(student);
                }
            }
            this.filteredStudentList.emit(filteredList);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FilterComponent.prototype, "studentList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FilterComponent.prototype, "filteredStudentList", void 0);
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/shared/components/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/shared/components/filter/filter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-tabMenu [model]=\"menuItems\" [activeItem]=\"menuItems[menuItemSelected]\"></p-tabMenu>"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_datasource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/datasource.service */ "./src/app/shared/services/datasource.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(datasource) {
        this.datasource = datasource;
        this.menuItems = [
            { label: 'OnBoarding Form', routerLink: ['/studentOnboardForm'] },
            { label: 'List Students', routerLink: ['/studentList'] }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datasource.getAdminUser().subscribe(function (value) {
            if (value) {
                _this.adminName = value.name;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HeaderComponent.prototype, "menuItemSelected", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_datasource_service__WEBPACK_IMPORTED_MODULE_2__["DatasourceService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/page-not-found/page-not-found.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/page-not-found/page-not-found.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#notfound {\r\n  position: relative;\r\n  height: 100vh;\r\n}\r\n\r\n#notfound .notfound {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.notfound {\r\n  max-width: 410px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.notfound .notfound-404 {\r\n  height: 280px;\r\n  position: relative;\r\n  z-index: -1;\r\n}\r\n\r\n.notfound .notfound-404 h1 {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 230px;\r\n  margin: 0px;\r\n  font-weight: 900;\r\n  position: absolute;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n  background: url('page-not-found-background.jpg') no-repeat;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.notfound h2 {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  color: #000;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  margin-top: 0;\r\n}\r\n\r\n.notfound p {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  color: #000;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.notfound a {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  background: #0046d5;\r\n  display: inline-block;\r\n  padding: 15px 30px;\r\n  border-radius: 40px;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  box-shadow: 0px 4px 15px -5px #0046d5;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .notfound .notfound-404 {\r\n    height: 142px;\r\n  }\r\n  .notfound .notfound-404 h1 {\r\n    font-size: 112px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isd0NBQXdDO0VBRXhDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQ0FBbUM7RUFFbkMsMkJBQTJCO0VBQzNCLDBEQUFvRjtFQUNwRiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUVoQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jbm90Zm91bmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4jbm90Zm91bmQgLm5vdGZvdW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubm90Zm91bmQge1xyXG4gIG1heC13aWR0aDogNDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMzBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYWdlLW5vdC1mb3VuZC1iYWNrZ3JvdW5kLmpwZ1wiKSBuby1yZXBlYXQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm90Zm91bmQgaDIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCBwIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCBhIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDQ2ZDU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDE1cHggLTVweCAjMDA0NmQ1O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTVweCAtNXB4ICMwMDQ2ZDU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgICBoZWlnaHQ6IDE0MnB4O1xyXG4gIH1cclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XHJcbiAgICBmb250LXNpemU6IDExMnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/page-not-found/page-not-found.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/page-not-found/page-not-found.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n  <div class=\"notfound\">\n    <div class=\"notfound-404\">\n      <h1>Oops!</h1>\n    </div>\n    <h2>404 - Page not found</h2>\n    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>\n    <a [routerLink]=\"'/adminLogin'\">Go To Homepage</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/page-not-found/page-not-found.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/shared/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/shared/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/Constants.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/constants/Constants.ts ***!
  \***********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = {
    ALL: 'All',
    DOMESTIC: 'Domestic',
    INTERNATIONAL: 'International'
};


/***/ }),

/***/ "./src/app/shared/models/AdminUser.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/AdminUser.ts ***!
  \********************************************/
/*! exports provided: AdminUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUser", function() { return AdminUser; });
var AdminUser = /** @class */ (function () {
    function AdminUser() {
    }
    return AdminUser;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search-student.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/search-student.pipe.ts ***!
  \*****************************************************/
/*! exports provided: SearchStudentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStudentPipe", function() { return SearchStudentPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchStudentPipe = /** @class */ (function () {
    function SearchStudentPipe() {
    }
    SearchStudentPipe.prototype.transform = function (studentList, studentName) {
        if (studentName) {
            var filteredList = new Array();
            for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
                var student = studentList_1[_i];
                if (student.name.toLowerCase().includes(studentName.toLowerCase())) {
                    filteredList.push(student);
                }
            }
            return filteredList;
        }
        return studentList;
    };
    SearchStudentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchStudent'
        })
    ], SearchStudentPipe);
    return SearchStudentPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/datasource.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/datasource.service.ts ***!
  \*******************************************************/
/*! exports provided: DatasourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasourceService", function() { return DatasourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_AdminUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/AdminUser */ "./src/app/shared/models/AdminUser.ts");




var DatasourceService = /** @class */ (function () {
    function DatasourceService() {
        this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.adminUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _models_AdminUser__WEBPACK_IMPORTED_MODULE_3__["AdminUser"]());
        this.savedStudent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.studentList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
    }
    DatasourceService.prototype.getIsUserLoggedIn = function () {
        return this.isUserLoggedIn.asObservable();
    };
    DatasourceService.prototype.setIsUserLoggedIn = function (userLoggedInStatus) {
        this.isUserLoggedIn.next(userLoggedInStatus);
    };
    DatasourceService.prototype.getAdminUser = function () {
        return this.adminUser.asObservable();
    };
    DatasourceService.prototype.setAdminUser = function (adminUser) {
        this.adminUser.next(adminUser);
    };
    DatasourceService.prototype.getStudent = function () {
        return this.savedStudent.asObservable();
    };
    DatasourceService.prototype.setStudent = function (student) {
        localStorage.setItem('savedStudent', JSON.stringify(student));
        this.savedStudent.next(student);
    };
    DatasourceService.prototype.getStudentList = function () {
        return this.studentList.asObservable();
    };
    DatasourceService.prototype.setStudentList = function (studentList) {
        localStorage.setItem('studentList', JSON.stringify(studentList));
        this.studentList.next(studentList);
    };
    DatasourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatasourceService);
    return DatasourceService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/shared/components/filter/filter.component.ts");
/* harmony import */ var _services_datasource_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/datasource.service */ "./src/app/shared/services/datasource.service.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/shared/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pipes_search_student_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/search-student.pipe */ "./src/app/shared/pipes/search-student.pipe.ts");
/* harmony import */ var _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/error-message/error-message.component */ "./src/app/shared/components/error-message/error-message.component.ts");












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"], _pipes_search_student_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchStudentPipe"], _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_11__["ErrorMessageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                primeng_tabmenu__WEBPACK_IMPORTED_MODULE_4__["TabMenuModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"], _pipes_search_student_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchStudentPipe"], _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_11__["ErrorMessageComponent"]
            ],
            providers: [
                _services_datasource_service__WEBPACK_IMPORTED_MODULE_8__["DatasourceService"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/students/components/student-list/student-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/students/components/student-list/student-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".domestic {\r\n  background-color: rgb(255, 236, 212);\r\n}\r\n\r\n.international {\r\n  background-color: rgb(0, 255, 255);\r\n}\r\n\r\n.filter-box {\r\n  margin-top: 10px;\r\n  float: right;\r\n}\r\n\r\n.filter-box-input {\r\n  border: 1px solid red;\r\n  float: right;\r\n  border-radius: 50px;\r\n  padding: 7px;\r\n  font-size: 16px;\r\n  margin-left: 10px;\r\n  margin-top: 6px;\r\n  text-align: center;\r\n  color: rgb(5, 5, 63);\r\n}\r\n\r\n.search-icon {\r\n  font-size: 20px;\r\n  float: right;\r\n  margin-right: -192px;\r\n  margin-top: 17px;\r\n  position: relative;\r\n}\r\n\r\n.list-container {\r\n  margin-top: 1%;\r\n  margin-left: 9%;\r\n}\r\n\r\n.card {\r\n  box-shadow: 3px 3px 6px rgb(99, 95, 95);\r\n  margin: 10px 10px 10px 10px;\r\n}\r\n\r\n.client {\r\n  height: auto;\r\n  background-color: #fff;\r\n  float: left;\r\n  letter-spacing: 0.5px;\r\n  transition: all 0.1s;\r\n  border-right: 2px solid #f0f0f0;\r\n  border-bottom: 2px solid #f0f0f0;\r\n  cursor: pointer;\r\n}\r\n\r\n.client::after {\r\n  pointer-events: none;\r\n}\r\n\r\n.client:hover {\r\n  -webkit-transform: scale(0.7, 0.7);\r\n  transform: scale(1.1, 1.1);\r\n  box-shadow: 4px 6px 18px 0px rgba(193, 79, 82, 1);\r\n  border-right: 2px solid transparent;\r\n  border-left: 2px solid transparent;\r\n  border-top: 2px solid transparent;\r\n  background-color: #fff;\r\n}\r\n\r\n.card-column {\r\n  padding: 0;\r\n}\r\n\r\n.card-head {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-clip: border-box;\r\n  border: 2px solid #343a40 !important;\r\n  border-radius: 0.5rem;\r\n  margin-top: 20px;\r\n  margin-right: 100px;\r\n  margin-left: 100px;\r\n  margin-bottom: 20px;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.card-header {\r\n  background-color: rgb(104, 219, 210);\r\n}\r\n\r\n.card-headers {\r\n  font-size: 16px;\r\n}\r\n\r\nlabel {\r\n  font-size: 13px;\r\n}\r\n\r\n.button {\r\n  margin-right: 0.4em;\r\n}\r\n\r\n.btn-start {\r\n  margin-left: 20px;\r\n}\r\n\r\n.filter-section {\r\n  margin-top: 10px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\n::ng-deep.ui-menuitem-text {\r\n  font-size: 17px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvY29tcG9uZW50cy9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gscUJBQXFCO0VBR3JCLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFFRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBRzFCLGlEQUFpRDtFQUNqRCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGlDQUFpQztFQUNqQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL2NvbXBvbmVudHMvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvbWVzdGljIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzYsIDIxMik7XHJcbn1cclxuXHJcbi5pbnRlcm5hdGlvbmFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uZmlsdGVyLWJveCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5maWx0ZXItYm94LWlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoNSwgNSwgNjMpO1xyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTkycHg7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5saXN0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDklO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCA2cHggcmdiKDk5LCA5NSwgOTUpO1xyXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLmNsaWVudCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZjBmMGYwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjBmMGYwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNsaWVudDo6YWZ0ZXIge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uY2xpZW50OmhvdmVyIHtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDRweCA2cHggMThweCAwcHggcmdiYSgxOTMsIDc5LCA4MiwgMSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiA0cHggNnB4IDE4cHggMHB4IHJnYmEoMTkzLCA3OSwgODIsIDEpO1xyXG4gIGJveC1zaGFkb3c6IDRweCA2cHggMThweCAwcHggcmdiYSgxOTMsIDc5LCA4MiwgMSk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNhcmQtY29sdW1uIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNDNhNDAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA0LCAyMTksIDIxMCk7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlcnMge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNGVtO1xyXG59XHJcblxyXG4uYnRuLXN0YXJ0IHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmZpbHRlci1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLnVpLW1lbnVpdGVtLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/students/components/student-list/student-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/students/components/student-list/student-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-head\">\n  <app-header [menuItemSelected]=\"1\"></app-header>\n  <div class=\"filter-section\">\n    <app-filter [studentList]=\"studentList\" (filteredStudentList)=\"this.filteredList = $event\">\n    </app-filter>\n    <input type=\"text\" class=\"filter-box-input\" placeholder=\"Search Student\" [(ngModel)]=\"studentName\">\n    <span class=\"fas fa-search search-icon\"></span>\n  </div>\n  <div class=\"list-container\">\n    <div class=\"row\">\n      <div class=\"card client\" *ngFor=\"let student of filteredList | searchStudent : studentName\">\n        <div class=\"col card-column\">\n          <div class=\"card-header\">\n            <span><b>{{student.name | uppercase}}</b></span>\n          </div>\n          <div class=\"card-body\">\n            <blockquote\n              [ngClass]=\"{'domestic':student.category == 'Domestic', 'international':student.category == 'International'}\">\n              <span class=\"card-headers\">Category :</span> <label>{{student.category}}</label><br>\n              <span class=\"card-headers\">Father Name :</span> <label>{{student.fatherName}}</label><br>\n              <span class=\"card-headers\">Mother Name :</span> <label>{{student.motherName}}</label><br>\n              <span class=\"card-headers\">Date Of Birth :</span> <label>{{student.dateOfBirth}}</label><br>\n            </blockquote>\n            <div class=\"card-button\">\n              <button type=\"button\" class=\"btn btn-secondary button btn-start\" [routerLink]=\"'/studentOnboardForm/edit'\"\n                (click)=\"saveStudent(student)\"><i class=\"fas fa-edit\"></i></button>\n              <button type=\"button\" class=\"btn btn-secondary button\" [routerLink]=\"'/studentOnboardForm/view'\"\n                (click)=\"saveStudent(student)\"><i class=\"fas fa-eye\"></i></button>\n              <button type=\"button\" class=\"btn btn-secondary button\" (click)=\"deleteStudentRecord(student)\"><i\n                  class=\"fas fa-trash-alt\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/students/components/student-list/student-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/students/components/student-list/student-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/datasource.service */ "./src/app/shared/services/datasource.service.ts");




var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(datasource) {
        this.datasource = datasource;
    }
    StudentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datasource.getStudentList().subscribe(function (value) {
            if (value) {
                _this.studentList = value;
                _this.filteredList = value;
            }
        });
    };
    StudentListComponent.prototype.filteredResult = function (event) {
        this.filteredResult = event.value;
    };
    StudentListComponent.prototype.deleteStudentRecord = function (student) {
        var _this = this;
        var index = this.studentList.indexOf(student);
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure you want to delete?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            _this.deleteStudentFromStudentList(index, result);
        });
    };
    StudentListComponent.prototype.deleteStudentFromStudentList = function (index, result) {
        if (result.value) {
            this.studentList.splice(index, 1);
            this.datasource.setStudentList(this.studentList);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Student record has been deleted.', 'success');
        }
    };
    StudentListComponent.prototype.saveStudent = function (student) {
        this.datasource.setStudent(student);
    };
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/students/components/student-list/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student-list.component.css */ "./src/app/students/components/student-list/student-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_3__["DatasourceService"]])
    ], StudentListComponent);
    return StudentListComponent;
}());



/***/ }),

/***/ "./src/app/students/components/student-onboard-form/student-onboard-form.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/students/components/student-onboard-form/student-onboard-form.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".disabled {\r\n  cursor: not-allowed;\r\n  background: rgb(201, 255, 237);\r\n  color: rgb(124, 70, 32);\r\n}\r\n\r\nlabel {\r\n  font-size: 18px;\r\n  text-shadow: 0.3px 0.7px red;\r\n}\r\n\r\n.document-row {\r\n  height: 20px;\r\n}\r\n\r\n.card-head {\r\n  background: transparent;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-clip: border-box;\r\n  border: 2px solid #343a40 !important;\r\n  margin-top: 20px;\r\n  margin-right: 100px;\r\n  margin-left: 100px;\r\n  margin-bottom: 20px;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.form-group-div {\r\n  margin-bottom: 0.3rem;\r\n}\r\n\r\n.onboard-button {\r\n  margin-left: 470px;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  border-radius: 4px;\r\n  font-family: sans-serif, open-sans;\r\n  box-shadow: 3px 4px 7px #000000;\r\n  padding: 16px;\r\n  width: 138px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n}\r\n\r\n.disable-button {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.onboard-button span {\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.info-head {\r\n  font-size: 14px;\r\n  text-decoration: underline;\r\n}\r\n\r\n.info-message {\r\n  color: red;\r\n  font-size: 12px;\r\n}\r\n\r\n.onboard-button span:after {\r\n  content: \"\\00bb\";\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.onboard-button:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n.onboard-button:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvY29tcG9uZW50cy9zdHVkZW50LW9uYm9hcmQtZm9ybS9zdHVkZW50LW9uYm9hcmQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50cy9jb21wb25lbnRzL3N0dWRlbnQtb25ib2FyZC1mb3JtL3N0dWRlbnQtb25ib2FyZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIwMSwgMjU1LCAyMzcpO1xyXG4gIGNvbG9yOiByZ2IoMTI0LCA3MCwgMzIpO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtc2hhZG93OiAwLjNweCAwLjdweCByZWQ7XHJcbn1cclxuXHJcbi5kb2N1bWVudC1yb3cge1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMzQzYTQwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAtZGl2IHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XHJcbn1cclxuXHJcbi5vbmJvYXJkLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ3MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBvcGVuLXNhbnM7XHJcbiAgYm94LXNoYWRvdzogM3B4IDRweCA3cHggIzAwMDAwMDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHdpZHRoOiAxMzhweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kaXNhYmxlLWJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLm9uYm9hcmQtYnV0dG9uIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmluZm8taGVhZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uaW5mby1tZXNzYWdlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm9uYm9hcmQtYnV0dG9uIHNwYW46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwwMGJiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4ub25ib2FyZC1idXR0b246aG92ZXIgc3BhbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLm9uYm9hcmQtYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/students/components/student-onboard-form/student-onboard-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/students/components/student-onboard-form/student-onboard-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: transparent\">\n  <div class=\"card-head\">\n    <app-header [menuItemSelected]=\"0\"></app-header>\n    <div class=\"container\" [class.disabled]=\"isDisabled\">\n      <span class=\"info-message\"><label class=\"info-head\">Note</label> :- Fields marked with * are mandatory</span>\n      <form [formGroup]=\"studentOnboardForm\">\n        <div class=\"form-row\">\n          <div class=\"form-group form-group-div col-md-6\">\n            <label for=\"name\">Name*</label>\n            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" placeholder=\"Name\"\n              [readOnly]=\"isDisabled\" [class.disabled]=\"isDisabled\">\n          </div>\n          <div class=\"form-group form-group-div col-md-6\">\n            <label for=\"category\">Category*</label>\n            <select id=\"category\" class=\"form-control\" formControlName=\"category\" (change)=\"getDocumentsForCategory()\"\n              [class.disabled]=\"isDisabled\">\n              <option *ngFor=\"let category of categories\" [value]=\"category\">\n                {{category}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group form-group-div col-md-6\">\n            <div style=\"height: 20px;\">\n              <app-error-message *ngIf=\"name.touched && !name.valid\" [checkedFieldName]=\"'Name'\"\n                [isRequiredField]=\"true\">\n              </app-error-message>\n            </div>\n          </div>\n          <div class=\"form-group form-group-div col-md-6\">\n            <div style=\"height: 20px;\">\n              <app-error-message *ngIf=\"category.touched && !category.valid\" [checkedFieldName]=\"'Category'\"\n                [isRequiredField]=\"true\">\n              </app-error-message>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group form-group-div col-md-6\">\n            <label for=\"dateOfBirth\">Date Of Birth*</label>\n            <input type=\"date\" class=\"form-control\" id=\"dateOfBirth\" formControlName=\"dateOfBirth\"\n              [readOnly]=\"isDisabled\" [class.disabled]=\"isDisabled\">\n          </div>\n          <div class=\"form-group form-group-div col-md-6\">\n            <label for=\"fatherName\">Father's Name*</label>\n            <input type=\"text\" class=\"form-control\" id=\"fatherName\" formControlName=\"fatherName\" [readOnly]=\"isDisabled\"\n              [class.disabled]=\"isDisabled\" placeholder=\"Father's Name\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group form-group-div col-md-6\">\n            <div style=\"height: 20px;\">\n              <app-error-message *ngIf=\"dateOfBirth.touched && !dateOfBirth.valid\" [checkedFieldName]=\"'Date Of Birth'\"\n                [isRequiredField]=\"true\">\n              </app-error-message>\n            </div>\n          </div>\n          <div class=\"form-group form-group-div col-md-6\">\n            <div style=\"height: 20px;\">\n              <app-error-message *ngIf=\"fatherName.touched && !fatherName.valid\" [checkedFieldName]=\"'Father Name'\"\n                [isRequiredField]=\"true\">\n              </app-error-message>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group form-group-div col-md-6\">\n            <label for=\"motherName\">Mother's Name*</label>\n            <input type=\"text\" class=\"form-control\" id=\"motherName\" formControlName=\"motherName\" [readOnly]=\"isDisabled\"\n              [class.disabled]=\"isDisabled\" placeholder=\"Mother's Name\">\n          </div>\n          <div class=\"form-group form-group-div col-md-6\">\n            <label for=\"lastClassScore\">Last Class Score*</label>\n            <input type=\"number\" class=\"form-control\" id=\"lastClassScore\" formControlName=\"lastClassScore\"\n              [readOnly]=\"isDisabled\" [class.disabled]=\"isDisabled\" placeholder=\"Last Class Score\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group form-group-div col-md-6\">\n            <div style=\"height: 20px;\">\n              <app-error-message *ngIf=\"motherName.touched && !motherName.valid\" [checkedFieldName]=\"'Mother Name'\"\n                [isRequiredField]=\"true\">\n              </app-error-message>\n            </div>\n          </div>\n          <div class=\"form-group form-group-div col-md-6\">\n            <div style=\"height: 20px;\">\n              <app-error-message *ngIf=\"lastClassScore.touched && !lastClassScore.valid\"\n                [checkedFieldName]=\"'Last Class Score'\" [isRequiredField]=\"true\">\n              </app-error-message>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"documents\">Documents</label>\n          <div class=\"row document-row\">\n            <div *ngFor=\"let document of documents.controls;let i=index\" formArrayName=\"documents\">\n              <div class=\"col\">\n                <span *ngIf=\"i<4\">\n                  {{documentList[i]}} *\n                </span>\n                <span *ngIf=\"i>=4 && studentOnboardForm.value.category == 'Domestic'\">\n                  {{documentList[i]}}\n                </span>\n                <span *ngIf=\"i>=4 && studentOnboardForm.value.category == 'International'\">\n                  {{documentList[i]}} *\n                </span>\n                <input type=\"checkbox\" id=\"documents\" [formControlName]=\"i\" [class.disabled]=\"isDisabled\"\n                  [value]=\"document\" (click)=\"isDocumentArrayValid()\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <button class=\"btn btn-dark onboard-button\"\n        [ngClass]=\"{'disable-button':(!studentOnboardForm.valid && !isDocumentsValid) || isDisabled}\"\n        [disabled]=\"!studentOnboardForm.valid\" type=\"submit\" (click)=\"submitStudentForm()\">\n        <span>OnBoard </span>\n      </button>\n    </div>\n    <br>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/students/components/student-onboard-form/student-onboard-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/students/components/student-onboard-form/student-onboard-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StudentOnboardFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentOnboardFormComponent", function() { return StudentOnboardFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_document_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/document.service */ "./src/app/students/services/document.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/student.service */ "./src/app/students/services/student.service.ts");
/* harmony import */ var _shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/datasource.service */ "./src/app/shared/services/datasource.service.ts");
/* harmony import */ var _shared_constants_Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/constants/Constants */ "./src/app/shared/constants/Constants.ts");









var StudentOnboardFormComponent = /** @class */ (function () {
    function StudentOnboardFormComponent(formBuilder, documentService, datasource, studentService, router, route) {
        this.formBuilder = formBuilder;
        this.documentService = documentService;
        this.datasource = datasource;
        this.studentService = studentService;
        this.router = router;
        this.route = route;
        this.isDocumentsValid = false;
        this.isDisabled = false;
        this.studentOnboardForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            documents: this.formBuilder.array([]),
            dateOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            fatherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            motherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lastClassScore: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.categories = [_shared_constants_Constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].DOMESTIC, _shared_constants_Constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].INTERNATIONAL];
    }
    StudentOnboardFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentService.fetchAllDocuments().subscribe(function (value) {
            _this.documentList = value.documents;
        });
        this.savedStudent = JSON.parse(localStorage.getItem('savedStudent'));
        this.datasource.getStudent().subscribe(function (value) {
            _this.savedStudent = value;
        });
        if (this.savedStudent) {
            this.makeFormGroup(this.savedStudent);
        }
        if (this.route.snapshot['_routerState'].url.toString().includes('view')) {
            this.isDisabled = true;
        }
    };
    StudentOnboardFormComponent.prototype.ngOnDestroy = function () {
        this.savedStudent = null;
        this.datasource.setStudent(null);
    };
    Object.defineProperty(StudentOnboardFormComponent.prototype, "name", {
        get: function () {
            return this.studentOnboardForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentOnboardFormComponent.prototype, "category", {
        get: function () {
            return this.studentOnboardForm.get('category');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentOnboardFormComponent.prototype, "dateOfBirth", {
        get: function () {
            return this.studentOnboardForm.get('dateOfBirth');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentOnboardFormComponent.prototype, "fatherName", {
        get: function () {
            return this.studentOnboardForm.get('fatherName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentOnboardFormComponent.prototype, "motherName", {
        get: function () {
            return this.studentOnboardForm.get('motherName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentOnboardFormComponent.prototype, "lastClassScore", {
        get: function () {
            return this.studentOnboardForm.get('lastClassScore');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentOnboardFormComponent.prototype, "documents", {
        get: function () {
            return this.studentOnboardForm.get('documents');
        },
        enumerable: true,
        configurable: true
    });
    StudentOnboardFormComponent.prototype.addDocuments = function () {
        this.documents.push(this.formBuilder.control(''));
    };
    StudentOnboardFormComponent.prototype.makeFormGroup = function (student) {
        this.studentOnboardForm.patchValue({
            name: student.name,
            category: student.category,
            dateOfBirth: student.dateOfBirth,
            fatherName: student.fatherName,
            motherName: student.motherName,
            lastClassScore: student.lastClassScore
        });
        this.studentOnboardForm.setControl('documents', this.setDocumentArray(student.category, student.documents));
    };
    StudentOnboardFormComponent.prototype.setDocumentArray = function (category, documents) {
        var docs = this.documents;
        var endIndex;
        var startIndex = 0;
        if (category == _shared_constants_Constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].DOMESTIC) {
            endIndex = 3;
        }
        else
            endIndex = 5;
        for (var _i = 0, documents_1 = documents; _i < documents_1.length; _i++) {
            var doc = documents_1[_i];
            if (doc.length > 0) {
                if (startIndex <= endIndex) {
                    docs.push(this.formBuilder.control('true', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
                }
                else {
                    docs.push(this.formBuilder.control(''));
                }
            }
            else {
                docs.push(this.formBuilder.control(''));
            }
            startIndex++;
        }
        return docs;
    };
    StudentOnboardFormComponent.prototype.getDocumentsForCategory = function () {
        var _this = this;
        if (!this.isDisabled) {
            var docs_1 = this.documents;
            docs_1.controls = [];
            this.categorySelected = this.studentOnboardForm.value.category;
            this.documentService.fetchDocuments(this.categorySelected).subscribe(function (value) {
                _this.mandatoryDocumentsList = value.documents;
                for (var i = 0; i < _this.mandatoryDocumentsList.length; i++) {
                    docs_1.push(_this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
                }
                for (var i = 0; i < _this.documentList.length - _this.mandatoryDocumentsList.length; i++) {
                    docs_1.push(_this.formBuilder.control(''));
                }
            });
        }
    };
    StudentOnboardFormComponent.prototype.submitStudentForm = function () {
        if (!this.isDisabled) {
            if (this.savedStudent) {
                console.log('student saved : ' + JSON.stringify(this.savedStudent));
                this.studentService.editStudentForm(this.studentOnboardForm, this.savedStudent.id);
            }
            else {
                this.studentService.submitStudentForm(this.studentOnboardForm, this.createDocumentList(this.studentOnboardForm.value.documents));
            }
            this.formSubmitSuccessAlert();
        }
    };
    StudentOnboardFormComponent.prototype.formSubmitSuccessAlert = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            type: 'success',
            title: this.studentOnboardForm.value.name + " onboarded successfully.",
            showConfirmButton: false,
            timer: 1300
        }).then(function () {
            _this.router.navigate(['/studentList']);
        });
    };
    StudentOnboardFormComponent.prototype.createDocumentList = function (documents) {
        var documentList = new Array();
        for (var i = 0; i < documents.length; i++) {
            if (documents[i] == true) {
                documentList.push("true");
            }
            else {
                documentList.push("false");
            }
        }
        return documentList;
    };
    StudentOnboardFormComponent.prototype.isDocumentArrayValid = function () {
        this.isDocumentsValid = true;
        var endIndex;
        if (this.category.value === _shared_constants_Constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].DOMESTIC) {
            endIndex = 3;
        }
        else
            endIndex = 5;
        var docs = this.documents;
        for (var i = 0; i <= endIndex; i++) {
            if (!docs.controls[i].valid) {
                this.isDocumentsValid = false;
                return;
            }
        }
    };
    StudentOnboardFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-onboard-form',
            template: __webpack_require__(/*! ./student-onboard-form.component.html */ "./src/app/students/components/student-onboard-form/student-onboard-form.component.html"),
            styles: [__webpack_require__(/*! ./student-onboard-form.component.css */ "./src/app/students/components/student-onboard-form/student-onboard-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"], _shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_7__["DatasourceService"],
            _services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StudentOnboardFormComponent);
    return StudentOnboardFormComponent;
}());



/***/ }),

/***/ "./src/app/students/models/CommonModels.ts":
/*!*************************************************!*\
  !*** ./src/app/students/models/CommonModels.ts ***!
  \*************************************************/
/*! exports provided: Category, DomesticDocuments, InternationalDocuments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomesticDocuments", function() { return DomesticDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternationalDocuments", function() { return InternationalDocuments; });
var Category;
(function (Category) {
    Category["Domestic"] = "Domestic";
    Category["International"] = "International";
})(Category || (Category = {}));
var DomesticDocuments;
(function (DomesticDocuments) {
    DomesticDocuments["DomicileCertifcate"] = "Domicile Certificate";
    DomesticDocuments["BirthCertificate"] = "Birth Certificate";
    DomesticDocuments["PreviousMarksheets"] = "Previous Marksheets";
    DomesticDocuments["SignedDeclarations"] = "Signed Declarations";
})(DomesticDocuments || (DomesticDocuments = {}));
var InternationalDocuments;
(function (InternationalDocuments) {
    InternationalDocuments["DomicileCertifcate"] = "Domicile Certificate";
    InternationalDocuments["BirthCertificate"] = "Birth Certificate";
    InternationalDocuments["PreviousMarksheets"] = "Previous Marksheets";
    InternationalDocuments["SignedDeclarations"] = "Signed Declarations";
    InternationalDocuments["PoliceClearance"] = "Police Clearance";
    InternationalDocuments["Passport"] = "Passport";
})(InternationalDocuments || (InternationalDocuments = {}));


/***/ }),

/***/ "./src/app/students/models/Student.ts":
/*!********************************************!*\
  !*** ./src/app/students/models/Student.ts ***!
  \********************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.createStudent = function (studentOnboardingForm, documents) {
        this.name = studentOnboardingForm.value.name;
        this.category = studentOnboardingForm.value.category;
        this.documents = documents;
        this.dateOfBirth = studentOnboardingForm.value.dateOfBirth;
        this.fatherName = studentOnboardingForm.value.fatherName;
        this.motherName = studentOnboardingForm.value.motherName;
        this.lastClassScore = studentOnboardingForm.value.lastClassScore;
    };
    return Student;
}());



/***/ }),

/***/ "./src/app/students/services/document.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/students/services/document.service.ts ***!
  \*******************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_CommonModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/CommonModels */ "./src/app/students/models/CommonModels.ts");




var DocumentService = /** @class */ (function () {
    function DocumentService(http) {
        this.http = http;
    }
    DocumentService.prototype.fetchDocuments = function (typeOfDocuments) {
        if (typeOfDocuments === _models_CommonModels__WEBPACK_IMPORTED_MODULE_3__["Category"].Domestic) {
            this.documentType = "DomesticDocuments.json";
        }
        else if (typeOfDocuments === _models_CommonModels__WEBPACK_IMPORTED_MODULE_3__["Category"].International) {
            this.documentType = "InternationalDocuments.json";
        }
        return this.http.get('../../../assets/config-files/' + this.documentType);
    };
    DocumentService.prototype.fetchAllDocuments = function () {
        return this.http.get('../../../assets/config-files/' + 'InternationalDocuments.json');
    };
    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/students/services/student.service.ts":
/*!******************************************************!*\
  !*** ./src/app/students/services/student.service.ts ***!
  \******************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Student */ "./src/app/students/models/Student.ts");
/* harmony import */ var _shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/datasource.service */ "./src/app/shared/services/datasource.service.ts");




var StudentService = /** @class */ (function () {
    function StudentService(datasource) {
        this.datasource = datasource;
    }
    StudentService.prototype.submitStudentForm = function (studentOnboardForm, documentList) {
        var _this = this;
        this.datasource.getStudentList().subscribe(function (value) {
            _this.onboardedStudents = value || new Array();
        });
        var newStudent = new _models_Student__WEBPACK_IMPORTED_MODULE_2__["Student"]();
        newStudent.id = this.onboardedStudents.length + 1;
        newStudent.createStudent(studentOnboardForm, documentList);
        this.onboardedStudents.push(newStudent);
        console.log('onboardeed after push : ' + this.onboardedStudents);
        this.datasource.setStudentList(this.onboardedStudents);
    };
    StudentService.prototype.editStudentForm = function (studentForm, id) {
        var _this = this;
        this.datasource.getStudentList().subscribe(function (value) {
            _this.onboardedStudents = value;
        });
        var index = 0;
        for (var _i = 0, _a = this.onboardedStudents; _i < _a.length; _i++) {
            var student = _a[_i];
            if (student.id === id) {
                break;
            }
            index++;
        }
        console.log('id' + id + 'index' + index);
        this.updateStudentValues(studentForm.value, index);
    };
    StudentService.prototype.updateStudentValues = function (student, index) {
        this.onboardedStudents[index].name = student.name;
        this.onboardedStudents[index].category = student.category;
        console.log('->1' + JSON.stringify(student.documents));
        this.onboardedStudents[index].documents = student.documents;
        console.log('->2' + JSON.stringify(this.onboardedStudents[index].documents));
        this.onboardedStudents[index].dateOfBirth = student.dateOfBirth;
        this.onboardedStudents[index].fatherName = student.fatherName;
        this.onboardedStudents[index].motherName = student.motherName;
        this.onboardedStudents[index].lastClassScore = student.lastClassScore;
        this.datasource.setStudent(this.onboardedStudents[index]);
        this.datasource.setStudentList(this.onboardedStudents);
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_3__["DatasourceService"]])
    ], StudentService);
    return StudentService;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NAGP-2019\Workshop-2 Angular7\Angular Asignment\nagp-students-onboarding\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map