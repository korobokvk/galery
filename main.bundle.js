webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_main_module_main_module__ = __webpack_require__("../../../../../src/app/components/main/module/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__components_main_module_main_module__["a" /* MainModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/customisation/album.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add album</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <input type=\"text\"  [(ngModel)]=\"title\" #titles class=\"form-control\" placeholder=\"Enter album title\" ng-reflect-model=\"\">\n                    <textarea  [(ngModel)]=\"textarea\" #textareas class=\"form-control\" cols=\"30\" rows=\"5\" placeholder=\"Enter album description\"></textarea>\n            \n                    <input accept=\"image/*\" type='file' class=\"form-control-file\" (change)=\"coverage($event)\" aria-describedby=\"fileHelp\">\n                    <small id=\"fileHelp\" class=\"form-text text-muted\">Album cover</small>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n                <button class=\"btn btn-primary\" (click)=\"addAlbum(title, textarea); title = ''; textarea = ''; c('Close click')\">Add album</button>\n            </div>\n    </ng-template>            \n              \n              \n\n    <h1>Photo galery</h1>\n    <h5 class=\"alert alert-info\">Press button to add new album</h5>\n    <button class=\"btn btn-primary\" (click)=\"open(content)\">Press me!</button>\n    <hr >\n    \n    <div class=\"cover-albums\">\n    <div *ngFor=\"let album of albums\" class=\"cards\">\n        <div *ngIf=\"!album.delete\"  class=\"card\" style=\"width: 20rem;\" >\n                \n                  <img class=\"card-img-top\" *ngIf=\"album.cover\" [src]=\"album.cover\" >\n                  <img class=\"card-img-top\" *ngIf=\"!album.cover\" src=\"http://via.placeholder.com/318x180\" >\n                \n                <div class=\"card-block\">\n                  <h4 class=\"card-title\" *ngIf=\"album.titles\">{{album.titles}}</h4>\n                  <h4 class=\"card-title\" *ngIf=\"!album.titles\">Album titles</h4>\n\n                  <p class=\"card-text\" *ngIf=\"album.descriptions\">{{album.descriptions}}</p>                  \n                  <p class=\"card-text\" *ngIf=\"!album.descriptions\">Album descriptions</p>       \n                  <button class=\"btn btn-primary\" (click)=\"album.show = !album.show\">Show Photo</button>\n                  <button class=\"btn btn-danger\" (click)=\"album.delete = !album.delete\">Delete</button>\n                </div>      \n        </div>\n        \n        <div class=\"jumbotron\"  [ngClass]=\"{deleteItem: !album.show}\">    \n            <fa name=\"times\" aria-hidden=\"true\" (click)=\"album.show = !album.show\" ></fa>\n            <upload-comp></upload-comp>\n        </div>\n    </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/main/customisation/css/album.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fa {\n    font-size: 2em;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n}\n.jumbotron {\n    position: absolute;\n    z-index: 99;\n    height: 100vh;\n    width: inherit;\n    top: 0px;\n    right: 0px;\n}\n.deleteItem {\n    display: none;\n}\n.card-img-top {\n    width: 318px;\n    height: 180px;\n    background-size: cover;\n}\n.card {\n    display: inline-block;\n    margin: 15px;\n}\n.cards {\n    display: inline-block;    \n}\n.cover-albums {    \n    position: relative;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/customisation/css/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/customisation/css/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img {\n    width: 250px;\n    height: 250px;\n    background-size: cover;\n    background-position: center;\n}\n.modal-img {\n    min-width: 350px;\n    min-height: 350px;  \n    width: 100%;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat\n}\n.img-wrap {\n    display: inline-block;\n    text-align: center;\n    margin: 15px;\n    margin-bottom: 30px;\n    position: relative;   \n}\n\n.btn-img {    \n    position: absolute;\n    bottom: 0px;         \n    width: 50%; \n}\n.btn-primary {\n    left: 0px;\n}\n.btn-danger {\n    right: 0px;\n}\n.deleteItem {\n    display: none!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/customisation/main.component.html":
/***/ (function(module, exports) {

module.exports = "<album-comp></album-comp>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/customisation/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n    <div class=\"form-group\">\n        <input accept=\"image/*\" type='file' class=\"form-control-file\" (change)=\"readUrl($event)\" aria-describedby=\"fileHelp\">\n        <small id=\"fileHelp\" class=\"form-text text-muted\">Upload any picture</small>\n    </div>\n\n    <div class=\"img-wrap\" *ngFor=\"let urls of url\" [ngClass]=\"{deleteItem: urls.display}\">\n        <div class=\"img\" #img [ngStyle]=\"{'background-image': urls.get}\" (click)=\"open(content)\"></div>\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n                <div class=\"modal-content modal-img\" [ngStyle]=\"{'background-image': urls.get}\"></div>                \n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>                    \n                </div>\n        </ng-template>\n\n        <button class=\"del-btn btn btn-danger btn-img\" (click)=\"urls.display = !urls.display\">DELETE</button>    \n        \n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/main/module/album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__album_service__ = __webpack_require__("../../../../../src/app/components/main/module/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumComponent = (function () {
    /**
     * @param { AlbumService } _service Service for creating albums
     * @param { NgbModal } modalService Bootstrap service
     */
    function AlbumComponent(_service, modalService) {
        this._service = _service;
        this.modalService = modalService;
        /**
         * Array of albums
         */
        this.albums = [];
    }
    /**
     * Calling album service
     * @param title album title
     * @param descriptions album description
     */
    AlbumComponent.prototype.addAlbum = function (title, descriptions) {
        this._service.addAlbumName(title, this.albums, descriptions);
    };
    /**
     * Call bootstrap modal to creating a new album
     * @param content template component for call bootstrap modal
     */
    AlbumComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    /**
     * Define event method, to get cover image
     * @param event event file input
     */
    AlbumComponent.prototype.coverage = function (event) {
        this._service.getBase(event);
    };
    return AlbumComponent;
}());
AlbumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'album-comp',
        template: __webpack_require__("../../../../../src/app/components/main/customisation/album.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/customisation/css/album.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__album_service__["a" /* AlbumService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]) === "function" && _b || Object])
], AlbumComponent);

var _a, _b;
//# sourceMappingURL=album.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/module/album.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlbumService = (function () {
    function AlbumService() {
        /**
         * middlevare to event
         */
        this.cover = null;
    }
    /**
     * Add parametrs, state of album
     * @param title album title
     * @param description album description
     */
    AlbumService.prototype.addAlbumName = function (title, arr, description) {
        var _this = this;
        // It's hard to explain, but without it, the cover is buggy
        setTimeout(function () { _this.cover = null; }, 100);
        // if(title && description) {        
        return this.addAlbum({
            titles: title,
            descriptions: description,
            show: false,
            delete: false,
            cover: this.cover
        }, arr);
        // } else {
        //         return this.addAlbum({
        //         title: title,
        //         show: false,
        //         delete: false,
        //         cover: this.cover
        //     }, arr)    
        // }  
    };
    /**
     * Creating a new album
     * @param params album pams: title, description and state
     */
    AlbumService.prototype.addAlbum = function (params, arr) {
        arr.push(params);
    };
    /**
     * Get base64 for cover image
     * @param event file input event
     */
    AlbumService.prototype.getBase = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.cover = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    return AlbumService;
}());
AlbumService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AlbumService);

