import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompComponent } from './test-comp.component';

describe('TestCompComponent', () => {
  let component: TestCompComponent;
  let fixture: ComponentFixture<TestCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
