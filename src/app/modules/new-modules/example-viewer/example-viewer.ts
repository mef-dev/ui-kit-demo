import { CommonModule } from '@angular/common';
import { Component, effect, ElementRef, inject, Input, model, Type, viewChild } from '@angular/core';
import { GithubRawFilePathService } from 'src/app/services/githubRawFilePathService';
import { MDTabsModule } from '@natec/mef-dev-ui-kit';

export type Views = 'full' | 'demo';

@Component({
    selector: 'example-viewer',
    templateUrl: 'example-viewer.html',
    styleUrl: 'example-viewer.scss',
    imports: [MDTabsModule, CommonModule],
})
export class ExampleViewer {
    private githubRawService = inject(GithubRawFilePathService);

    @Input() component: Type<any>;

    private _html: string;
    private _htmlUpdated = false;
    @Input() set html(val: string) {
        this._html = val;
        this._htmlUpdated = true;
    }
    get html() {
        return this._html;
    }

    private _css: string;
    private _cssUpdated = false;
    @Input() set css(val: string) {
        this._css = val;
        this._cssUpdated = true;
    }
    get css() {
        return this._css;
    }

    private _ts: string;
    private _tsUpdated = false;
    @Input() set ts(val: string) {
        this._ts = val;
        this._tsUpdated = true;
    }
    get ts() {
        return this._ts;
    }

    @Input() title: string = 'Test title';

    htmlRawEditor = viewChild<ElementRef>('htmlRawEditor');
    cssRawEditor = viewChild<ElementRef>('cssRawEditor');
    tsRawEditor = viewChild<ElementRef>('tsRawEditor');

    renderHtml = effect(() => {
        if (this.htmlRawEditor()) {
            this.githubRawService.setTypescriptEditorOptions(this.htmlRawEditor()!, this.html, 'html');
        }
    });

    renderCss = effect(() => {
        if (this.cssRawEditor()) {
            this.githubRawService.setTypescriptEditorOptions(this.cssRawEditor()!, this.css, 'css');
        }
    });

    renderTs = effect(() => {
        if (this.tsRawEditor()) {
            this.githubRawService.setTypescriptEditorOptions(this.tsRawEditor()!, this.ts, 'typescript');
        }
    });

    readonly view = model<Views>('demo');

    toggleSourceView(): void {
        this.view.set(this.view() === 'full' ? 'demo' : 'full');
    }

    copyToClipboard(key: 'ts' | 'html' | 'css') {
        copyText(this[key]);
    }
}

export async function copyText(text: string): Promise<boolean> {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.clipboardData?.setData) {
        try {
            // @ts-ignore
            return window.clipboardData.setData('Text', text);
        } catch {}
    }

    if (typeof navigator !== 'undefined' && (navigator as any).clipboard && window.isSecureContext) {
        try {
            await (navigator as any).clipboard.writeText(text);
            return true;
        } catch {}
    }

    try {
        const ta = document.createElement('textarea');
        ta.value = text;

        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.top = '-1000px';
        ta.style.left = '-1000px';
        ta.style.opacity = '0';
        ta.style.pointerEvents = 'none';
        ta.style.userSelect = 'text';
        document.body.appendChild(ta);

        const isIOS = /ipad|iphone|ipod/i.test(navigator.userAgent);
        if (isIOS) {
            const range = document.createRange();
            range.selectNodeContents(ta);
            const sel = window.getSelection();
            sel?.removeAllRanges();
            sel?.addRange(range);
            ta.setSelectionRange(0, Math.min(ta.value.length, 999999));
        } else {
            ta.select();
        }

        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return !!ok;
    } catch {
        return false;
    }
}
