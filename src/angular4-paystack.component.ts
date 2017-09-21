import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaystackOptions } from "./paystack-options";

interface MyWindow extends Window {
  PaystackPop: any
}
declare var window: MyWindow
 
@Component({
  selector: 'angular4-paystack',
  template: `<button [ngClass]="class" [ngStyle]="style" (click)="pay()">{{text}}</button>`,
})
export class Angular4PaystackComponent implements OnInit {
  @Input() text: string
  @Input() key: string
  @Input() email: string
  @Input() amount: number
  @Input() metadata: {}
  @Input() ref: string
  @Input() currency: string
  @Input() plan: string
  @Input() quantity: string
  @Input() subaccount: string
  @Input() transaction_charge: number
  @Input() bearer: string
  @Input() class: string
  @Input() style: object
  @Output() close: EventEmitter<string> = new EventEmitter<string>()
  @Output() callback: EventEmitter<string> = new EventEmitter<string>()
  private paystackOptions: PaystackOptions
  constructor() {}

  pay() {
    this.setUp()
    console.log("OK payment will begin")
    if(!this.checkInput()) return
    const payment = window.PaystackPop.setup(this.paystackOptions)
    payment.openIframe()
  }
  checkInput(){
    if(!this.key) return console.error("Paystack key cannot be empty")
    if(!this.email) return console.error("Paystack email cannot be empty")
    if(!this.amount) return console.error("Paystack amount cannot be empty")
    if(!this.ref) return console.error("Paystack ref cannot be empty")
    return true
  }
  
  setUp() {
    this.paystackOptions = {
      key: this.key ,
      email: this.email ,
      amount: this.amount ,
      ref: this.ref ,
      metadata: this.metadata || {},
      currency: this.currency || "NGN" ,
      plan: this.plan || "" ,
      quantity: this.quantity || "" ,
      subaccount: this.subaccount || "" ,
      transaction_charge: this.transaction_charge || 0 ,
      bearer: this.bearer || "" ,
      callback: (res) => this.callback.emit(res),
      onClose: () => this.close.emit(),
    }
  }
  ngOnInit() {
  }

}
