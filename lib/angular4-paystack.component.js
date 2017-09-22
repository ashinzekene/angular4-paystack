import { Component, Input, Output, EventEmitter } from '@angular/core';
var Angular4PaystackComponent = /** @class */ (function () {
    function Angular4PaystackComponent() {
        this.close = new EventEmitter();
        this.callback = new EventEmitter();
    }
    Angular4PaystackComponent.prototype.pay = function () {
        this.setUp();
        console.log("OK payment will begin");
        if (!this.checkInput())
            return;
        var payment = window.PaystackPop.setup(this.paystackOptions);
        payment.openIframe();
    };
    Angular4PaystackComponent.prototype.checkInput = function () {
        if (!this.key)
            return console.error("Paystack key cannot be empty");
        if (!this.email)
            return console.error("Paystack email cannot be empty");
        if (!this.amount)
            return console.error("Paystack amount cannot be empty");
        if (!this.ref)
            return console.error("Paystack ref cannot be empty");
        if (!this.callback.observers.length)
            return console.error("Insert a callback output like so (callback)='PaymentComplete($event)' to check payment status");
        return true;
    };
    Angular4PaystackComponent.prototype.setUp = function () {
        var _this = this;
        this.paystackOptions = {
            key: this.key,
            email: this.email,
            amount: this.amount,
            ref: this.ref,
            metadata: this.metadata || {},
            currency: this.currency || "NGN",
            plan: this.plan || "",
            quantity: this.quantity || "",
            subaccount: this.subaccount || "",
            transaction_charge: this.transaction_charge || 0,
            bearer: this.bearer || "",
            callback: function (res) { return _this.callback.emit(res); },
            onClose: function () { return _this.close.emit(); },
        };
    };
    Angular4PaystackComponent.prototype.ngOnInit = function () {
        if (this.text) {
            console.error("Paystack Text input is deprecated. Add text into textnode like so <angular4-paystack>Pay With Paystack</angular4-paystack>");
        }
    };
    Angular4PaystackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'angular4-paystack',
                    template: "<button [ngClass]=\"class\" [ngStyle]=\"style\" (click)=\"pay()\">{{text}}<ng-content></ng-content></button>",
                },] },
    ];
    /** @nocollapse */
    Angular4PaystackComponent.ctorParameters = function () { return []; };
    Angular4PaystackComponent.propDecorators = {
        'text': [{ type: Input },],
        'key': [{ type: Input },],
        'email': [{ type: Input },],
        'amount': [{ type: Input },],
        'metadata': [{ type: Input },],
        'ref': [{ type: Input },],
        'currency': [{ type: Input },],
        'plan': [{ type: Input },],
        'quantity': [{ type: Input },],
        'subaccount': [{ type: Input },],
        'transaction_charge': [{ type: Input },],
        'bearer': [{ type: Input },],
        'class': [{ type: Input },],
        'style': [{ type: Input },],
        'close': [{ type: Output },],
        'callback': [{ type: Output },],
    };
    return Angular4PaystackComponent;
}());
export { Angular4PaystackComponent };
