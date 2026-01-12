import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MDTabsModule } from '@natec/mef-dev-ui-kit';

export interface ExampleTab {
    label: string;
    content: string;
}

@Component({
    selector: 'tab-group-async-example',
    templateUrl: 'tab-group-async-example.html',
    imports: [MDTabsModule, AsyncPipe],
})
export class TabGroupAsyncExample {
    asyncTabs: Observable<ExampleTab[]>;

    constructor() {
        this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
            setTimeout(() => {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }, 1000);
        });
    }
}
