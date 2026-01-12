import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MDStepExecutorModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'stepper-big-example',
    templateUrl: 'stepper-big-example.html',
    styleUrl: 'stepper-big-example.scss',
    imports: [MDStepExecutorModule, FormsModule, ReactiveFormsModule],
})
export class StepperBigExample {
    Name = '';
    Address = '';

    isModalStepExecutorOpened = false;
    isRightStepExecutorOpened = false;

    getModalExecutorStateValue(v: boolean) {
        this.isModalStepExecutorOpened = v;
    }
    getRightExecutorStateValue(v: boolean) {
        this.isRightStepExecutorOpened = v;
    }
    openModalExecutor() {
        this.isModalStepExecutorOpened = true;
    }
    openRightExecutor() {
        this.isRightStepExecutorOpened = true;
    }

    private _formBuilder = inject(FormBuilder);
    firstFormGroup = this._formBuilder.group({ firstCtrl: ['', Validators.required] });
    secondFormGroup = this._formBuilder.group({ secondCtrl: ['', Validators.required] });
    thirdFormGroup = this._formBuilder.group({ thirdCtrl: ['', Validators.required] });
    isLinear = false;
}
