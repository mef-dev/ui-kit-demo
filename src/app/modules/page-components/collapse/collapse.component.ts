import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDCardModule, MDTabsModule, MefDevCardModule, MefDevCollapseModule, MefDevSelectModule, MefDevSwitchModule, MefDevTabsModule } from '@natec/mef-dev-ui-kit';
import { GithubRawFilePathService } from 'src/app/services/githubRawFilePathService';


@Component({
    selector: 'lib-collapse',
    templateUrl: './collapse.component.html',
    styleUrls: ['./collapse.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MefDevCardModule,
        MefDevSelectModule,
        MefDevCollapseModule,
        MefDevTabsModule,
        MefDevSwitchModule,
    ],
})
export class CollapseComponent implements OnInit {

  @ViewChild('htmlRawEditor') htmlRawEditor: ElementRef<HTMLElement>;
  @ViewChild('typescriptRawEditor') typescriptRawEditor: ElementRef<HTMLElement>;

  constructor(private githubRawService: GithubRawFilePathService) { }

  ngOnInit(): void {
    const typescriptCode = 'app/modules/page-components/collapse/collapse/collapse.component.ts';
    const htmlCode = 'app/modules/page-components/collapse/collapse/collapse.component.html';

    forkJoin([
      this.githubRawService.getFileGithubRawContent(typescriptCode),
      this.githubRawService.getFileGithubRawContent(htmlCode)
    ]).subscribe(([typescriptValue, htmlValue]: [string, string]) => {
      this.githubRawService.setTypescriptEditorOptions(this.typescriptRawEditor, typescriptValue, 'typescript');
      this.githubRawService.setTypescriptEditorOptions(this.htmlRawEditor, htmlValue, 'html');
    });
  }

}
