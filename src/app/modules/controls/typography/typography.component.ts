import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDCardModule, MDTabsModule, MefDevCardModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'app-typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss'],
    standalone: true,
    imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MDCardModule,
    MDTabsModule,
    MefDevCardModule,
],
})
export class TypographyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
