import { Routes } from '@angular/router';
import { NoNavContainerComponent } from './components/no-nav-container/no-nav-container.component';
import { ContainerComponent } from './components/container/container.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const modules =  [
  {
    path:"controls",
    loadChildren: () => import('./modules/controls/controls.module').then(m=>m.ControlsModule)
  },
  {
    path:"page_components",
    loadChildren: () => import('./modules/page-components/page-components.module').then(m => m.PageComponentsModule)
  },
  {
    path:"page_layouts",
    loadChildren: () => import('./modules/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)
  },
  {
    path:"utils",
    loadChildren: () => import('./modules/utils/utils.module').then(m => m.UtilsModule)
  },
]

export const routes: Routes = [
  {
    path:'',
    pathMatch:"full",
    redirectTo: "app/home",
  },
  {
    path: "app",
    component:ContainerComponent,
    children: [
      ...modules,
      {
        path:"home", component: HomePageComponent
      },
    ]
  },
  {
    path: "view",
    component: NoNavContainerComponent,
    children: modules
  },
];

