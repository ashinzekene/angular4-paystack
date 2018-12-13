import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { PaystackOptions } from './paystack-options';

interface MyWindow extends Window {
  PaystackPop: {
    setup(options: Partial<PaystackOptions>): { openIframe(): any }
  };
}
declare var window: MyWindow;

@Directive({
  selector: '[angular4-paystack]',
})
export class Angular4PaystackDirective {
  @Input() text: string;
  @Input() key: string;
  @Input() email: string;
  @Input() amount: number;
  @Input() metadata: {};
  @Input() ref: string;
  @Input() currency: string;
  @Input() plan: string;
  @Input() quantity: string;
  @Input() subaccount: string;
  @Input() channels: string[];
  @Input() transaction_charge: number;
  @Input() bearer: string;
  @Input() class: string;
  @Input() style: object;
  @Output() close: EventEmitter<string> = new EventEmitter<string>();
  @Output() callback: EventEmitter<string> = new EventEmitter<string>();
  private paystackOptions: PaystackOptions;
  private isPaying = false;
  constructor() {
    this.setUp();
  }

  pay() {
    this.setUp();
    if (!this.checkInput()) { return; }
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
      quantity: this.quantity || '' ,
      subaccount: this.subaccount || '' ,
      channels: this.channels || ['card', 'bank'],
      transaction_charge: this.transaction_charge || 0 ,
      bearer: this.bearer || '' ,
      callback: (res) => {
        this.isPaying = false;
        this.callback.emit(res);
      },
      onClose: () => {
        this.isPaying = false;
        this.close.emit();
      }
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

  @HostListener('click')
  async buttonClick() {
    if (this.isPaying) { return; }
    await this.loadScript();
    this.pay();
  }
}
