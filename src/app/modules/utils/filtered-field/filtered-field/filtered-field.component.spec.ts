import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredFieldComponent } from './filtered-field.component';

describe('FilteredFieldComponent', () => {
  let component: FilteredFieldComponent;
  let fixture: ComponentFixture<FilteredFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
