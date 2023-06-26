import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MefDevModalModule, SlideRightComponent }  from '@natec/mef-dev-ui-kit';
import { ViewChild } from '@angular/core';
import { ModalSize }  from '@natec/mef-dev-ui-kit'; 
import { ContentChild, TemplateRef } from '@angular/core';



@Component({
  selector: 'app-slide-right',
  templateUrl: './slide-right.component.html',
  styleUrls: ['./slide-right.component.scss']
})
export class SlideRightExampleComponent implements OnInit {
  @ViewChild('slideRight') slideRight: SlideRightComponent;

  constructor() { }
  notificationModalIsShow:boolean = false;


  ngOnInit(): void {
  }

  public showModal(){
    this.slideRight.showModal();
  }
    
  public hideModal(){
    this.slideRight.hideModal();
  }
}