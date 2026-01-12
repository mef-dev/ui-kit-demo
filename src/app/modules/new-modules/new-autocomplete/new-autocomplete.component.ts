import { Component, AfterViewInit, inject, ChangeDetectionStrategy, Type, ChangeDetectorRef } from '@angular/core';
import { AutocompleteRequireSelectionExample } from './autocomplete-examples/autocomplete-require-selection-example/autocomplete-require-selection-example';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { AutocompleteSimpleExample } from './autocomplete-examples/autocomplete-simple-example/autocomplete-simple-example';
import { AutocompleteChipsExample } from './autocomplete-examples/chips-autocomplete-example/chips-autocomplete-example';
import { ExampleData, extensions } from '../example-types';

const autocompleteExamples: [Type<any>, string, string][] = [
    [
        AutocompleteRequireSelectionExample,
        'autocomplete-require-selection-example',
        'Require an autocomplete option to be selected',
    ],
    [AutocompleteSimpleExample, 'autocomplete-simple-example', 'Simple autocomplete'],
    [AutocompleteChipsExample, 'chips-autocomplete-example', 'Chips Autocomplete'],
];

const componentPrefix = 'autocomplete-examples';

@Component({
    selector: 'app-new-autocomplete',
    standalone: true,
    templateUrl: './new-autocomplete.component.html',
    styleUrls: ['./new-autocomplete.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ExampleViewer],
})
export class NewAutocompleteComponent implements AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    items: ExampleData;

    ngAfterViewInit(): void {
        this.loadItems();
    }

    async loadItems() {
        const items: ExampleData = [];

        for (const [component, prefix, label] of autocompleteExamples) {
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
