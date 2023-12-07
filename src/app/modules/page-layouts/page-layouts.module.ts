import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { CentralPageComponent } from './central-page/central-page.component';
import { MefDevPageLayoutsModule, MefDevTabsModule } from '@natec/mef-dev-ui-kit';
import { RouterModule } from '@angular/router';
import { ManagePageExampleComponent } from './manage-page/manage-page.component';
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
        MefDevTabsModule,
        RouterModule.forChild([
            {
                path: "central_page", component: CentralPageComponent
            },
            {
                path: "manage_page", component: ManagePageExampleComponent
            },
            {
                path: "profile", component: ProfileComponent
            },
            {
                path: "table_page", component: TablePageComponent
            }
        ]),
    ]
})
export class PageLayoutsModule { }
