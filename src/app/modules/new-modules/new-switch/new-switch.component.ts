import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { ExampleConfig, ExampleData, extensions } from '../example-types';
import { SwitchConfigurableExample } from './switch-examples/switch-configurable-example/switch-configurable-example';
import { SwitchFormsExample } from './switch-examples/switch-forms-example/switch-forms-example';

const selectExamples: ExampleConfig[] = [
  [SwitchConfigurableExample, 'switch-configurable-example', 'Configurable switch'],
  [SwitchFormsExample, 'switch-forms-example', 'Switch with forms']
];

const componentPrefix = 'switch-examples';

@Component({
    selector: 'app-new-switch',
    standalone: true,
    templateUrl: './new-switch.component.html',
    styleUrls: ['./new-switch.component.scss'],
    imports: [ExampleViewer],
})
export class NewSwitchComponent implements AfterViewInit {
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