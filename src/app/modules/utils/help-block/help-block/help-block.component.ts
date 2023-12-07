import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-help-block',
  templateUrl: './help-block.component.html',
  styleUrls: ['./help-block.component.scss']
})
export class HelpBlockComponent implements OnInit {
  isVisible:boolean = true;
  expanded:boolean = false;

  @ViewChild('title') title:string = "Help";

  constructor() { }

  ngOnInit(): void {
  }

}
