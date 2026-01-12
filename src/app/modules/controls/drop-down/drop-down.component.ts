import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDCardModule, MDTabsModule, MefDevCardModule, MefDevDropDownMenuModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'app-drop-down',
    templateUrl: './drop-down.component.html',
    styleUrls: ['./drop-down.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MDCardModule,
        MDTabsModule,
        MefDevDropDownMenuModule,
        MefDevCardModule,
    ],
})
export class DropDownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
