import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Angular4PaystackComponent } from './angular4-paystack.component';
import { Angular4PaystackEmbedComponent } from './angular4-paystack-embed.component';
import { Angular4PaystackDirective } from './angular4-paystack.directive';
import { Angular4PaystackService } from './angular4-paystack.service';
import { PUBLIC_KEY_TOKEN } from './paystack-token';

@NgModule({
  imports: [CommonModule],
  exports: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent],
  declarations: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent],
  providers: [],
})
export class Angular4PaystackModule {
  static forRoot(token: string): ModuleWithProviders {
    return {
      ngModule: Angular4PaystackModule,
      providers: [
        Angular4PaystackService,
        { provide: PUBLIC_KEY_TOKEN, useValue: token }
      ]
    };
  }
}
