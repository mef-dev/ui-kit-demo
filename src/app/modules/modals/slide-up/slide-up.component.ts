import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/public_api';
import { SlideUpComponent }  from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'app-slide-up',
  templateUrl: './slide-up.component.html',
  styleUrls: ['./slide-up.component.scss']
})
export class SlideUpExampleComponent implements OnInit {
  @ViewChild('mdSlideUp') mdSlideUp: SlideUpComponent;
  notificationModalIsShow:boolean = false;



  constructor() { }

  ngOnInit(): void {
  }


  
  modalIsCloused(){
    this.modalIsCloused;
  }
  
  public showModal(){
    this.mdSlideUp.showModal();
  }
  
  public hideModal(){
    this.mdSlideUp.hideModal();
  }
}
