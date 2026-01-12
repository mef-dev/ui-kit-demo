import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDCardModule, MDTabsModule, MefDevCardModule, MefDevSwitchModule } from '@natec/mef-dev-ui-kit';


interface Switch {
  name: string;
  value: boolean;
}
@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],   
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MDCardModule,
        MDTabsModule,
        MefDevCardModule,
        MefDevSwitchModule
    ],
})
export class SwitchComponent implements OnInit {

  switches: Switch[] = [
    { name: 'Switch 1', value: false },
    { name: 'Switch 2', value: false },
    { name: 'Switch 3', value: false },
    { name: 'Switch 4', value: false },

  ]
  switchValue:boolean = true;
  @Output() switchValueChange = new EventEmitter<boolean>();
  constructor() { }

  onSwitchValueChange(index:number){
    this.switches[index].value == !this.switches[index];
  }

  ngOnInit(): void {
    
  }

}
