import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDCheckBoxModule, MDSelectModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'select-disabled-example',
  styleUrls: ['./select-disabled-example.scss'],
  templateUrl: 'select-disabled-example.html',
  imports: [
    MDCheckBoxModule,
    FormsModule,
    ReactiveFormsModule,
    MDSelectModule,
  ],
})
export class SelectDisabledExample {
  disableSelect = new FormControl(false);
}
