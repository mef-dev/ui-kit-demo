import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path:"card",
        loadChildren:() => import('./card/card.module').then(m => m.CardModule)
      },
      {
        path:"collapse",
        loadChildren:() => import('./collapse/collapse.module').then(m => m.CollapseModule)
      },
      {
        path:"modals",
        loadChildren:() => import('./modals/modals.module').then(m => m.ModalsModule)
      },
      {
        path:"tabset",
        loadChildren:() => import('./tabset/tabset.module').then(m => m.TabsetModule)
      }
    ]),
  ]
})
export class PageComponentsModule { }
