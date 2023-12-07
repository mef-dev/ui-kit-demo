import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilteredFieldComponent } from './filtered-field/filtered-field.component';
import { MefDevFilteredFieldModule } from '@natec/mef-dev-ui-kit';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MefDevTabsModule } from '@natec/mef-dev-ui-kit';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MefDevFilteredFieldModule,
    MefDevTabsModule,
    NgxDatatableModule,
    RouterModule.forChild([
    {
      path: "",
      component: FilteredFieldComponent
    },
  ]),

  ]
})
export class FilteredFieldModule { }
