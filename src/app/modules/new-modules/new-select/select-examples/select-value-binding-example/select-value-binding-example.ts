import {Component} from '@angular/core';
import { MDSelectModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'select-value-binding-example',
  styleUrls: ['select-value-binding-example.scss'],
  templateUrl: 'select-value-binding-example.html',
  imports: [MDSelectModule],
})
export class SelectValueBindingExample {
  selected = 'option2';
}
