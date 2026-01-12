import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';

type Link = { label: string; to: string; deprecated: boolean };
type Section = { title: string; links: Link[] };

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false,
})
export class NavbarComponent {
    showDeprecated = signal(false);
    sectionsWithFilteredLinks = computed(() => {
        const showDeprecated = this.showDeprecated();
        return this.sections.map((section) => ({
            ...section,
            links: section.links.filter((link) => (!link.deprecated || showDeprecated)),
        }));
    });

    brand = { label: 'MefDev UI Kit Examples', to: '/app/home' };

    sections: Section[] = [
        {
            title: 'Controls',
            links: [
                { label: 'Typography', to: '/app/controls/typography', deprecated: false },
                { label: 'Colors', to: '/app/controls/colors', deprecated: false },
                { label: 'Buttons', to: '/app/controls/buttons', deprecated: false },
                { label: 'Checkbox', to: '/app/new_modules/new-checkbox', deprecated: false },
                { label: 'Select', to: '/app/new_modules/new-select', deprecated: false },
                { label: 'Select (deprecated)', to: '/app/controls/select', deprecated: true },
                { label: 'Radio', to: '/app/new_modules/new-radio', deprecated: false },
                { label: 'Switch', to: '/app/new_modules/new-switch', deprecated: false },
                { label: 'Switch (deprecated)', to: '/app/controls/switch', deprecated: true },
                { label: 'Menu', to: '/app/controls/new-menu', deprecated: false },
                { label: 'Menu (deprecated)', to: '/app/controls/drop-down', deprecated: true },
                { label: 'Autocomplete', to: '/app/new_modules/new-autocomplete', deprecated: false },
                { label: 'Controls List', to: '/app/controls/list', deprecated: false },
            ],
        },
        {
            title: 'Page layouts',
            links: [
                { label: 'central page', to: '/app/page_layouts/central_page', deprecated: false },
                { label: 'manage page', to: '/app/page_layouts/manage_page', deprecated: false }, // fixed typo
                { label: 'table page', to: '/app/page_layouts/table_page', deprecated: false },
            ],
        },
        {
            title: 'Page components',
            links: [
                { label: 'Card', to: '/app/new_modules/new-card', deprecated: false },
                { label: 'Card (deprecated)', to: '/app/page_components/card-simple', deprecated: true },
                { label: 'Modals', to: '/app/new_modules/new-modals', deprecated: false },
                { label: 'Tabset', to: '/app/new_modules/new-tabset', deprecated: false },
                { label: 'Tabset (deprecated)', to: '/app/page_components/tabset', deprecated: true },
                { label: 'Collapse', to: '/app/new_modules/new-collapse', deprecated: false },
                { label: 'Collapse (deprecated)', to: '/app/page_components/collapse', deprecated: true },
            ],
        },
        {
            title: 'Utils',
            links: [
                { label: 'Filtered Field', to: '/app/utils/filtered_field', deprecated: false },
                { label: 'Stepper', to: '/app/new_modules/new-stepper', deprecated: false },
                { label: 'Main Executor (deprecated)', to: '/app/utils/main_executor', deprecated: true },
            ],
        },
    ];

    trackSection = (_: number, s: Section) => s.title;
    trackLink = (_: number, l: Link) => l.to;
}
