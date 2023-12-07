import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteredFieldComponent } from './filtered-field/filtered-field/filtered-field.component';
import { HelpBlockComponent } from './help-block/help-block/help-block.component';
import { RouterModule } from '@angular/router';
import {
  MefDevCardModule,
  MefDevDatepickerModule,
  MefDevFilteredFieldModule,
  MefDevHelpBlockModule,
  MefDevModalModule,
  MefDevSelectModule,
  MefDevSliderModule,
  MefDevTabsModule
} from '@natec/mef-dev-ui-kit';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { MefDevPageLayoutsModule } from '@natec/mef-dev-ui-kit';


@NgModule({
  declarations: [
      FilteredFieldComponent,
      HelpBlockComponent,
  ],
  imports: [
    MefDevPageLayoutsModule,
    MefDevTabsModule,
    NgxDatatableModule,
    CommonModule,
    MefDevSelectModule,
    MefDevFilteredFieldModule,
    MefDevHelpBlockModule,
    MefDevCardModule,
    MefDevModalModule,
    RouterModule.forChild([
      {
        path: "filtered_field",
        loadChildren: () => import('./filtered-field/filtered-field.module').then(m => m.FilteredFieldModule)
      },
      {
        path: "datepicker",
        loadChildren: () => import('./datepicker/datepicker.module').then(m => m.DatepickerModule)
      },
      {
        path: "help_block",
        loadChildren: () => import('./help-block/help-block.module').then(m => m.HelpBlockModule)
      },
      {
        path: "main_executor",
        loadChildren: () => import('./executors/executors.module').then(m => m.ExecutorsModule)
      },
    ]),
    MefDevDatepickerModule,
    MefDevSliderModule,
  ]
})
export class UtilsModule { }
