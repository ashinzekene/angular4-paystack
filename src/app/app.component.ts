import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'app';
  public results = {
    name: ''
  }
  tRef: string = ""
  result = ""
  constructor() {}

  paymentDone(ref) {
    this.title = "Payment successfull"
    console.log(this.title)
  }

  paymentCancel() {
    this.title = "Payment failed"
    console.log(this.title)
  }

  ngOnInit() {
    this.tRef = `${Math.random() * 10000000000000}`
  }
  
}
