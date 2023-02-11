import { TestBed } from '@angular/core/testing';

import { Angular4PaystackService } from './angular4-paystack.service';

describe('Angular4PaystackService', () => {
  let service: Angular4PaystackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Angular4PaystackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
