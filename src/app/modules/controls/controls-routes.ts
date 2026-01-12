import { Routes } from '@angular/router';

export const controlsRoutes: Routes = [
    {
        path: 'typography',
        loadComponent: () => import('./typography/typography.component').then((m) => m.TypographyComponent),
    },
    {
        path: 'colors',
        loadComponent: () => import('./colors/colors.component').then((m) => m.ColorsComponent),
    },
    {
        path: 'buttons',
        loadComponent: () => import('./buttons/buttons.component').then((m) => m.ButtonsComponent),
    },
    {
        path: 'switch',
        loadComponent: () => import('./switch/switch.component').then((m) => m.SwitchComponent),
    },
    {
        path: 'select',
        loadComponent: () => import('./select/select.component').then((m) => m.SelectComponent),
    },
    {
        path: 'list',
        loadComponent: () => import('./controls-list/controls-list.component').then((m) => m.ControlsListComponent),
    },
    {
        path: 'drop-down',
        loadComponent: () => import('./drop-down/drop-down.component').then((m) => m.DropDownComponent),
    },
    { path: '', pathMatch: 'full', redirectTo: 'typography' },

    {
        path: 'new-menu',
        loadComponent: () => import('../new-modules/new-menu/new-menu.component').then((m) => m.NewMenuComponent),
    },
];
