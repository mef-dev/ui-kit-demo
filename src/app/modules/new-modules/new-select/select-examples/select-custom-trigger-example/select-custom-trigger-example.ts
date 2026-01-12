import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDSelectModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'select-custom-trigger-example',
  templateUrl: 'select-custom-trigger-example.html',
  styleUrl: 'select-custom-trigger-example.scss',
  imports: [MDSelectModule, FormsModule, ReactiveFormsModule],
})
export class SelectCustomTriggerExample {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
