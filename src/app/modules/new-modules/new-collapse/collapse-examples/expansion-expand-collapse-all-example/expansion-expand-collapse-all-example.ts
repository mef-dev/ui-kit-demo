import { Component, viewChild } from '@angular/core';
import { MDAccordion, MDCollapseModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'expansion-expand-collapse-all-example',
    templateUrl: 'expansion-expand-collapse-all-example.html',
    styleUrl: 'expansion-expand-collapse-all-example.scss',
    providers: [],
    imports: [MDCollapseModule],
    standalone: true,
})
export class ExpansionExpandCollapseAllExample {
    accordion = viewChild.required(MDAccordion);
}
