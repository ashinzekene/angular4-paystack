import { Component, OnInit } from '@angular/core';
import { PaystackOptions } from 'angular4-paystack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public showEmbed = false;
  options: PaystackOptions = {
    amount: 50000,
    email: 'user@mail.com',
    split_code: 'SPL_nZXNafVgCd',
    ref: `${Math.ceil(Math.random() * 10e10)}`
  };
  public results = {
    name: ''
  };
  tRef = '';
  result = '';
  constructor() {}

  toggleEmbed() {
    this.showEmbed = !this.showEmbed;
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
  }

  paymentCancel() {
    this.title = 'Payment failed';
    console.log(this.title);
  }

  setRandomPaymentRef() {
    this.tRef = `${Math.random() * 10000000000000}`;
  }

  ngOnInit() {
    this.setRandomPaymentRef();
  }

}
