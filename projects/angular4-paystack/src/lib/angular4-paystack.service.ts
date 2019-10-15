import { Injectable, Inject } from '@angular/core';
import { PUBLIC_KEY_TOKEN } from './paystack-token';
import { PaystackOptions, PrivatePaystackOptionsWithEmitters } from './paystack-options';

interface MyWindow extends Window {
  PaystackPop: {
    setup(options: Partial<PaystackOptions>): { openIframe(): any }
  };
}
declare var window: MyWindow;

@Injectable({
  providedIn: 'root',
})
export class Angular4PaystackService {
  constructor(@Inject(PUBLIC_KEY_TOKEN) private token: string) {}

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

  checkInput(obj: Partial<PrivatePaystackOptionsWithEmitters>): string {
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
    if (!obj.callback.observers.length) {
      return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
    }
    return '';
  }

  getPaystackOptions(obj: PaystackOptions): PaystackOptions {
    const paystackOptions: PaystackOptions = {
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
      transaction_charge: obj.transaction_charge || 0, // tslint:disable-line
      bearer: obj.bearer || '',
    };
    return paystackOptions;
  }

}
