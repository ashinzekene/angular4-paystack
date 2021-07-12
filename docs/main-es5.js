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

/***/ "./dist/angular4-paystack/fesm5/angular4-paystack.js":
/*!***********************************************************!*\
  !*** ./dist/angular4-paystack/fesm5/angular4-paystack.js ***!
  \***********************************************************/
/*! exports provided: Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent, Angular4PaystackModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackComponent", function() { return Angular4PaystackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackDirective", function() { return Angular4PaystackDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackEmbedComponent", function() { return Angular4PaystackEmbedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackModule", function() { return Angular4PaystackModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Angular4PaystackService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PUBLIC_KEY_TOKEN; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PUBLIC_KEY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('paystack.publickey');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow() { }
if (false) {}
var Angular4PaystackService = /** @class */ (function () {
    function Angular4PaystackService(token) {
        this.token = token;
    }
    /**
     * @return {?}
     */
    Angular4PaystackService.prototype.loadScript = /**
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (window.PaystackPop && typeof window.PaystackPop.setup === 'function') {
                resolve();
                return;
            }
            /** @type {?} */
            var script = window.document.createElement('script');
            window.document.head.appendChild(script);
            /** @type {?} */
            var onLoadFunc = (/**
             * @return {?}
             */
            function () {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            });
            script.addEventListener('load', onLoadFunc);
            script.setAttribute('src', 'https://js.paystack.co/v1/inline.js');
        }));
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular4PaystackService.prototype.checkInput = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (!obj.key && !this.token) {
            return 'ANGULAR-PAYSTACK: Please insert a your public key';
        }
        if (!obj.email) {
            return 'ANGULAR-PAYSTACK: Paystack email cannot be empty';
        }
        if (!obj.amount) {
            return 'ANGULAR-PAYSTACK: Paystack amount cannot be empty';
        }
        if (!obj.ref) {
            return 'ANGULAR-PAYSTACK: Paystack ref cannot be empty';
        }
        return '';
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular4PaystackService.prototype.getPaystackOptions = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var paystackOptions = {
            key: obj.key || this.token,
            email: obj.email,
            amount: obj.amount,
            ref: obj.ref,
            metadata: obj.metadata || {},
            currency: obj.currency || 'NGN',
            plan: obj.plan || '',
            channels: obj.channels,
            quantity: obj.quantity || '',
            subaccount: obj.subaccount || '',
            transaction_charge: obj.transaction_charge || 0,
            // tslint:disable-line
            bearer: obj.bearer || '',
        };
        return paystackOptions;
    };
    Angular4PaystackService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    Angular4PaystackService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [PUBLIC_KEY_TOKEN,] }] }
    ]; };
    /** @nocollapse */ Angular4PaystackService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Angular4PaystackService_Factory() { return new Angular4PaystackService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(PUBLIC_KEY_TOKEN)); }, token: Angular4PaystackService, providedIn: "root" });
    return Angular4PaystackService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$1() { }
