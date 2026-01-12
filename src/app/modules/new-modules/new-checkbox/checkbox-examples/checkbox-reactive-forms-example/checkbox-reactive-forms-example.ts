import {JsonPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDCheckBoxModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'checkbox-reactive-forms-example',
  templateUrl: 'checkbox-reactive-forms-example.html',
  styleUrl: 'checkbox-reactive-forms-example.scss',
  imports: [FormsModule, ReactiveFormsModule, MDCheckBoxModule, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxReactiveFormsExample {
  private readonly _formBuilder = inject(FormBuilder);

  readonly toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
}
