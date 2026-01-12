import { Component, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, inject } from '@angular/core';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { ExampleConfig, ExampleData, extensions } from '../example-types';
import { ModalsOverviewExample } from './modals-examples/modals-overview-example/modals-overview-example';
import { DialogContentExample } from './modals-examples/dialog-content-example/dialog-content-example';

const selectExamples: ExampleConfig[] = [
    [ModalsOverviewExample, 'modals-overview-example', 'Modal dialogs from different positions on the screen'],
    [DialogContentExample, 'dialog-content-example', 'Dialog with header, scrollable content and actions']
];

const componentPrefix = 'modals-examples';

@Component({
    selector: 'app-new-modals',
    standalone: true,
    templateUrl: './new-modals.component.html',
    styleUrls: ['./new-modals.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ExampleViewer],
})
export class NewModalsComponent implements AfterViewInit {
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
