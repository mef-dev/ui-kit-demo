import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';
import { GithubRawFilePathService } from 'src/app/services/githubRawFilePathService';
import { MDCardModule, MDTabsModule, MefDevCardModule, MefDevTabsModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'app-card-simple',
    templateUrl: './card-simple.component.html',
    styleUrls: ['./card-simple.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MefDevCardModule,
        MefDevTabsModule,
    ],
})
export class CardSimpleComponent implements OnInit {

  @ViewChild('htmlRawEditor') htmlRawEditor: ElementRef<HTMLElement>;
  @ViewChild('typescriptRawEditor') typescriptRawEditor: ElementRef<HTMLElement>;

  constructor(private githubRawService: GithubRawFilePathService) { }

  ngOnInit(): void {
    const typescriptCode = 'app/modules/page-components/card/card-simple/card-simple.component.ts';
    const htmlCode = 'app/modules/page-components/card/card-simple/card-simple.component.html';

    forkJoin([
      this.githubRawService.getFileGithubRawContent(typescriptCode),
      this.githubRawService.getFileGithubRawContent(htmlCode)
    ]).subscribe(([typescriptValue, htmlValue]: [string, string]) => {
      this.githubRawService.setTypescriptEditorOptions(this.typescriptRawEditor, typescriptValue, 'typescript');
      this.githubRawService.setTypescriptEditorOptions(this.htmlRawEditor, htmlValue, 'html');
    });
  }

}
