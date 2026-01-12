import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MDSelectModule, MDSwitchModule, MDTabsModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'tab-group-legacy-example',
    templateUrl: 'tab-group-legacy-example.html',
    imports: [CommonModule, RouterModule, MDTabsModule, MDSelectModule, MDSwitchModule],
})
export class TabGroupLegacyExample {
    tabIndex = 0;
    secondTabIndex = 1;
}
