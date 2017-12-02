import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { Angular4PaystackComponent } from './angular4-paystack.component';
import { Angular4PaystackEmbed } from "./angular4-paystack-embed.component";

@NgModule({
  imports: [CommonModule],
  exports: [Angular4PaystackComponent, Angular4PaystackEmbed],
  declarations: [Angular4PaystackComponent, Angular4PaystackEmbed],
  providers: [],
})
export class Angular4PaystackModule { }
