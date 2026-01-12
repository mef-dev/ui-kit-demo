import { Component, AfterViewInit, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { ExampleConfig, ExampleData, extensions } from '../example-types';
import { CheckboxReactiveFormsExample } from './checkbox-examples/checkbox-reactive-forms-example/checkbox-reactive-forms-example';
import { CheckboxOverviewExample } from './checkbox-examples/checkbox-overview-example/checkbox-overview-example';

const checkboxExamples: ExampleConfig[] = [
    [CheckboxReactiveFormsExample, 'checkbox-reactive-forms-example', 'Checkboxes with reactive forms'],
    [CheckboxOverviewExample, 'checkbox-overview-example', 'Basic checkboxes'],
];

const componentPrefix = 'checkbox-examples';
@Component({
    selector: 'app-new-checkbox',
    standalone: true,
    templateUrl: './new-checkbox.component.html',
    styleUrls: ['./new-checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ExampleViewer],
})
export class CheckboxComponent implements AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    items: ExampleData;

    ngAfterViewInit(): void {
        this.loadItems();
    }

    async loadItems() {
        const items: ExampleData = [];

        for (const [component, prefix, label] of checkboxExamples) {
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
