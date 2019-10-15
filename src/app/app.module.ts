import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular4PaystackModule.forRoot("pk_test_c613fc7d428a64fd1e5daea22f8380551b28c78e")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
