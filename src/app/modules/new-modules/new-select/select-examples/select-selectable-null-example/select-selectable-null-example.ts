import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDSelectModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'select-selectable-null-example',
    styleUrls: ['select-selectable-null-example.scss'],
    templateUrl: 'select-selectable-null-example.html',
    imports: [MDSelectModule, FormsModule],
})
export class SelectSelectableNullExample {
    value: number | null = null;
    options = [
        { label: 'None', value: null },
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three', value: 3 },
    ];
}
