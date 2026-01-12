import { Component, NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NoNavContainerComponent } from './components/no-nav-container/no-nav-container.component';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const modules =  [
  {
    path: 'controls',
    loadChildren: () => import('./modules/controls/controls-routes').then(r => r.controlsRoutes)
  },
  {
    path: 'page_components',
    loadChildren: () => import('./modules/page-components/page-components-routes').then(m => m.pageComponentsRoutes)
  },
  {
    path: 'page_layouts',
    loadChildren: () => import('./modules/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)
  },
  {
    path: 'utils',
    loadChildren: () => import('./modules/utils/utils.module').then(m => m.UtilsModule)
  },
  {
    path: 'new_modules',
    loadChildren: () => import('./modules/new-modules/new-modules-routes').then(m => m.newModulesRoutes)
  }
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

