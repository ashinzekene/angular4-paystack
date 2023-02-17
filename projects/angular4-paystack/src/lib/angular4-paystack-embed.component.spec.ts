import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular4PaystackEmbedComponent } from './angular4-paystack-embed.component';
import { Angular4PaystackService } from './angular4-paystack.service';
import { PUBLIC_KEY_TOKEN } from './paystack-token';

describe('Angular4PaystackEmbedComponent', () => {
  let component: Angular4PaystackEmbedComponent;
  let fixture: ComponentFixture<Angular4PaystackEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular4PaystackEmbedComponent ],
      providers: [
        Angular4PaystackService,
        { provide: PUBLIC_KEY_TOKEN, useValue: 'public-key' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular4PaystackEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not load the modal when the amount is not provided', async () => {
    spyOn(component.paymentInit, 'emit');
    component.email = 'someuser@email.com';
    component.ref = 'reference-val';
    component.callback.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toEqual('ANGULAR-PAYSTACK: Paystack amount cannot be empty');
    expect(component.paymentInit.emit).not.toHaveBeenCalled();
  });

  it('should not load the modal when the email is not provided', async () => {
    spyOn(component.paymentInit, 'emit');
    component.ref = 'reference-val';
    component.amount = 50000;
    component.callback.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toEqual('ANGULAR-PAYSTACK: Paystack email cannot be empty');
    expect(component.paymentInit.emit).not.toHaveBeenCalled();
  });

  it('should not load the modal when ref is not provided', async () => {
    spyOn(component.paymentInit, 'emit');
    component.email = 'someuser@email.com';
    component.amount = 50000;
    component.callback.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toEqual('ANGULAR-PAYSTACK: Paystack ref cannot be empty');
    expect(component.paymentInit.emit).not.toHaveBeenCalled();
  });

  it('should prefer key used by component', async () => {
    spyOn(component.paymentInit, 'emit');
    component.email = 'someuser@email.com';
    component.amount = 50000;
    component.key = 'another-key';
    component.callback.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toEqual('ANGULAR-PAYSTACK: Paystack ref cannot be empty');
    expect(component.paymentInit.emit).not.toHaveBeenCalled();
    expect(component._paystackOptions.key).toEqual(component.key);
  });

  it('should not load with incomplete paystackOptions object', async () => {
    spyOn(component.paymentInit, 'emit');
    component.paystackOptions = {
      email: 'someuser@email.com',
      ref: '',
      amount: 50000,
    };
    component.callback.subscribe(() => {});
    component.paymentInit.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toEqual('ANGULAR-PAYSTACK: Paystack ref cannot be empty');
    expect(component.paymentInit.emit).not.toHaveBeenCalled();
  });

  it('should accept the paystackOptions object', async () => {
    spyOn(component.paymentInit, 'emit');
    component.paystackOptions = {
      email: 'someuser@email.com',
      ref: 'reference-val',
      amount: 50000,
    };
    component.callback.subscribe(() => {});
    component.paymentInit.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toBe('');
    expect(component.paymentInit.emit).toHaveBeenCalled();
  });

  it('should load the modal when parameters are passed', async () => {
    spyOn(component.paymentInit, 'emit');
    component.email = 'someuser@email.com';
    component.ref = 'reference-val';
    component.amount = 50000;
    component.callback.subscribe(() => {});
    component.paymentInit.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toBe('');
    expect(component.paymentInit.emit).toHaveBeenCalled();
  });
});
