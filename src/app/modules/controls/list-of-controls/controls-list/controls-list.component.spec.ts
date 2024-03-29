import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsListComponent } from './controls-list.component';

describe('ControlsListComponent', () => {
  let component: ControlsListComponent;
  let fixture: ComponentFixture<ControlsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlsListComponent]
    });
    fixture = TestBed.createComponent(ControlsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
