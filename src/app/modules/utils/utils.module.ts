import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteredFieldComponent } from './filtered-field/filtered-field/filtered-field.component';
import { RouterModule } from '@angular/router';
import {
  MefDevCardModule,
  MefDevFilteredFieldModule,
  MefDevModalModule,
  MefDevSelectModule,
  MefDevTabsModule
} from '@natec/mef-dev-ui-kit';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MefDevPageLayoutsModule } from '@natec/mef-dev-ui-kit';


@NgModule({
  declarations: [
      FilteredFieldComponent,
  ],
  imports: [
    MefDevPageLayoutsModule,
    MefDevTabsModule,
    NgxDatatableModule,
    CommonModule,
    MefDevSelectModule,
    MefDevFilteredFieldModule,
    MefDevCardModule,
    MefDevModalModule,
    RouterModule.forChild([
      {
        path: "filtered_field",
        loadChildren: () => import('./filtered-field/filtered-field.module').then(m => m.FilteredFieldModule)
      },
      {
        path: "main_executor",
        loadChildren: () => import('./executors/executors.module').then(m => m.ExecutorsModule)
      },
    ]),
  ]
})
export class UtilsModule { }
