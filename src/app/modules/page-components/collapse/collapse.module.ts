import { NgModule } from '@angular/core';
import { CollapseComponent } from './collapse/collapse.component';
import { RouterModule } from '@angular/router';
import {
  MefDevCollapseModule,
  MefDevSelectModule,
  MefDevSwitchModule
} from '@natec/mef-dev-ui-kit';


@NgModule({

  declarations: [
    CollapseComponent,
  ],
  imports: [
    MefDevCollapseModule,
    RouterModule.forChild([
      {

        path: "", component: CollapseComponent
      }

    ]),
    MefDevSwitchModule,
    MefDevSelectModule,
  ]
})
export class CollapseModule { }
