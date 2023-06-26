import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './typography.component';
import { RouterModule } from '@angular/router';
import { MefDevCardModule, MefDevPageLayoutsModule }  from '@natec/mef-dev-ui-kit';




@NgModule({
  declarations: [
    TypographyComponent
  ],
  imports: [
    CommonModule,
    MefDevCardModule,
    MefDevPageLayoutsModule,
    RouterModule.forChild([
      
      {
        path:"", component: TypographyComponent
      },      
      
     
    ]),
  ]
})
export class TypographyModule { }
