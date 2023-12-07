import { Component, OnInit } from '@angular/core';
import { SlideRightComponent } from '@natec/mef-dev-ui-kit';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-slide-right',
  templateUrl: './slide-right.component.html',
  styleUrls: ['./slide-right.component.scss']
})
export class SlideRightExampleComponent implements OnInit {
  @ViewChild('slideRight') slideRight: SlideRightComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public showModal(){
    this.slideRight.showModal();
  }

  public hideModal(){
    this.slideRight.hideModal();
  }
}
