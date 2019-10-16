import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PaystackOptions, PrivatePaystackOptions } from './paystack-options';
import { Angular4PaystackService } from './angular4-paystack.service';

interface MyWindow extends Window {
  PaystackPop: any;
}
declare var window: Partial<MyWindow>;

@Component({
  selector: 'angular4-paystack-embed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div id="paystackEmbedContainer"></div>`
})

export class Angular4PaystackEmbedComponent implements OnInit {
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
  @Input() transaction_charge: number; // tslint:disable-line
  @Input() bearer: string;
  @Input() paystackOptions: PaystackOptions;
  @Output() paymentInit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>(); // tslint:disable-line
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();
  public _paystackOptions: Partial<PrivatePaystackOptions>; // tslint:disable-line

  constructor(private paystackService: Angular4PaystackService) {}

  async pay() {
    let errorText = '';
    if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
      errorText = this.valdateInput(this.paystackOptions);
      this.generateOptions(this.paystackOptions);
    } else {
      errorText = this.valdateInput(this);
      this.generateOptions(this);
    }
    if (errorText) {
      console.error(errorText);
      return errorText;
    }
    await this.paystackService.loadScript();
    if (this.paymentInit.observers.length) {
      this.paymentInit.emit();
    }
    const payment = window.PaystackPop.setup(this._paystackOptions);
    payment.openIframe();
  }
  
  valdateInput(obj: PaystackOptions) {
    if (!this.callback.observers.length) {
      return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
    }
    return this.paystackService.checkInput(obj)
  }

  generateOptions(obj: PaystackOptions) {
    this._paystackOptions = this.paystackService.getPaystackOptions(obj);
    this._paystackOptions.onClose = () => {
      if (this.onClose.observers.length) {
        this.onClose.emit();
      }
    };
    this._paystackOptions.callback = (...response) => {
      this.callback.emit(...response);
    };
  }

  async ngOnInit() {
    console.error(
      'ANGULAR-PAYSTACK: The paystack embed option is deprecated. Please use the paystack component or directive'
    );
    this.pay();
  }

}
