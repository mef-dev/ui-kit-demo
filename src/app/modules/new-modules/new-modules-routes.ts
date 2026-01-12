import { Routes } from '@angular/router';

export const newModulesRoutes: Routes = [
    {
        path: 'new-autocomplete',
        loadComponent: () =>
            import('./new-autocomplete/new-autocomplete.component').then((m) => m.NewAutocompleteComponent),
    },
    {
        path: 'new-tabset',
        loadComponent: () => import('./new-tabset/new-tabset.component').then((m) => m.NewTabsetComponent),
    },
    {
        path: 'new-collapse',
        loadComponent: () => import('./new-collapse/new-collapse.component').then((m) => m.NewCollapseComponent),
    },
    {
        path: 'new-select',
        loadComponent: () => import('./new-select/new-select.component').then((m) => m.NewSelectComponent),
    },
    {
        path: 'new-modals',
        loadComponent: () => import('./new-modals/new-modals.component').then((m) => m.NewModalsComponent),
    },

    {
        path: 'new-stepper',
        loadComponent: () => import('./new-stepper/new-stepper.component').then((m) => m.NewStepperComponent),
    },
    {
        path: 'new-checkbox',
        loadComponent: () => import('./new-checkbox/new-checkbox.component').then((m) => m.CheckboxComponent),
    },
    {
        path: 'new-switch',
        loadComponent: () => import('./new-switch/new-switch.component').then((m) => m.NewSwitchComponent),
    },
        {
        path: 'new-radio',
        loadComponent: () => import('./new-radio/new-radio.component').then((m) => m.NewRadioComponent),
    },
    {
        path: 'new-card',
        loadComponent: () => import('./new-card/new-card.component').then((m) => m.NewCardComponent),
    }
];
