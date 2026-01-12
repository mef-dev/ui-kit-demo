import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDAutocompleteModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'autocomplete-require-selection-example',
  templateUrl: 'autocomplete-require-selection-example.html',
  styleUrl: 'autocomplete-require-selection-example.scss',
  imports: [
    FormsModule,
    MDAutocompleteModule,
    ReactiveFormsModule,
  ],
})
export class AutocompleteRequireSelectionExample {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];

  constructor() {
    this.filteredOptions = this.options.slice();
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }
}