if (false) {}
var Angular4PaystackComponent = /** @class */ (function () {
    function Angular4PaystackComponent(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:disable-line
        this.isPaying = false;
    }
    /**
     * @return {?}
     */
    Angular4PaystackComponent.prototype.pay = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var errorText, payment;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Angular paystack: Clicked');
                        errorText = '';
                        if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                            errorText = this.valdateInput(this.paystackOptions);
                            this.generateOptions(this.paystackOptions);
                        }
                        else {
                            errorText = this.valdateInput(this);
                            this.generateOptions(this);
                        }
                        if (errorText) {
                            console.error(errorText);
                            return [2 /*return*/, errorText];
                        }
                        return [4 /*yield*/, this.paystackService.loadScript()];
                    case 1:
                        _a.sent();
                        if (this.isPaying) {
                            return [2 /*return*/];
                        }
                        if (this.paymentInit.observers.length) {
                            this.paymentInit.emit();
                        }
                        payment = window.PaystackPop.setup(this._paystackOptions);
                        payment.openIframe();
                        this.isPaying = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular4PaystackComponent.prototype.valdateInput = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular4PaystackComponent.prototype.generateOptions = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        function () {
            if (_this.onClose.observers.length) {
                _this.isPaying = false;
                _this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        function () {
            var _a;
            var response = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                response[_i] = arguments[_i];
            }
            _this.isPaying = false;
            (_a = _this.callback).emit.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(response));
        });
    };
    Angular4PaystackComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'angular4-paystack',
                    template: "<button [ngClass]=\"class\" [ngStyle]=\"style\" (click)=\"pay()\"><ng-content></ng-content></button>"
                }] }
    ];
    /** @nocollapse */
    Angular4PaystackComponent.ctorParameters = function () { return [
        { type: Angular4PaystackService }
    ]; };
    Angular4PaystackComponent.propDecorators = {
        key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return Angular4PaystackComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$2() { }
if (false) {}
var Angular4PaystackDirective = /** @class */ (function () {
    function Angular4PaystackDirective(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:disable-line
        this.isPaying = false;
    }
    /**
     * @return {?}
     */
    Angular4PaystackDirective.prototype.pay = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var errorText, payment;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorText = '';
                        if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                            errorText = this.valdateInput(this.paystackOptions);
                            this.generateOptions(this.paystackOptions);
                        }
                        else {
                            errorText = this.valdateInput(this);
                            this.generateOptions(this);
                        }
                        if (errorText) {
                            console.error(errorText);
                            return [2 /*return*/, errorText];
                        }
                        return [4 /*yield*/, this.paystackService.loadScript()];
                    case 1:
                        _a.sent();
                        if (this.isPaying) {
                            return [2 /*return*/];
                        }
                        if (this.paymentInit.observers.length) {
                            this.paymentInit.emit();
                        }
                        payment = window.PaystackPop.setup(this._paystackOptions);
                        payment.openIframe();
                        this.isPaying = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular4PaystackDirective.prototype.valdateInput = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular4PaystackDirective.prototype.generateOptions = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        function () {
            if (_this.onClose.observers.length) {
                _this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        function () {
            var _a;
            var response = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                response[_i] = arguments[_i];
            }
            (_a = _this.callback).emit.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(response));
        });
    };
    /**
     * @return {?}
     */
    Angular4PaystackDirective.prototype.buttonClick = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.pay();
                return [2 /*return*/];
            });
        });
    };
    Angular4PaystackDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[angular4-paystack]',
                },] }
    ];
    /** @nocollapse */
    Angular4PaystackDirective.ctorParameters = function () { return [
        { type: Angular4PaystackService }
    ]; };
    Angular4PaystackDirective.propDecorators = {
        key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        buttonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
    };
    return Angular4PaystackDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$3() { }
