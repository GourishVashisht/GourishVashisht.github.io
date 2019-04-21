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

module.exports = ".wrapper {\r\n  height: 100%;\r\n}\r\n.cl-header {\r\n  background: #232f3e;\r\n  background-attachment: fixed;\r\n}\r\n.cl-header::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: block;\r\n  visibility: none;\r\n}\r\n.cl-container {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n.cl-logo {\r\n  width: 100px;\r\n  height: 70px;\r\n  padding-left: 40px;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  float: left;\r\n}\r\n.cl-school-name {\r\n  padding-left: 10px;\r\n  padding-top: 20px;\r\n  font-size: 30px;\r\n  float: left;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jbC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyMzJmM2U7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuLmNsLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdmlzaWJpbGl0eTogbm9uZTtcclxufVxyXG5cclxuLmNsLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jbC1sb2dvIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNsLXNjaG9vbC1uYW1lIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <header class=\"cl-header\">\r\n        <img src=\"../../assets/images/school-logo.png\" alt=\"logo\" class=\"cl-logo\" />\r\n        <h3 class=\"cl-school-name\">\r\n            <b>{{appName}}</b>\r\n        </h3>\r\n    </header>\r\n    <router-outlet></router-outlet>\r\n</div>"

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



var AppComponent = /** @class */ (function () {
    function AppComponent(datasourceService) {
        this.datasourceService = datasourceService;
        this.appName = 'On Boarding App';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('studentList'))) {
            this.datasourceService.setStudentList(JSON.parse(localStorage.getItem('studentList')));
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('CLEANUP CALLED');
        localStorage.removeItem('adminUser');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_2__["DatasourceService"]])
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

