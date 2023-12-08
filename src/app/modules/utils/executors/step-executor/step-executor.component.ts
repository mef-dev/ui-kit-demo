import { Component } from '@angular/core';

@Component({
  selector: 'app-step-executor',
  templateUrl: './step-executor.component.html',
  styleUrls: ['./step-executor.component.scss']
})

export class StepExecutorComponent {

  views: string[] = ['regular', 'modal', 'right'];
  selectedView: string = '';

  isModalStepExecutorOpened: boolean = false;
  isRightStepExecutorOpened: boolean = false;

  onViewChange(value: string) {
    this.selectedView = value;
  }

  getModalExecutorStateValue(value: boolean) {
    this.isModalStepExecutorOpened = value;
  }

  getRightExecutorStateValue(value: boolean) {
    this.isRightStepExecutorOpened = value;
  }

  openModalExecutor(): void {
    this.isModalStepExecutorOpened = true;
  }

  openRightExecutor(): void {
    this.isRightStepExecutorOpened = true
  }

}
