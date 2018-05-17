import { OnInit, EventEmitter } from '@angular/core';
export declare class Angular4PaystackComponent implements OnInit {
    text: string;
    key: string;
    email: string;
    amount: number;
    metadata: {};
    ref: string;
    currency: string;
    plan: string;
    quantity: string;
    subaccount: string;
    transaction_charge: number;
    bearer: string;
    class: string;
    style: object;
    close: EventEmitter<string>;
    callback: EventEmitter<string>;
    private paystackOptions;
    private isPaying;
    constructor();
    pay(): void;
    checkInput(): true | void;
    setUp(): void;
    ngOnInit(): void;
}
