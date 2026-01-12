import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDSelectModule } from '@natec/mef-dev-ui-kit';

interface Food {
    value: string;
    viewValue: string;
}

interface Car {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'select-reactive-form-example',
    styleUrls: ['select-reactive-form-example.scss'],
    templateUrl: 'select-reactive-form-example.html',
    imports: [FormsModule, ReactiveFormsModule, MDSelectModule],
})
export class SelectReactiveFormExample {
    foods: Food[] = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
    ];
    foodControl = new FormControl(this.foods[2].value);
    form = new FormGroup({
        food: this.foodControl,
    });
}
