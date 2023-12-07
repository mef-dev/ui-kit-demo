import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HelpBlockComponent } from './help-block/help-block.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: HelpBlockComponent
      },
    ])
  ]
})
export class HelpBlockModule { }