module.exports = ".register-box {\r\n  width: 420px;\r\n  height: 360px;\r\n  margin-top: 100px;\r\n  background-color: rgb(243, 231, 231);\r\n  box-shadow: 4px 6px 8px #5a5454;\r\n  padding: 20px 20px;\r\n  margin-left: 34%;\r\n  border-radius: 18px;\r\n  text-align: center;\r\n}\r\n\r\nfieldset {\r\n  display: block;\r\n  -webkit-margin-start: 2px;\r\n  -webkit-margin-end: 2px;\r\n  -webkit-padding-before: 0.35em;\r\n  -webkit-padding-start: 0.75em;\r\n  -webkit-padding-end: 0.75em;\r\n  -webkit-padding-after: 0.625em;\r\n  min-width: -webkit-min-content;\r\n}\r\n\r\n.register-title {\r\n  font-size: 32px;\r\n  margin-top: 15px;\r\n  color: #535766;\r\n}\r\n\r\n.register-input-item {\r\n  position: relative;\r\n}\r\n\r\n.register-user-input {\r\n  display: block;\r\n  color: #282c3f;\r\n  font-size: 15px;\r\n  padding-right: 40px;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n}\r\n\r\n.register-user-input-password {\r\n  border-top: 1px solid #d5d6d9;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n}\r\n\r\n.register-user-input-username {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n\r\n.register-input-container {\r\n  margin: 20px;\r\n  border: 1px solid #bfc0c6;\r\n  border-radius: 5px;\r\n  padding: 0;\r\n}\r\n\r\n.register-register-button-container {\r\n  padding: 10px 20px;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\n\r\n.register-register-button {\r\n  background-color: #816a6e;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  padding: 12px;\r\n  border: 0;\r\n  margin-left: 7px;\r\n  margin-right: 7px;\r\n  text-transform: uppercase;\r\n  border-radius: 4px;\r\n  font-family: Whitney;\r\n  cursor: pointer;\r\n  box-shadow: 2px 3px 4px #494747;\r\n}\r\n\r\n.register-register-reset-button {\r\n  background-color: #ff4a74;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1ib3gge1xyXG4gIHdpZHRoOiA0MjBweDtcclxuICBoZWlnaHQ6IDM2MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDIzMSwgMjMxKTtcclxuICBib3gtc2hhZG93OiA0cHggNnB4IDhweCAjNWE1NDU0O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICBtYXJnaW4tbGVmdDogMzQlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDJweDtcclxuICAtd2Via2l0LW1hcmdpbi1lbmQ6IDJweDtcclxuICAtd2Via2l0LXBhZGRpbmctYmVmb3JlOiAwLjM1ZW07XHJcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwLjc1ZW07XHJcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMC43NWVtO1xyXG4gIC13ZWJraXQtcGFkZGluZy1hZnRlcjogMC42MjVlbTtcclxuICBtaW4td2lkdGg6IC13ZWJraXQtbWluLWNvbnRlbnQ7XHJcbn1cclxuLnJlZ2lzdGVyLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBjb2xvcjogIzUzNTc2NjtcclxufVxyXG4ucmVnaXN0ZXItaW5wdXQtaXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItdXNlci1pbnB1dCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICMyODJjM2Y7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci11c2VyLWlucHV0LXBhc3N3b3JkIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q1ZDZkOTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLXVzZXItaW5wdXQtdXNlcm5hbWUge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItaW5wdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYzBjNjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLXJlZ2lzdGVyLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItcmVnaXN0ZXItYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE2YTZlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFdoaXRuZXk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDJweCAzcHggNHB4ICM0OTQ3NDc7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1yZWdpc3Rlci1yZXNldC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjRhNzQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-box\">\n  <div class=\"container\">\n    <div>\n      <p class=\"register-title\">Admin User Login</p>\n    </div>\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"submitLoginForm(loginForm)\" class=\"register-register-form\">\n      <fieldset class=\"register-input-container\">\n        <div class=\"form-group\" class=\"register-input-item\">\n          <span class=\"ui-float-label\">\n            <input id=\"float-username\" type=\"text\" [(ngModel)]=\"adminUser.username\" name=\"username\" #username=\"ngModel\"\n              class=\"register-user-input-username register-user-input\" required pInputText>\n            <label for=\"float-username\">Username</label>\n          </span>\n        </div>\n      </fieldset>\n      <fieldset class=\"register-input-container\">\n        <div class=\"form-group\" class=\"register-input-item\">\n          <span class=\"ui-float-label\">\n            <input id=\"float-password\" type=\"password\" [(ngModel)]=\"adminUser.password\" name=\"password\"\n              #password=\"ngModel\" class=\"register-user-input-password register-user-input\" required pInputText>\n            <label for=\"float-password\">Password</label>\n          </span>\n        </div>\n      </fieldset>\n      <div class=\"register-register-button-container\">\n        <button type=\"submit\" class=\"register-register-button\">\n          Submit\n        </button>\n        <button type=\"reset\" class=\"register-register-button register-register-reset-button\"\n          (click)=\"resetLoginForm(loginForm)\">\n          Reset\n        </button>\n      </div>\n    </form>\n  </div>\n</div>"

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
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    type: 'success',
                    title: _this.adminUser.name + " logged in successfully.",
                    showConfirmButton: false,
                    timer: 1500
                }).then(function () {
                    _this.datasource.saveAdminUser(_this.adminUser);
                    _this.router.navigateByUrl('studentOnboardForm');
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    type: 'error',
                    title: "Please enter valid username or password.",
                    showConfirmButton: true
                });
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
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/components/filter/filter.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-box {\r\n  margin-top: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.filter-box-input {\r\n  border: 1px solid red;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  margin-left: 10px;\r\n  margin-bottom: 10px;\r\n  margin-top: 6px;\r\n  text-align: center;\r\n  width: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1ib3gge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItYm94LWlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/filter/filter.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select class=\"filter-box-input\" [(ngModel)]=\"filterText\" (change)=\"filterStudentList()\">\n  <option value=\"\" disabled=\"true\" selected=\"selected\">Select Category</option>\n  <option value=\"All\">All</option>\n  <option value=\"Domestic\">Domestic</option>\n  <option value=\"International\">International</option>\n</select>"

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


var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.filteredStudentList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FilterComponent.prototype.filterStudentList = function () {
        var filteredList = new Array();
        console.log('stiudents : ' + this.studentList);
        console.log('filter text : ' + this.filterText);
        if (this.filterText === 'All') {
            this.filteredStudentList.emit(this.studentList);
        }
        else {
            for (var _i = 0, _a = this.studentList; _i < _a.length; _i++) {
                var student = _a[_i];
                if (student.category === this.filterText) {
                    filteredList.push(student);
                }
            }
            console.log('filtered list : ' + filteredList);
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

module.exports = "<div><br>\n  <h5 style=\"float: right;\">{{adminName}}</h5>\n</div>\n<div>\n  <p-tabMenu [model]=\"menuItems\" [activeItem]=\"menuItems[menuItemSelected]\"></p-tabMenu>\n</div>"

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
        console.log('student list in pie : ' + studentList);
        console.log('student name : ' + studentName);
        if (studentName) {
            var filteredList = new Array();
            for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
                var student = studentList_1[_i];
                if (student.name.toLowerCase().includes(studentName)) {
                    filteredList.push(student);
                }
            }
            return filteredList;
        }
        return studentList;
        //this.searchedStudentList.emit(filteredList);
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
        this.adminUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _models_AdminUser__WEBPACK_IMPORTED_MODULE_3__["AdminUser"]());
        this.savedStudent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.studentList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
    }
    DatasourceService.prototype.getAdminUser = function () {
        return this.adminUser.asObservable();
    };
    DatasourceService.prototype.saveAdminUser = function (adminUser) {
        localStorage.setItem('adminUser', JSON.stringify(adminUser));
        this.adminUser.next(adminUser);
    };
    DatasourceService.prototype.getStudent = function () {
        return this.savedStudent.asObservable();
    };
    DatasourceService.prototype.setStudent = function (student) {
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











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"], _pipes_search_student_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchStudentPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                primeng_tabmenu__WEBPACK_IMPORTED_MODULE_4__["TabMenuModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"], _pipes_search_student_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchStudentPipe"]
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

module.exports = ".green {\r\n  background-color: rgb(255, 226, 188);\r\n}\r\n\r\n.red {\r\n  background-color: rgb(0, 255, 255);\r\n}\r\n\r\n.filter-box {\r\n  margin-top: 10px;\r\n  float: right;\r\n}\r\n\r\n.filter-box-input {\r\n  border: 1px solid red;\r\n  float: right;\r\n  border-radius: 50px;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  margin-left: 10px;\r\n  margin-top: 6px;\r\n  text-align: center;\r\n  color: rgb(5, 5, 63);\r\n}\r\n\r\n.list-container {\r\n  margin-top: 1%;\r\n  margin-left: 9%;\r\n}\r\n\r\n.card {\r\n  box-shadow: 6px 6px 12px rgb(99, 95, 95);\r\n  margin: 10px 10px 10px 10px;\r\n}\r\n\r\ncard-button:hover {\r\n  pointer-events: none;\r\n}\r\n\r\n.client {\r\n  height: 430px;\r\n  background-color: #fff;\r\n  text-align: center;\r\n  float: left;\r\n  letter-spacing: 1px;\r\n  transition: all 0.1s;\r\n  border-right: 2px solid #f0f0f0;\r\n  border-bottom: 2px solid #f0f0f0;\r\n  cursor: pointer;\r\n}\r\n\r\n.client::after {\r\n  pointer-events: none;\r\n}\r\n\r\n.client:hover {\r\n  -webkit-transform: scale(0.7, 0.7);\r\n  transform: scale(1.1, 1.1);\r\n  box-shadow: 4px 6px 26px 0px rgba(193, 79, 82, 1);\r\n  z-index: 9999;\r\n  border-right: 2px solid transparent;\r\n  border-bottom: 2px solid transparent;\r\n  border-left: 2px solid transparent;\r\n  border-top: 2px solid transparent;\r\n  background-color: #fff;\r\n}\r\n\r\n.card-head {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-clip: border-box;\r\n  border: 2px solid #343a40 !important;\r\n  border-radius: 0.5rem;\r\n  margin-top: 20px;\r\n  margin-right: 100px;\r\n  margin-left: 100px;\r\n  margin-bottom: 20px;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.card-headers {\r\n  font-size: 20px;\r\n}\r\n\r\n.button-1 {\r\n  background-color: rgb(209, 195, 180);\r\n  margin-right: 0.25em;\r\n}\r\n\r\n.button-2 {\r\n  background-color: rgb(207, 176, 130);\r\n  margin-right: 0.25em;\r\n}\r\n\r\n.button-3 {\r\n  background-color: rgb(201, 122, 19);\r\n  margin-right: 0.25em;\r\n}\r\n\r\n.filter-section {\r\n  margin-top: 10px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvY29tcG9uZW50cy9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBR25CLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFFRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBRzFCLGlEQUFpRDtFQUNqRCxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyxrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL2NvbXBvbmVudHMvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjYsIDE4OCk7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5maWx0ZXItYm94IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmZpbHRlci1ib3gtaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoNSwgNSwgNjMpO1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIG1hcmdpbi1sZWZ0OiA5JTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTJweCByZ2IoOTksIDk1LCA5NSk7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG59XHJcblxyXG5jYXJkLWJ1dHRvbjpob3ZlciB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jbGllbnQge1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2YwZjBmMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YwZjBmMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbGllbnQ6OmFmdGVyIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNsaWVudDpob3ZlciB7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA0cHggNnB4IDI2cHggMHB4IHJnYmEoMTkzLCA3OSwgODIsIDEpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogNHB4IDZweCAyNnB4IDBweCByZ2JhKDE5MywgNzksIDgyLCAxKTtcclxuICBib3gtc2hhZG93OiA0cHggNnB4IDI2cHggMHB4IHJnYmEoMTkzLCA3OSwgODIsIDEpO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzM0M2E0MCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXJzIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTk1LCAxODApO1xyXG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xyXG59XHJcbi5idXR0b24tMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTc2LCAxMzApO1xyXG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xyXG59XHJcbi5idXR0b24tMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMTIyLCAxOSk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XHJcbn1cclxuXHJcbi5maWx0ZXItc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/students/components/student-list/student-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/students/components/student-list/student-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-head\">\n  <app-header [menuItemSelected]=\"1\"></app-header>\n  <div class=\"filter-section\">\n    <app-filter [studentList]=\"studentList\" (filteredStudentList)=\"this.filteredList = $event\">\n    </app-filter>\n    <input type=\"text\" class=\"filter-box-input\" placeholder=\"Search Student\" [(ngModel)]=\"studentName\">\n  </div>\n  <div class=\"list-container\">\n    <div class=\"card client\" *ngFor=\"let student of filteredList | searchStudent : studentName\">\n      <div class=\"card-header\">\n        <span><b>{{student.name | uppercase}}</b></span>\n      </div>\n      <div class=\"card-body\">\n        <blockquote [ngClass]=\"{'green':student.category == 'Domestic', 'red':student.category == 'International'}\">\n          <span class=\"card-headers\">Category :</span> {{student.category}}<br>\n          <span class=\"card-headers\">Father Name :</span> {{student.fatherName}}<br>\n          <span class=\"card-headers\">Mother Name :</span> {{student.motherName}}<br>\n          <span class=\"card-headers\">Date Of Birth :</span> {{student.dateOfBirth}}<br>\n          <span class=\"card-headers\">Documents :</span>\n          <div *ngFor=\"let document of student.documents\">\n            {{document}}<br>\n          </div>\n          <span class=\"card-headers\">Last Class Score :</span> {{student.lastClassScore}}<br>\n          <div class=\"card-button\">\n            <button type=\"button\" class=\"btn button-1\" [routerLink]=\"'/studentOnboardForm/edit'\"\n              (click)=\"saveStudent(student)\">Edit</button>\n            <button type=\"button\" class=\"btn button-2\" [routerLink]=\"'/studentOnboardForm/view'\"\n              (click)=\"saveStudent(student)\">View</button>\n            <button type=\"button\" class=\"btn button-3\" (click)=\"deleteStudentRecord(student)\">Delete</button>\n          </div>\n        </blockquote>\n      </div>\n      <!-- <p-card [header]=\"student.name | uppercase\" [style]=\"{width: '360px'}\">\n        <div [ngClass]=\"{'green':true, 'red':student.category == 'International'}\">\n          Category : {{student.category}}<br>\n          Father Name : {{student.fatherName}}<br>\n          Mother Name : {{student.motherName}}<br>\n          Date Of Birth : {{student.dateOfBirth}}<br>\n          Documents :\n          <div *ngFor=\"let document of student.documents\">\n            {{document}}<br>\n          </div>\n          Last Class Score : {{student.lastClassScore}}<br>\n        </div>\n        <p-footer>\n          <button type=\"button\" style=\"margin-right: .25em\" [routerLink]=\"'/studentOnboardForm/edit'\"\n            (click)=\"saveStudent(student)\">Edit</button>\n          <button type=\"button\" style=\"margin-right: .25em\" [routerLink]=\"'/studentOnboardForm/view'\"\n            (click)=\"saveStudent(student)\">View</button>\n          <button type=\"button\" style=\"margin-right: .25em\" (click)=\"deleteStudentRecord(student)\">Delete</button>\n        </p-footer>\n      </p-card> -->\n    </div>\n  </div>\n</div>"

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
            if (result.value) {
                _this.studentList.splice(index, 1);
                _this.datasource.setStudentList(_this.studentList);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Student record has been deleted.', 'success');
            }
        });
    };
    StudentListComponent.prototype.saveStudent = function (student) {
        console.log('student going to save : ' + JSON.stringify(student));
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

module.exports = ".disabled {\r\n  cursor: not-allowed;\r\n  background: rgb(201, 255, 237);\r\n  color: rgb(124, 70, 32);\r\n}\r\n\r\n.card-head {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-clip: border-box;\r\n  border: 2px solid #343a40 !important;\r\n  margin-top: 20px;\r\n  margin-right: 100px;\r\n  margin-left: 100px;\r\n  margin-bottom: 20px;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvY29tcG9uZW50cy9zdHVkZW50LW9uYm9hcmQtZm9ybS9zdHVkZW50LW9uYm9hcmQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL2NvbXBvbmVudHMvc3R1ZGVudC1vbmJvYXJkLWZvcm0vc3R1ZGVudC1vbmJvYXJkLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjAxLCAyNTUsIDIzNyk7XHJcbiAgY29sb3I6IHJnYigxMjQsIDcwLCAzMik7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzM0M2E0MCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/students/components/student-onboard-form/student-onboard-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/students/components/student-onboard-form/student-onboard-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-head\">\n  <app-header [menuItemSelected]=\"0\"></app-header>\n  <div class=\"container\">\n    <form [formGroup]=\"studentOnboardForm\">\n      VALID : {{studentOnboardForm.valid |json}}\n      <br />\n      VALUES :{{studentOnboardForm.value | json}}\n      <div class=\"form-group\">\n        Name : <input type=\"text\" formControlName=\"name\" [readOnly]=\"isDisabled\" [class.disabled]=\"isDisabled\"\n          placeholder=\"Name\" pInputText>\n      </div>\n      <div class=\"form-group\">\n        Category :\n        <select formControlName=\"category\" (change)=\"getDocumentsForCategory()\" [class.disabled]=\"isDisabled\">\n          <option *ngFor=\"let category of categories\" [value]=\"category\" pInputText>\n            {{category}}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        Documents :\n        <div class=\"container\" formArrayName=\"documents\">\n          <div *ngFor=\"let document of documents.controls;let i=index\">\n            <span *ngIf=\"i<4\">\n              {{documentList[i]}}*\n            </span>\n            <span *ngIf=\"i>=4\">\n              {{documentList[i]}}\n            </span>\n            <span>{{document.value}}</span>\n            <input type=\"checkbox\" [formControlName]=\"i\" [class.disabled]=\"isDisabled\" [value]=\"document.value\"\n              pInputText>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        Date Of Birth : <input type=\"date\" formControlName=\"dateOfBirth\" [readOnly]=\"isDisabled\"\n          [class.disabled]=\"isDisabled\" pInputText>\n      </div>\n      <div class=\"form-group\">\n        Father's Name : <input type=\"text\" formControlName=\"fatherName\" [readOnly]=\"isDisabled\"\n          [class.disabled]=\"isDisabled\" placeholder=\"Father's Name\" pInputText>\n      </div>\n      <div class=\"form-group\">\n        Mother's Name : <input type=\"text\" formControlName=\"motherName\" [readOnly]=\"isDisabled\"\n          [class.disabled]=\"isDisabled\" placeholder=\"Mother's Name\" pInputText>\n      </div>\n      <div class=\"form-group\">\n        Last Class Score : <input type=\"number\" formControlName=\"lastClassScore\" [readOnly]=\"isDisabled\"\n          [class.disabled]=\"isDisabled\" placeholder=\"Last Class Score\" pInputText>\n      </div>\n    </form>\n    <button [disabled]=\"!studentOnboardForm.valid\" [class.disabled]=\"isDisabled\" type=\"submit\" class=\"btn btn-primary\"\n      (click)=\"submitStudentForm()\">\n      OnBoard\n    </button>\n  </div>\n  <br>\n</div>"

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
/* harmony import */ var _models_CommonModels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/CommonModels */ "./src/app/students/models/CommonModels.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/student.service */ "./src/app/students/services/student.service.ts");
/* harmony import */ var _shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/datasource.service */ "./src/app/shared/services/datasource.service.ts");









