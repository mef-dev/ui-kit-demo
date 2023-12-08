import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MefDevCardModule, MefDevPageLayoutsModule } from '@natec/mef-dev-ui-kit';
import { CardLongComponent } from './card-long/card-long.component';
import { CardSimpleComponent } from './card-simple/card-simple.component';
import { MefDevTabsModule } from '@natec/mef-dev-ui-kit';

@NgModule({
  declarations: [
    CardComponent,
    CardLongComponent,
    CardSimpleComponent,
  ],
  imports: [
    MefDevTabsModule,
    MefDevCardModule,
    MefDevPageLayoutsModule,
    CommonModule,
    RouterModule.forChild([
      
      {
        path:"card", component: CardComponent
      },      
      {
        path: "card_simple",component: CardSimpleComponent
      },
      {
        path: "card_long",component: CardLongComponent
      }
    ]),
  ]
})
export class CardModule { }
