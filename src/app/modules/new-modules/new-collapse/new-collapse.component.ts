import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ExampleConfig, ExampleData, extensions } from '../example-types';
import { ExpansionExpandCollapseAllExample } from './collapse-examples/expansion-expand-collapse-all-example/expansion-expand-collapse-all-example';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { ExpansionOverviewExample } from './collapse-examples/expansion-overview-example/expansion-overview-example';

const selectExamples: ExampleConfig[] = [
    [
        ExpansionExpandCollapseAllExample,
        'expansion-expand-collapse-all-example',
        'Accordion with expand/collapse all toggles',
    ],
    [ExpansionOverviewExample, 'expansion-overview-example', 'Basic expansion panel'],
];

const componentPrefix = 'collapse-examples';

@Component({
    selector: 'new-lib-collapse',
    standalone: true,
    imports: [ExampleViewer],
    templateUrl: './new-collapse.component.html',
    styleUrls: ['./new-collapse.component.scss'],
})
export class NewCollapseComponent implements AfterViewInit {
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
