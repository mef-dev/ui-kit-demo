import { Routes } from '@angular/router';

export const pageComponentsRoutes: Routes = [
    {
        path: 'card-simple',
        loadComponent: () =>
        import('./card-simple/card-simple.component').then(
            (m) => m.CardSimpleComponent
        ),
    },
    {
        path: 'collapse',
        loadComponent: () =>
        import('./collapse/collapse.component').then(
            (m) => m.CollapseComponent
        ),
    },
    {
        path: 'tabset',
        loadComponent: () =>
        import('./tabset/tabset.component').then(
            (m) => m.TabsetComponent
        ),
    },
    // modals???
]