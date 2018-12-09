import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PaystackOptions } from './paystack-options';

interface MyWindow extends Window {
  PaystackPop: any;
}
declare var window: Partial<MyWindow>;

@Component({
  selector: 'angular4-paystack-embed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div id="paystackEmbedContainer"></div>`
})

export class Angular4PaystackEmbed implements OnInit {
  @Input() text: string;
  @Input() key: string;
  @Input() email: string;
  @Input() amount: number;
  @Input() metadata: {};
  @Input() channels: string[];
  @Input() ref: string;
  @Input() currency: string;
  @Input() plan: string;
  @Input() quantity: string;
  @Input() subaccount: string;
  @Input() transaction_charge: number;
  @Input() bearer: string;
  @Output() paymentInit: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();
  private paystackOptions: Partial<PaystackOptions>;
  constructor() { }

  pay() {
    if (!this.checkInput()) { return; }
    this.setUp();
    if (this.paymentInit.observers.length) {
      this.paymentInit.emit();
    }
    window.PaystackPop.setup(this.paystackOptions);
  }
  checkInput() {
    if (!this.key) { return console.error('ANGULAR-PAYSTACK: Paystack key cannot be empty'); }
    if (!this.email) { return console.error('ANGULAR-PAYSTACK: Paystack email cannot be empty'); }
    if (!this.amount) { return console.error('ANGULAR-PAYSTACK: Paystack amount cannot be empty'); }
    if (!this.ref) { return console.error('ANGULAR-PAYSTACK: Paystack ref cannot be empty'); }
    if (!this.callback.observers.length) {
      return console.error(`
        ANGULAR-PAYSTACK: Insert a callback output like so (callback)='PaymentComplete($event)' to check payment status
      `);
    }
    return true;
  }

  setUp() {
    this.paystackOptions = {
      container: 'paystackEmbedContainer',
      key: this.key,
      email: this.email,
      amount: this.amount,
      ref: this.ref,
      metadata: this.metadata || {},
      currency: this.currency || 'NGN',
      plan: this.plan || '',
      quantity: this.quantity || '',
      subaccount: this.subaccount || '',
      channels: this.channels || ['card', 'bank'],
      transaction_charge: this.transaction_charge || 0,
      bearer: this.bearer || '',
      callback: (res) => this.callback.emit(res),
      onClose: () => this.close && this.close.emit(),
    };
  }

  loadScript(): Promise<void> {
    return new Promise(resolve => {
      if (window.PaystackPop && typeof window.PaystackPop.setup === 'function') {
        resolve();
        return;
      }
      const script = window.document.createElement('script');
      window.document.head.appendChild(script);
      const onLoadFunc = () => {
        script.removeEventListener('load', onLoadFunc);
        resolve();
      };
      script.addEventListener('load', onLoadFunc);
      script.setAttribute('src', 'https://js.paystack.co/v1/inline.js');
    });
  }

  ngOnInit() {
    (async () => {
      await this.loadScript();
      if (this.text) {
        console.error(
          'ANGULAR-PAYSTACK: Paystack Text input is deprecated. Use this instead <angular4-paystack>Pay With Paystack</angular4-paystack>'
        );
      }
      this.pay();
    })();
  }

}
