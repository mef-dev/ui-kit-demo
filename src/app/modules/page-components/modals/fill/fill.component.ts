import { Component, OnInit, ViewChild } from '@angular/core';
import { FillComponent } from '@natec/mef-dev-ui-kit';


@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss']
})

export class FillExampleComponent implements OnInit {
  @ViewChild("pin_modal") pin_modal: FillComponent;
  constructor() { }

  ngOnInit(): void {
  }
}
