import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MefDevCardModule } from '@natec/mef-dev-ui-kit';
import { SliderComponent } from './slider/slider.component';
import { MefDevSliderModule } from '@natec/mef-dev-ui-kit';



@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    MefDevCardModule,
    MefDevSliderModule,
    RouterModule.forChild([
      {
        path: "", component: SliderComponent
      },
    ])
  ]
})
export class SliderModule { }
