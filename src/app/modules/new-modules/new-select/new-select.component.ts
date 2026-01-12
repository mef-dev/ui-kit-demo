import { Component, AfterViewInit, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';
import { ExampleConfig, ExampleData, extensions } from '../example-types';
import { SelectCustomTriggerExample } from './select-examples/select-custom-trigger-example/select-custom-trigger-example';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { SelectDisabledExample } from './select-examples/select-disabled-example/select-disabled-example';
import { SelectMultipleExample } from './select-examples/select-multiple-example/select-multiple-example';
import { SelectOptgroupExample } from './select-examples/select-optgroup-example/select-optgroup-example';
import { SelectReactiveFormExample } from './select-examples/select-reactive-form-example/select-reactive-form-example';
import { SelectSelectableNullExample } from './select-examples/select-selectable-null-example/select-selectable-null-example';
import { SelectValueBindingExample } from './select-examples/select-value-binding-example/select-value-binding-example';

const selectExamples: ExampleConfig[] = [
    [SelectCustomTriggerExample, 'select-custom-trigger-example', 'Select with custom trigger text'],
    [SelectDisabledExample, 'select-disabled-example', 'Disabled select'],
    [SelectMultipleExample, 'select-multiple-example', 'Select with multiple selection'],
    [SelectOptgroupExample, 'select-optgroup-example', 'Select with option groups'],
    [SelectReactiveFormExample, 'select-reactive-form-example', 'Select in a reactive form'],
    [SelectSelectableNullExample, 'select-selectable-null-example', 'Select with selectable null options'],
    [SelectValueBindingExample, 'select-value-binding-example', 'Select with 2-way value binding']
];

const componentPrefix = 'select-examples';
@Component({
    selector: 'app-new-select',
    standalone: true,
    templateUrl: './new-select.component.html',
    styleUrls: ['./new-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ExampleViewer],
})
export class NewSelectComponent implements AfterViewInit {
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
