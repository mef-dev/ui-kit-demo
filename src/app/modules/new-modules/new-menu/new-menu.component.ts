import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ExampleConfig, ExampleData, extensions } from '../example-types';
import { MenuNestedExample } from './menu-examples/menu-nested-example/menu-nested-example';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { MenuOverviewExample } from './menu-examples/menu-overview-example/menu-overview-example';

const selectExamples: ExampleConfig[] = [
  [MenuOverviewExample, 'menu-overview-example', 'Basic menu'],
  [MenuNestedExample, 'menu-nested-example', 'Nested menu']
];

const componentPrefix = 'menu-examples';

@Component({
    selector: 'new-menu',
    styleUrls: ['new-menu.component.scss'],
    templateUrl: 'new-menu.component.html',
    imports: [ExampleViewer],
})
export class NewMenuComponent implements AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    items: ExampleData;

    ngAfterViewInit(): void {
        this.loadItems();
    }

    async loadItems() {
        const items: ExampleData = [];

        for (const [component, prefix, label] of selectExamples) {
            const raws = await Promise.all(
                extensions.map((ext) =>
                    import(`!!raw-loader!./${componentPrefix}/${prefix}/${prefix}.${ext}?raw`).then((m) => m.default)
                )
            );

            items.push([component, ...raws, label]);
        }

        this.items = items;
        this.cdr.markForCheck();
    }
}
