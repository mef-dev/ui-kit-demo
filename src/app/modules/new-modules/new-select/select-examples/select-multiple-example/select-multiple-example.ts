import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDSelectModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'select-multiple-example',
  styleUrls: ['select-multiple-example.scss'],
  templateUrl: 'select-multiple-example.html',
  imports: [MDSelectModule, FormsModule, ReactiveFormsModule],
})
export class SelectMultipleExample {
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
