import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular4PaystackDirective } from './angular4-paystack.directive';
import { Angular4PaystackService } from './angular4-paystack.service';
import { PUBLIC_KEY_TOKEN } from './paystack-token';
import { Component } from '@angular/core';

@Component({
  template: `<button type="text" angular-rave></button>`
})
class TestComponent {
}

describe('Angular4PaystackDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular4PaystackDirective, TestComponent ],
      providers: [
        Angular4PaystackService,
        { provide: PUBLIC_KEY_TOKEN, useValue: 'public-key' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
