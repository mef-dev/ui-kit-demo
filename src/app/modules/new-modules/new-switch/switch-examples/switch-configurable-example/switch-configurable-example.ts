import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDCardModule, MDRadioModule } from '@natec/mef-dev-ui-kit';
import { MDCheckBoxModule, MDSwitchModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'switch-configurable-example',
  templateUrl: 'switch-configurable-example.html',
  styleUrl: 'switch-configurable-example.scss',
  imports: [MDCardModule, MDRadioModule, FormsModule, MDCheckBoxModule, MDSwitchModule],
})
export class SwitchConfigurableExample {
  checked = false;
  disabled = false;
}
