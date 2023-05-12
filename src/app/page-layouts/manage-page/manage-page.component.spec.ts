import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePageExampleComponent } from './manage-page.component';

describe('ManagePageComponent', () => {
  let component: ManagePageExampleComponent;
  let fixture: ComponentFixture<ManagePageExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePageExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
