import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ExampleConfig, ExampleData, extensions } from '../example-types';
import { TabGroupAlignExample } from './tabset-examples/tab-group-align-example/tab-group-align-example';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { TabGroupAnimationsExample } from './tabset-examples/tab-group-animations-example/tab-group-animations-example';
import { TabGroupPaginatedExample } from './tabset-examples/tab-group-paginated-example/tab-group-paginated-example';
import { TabGroupInkBarExample } from './tabset-examples/tab-group-ink-bar-example/tab-group-ink-bar-example';
import { TabGroupAsyncExample } from './tabset-examples/tab-group-async-example/tab-group-async-example';
import { TabGroupCustomLabelExample } from './tabset-examples/tab-group-custom-label-example/tab-group-custom-label-example';
import { TabGroupLegacyExample } from './tabset-examples/tab-group-legacy-example/tab-group-legacy-example';

const selectExamples: ExampleConfig[] = [
    [TabGroupAlignExample, 'tab-group-align-example', 'Tab group with aligned labels'],
    [TabGroupAnimationsExample, 'tab-group-animations-example', 'Tab group animations'],
    [TabGroupPaginatedExample, 'tab-group-paginated-example', 'Tab group with paginated tabs'],
    [TabGroupInkBarExample, 'tab-group-ink-bar-example', 'Tab group with ink bar fit to content'],
    [TabGroupAsyncExample, 'tab-group-async-example', 'Tab group with asynchronously loading tab contents'],
    [TabGroupCustomLabelExample, 'tab-group-custom-label-example', 'Using tabs with a custom label template'],
    [TabGroupLegacyExample, 'tab-group-legacy-example', 'Tabs with legacy design'],
];
const componentPrefix = 'tabset-examples';

@Component({
    selector: 'app-new-tabset',
    standalone: true,
    imports: [ExampleViewer],
    templateUrl: './new-tabset.component.html',
    styleUrls: ['./new-tabset.component.scss'],
})
export class NewTabsetComponent implements AfterViewInit {
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
