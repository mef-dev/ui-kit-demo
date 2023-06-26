import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


interface Switch {
  name: string;
  value: boolean;
}
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
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
