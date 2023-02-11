import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular4PaystackComponent } from './angular4-paystack.component';

describe('Angular4PaystackComponent', () => {
  let component: Angular4PaystackComponent;
  let fixture: ComponentFixture<Angular4PaystackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular4PaystackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular4PaystackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
