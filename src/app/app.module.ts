import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular4PaystackModule.forRoot('pk_test_24673c9637a1bf06e5fb6eb989012747183eb2ae')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
