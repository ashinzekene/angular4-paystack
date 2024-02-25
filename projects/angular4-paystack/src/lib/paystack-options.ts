import { EventEmitter } from '@angular/core';

export interface PaystackOptions {
  /**
   * Amount to withdraw (in kobo for NGN)
   */
  amount: number;
  /**
   * A flat fee to charge the subaccount for this transaction, in kobo.
   */
  transaction_charge?: number;
  /**
   * Your pubic Key from Paystack. Use test key for test mode and live key for live mode
   */
  key?: string;
  /**
   * The customer's email address
   */
  email: string;
  /**
   * Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed.
   */
  ref: string;
  /**
   * custom details
   * eg `{date: 12-05-2020}`
   */
  metadata?: {};
  /**
   * Transaction currency
   * Default `NGN`
   */
  currency?: string;
  /**
   * If transaction is to create a subscription to a predefined plan, provide plan code here.
   */
  plan?: string;
  /**
   * Used to apply a multiple to the amount returned by the plan code above.
   */
  quantity?: string;
  /**
   * The code for the subaccount that owns the payment.
   */
  subaccount?: string;
  /**
   * Who bears Paystack charges? account or subaccount
   */
  bearer?: string;
  /**
   * Send 'card' or 'bank' or 'card','bank' as an array to specify what options to show the user paying
   */
  channels?: string[];
  /**
   * Used to apply multiple Split on Payments
   */
  split_code?: string;
}

export interface PrivatePaystackOptions extends PaystackOptions {
  /**
   * A function to be called on successful card charge. User’s can always be redirected to a successful or
   * failed page supplied by the merchant here based on response
   * @param response?: The server response
   */
  callback: (response?: any) => void;
  /**
   * A function to be called when the pay modal is closed.
   */
  onClose: () => void;
  /**
   * A function to be called when payment is about to begin
   */
  init: () => void;
}

export interface PrivatePaystackOptionsWithEmitters extends PaystackOptions {
  /**
   * A function to be called on successful card charge. User’s can always be redirected to a successful or
   * failed page supplied by the merchant here based on response
   */
  callback: EventEmitter<any>;
  /**
   * A function to be called when the pay modal is closed.
   */
  onClose: EventEmitter<void>;
  /**
   * A function to be called when payment is about to begin
   */
  init: EventEmitter<void>;
}