var StudentOnboardFormComponent = /** @class */ (function () {
    function StudentOnboardFormComponent(formBuilder, documentService, datasource, studentService, router, route) {
        this.formBuilder = formBuilder;
        this.documentService = documentService;
        this.datasource = datasource;
        this.studentService = studentService;
        this.router = router;
        this.route = route;
        this.hasDocuments = false;
        this.categories = [_models_CommonModels__WEBPACK_IMPORTED_MODULE_6__["Category"].Domestic, _models_CommonModels__WEBPACK_IMPORTED_MODULE_6__["Category"].International];
        this.isDisabled = false;
        this.studentOnboardForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            documents: this.formBuilder.array([
                this.formBuilder.control({ value: '', disabled: this.isDisabled }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                this.formBuilder.control(''),
                this.formBuilder.control('')
            ]),
            dateOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            fatherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            motherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lastClassScore: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    StudentOnboardFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentService.fetchAllDocuments().subscribe(function (value) {
            _this.documentList = value.documents;
        });
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
            this.studentOnboardForm.controls;
            return this.studentOnboardForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    StudentOnboardFormComponent.prototype.makeFormGroup = function (student) {
        this.studentOnboardForm.patchValue({
            name: student.name,
            category: student.category,
            documents: student.documents,
            dateOfBirth: student.dateOfBirth,
            fatherName: student.fatherName,
            motherName: student.motherName,
            lastClassScore: student.lastClassScore
        });
    };
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
    StudentOnboardFormComponent.prototype.getDocumentsForCategory = function () {
        var _this = this;
        if (!this.isDisabled) {
            //this.studentOnboardForm.controls['documents'] = this.formBuilder.array([]);
            this.categorySelected = this.studentOnboardForm.value.category;
            this.documentService.fetchDocuments(this.categorySelected).subscribe(function (value) {
                _this.mandatoryDocumentsList = value.documents;
                // for (let i = 0; i < this.mandatoryDocumentsList.length; i++) {
                //   console.log(i + '->req')
                //   this.documents.push(this.formBuilder.control('', Validators.required));
                // }
                // for (let i = 0; i < this.documentList.length - this.mandatoryDocumentsList.length; i++) {
                //   console.log(i + '->not req')
                //   this.documents.push(this.formBuilder.control(''));
                // }
                // console.log(this.studentOnboardForm);
                // this.updateFormValueAndValidity();
                // if (this.documentList.length > 0) {
                //   this.hasDocuments = true;
                // }
            });
        }
    };
    StudentOnboardFormComponent.prototype.updateFormValueAndValidity = function () {
        this.studentOnboardForm.updateValueAndValidity();
    };
    StudentOnboardFormComponent.prototype.submitStudentForm = function () {
        var _this = this;
        if (!this.isDisabled) {
            console.log('SAVED STUDENT : ' + JSON.stringify(this.savedStudent));
            if (this.savedStudent) {
                this.studentService.editStudentForm(this.studentOnboardForm, this.savedStudent.id);
            }
            else {
                this.studentService.submitStudentForm(this.studentOnboardForm, this.createDocumentList(this.studentOnboardForm.value.documents));
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'success',
                title: this.studentOnboardForm.value.name + " onboarded successfully.",
                showConfirmButton: false,
                timer: 1300
            }).then(function () {
                _this.router.navigate(['/studentList']);
            });
        }
    };
    StudentOnboardFormComponent.prototype.createDocumentList = function (documents) {
        var documentList = new Array();
        for (var i = 0; i < documents.length; i++) {
            if (documents[i] == true) {
                documentList.push(this.documentList[i]);
            }
        }
        console.log('DOC SELECTED : ' + documentList);
        return documentList;
    };
    StudentOnboardFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-onboard-form',
            template: __webpack_require__(/*! ./student-onboard-form.component.html */ "./src/app/students/components/student-onboard-form/student-onboard-form.component.html"),
            styles: [__webpack_require__(/*! ./student-onboard-form.component.css */ "./src/app/students/components/student-onboard-form/student-onboard-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"], _shared_services_datasource_service__WEBPACK_IMPORTED_MODULE_8__["DatasourceService"],
            _services_student_service__WEBPACK_IMPORTED_MODULE_7__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
        this.updateStudentValues(studentForm.value, index);
    };
    StudentService.prototype.updateStudentValues = function (student, index) {
        this.onboardedStudents[index].name = student.name;
        this.onboardedStudents[index].category = student.category;
        this.onboardedStudents[index].documents = student.documents;
        this.onboardedStudents[index].dateOfBirth = student.dateOfBirth;
        this.onboardedStudents[index].fatherName = student.fatherName;
        this.onboardedStudents[index].motherName = student.motherName;
        this.onboardedStudents[index].lastClassScore = student.lastClassScore;
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