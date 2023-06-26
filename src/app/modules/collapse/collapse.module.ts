import { NgModule } from '@angular/core';
import { CollapseComponent } from './collapse/collapse.component';
import { RouterModule } from '@angular/router';
import { MefDevCollapseModule }  from '@natec/mef-dev-ui-kit';


@NgModule({
  
  declarations: [
    CollapseComponent,
  ],
  imports: [
    MefDevCollapseModule,
    RouterModule.forChild([
      
        {
          path: "",
          redirectTo: "collapse",
          pathMatch: "full"
        },
        {

          path:"collapse", component: CollapseComponent
        }
       
    ]),
  ]
})
export class CollapseModule { }
