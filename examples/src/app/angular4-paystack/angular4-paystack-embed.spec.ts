import { async, TestBed } from "@angular/core/testing";
import { Angular4PaystackEmbed } from "./angular4-paystack-embed.component";

let comp
describe("Angular4-Paystack Embed", ()=> {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ Angular4PaystackEmbed ],
    })
    .compileComponents()
  })

  beforeEach(() => {
    let fixture = TestBed.createComponent(Angular4PaystackEmbed);
    comp = fixture.componentInstance
  })
  
  it("Should fail validation if key is not supplied", () => {
    comp.amount = 1235678
    comp.email = "ashinzekene@gmail.com"
    comp.callback.subscribe((res) => {})
    expect(comp.checkInput()).toBeFalsy()
  })
  
  it("Should fail validation if amount is not supplied", () => {
    comp.key = "pk_test_*************"
    comp.email = "ashinzekene@gmail.com"
    comp.callback.subscribe((res) => {})
    expect(comp.checkInput()).toBeFalsy()
  })
  
  it("Should fail validation if amount is not a number", () => {
    comp.key = "pk_test_*************"
    comp.email = "ashinzekene@gmail.com"
    comp.ref = "jfdi9urrktkkgkd"
    comp.callback.subscribe((res) => {})
    expect(comp.checkInput()).toBeFalsy()
  })
  
  it("Should fail validation if ref is not supplied", () => {
    comp.key = "pk_test_*************"
    comp.email = "ashinzekene@gmail.com"
    comp.amount = 5000000
    comp.callback.subscribe((res) => {})
    expect(comp.checkInput()).toBeFalsy()
  })
  
  it("Should fail valiation if callback is not supplied", () => {
    comp.key = "pk_test_*************"
    comp.email = "ashinzekene@gmail.com"
    comp.amount = 5000000
    comp.ref = "950gjvkjbk"
    expect(comp.checkInput()).toBeFalsy()
  })
  
  it("Should fail valiation if style is supplied", () => {
    comp.key = "pk_test_*************"
    comp.email = "ashinzekene@gmail.com"
    comp.amount = 5000000
    comp.style = { color: "rred" } 
    expect(comp.checkInput()).toBeFalsy()
  })
  
  it("Should pass valiation if ref, amount, email and key and callback is supplied", () => {
    comp.key = "pk_test_*************"
    comp.email = "ashinzekene@gmail.com"
    comp.amount = 5000000
    comp.ref = "950gjvkjbk"
    comp.callback.subscribe((res) => {})
    expect(comp.checkInput()).toBeTruthy()
  })
  
})