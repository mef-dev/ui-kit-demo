import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDCardModule, MDTabsModule, MefDevCardModule, MefDevSelectModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MDCardModule,
        MDTabsModule,
        MefDevCardModule,
        MefDevSelectModule
    ],
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
