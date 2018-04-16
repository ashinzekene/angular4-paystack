import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {
  @Output() payment: EventEmitter<string> = new EventEmitter()

  constructor() { }

  paymentCancel() {
    console.log("Payment cancelled")
    this.payment.emit("Hey I have cancelled the payment")
  }

  paymentDone() {
    console.log("Payment Done")
  }

  ngOnInit() {
    
  }

}
