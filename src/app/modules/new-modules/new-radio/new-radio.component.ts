import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { ExampleConfig, ExampleData, extensions } from '../example-types';
import { RadioNgModelExample } from './radio-examples/radio-ng-model-example/radio-ng-model-example';
import { RadioOverviewExample } from './radio-examples/radio-overview-example/radio-overview-example';

const radioExamples: ExampleConfig[] = [
    [RadioNgModelExample, 'radio-ng-model-example', 'Radios with ngModel'],
    [RadioOverviewExample, 'radio-overview-example', 'Basic radios'],
];

const componentPrefix = 'radio-examples';

@Component({
    selector: 'app-new-radio',
    standalone: true,
    templateUrl: './new-radio.component.html',
    styleUrls: ['./new-radio.component.scss'],
    imports: [ExampleViewer],
})
export class NewRadioComponent implements AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    items: ExampleData;

    ngAfterViewInit(): void {
        this.loadItems();
    }

    async loadItems() {
        const items: ExampleData = [];

        for (const [component, prefix, label] of radioExamples) {
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
