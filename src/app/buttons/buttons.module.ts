import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { RouterModule } from '@angular/router';
import { MefDevCardModule } from '@natec/mef-dev-ui-kit';



@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    MefDevCardModule,
    CommonModule,
    RouterModule.forChild([
      
      {
        path:"", component: ButtonsComponent
      }, 
    ])
  ]
})

export class ButtonsModule { }
