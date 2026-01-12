import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDSwitchModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'switch-forms-example',
  templateUrl: './switch-forms-example.html',
  styleUrl: './switch-forms-example.scss',
  imports: [MDSwitchModule, FormsModule, ReactiveFormsModule],
})
export class SwitchFormsExample {
  private _formBuilder = inject(FormBuilder);

  isChecked = true;
  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }
}
