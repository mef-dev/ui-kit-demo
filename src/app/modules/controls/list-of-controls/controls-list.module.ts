import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsListComponent } from './controls-list/controls-list.component';
import { RouterModule } from '@angular/router';
import {
  MefDevCardModule,
  MefDevDatepickerModule,
  MefDevSelectModule,
  MefDevSliderModule,
  MefDevSwitchModule
} from '@natec/mef-dev-ui-kit';

@NgModule({
  declarations: [
    ControlsListComponent
  ],
  exports: [
    ControlsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: "", component: ControlsListComponent}]),
    MefDevCardModule,
    MefDevSelectModule,
    MefDevSwitchModule,
    MefDevSliderModule,
    MefDevDatepickerModule,
  ]
})
export class ControlsListModule { }
