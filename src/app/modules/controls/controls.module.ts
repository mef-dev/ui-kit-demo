import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path:"typography",
        loadChildren:() => import('./typography/typography.module').then(m => m.TypographyModule)
      },
      {
        path:"slider",
        loadChildren:() => import('./slider/slider.module').then(m => m.SliderModule)
      },
      {
        path:"colors",
        loadChildren:() => import('./colors/colors.module').then(m => m.ColorsModule)
      },
      {
        path:"buttons",
        loadChildren:() => import('./buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path:"switch",
        loadChildren:() => import('./switch/switch.module').then(m => m.SwitchModule)
      },
      {
        path:"select",
        loadChildren:() => import('./select/select.module').then(m => m.SelectModule)
      },
      {
        path: "list",
        loadChildren: () => import('./list-of-controls/controls-list.module').then(m => m.ControlsListModule)
      }
    ]),
  ]
})
export class ControlsModule { }
