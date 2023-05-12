import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoNavContainerComponent } from './no-nav-container.component';

describe('NoNavContainerComponent', () => {
  let component: NoNavContainerComponent;
  let fixture: ComponentFixture<NoNavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoNavContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
