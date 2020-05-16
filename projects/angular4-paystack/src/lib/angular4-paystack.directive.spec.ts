import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { Angular4PaystackDirective } from "./angular4-paystack.directive";
import { Angular4PaystackService } from "./angular4-paystack.service";
import { PUBLIC_KEY_TOKEN } from "./paystack-token";

@Component({
  template: `<button
    type="text"
    class="btn btn-danger m-3"
    angular4-paystack
    [channels]="['card', 'bank']"
    [email]="'mailexample@mail.com'"
    [amount]="'5000000'"
    [ref]="'some-random-str'"
    (paymentInit)="paymentInit()"
    (onClose)="paymentCancel()"
    (callback)="paymentDone($event)"
    [class]="'btn btn-primary btn-lg'"
  >
    Pay
  </button> `,
})
class TestComponent {
  paymentInit() {
    return "initialized";
  }

  paymentDone(ref: any) {
    return "successful";
  }

  paymentCancel() {
    return "failed";
  }
}

describe("Angular4PaystackDirective", () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let payButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Angular4PaystackDirective, TestComponent],
      providers: [
        Angular4PaystackService,
        { provide: PUBLIC_KEY_TOKEN, useValue: "public-key" },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    payButton = fixture.debugElement.query(By.css("button"));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it('should make payment', () => {
  //   spyOn(component, "paymentInit")
  //   expect(component).toBeTruthy();
  //   payButton.triggerEventHandler("click", {})
  //   fixture.detectChanges();

  //   expect(component.paymentInit).toHaveBeenCalled()
  // });
});
