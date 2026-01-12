import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, computed, model, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MDAutocompleteModule, MDAutocompleteSelectedEvent, MDChipInputEvent, MDChipsModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'chips-autocomplete-example',
    templateUrl: 'chips-autocomplete-example.html',
    styleUrl: 'chips-autocomplete-example.scss',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MDAutocompleteModule,
        MDChipsModule
    ],
})
export class AutocompleteChipsExample {
    myControl = new FormControl('');
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map((value) => this._filter(value || ''))
        );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter((option) => option.toLowerCase().includes(filterValue));
    }

    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    readonly currentFruit = model('');
    readonly fruits = signal(['Lemon']);
    readonly allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
    readonly filteredFruits = computed(() => {
        const currentFruit = this.currentFruit().toLowerCase();
        return currentFruit
            ? this.allFruits.filter((fruit) => fruit.toLowerCase().includes(currentFruit))
            : this.allFruits.slice();
    });

    add(event: MDChipInputEvent): void {
        const value = (event.value || '').trim();

        // Add our fruit
        if (value) {
            this.fruits.update((fruits) => [...fruits, value]);
        }

        // Clear the input value
        this.currentFruit.set('');
    }

    remove(fruit: string): void {
        this.fruits.update((fruits) => {
            const index = fruits.indexOf(fruit);
            if (index < 0) {
                return fruits;
            }

            fruits.splice(index, 1);
            return [...fruits];
        });
    }

    selected(event: MDAutocompleteSelectedEvent): void {
        this.fruits.update((fruits) => [...fruits, event.option.viewValue]);
        this.currentFruit.set('');
        event.option.deselect();
    }
}
