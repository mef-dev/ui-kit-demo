import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { RouterModule } from '@angular/router';
import { MefDevSelectModule }  from '@natec/mef-dev-ui-kit';
import { MefDevCardModule }  from '@natec/mef-dev-ui-kit';




@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    MefDevCardModule,
    CommonModule,
		MefDevSelectModule,
    RouterModule.forChild([{path: "",component: SelectComponent}]),
  ]
})
export class SelectModule { }
