import { EventEmitter } from '@angular/core';

export interface PaystackOptions {
  amount: number;
  transaction_charge?: number;
  key?: string;
  email: string;
  ref: string;
  metadata?: {};
  currency?: string;
  plan?: string;
  quantity?: string;
  subaccount?: string;
  bearer?: string;
  container?: string;
  channels?: string[];
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
