import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRedactorComponent } from './my-redactor.component';

describe('MyRedactorComponent', () => {
  let component: MyRedactorComponent;
  let fixture: ComponentFixture<MyRedactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRedactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRedactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