if (false) {}
var Angular4PaystackEmbedComponent = /** @class */ (function () {
    function Angular4PaystackEmbedComponent(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    Angular4PaystackEmbedComponent.prototype.pay = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var errorText, payment;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorText = '';
                        if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                            errorText = this.valdateInput(this.paystackOptions);
                            this.generateOptions(this.paystackOptions);
                        }
                        else {
                            errorText = this.valdateInput(this);
                            this.generateOptions(this);
                        }
                        if (errorText) {
                            console.error(errorText);
                            return [2 /*return*/, errorText];
                        }
                        return [4 /*yield*/, this.paystackService.loadScript()];
                    case 1:
                        _a.sent();
                        if (this.paymentInit.observers.length) {
                            this.paymentInit.emit();
                        }
                        payment = window.PaystackPop.setup(this._paystackOptions);
                        payment.openIframe();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular4PaystackEmbedComponent.prototype.valdateInput = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular4PaystackEmbedComponent.prototype.generateOptions = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        function () {
            if (_this.onClose.observers.length) {
                _this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        function () {
            var _a;
            var response = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                response[_i] = arguments[_i];
            }
            (_a = _this.callback).emit.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(response));
        });
    };
    /**
     * @return {?}
     */
    Angular4PaystackEmbedComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.error('ANGULAR-PAYSTACK: The paystack embed option is deprecated. Please use the paystack component or directive');
                this.pay();
                return [2 /*return*/];
            });
        });
    };
    Angular4PaystackEmbedComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'angular4-paystack-embed',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    template: "<div id=\"paystackEmbedContainer\"></div>"
                }] }
    ];
    /** @nocollapse */
    Angular4PaystackEmbedComponent.ctorParameters = function () { return [
        { type: Angular4PaystackService }
    ]; };
    Angular4PaystackEmbedComponent.propDecorators = {
        key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return Angular4PaystackEmbedComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Angular4PaystackModule = /** @class */ (function () {
    function Angular4PaystackModule() {
    }
    /**
     * @param {?} token
     * @return {?}
     */
    Angular4PaystackModule.forRoot = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        return {
            ngModule: Angular4PaystackModule,
            providers: [
                Angular4PaystackService,
                { provide: PUBLIC_KEY_TOKEN, useValue: token }
            ]
        };
    };
    Angular4PaystackModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    exports: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent],
                    declarations: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent],
                    providers: [],
                },] }
    ];
    return Angular4PaystackModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular4-paystack.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"display-4 py-4 px-1 text-center bg-primary text-white\">Angular4 Paystack</div>\r\n<div class=\"text-center lead\">{{ title }}</div>\r\n<div class=\"container\">\r\n  <div class=\"paystack-buttons text-center d-md-flex d-lg-flex d-xl-flex justify-content-between\">\r\n    <angular4-paystack\r\n      [class]=\"'btn btn-primary m-3'\"\r\n      [email]=\"'mailexample@mail.com'\"\r\n      (paymentInit)=\"paymentInit()\"\r\n      [amount]=\"'5000000'\"\r\n      [ref]=\"tRef\"\r\n      (onClose)=\"paymentCancel()\"\r\n      (callback)=\"paymentDone($event)\"\r\n      [class]=\"'btn btn-primary'\"\r\n    >\r\n      Pay With Paystack component\r\n    </angular4-paystack>\r\n\r\n    <button\r\n      class=\"btn btn-danger m-3\"\r\n      angular4-paystack\r\n      [paystackOptions]=\"options\"\r\n      (onClose)=\"paymentCancel()\"\r\n      (paymentInit)=\"paymentInit()\"      \r\n      (callback)=\"paymentDone($event)\"\r\n      [class]=\"'btn btn-primary btn-lg'\"\r\n    >\r\n      Pay With Paystack Directive\r\n    </button>\r\n  </div>\r\n  <button class=\"btn btn-outline-dark mr-3\" (click)=\"toggleEmbed()\">Toggle embed</button>\r\n  <button class=\"btn btn-outline-dark\" (click)=\"setRandomPaymentRef()\">Set random payment Ref</button>\r\n  <h3>Embed {{ showEmbed ? 'visible' : 'hidden' }}</h3>\r\n  <div>\r\n    You can't have more than one payment Instance at a time. Hide paystack embed to try out\r\n    paystack directive and paystack component\r\n  </div>\r\n  <h3 class=\"text-center my-3\">Paystack Embed</h3>\r\n  <div *ngIf=\"showEmbed\">\r\n    <angular4-paystack-embed\r\n      angular4-paystack\r\n      [email]=\"'mailexample@mail.com'\"\r\n      (paymentInit)=\"paymentInit()\"      \r\n      [amount]=\"'5000000'\" [ref]=\"tRef\" (onClose)=\"paymentCancel()\" (callback)=\"paymentDone($event)\"\r\n      [class]=\"'btn btn-primary btn-lg'\" [channels]=\"['card']\"\r\n    ></angular4-paystack-embed>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'My app';
        this.showEmbed = false;
        this.options = {
            amount: 50000,
            email: 'user@mail.com',
            ref: "" + Math.ceil(Math.random() * 10e10)
        };
        this.results = {
            name: ''
        };
        this.tRef = '';
        this.result = '';
    }
    AppComponent.prototype.toggleEmbed = function () {
        this.showEmbed = !this.showEmbed;
    };
    AppComponent.prototype.paymentInit = function () {
        console.log('Payment initialized');
    };
    AppComponent.prototype.paymentDone = function (ref) {
        this.title = 'Payment successfull';
        console.log(this.title, ref);
    };
    AppComponent.prototype.paymentCancel = function () {
        this.title = 'Payment failed';
        console.log(this.title);
    };
    AppComponent.prototype.setRandomPaymentRef = function () {
        this.tRef = "" + Math.random() * 10000000000000;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.setRandomPaymentRef();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular4-paystack */ "./dist/angular4-paystack/fesm5/angular4-paystack.js");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular4_paystack__WEBPACK_IMPORTED_MODULE_4__["Angular4PaystackModule"].forRoot('pk_test_c613fc7d428a64fd1e5daea22f8380551b28c78e')
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\asekene\github.com\ashinzekene\angular4-paystack\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map