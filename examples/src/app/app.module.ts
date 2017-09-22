import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angular4PaystackModule } from './angular4-paystack/angular4-paystack.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular4PaystackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
