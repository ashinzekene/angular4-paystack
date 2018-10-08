import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaystackOptions } from './paystack-options';

interface MyWindow extends Window {
  PaystackPop: any;
}
declare var window: MyWindow;

@Component({
  selector: 'angular4-paystack',
  template: `<button [ngClass]="class" [ngStyle]="style" (click)="pay()">{{text}}<ng-content></ng-content></button>`,
})
export class Angular4PaystackComponent implements OnInit {
  @Input() text: string;
  @Input() key: string;
  @Input() email: string;
  @Input() amount: number;
  @Input() metadata: {};
  @Input() ref: string;
  @Input() currency: string;
  @Input() plan: string;
  @Input() quantity: string;
  @Input() channels: string[];
  @Input() subaccount: string;
  @Input() transaction_charge: number;
  @Input() bearer: string;
  @Input() class: string;
  @Input() style: object;
  @Output() paymentInit: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();
  private paystackOptions: PaystackOptions;
  private isPaying = false;
  constructor() {}

  pay() {
    if (!this.checkInput()) { return; }
    this.setUp();
    if (this.isPaying) { return; }
    if (this.paymentInit.observers.length) {
      this.paymentInit.emit();
    }
    const payment = window.PaystackPop.setup(this.paystackOptions);
    payment.openIframe();
    this.isPaying = true;
  }
  checkInput() {
    if (!this.key) { return console.error('ANGULAR-PAYSTACK: Paystack key cannot be empty'); }
    if (!this.email) { return console.error('ANGULAR-PAYSTACK: Paystack email cannot be empty'); }
    if (!this.amount) { return console.error('ANGULAR-PAYSTACK: Paystack amount cannot be empty'); }
    if (!this.ref) { return console.error('ANGULAR-PAYSTACK: Paystack ref cannot be empty'); }
    if (!this.callback.observers.length) {
      return console.error(
        `ANGULAR-PAYSTACK: Insert a callback output like so (callback)='PaymentComplete($event)' to check payment status`
      );
    }
    return true;
  }

  setUp() {
    this.paystackOptions = {
      key: this.key ,
      email: this.email ,
      amount: this.amount ,
      ref: this.ref ,
      metadata: this.metadata || {},
      currency: this.currency || 'NGN' ,
      plan: this.plan || '' ,
      channels: this.channels || ['card', 'bank'],
      quantity: this.quantity || '' ,
      subaccount: this.subaccount || '' ,
      transaction_charge: this.transaction_charge || 0 ,
      bearer: this.bearer || '' ,
      callback: (res) => {
        this.isPaying = false;
        this.callback.emit(res);
      },
      onClose: () => {
        this.isPaying = false;
        this.close.emit();
      },
    };
  }
  ngOnInit() {
    if (this.text) {
      console.error(
        'Paystack Text input is deprecated. Add text into textnode like so <angular4-paystack>Pay With Paystack</angular4-paystack>'
      );
    }
  }

}
