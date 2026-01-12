import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDAutocompleteModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'autocomplete-simple-example.html',
  styleUrl: 'autocomplete-simple-example.scss',
  imports: [
    FormsModule,
    MDAutocompleteModule,
    ReactiveFormsModule,
  ],
})
export class AutocompleteSimpleExample {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
