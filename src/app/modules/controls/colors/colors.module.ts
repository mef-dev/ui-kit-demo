import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsComponent } from './colors/colors.component';
import { RouterModule } from '@angular/router';
import { MefDevCardModule } from '@natec/mef-dev-ui-kit';



@NgModule({
  declarations: [
    ColorsComponent
  ],
  imports: [
    CommonModule,
    MefDevCardModule,
    RouterModule.forChild([
      {
        path:"", component: ColorsComponent
      },
    ])
  ]
})
export class ColorsModule { }
