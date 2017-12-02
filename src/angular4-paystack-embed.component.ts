import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { PaystackOptions } from "./paystack-options";

interface myWindow extends Window {
  PaystackPop: any
}
declare var window: Partial<myWindow>

@Component({
  selector: 'angular4-paystack-embed',
  template: `<div id="paystackEmbedContainer"></div>`
})

export class Angular4PaystackEmbed implements OnInit {
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
  @Output() close: EventEmitter<string> = new EventEmitter<string>()
  @Output() callback: EventEmitter<string> = new EventEmitter<string>()
  private paystackOptions: Partial<PaystackOptions>;
  constructor() {}

  pay() {
    this.setUp()
    console.log("OK payment will begin")
    if(!this.checkInput()) return
    window.PaystackPop.setup(this.paystackOptions)
  }
  checkInput(){
    if(!this.key) return console.error("Paystack key cannot be empty")
    if(!this.email) return console.error("Paystack email cannot be empty")
    if(!this.amount) return console.error("Paystack amount cannot be empty")
    if(!this.ref) return console.error("Paystack ref cannot be empty")
    if (!this.callback.observers.length) return console.error(`Insert a callback output like so (callback)='PaymentComplete($event)' to check payment status`)
    return true
  }
  
  setUp() {
    this.paystackOptions = {
      container: "paystackEmbedContainer",
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
    if(this.text) {
      console.error("Paystack Text input is deprecated. Add text into textnode like so <angular4-paystack>Pay With Paystack</angular4-paystack>")      
    }
    this.pay()
  }

}
