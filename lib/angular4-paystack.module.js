import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Angular4PaystackComponent } from './angular4-paystack.component';
import { Angular4PaystackEmbed } from "./angular4-paystack-embed.component";
import { Angular4PaystackDirective } from './angular4-paystack.directive';
var Angular4PaystackModule = /** @class */ (function () {
    function Angular4PaystackModule() {
    }
    Angular4PaystackModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbed],
                    declarations: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbed],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    Angular4PaystackModule.ctorParameters = function () { return []; };
    return Angular4PaystackModule;
}());
export { Angular4PaystackModule };
