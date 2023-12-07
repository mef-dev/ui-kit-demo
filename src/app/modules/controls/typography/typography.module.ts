import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MefDevCardModule } from '@natec/mef-dev-ui-kit';
import { TypographyComponent } from './typography/typography.component';



@NgModule({
  declarations: [
    TypographyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MefDevCardModule,
    RouterModule.forChild([
      {
        path:"", component: TypographyComponent
      },
    ])
  ]
})
export class TypographyModule { }
