import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FillExampleComponent } from './fill/fill.component';
import { SlideRightExampleComponent } from './slide-right/slide-right.component';
import { SlideUpExampleComponent } from './slide-up/slide-up.component';
import { MefDevCardModule, MefDevModalModule }  from '@natec/mef-dev-ui-kit';
import { RightFilterComponent } from './right-filter/right-filter.component';

@NgModule({
  declarations: [
    FillExampleComponent,
    SlideRightExampleComponent,
    SlideUpExampleComponent,
    RightFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MefDevCardModule,
    MefDevModalModule,
    RouterModule.forChild([

      {
        path:"fill", component: FillExampleComponent
      },
      {
        path:"slide-right", component: SlideRightExampleComponent
      },
      {
        path:"slide-up", component: SlideUpExampleComponent
      }


    ]),

  ],

})

export class ModalsModule { }
