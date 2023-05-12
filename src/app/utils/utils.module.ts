import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteredFieldComponent } from './filtered-field/filtered-field.component';
import { HelpBlockComponent } from './help-block/help-block.component';
import { RouterModule } from '@angular/router';
import { MefDevHelpBlockModule } from "@natec/mef-dev-ui-kit";
import { MefDevCardModule, MefDevFilteredFieldModule, MefDevModalModule, MefDevSelectModule } from '@natec/mef-dev-ui-kit';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { MefDevPageLayoutsModule } from '@natec/mef-dev-ui-kit';
import { MefDevTabsModule } from "@natec/mef-dev-ui-kit";


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
                path: "filtered-field", component: FilteredFieldComponent
            },
            {
                path: "help-block", component: HelpBlockComponent
            },
        ]),
    ]
})
export class UtilsModule { }
