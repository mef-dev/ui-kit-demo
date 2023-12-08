import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerExampleComponent } from './datepicker.component';

describe('DatepickerExampleComponent', () => {
  let component: DatepickerExampleComponent;
  let fixture: ComponentFixture<DatepickerExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerExampleComponent]
    })
    fixture = TestBed.createComponent(DatepickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
