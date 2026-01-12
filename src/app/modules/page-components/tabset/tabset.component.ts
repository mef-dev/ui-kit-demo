import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MefDevSwitchModule } from '@natec/mef-dev-ui-kit';
import { MefDevCardModule, MefDevSelectModule, MefDevTabsModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'app-tabset',
    templateUrl: './tabset.component.html',
    styleUrls: ['./tabset.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MefDevCardModule,
        MefDevTabsModule,
        MefDevSwitchModule,
        MefDevSelectModule
    ],
})
export class TabsetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
