import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch/switch.component';
import { MefDevSwitchModule } from '@natec/mef-dev-ui-kit';
import { RouterModule } from '@angular/router';
import { MefDevCardModule } from '@natec/mef-dev-ui-kit';
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations: [
        SwitchComponent
    ],
    imports: [
        MefDevCardModule,
        FormsModule,
        CommonModule,
        MefDevSwitchModule,
        RouterModule.forChild([{path: "",component: SwitchComponent}])

    ]
})
export class SwitchModule { }
