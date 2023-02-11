import { TestBed, inject } from '@angular/core/testing';

import { Angular4PaystackService } from './angular4-paystack.service';
import { PUBLIC_KEY_TOKEN } from './paystack-token';

describe('Angular4PaystackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Angular4PaystackService,
        { provide: PUBLIC_KEY_TOKEN, useValue: 'public-key' }
      ]
    });
  });

  it('should be created', inject([Angular4PaystackService], (service: Angular4PaystackService) => {
    expect(service).toBeTruthy();
  }));

  it('should inject tokens', inject([Angular4PaystackService], (service: any) => {
    expect(service.token).toEqual('public-key');
  }));
});
