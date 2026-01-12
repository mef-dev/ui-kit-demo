import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { MDCollapseModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  imports: [MDCollapseModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionOverviewExample {
  readonly panelOpenState = signal(false);
}