//# sourceMappingURL=album.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/module/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = (function () {
    function MainComponent() {
    }
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'main-comp',
        template: __webpack_require__("../../../../../src/app/components/main/customisation/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/customisation/css/main.component.css")]
    })
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/module/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__album_component__ = __webpack_require__("../../../../../src/app/components/main/module/album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_component__ = __webpack_require__("../../../../../src/app/components/main/module/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_component__ = __webpack_require__("../../../../../src/app/components/main/module/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_route__ = __webpack_require__("../../../../../src/app/components/main/module/main.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__album_service__ = __webpack_require__("../../../../../src/app/components/main/module/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upload_service__ = __webpack_require__("../../../../../src/app/components/main/module/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__album_component__["a" /* AlbumComponent */],
            __WEBPACK_IMPORTED_MODULE_4__upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_5__main_component__["a" /* MainComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__main_route__["a" /* mainRoute */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_11__upload_service__["a" /* UploadService */]
        ]
    })
], MainModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/module/main.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_component__ = __webpack_require__("../../../../../src/app/components/main/module/main.component.ts");

/**
 * Basic route for app
 */
var mainRoute = [{
        component: __WEBPACK_IMPORTED_MODULE_0__main_component__["a" /* MainComponent */],
        path: ''
    }
];
//# sourceMappingURL=main.route.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/module/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_service__ = __webpack_require__("../../../../../src/app/components/main/module/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadComponent = (function () {
    function UploadComponent(service, modalService) {
        this.service = service;
        this.modalService = modalService;
        /**
         * Local image array
         */
        this.url = [];
    }
    /**
     * Call readUrl function from UploadService
     * @param event Event from input file loader
     */
    UploadComponent.prototype.readUrl = function (event) {
        this.service.readUrl(event, this.url);
    };
    UploadComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'upload-comp',
        template: __webpack_require__("../../../../../src/app/components/main/customisation/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/customisation/css/upload.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__upload_service__["a" /* UploadService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]) === "function" && _b || Object])
], UploadComponent);

var _a, _b;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/module/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UploadService = (function () {
    function UploadService() {
    }
    /**
     * Catch images from upload component and render it
     * @param event Event from input file loader
     */
    UploadService.prototype.readUrl = function (event, arr) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                arr.push({ get: "url(" + event.target.result + ")",
                    display: false,
                    base64: event.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    return UploadService;
}());
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], UploadService);

//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map