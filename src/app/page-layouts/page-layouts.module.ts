import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { CentralPageComponent } from './central-page/central-page.component';
import { MefDevPageLayoutsModule } from '@natec/mef-dev-ui-kit';
import { RouterModule } from '@angular/router';
import { ManagePageExampleComponent } from './manage-page/manage-page.component';
import { MefDevTabsModule } from "@natec/mef-dev-ui-kit";
import { TablePageComponent } from './table-page/table-page.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
    declarations: [
        ProfileComponent,
        CentralPageComponent,
        ManagePageExampleComponent,
        TablePageComponent,
    ],
    imports: [
        MefDevPageLayoutsModule,
        CommonModule,
        NgxDatatableModule,
        RouterModule.forChild([
            {
                path: "central-page", component: CentralPageComponent
            },
            {
                path: "menage-page", component: ManagePageExampleComponent
            },
            {
                path: "profile", component: ProfileComponent
            },
            {
                path: "table-page", component: TablePageComponent
            }
        ]),
        MefDevTabsModule
    ]
})
export class PageLayoutsModule { }
