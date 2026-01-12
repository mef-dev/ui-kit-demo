import { Component, inject, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { ExampleConfig, ExampleData, extensions } from '../example-types';
import { StepperOverviewExample } from './stepper-examples/stepper-overview-example/stepper-overview-example';
import { StepperBigExample } from './stepper-examples/stepper-big-example/stepper-big-example';
import { StepperVerticalExample } from './stepper-examples/stepper-vertical-example/stepper-vertical-example';

const selectExamples: ExampleConfig[] = [
    [StepperOverviewExample, 'stepper-overview-example', 'Stepper overview'],
    [StepperBigExample, 'stepper-big-example', 'Large Stepper Overview'],
    [StepperVerticalExample, 'stepper-vertical-example', 'Stepper vertical']
];

const componentPrefix = 'stepper-examples';

@Component({
    selector: 'app-new-stepper',
    standalone: true,
    templateUrl: './new-stepper.component.html',
    styleUrls: ['./new-stepper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ExampleViewer],
})
export class NewStepperComponent implements AfterViewInit {
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
