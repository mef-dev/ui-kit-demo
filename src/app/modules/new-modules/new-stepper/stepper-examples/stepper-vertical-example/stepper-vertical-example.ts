import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDStepExecutorModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'stepper-vertical-example',
    templateUrl: 'stepper-vertical-example.html',
    styleUrl: 'stepper-vertical-example.scss',
    imports: [MDStepExecutorModule, FormsModule, ReactiveFormsModule],
})
export class StepperVerticalExample {
    private _formBuilder = inject(FormBuilder);

    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
    });
    isLinear = false;
}
