export interface PaystackOptions {
  amount: number;
  transaction_charge: number;
  key: string;
  email: string;
  ref: string;
  metadata?: {};
  currency: string;
  plan: string;
  quantity: string;
  subaccount: string;
  bearer: string;
  callback: (reference: string) => void ;
  onClose:  () => void;
  container?: string
}