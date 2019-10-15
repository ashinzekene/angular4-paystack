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
});
