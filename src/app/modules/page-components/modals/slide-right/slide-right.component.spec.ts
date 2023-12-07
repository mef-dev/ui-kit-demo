import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideRightExampleComponent } from './slide-right.component';

describe('SlideRightComponent', () => {
  let component: SlideRightExampleComponent;
  let fixture: ComponentFixture<SlideRightExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideRightExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideRightExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
