import { Component, OnInit, ViewChild } from '@angular/core';
import { SlideUpComponent } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'app-slide-up',
  templateUrl: './slide-up.component.html',
  styleUrls: ['./slide-up.component.scss']
})
export class SlideUpExampleComponent implements OnInit {
  @ViewChild('mdSlideUp') mdSlideUp: SlideUpComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public showModal(){
    this.mdSlideUp.showModal();
  }

  public hideModal(){
    this.mdSlideUp.hideModal();
  }
}
