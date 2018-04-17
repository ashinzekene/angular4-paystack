import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'app';
  public results = {
    name: ''
  }
  result = ""
  constructor() {}

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
    this.results.name = title
    console.log("setting title to ", title)
    this.resetTitle()
  }
  
  paymentCancel() {
    this.setTitle(`Payment Cancelled`)
    console.log(this)
    console.log(this.title)
  }
  letMeKnow(str) {
    this.title = "Let them know"
    console.log("Emitter not issue")
  }  
}
