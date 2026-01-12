import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GithubRawFilePathService } from '../../../../services/githubRawFilePathService';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-step-executor',
    templateUrl: './step-executor.component.html',
    styleUrls: ['./step-executor.component.scss'],
    standalone: false
})

export class StepExecutorComponent implements OnInit {

  @ViewChild('htmlRawEditor') htmlRawEditor: ElementRef<HTMLElement>;
  @ViewChild('typescriptRawEditor') typescriptRawEditor: ElementRef<HTMLElement>;

  views: string[] = ['regular', 'modal', 'right'];
  selectedView: string = '';

  isModalStepExecutorOpened: boolean = false;
  isRightStepExecutorOpened: boolean = false;

  constructor(private githubRawService: GithubRawFilePathService) {}

  ngOnInit(): void {
    const typescriptCode = 'app/modules/utils/executors/step-executor/step-executor.component.ts';
    const htmlCode = 'app/modules/utils/executors/step-executor/step-executor.component.html';

    forkJoin([
      this.githubRawService.getFileGithubRawContent(typescriptCode),
      this.githubRawService.getFileGithubRawContent(htmlCode)
    ]).subscribe(([typescriptValue, htmlValue]: [string, string]) => {
      this.githubRawService.setTypescriptEditorOptions(this.typescriptRawEditor, typescriptValue, 'typescript');
      this.githubRawService.setTypescriptEditorOptions(this.htmlRawEditor, htmlValue, 'html');
    });
  }

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
