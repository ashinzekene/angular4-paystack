import { Component, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'app';
  result = ""
  constructor(private appRef: ApplicationRef) {}

  paymentDone(ref) {
    console.log(ref)
    this.setTitle(`Payment Complete ${ref}`)
    console.log(this.title)
  }

  resetTitle() {
    console.log(this.title)
  }

  setTitle(title) {
    this.title = title
    this.result = title
    console.log("setting title to ", title)
    this.resetTitle()
  }
  
  paymentCancel() {
    this.setTitle(`Payment Cancelled`)
    console.log(this.title)
    this.appRef.tick()
  }
}
