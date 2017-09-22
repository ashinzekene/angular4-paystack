import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  paymentDone(ref) {
    console.log(ref)
    this.title = `Payment Complete ${ref}`
  }

  paymentCancel() {
    this.title = `Payment Cancelled`
  }
}
