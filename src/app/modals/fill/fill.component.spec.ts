import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillCExampleomponent } from './fill.component';

describe('FillComponent', () => {
  let component: FillCExampleomponent;
  let fixture: ComponentFixture<FillCExampleomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillCExampleomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillCExampleomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
