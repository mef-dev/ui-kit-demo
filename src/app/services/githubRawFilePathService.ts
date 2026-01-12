import { ElementRef, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import * as ace from 'ace-builds';

@Injectable({
    providedIn: 'root',
})
export class GithubRawFilePathService {
    constructor(private httpClient: HttpClient) {
        ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
    }

    getFileGithubRawContent(targetFilePath: string): Observable<string> {
        return this.httpClient.get(`${environment.githubApiRawContentUrl}/${targetFilePath}`, { responseType: 'text' });
    }

    public setTypescriptEditorOptions(element: ElementRef<HTMLElement>, valueContent: string, mode: string) {
        const editor = ace.edit(element.nativeElement);
        console.log(ace, editor);

        editor.setValue(valueContent, -1);
        editor.session.setMode(`ace/mode/${mode}`);
        editor.setTheme('ace/theme/clouds');

        editor.setOptions({
            readOnly: true,
            highlightActiveLine: false,
            highlightGutterLine: false,
            showGutter: false,

            wrap: false,
            useWorker: true,
            tabSize: 2,
            displayIndentGuides: false,

            maxLines: Infinity,
            minLines: 1,
        });

        editor.clearSelection();
        editor.resize(true);
    }
}
