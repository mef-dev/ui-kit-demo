import { Component, NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NoNavContainerComponent } from './components/no-nav-container/no-nav-container.component';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { TypographyModule } from './modules/typography/typography.module';
import { HomePageComponent } from './components/home-page/home-page.component';

const modules =  [
  {
    path: "collapse",
    loadChildren: () => import('./modules/collapse/collapse.module').then(m => m.CollapseModule)
  },
  {
    path: "select",
    loadChildren: () => import('./modules/select/select.module').then(m => m.SelectModule)
  },
  {
    path: "switch",
    loadChildren: () => import('./modules/switch/switch.module').then(m => m.SwitchModule)
  },
  {
    path: "card",
    loadChildren: () => import('./modules/card/card.module').then(m => m.CardModule)
  },
  {
    path:"page-layouts",
    loadChildren: () => import('./modules/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)
  },
  {
    path:"buttons",
    loadChildren: () => import('./modules/buttons/buttons.module').then(m => m.ButtonsModule)
  },
  {
    path:"modals",
    loadChildren: () => import('./modules/modals/modals.module').then(m => m.ModalsModule)
  },
  {
    path:"utils",
    loadChildren: () => import('./modules/utils/utils.module').then(m => m.UtilsModule)
  },
  {
    path:"tabset",
    loadChildren: () => import('./modules/tabset/tabset.module').then(m=>m.TabsetModule)
  },
  {
    path:"typography",
    loadChildren: () => import('./modules/typography/typography.module').then(m=>TypographyModule)
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

