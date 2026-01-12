import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StepExecutorComponent } from './step-executor/step-executor.component';
import {
    MefDevSelectModule,
    MefDevStepExecutorModule,
    MefDevSwitchModule,
    MefDevTabsModule
} from '@natec/mef-dev-ui-kit';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        StepExecutorComponent,
    ],
    imports: [
        FormsModule,
        MefDevSelectModule,
        MefDevStepExecutorModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: StepExecutorComponent
            },
        ]),
        MefDevSwitchModule,
        MefDevTabsModule,
    ]
})
export class ExecutorsModule { }
