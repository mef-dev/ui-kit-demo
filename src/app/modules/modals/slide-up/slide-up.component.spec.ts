import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideUpExampleComponent } from './slide-up.component';

describe('SlideUpComponent', () => {
  let component: SlideUpExampleComponent;
  let fixture: ComponentFixture<SlideUpExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideUpExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideUpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
