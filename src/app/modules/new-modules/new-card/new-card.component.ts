import { Component, AfterViewInit, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ExampleConfig, ExampleData, extensions } from '../example-types';
import { CardMediaSizeExample } from './card-examples/card-media-size-example/card-media-size-example';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { CardOverviewExample } from './card-examples/card-overview-example/card-overview-example';

const examples: ExampleConfig[] = [
    [CardMediaSizeExample, 'card-media-size-example', 'Card with media size'],
    [CardOverviewExample, 'card-overview-example', 'Card overview'],
];

const componentPrefix = 'card-examples';

@Component({
    selector: 'app-new-card',
    standalone: true,
    templateUrl: './new-card.component.html',
    styleUrls: ['./new-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ExampleViewer],
})
export class NewCardComponent implements AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    items: ExampleData;

    ngAfterViewInit(): void {
        this.loadItems();
    }

    async loadItems() {
        const items: ExampleData = [];

        for (const [component, prefix, label] of examples) {
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
