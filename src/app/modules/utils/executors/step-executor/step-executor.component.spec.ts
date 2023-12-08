import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepExecutorComponent } from './step-executor.component';

describe('StepExecutorComponent', () => {
  let component: StepExecutorComponent;
  let fixture: ComponentFixture<StepExecutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepExecutorComponent]
    });
    fixture = TestBed.createComponent(StepExecutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
