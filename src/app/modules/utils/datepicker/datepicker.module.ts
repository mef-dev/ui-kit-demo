import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatepickerExampleComponent } from './datepicker/datepicker.component';
import {
  MefDevCardModule,
  MefDevDatepickerModule,
  MefDevSelectModule,
  MefDevSliderModule,
  MefDevSwitchModule
} from '@natec/mef-dev-ui-kit';

@NgModule({
  declarations: [
    DatepickerExampleComponent,
  ],
  imports: [
    MefDevDatepickerModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: DatepickerExampleComponent
      },
    ]),
    MefDevCardModule,
    MefDevSliderModule,
    MefDevSwitchModule,
    MefDevSelectModule,
  ]
})
export class DatepickerModule { }
