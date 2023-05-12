import { Component, NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { TypographyModule } from './typography/typography.module';
import { NoNavContainerComponent } from './no-nav-container/no-nav-container.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  {
    path:'',
    pathMatch:"full",
    redirectTo: "app",
  },
  {
    path: "app",
    component:ContainerComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: "collapse",
        loadChildren: () => import('./collapse/collapse.module').then(m => m.CollapseModule)
      },
      {
        path: "select",
        loadChildren: () => import('./select/select.module').then(m => m.SelectModule)
      },
      {
        path: "switch",
        loadChildren: () => import('./pg-components/switch/switch.module').then(m => m.SwitchModule)
      },
      {
        path: "card",
        loadChildren: () => import('./card/card.module').then(m => m.CardModule)
      },
      {
        path:"page-layouts",
        loadChildren: () => import('./page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)
      },
      {
        path:"buttons",
        loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path:"modals",
        loadChildren: () => import('./modals/modals.module').then(m => m.ModalsModule)
      },
      {
        path:"utils",
        loadChildren: () => import('./utils/utils.module').then(m => m.UtilsModule)
      },
      {
        path:"tabset",
        loadChildren: () => import('./tabset/tabset.module').then(m=>m.TabsetModule)
      },
      {
        path:"typography",
        loadChildren: () => import('./typography/typography.module').then(m=>TypographyModule)
      },
    ]
  },
  {
    path: "view",
    component: NoNavContainerComponent,
    children:[
      {
        path: "home",
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: "collapse",
        loadChildren: () => import('./collapse/collapse.module').then(m => m.CollapseModule)
      },
      {
        path: "select",
        loadChildren: () => import('./select/select.module').then(m => m.SelectModule)
      },
      {
        path: "switch",
        loadChildren: () => import('./pg-components/switch/switch.module').then(m => m.SwitchModule)
      },
      {
        path: "card",
        loadChildren: () => import('./card/card.module').then(m => m.CardModule)
      },
      {
        path:"page-layouts",
        loadChildren: () => import('./page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)
      },
      {
        path:"buttons",
        loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path:"modals",
        loadChildren: () => import('./modals/modals.module').then(m => m.ModalsModule)
      },
      {
        path:"utils",
        loadChildren: () => import('./utils/utils.module').then(m => m.UtilsModule)
      },
      {
        path:"tabset",
        loadChildren: () => import('./tabset/tabset.module').then(m=>m.TabsetModule)
      },
      {
        path:"typography",
        loadChildren: () => import('./typography/typography.module').then(m=>TypographyModule)
      },
    ]
  },
];
