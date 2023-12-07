import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FillExampleComponent } from './fill/fill.component';
import { SlideRightExampleComponent } from './slide-right/slide-right.component';
import { SlideUpExampleComponent } from './slide-up/slide-up.component';
import {
  MefDevCardModule,
  MefDevDatepickerModule,
  MefDevModalModule,
  MefDevPageLayoutsModule,
  MefDevSelectModule,
  MefDevSliderModule,
  MefDevSwitchModule
} from '@natec/mef-dev-ui-kit';

@NgModule({
  declarations: [
    FillExampleComponent,
    SlideRightExampleComponent,
    SlideUpExampleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MefDevCardModule,
    MefDevModalModule,
    MefDevPageLayoutsModule,
    RouterModule.forChild([
      {
        path: "fill", component: FillExampleComponent
      },
      {
        path: "slide_right", component: SlideRightExampleComponent
      },
      {
        path: "slide_up", component: SlideUpExampleComponent
      }
    ]),
    MefDevSelectModule,
    MefDevSwitchModule,
    MefDevDatepickerModule,
    MefDevSliderModule,
  ],

})

export class ModalsModule { }
