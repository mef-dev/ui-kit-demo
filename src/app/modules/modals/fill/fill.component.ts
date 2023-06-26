import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FillComponent, MefDevModalModule }  from '@natec/mef-dev-ui-kit';


@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss']
})

export class FillExampleComponent implements OnInit {

  
  @ViewChild("pin_modal") pin_modal: FillComponent;

  public pinIsVerified:Boolean = false; 
  public pin:string = ''; 
  
  constructor() { }

  ngOnInit(): void {
  }

  public run(){
    this.pin_modal.showModal()
  }

public verifyPin(){}

public deleteAcc(){}
}
