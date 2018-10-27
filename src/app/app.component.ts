import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'My app';
  public results = {
    name: ''
  };
  tRef = '';
  result = '';
  constructor() {}

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
  }

  paymentCancel() {
    this.title = 'Payment failed';
    console.log(this.title);
  }

  ngOnInit() {
    this.tRef = `${Math.random() * 10000000000000}`;
  }

}
