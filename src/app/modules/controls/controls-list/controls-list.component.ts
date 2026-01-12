import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDCardModule, MDTabsModule, MefDevCardModule, MefDevSelectModule, MefDevSwitchModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'app-controls-list',
    templateUrl: './controls-list.component.html',
    styleUrls: ['./controls-list.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MDCardModule,
        MDTabsModule,
        MefDevCardModule,
        MefDevSelectModule,
        MefDevSwitchModule
    ],
})

export class ControlsListComponent {

}
