import {Component} from '@angular/core';
import { MDTabsModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'tab-group-paginated-example',
  templateUrl: 'tab-group-paginated-example.html',
  imports: [MDTabsModule],
})
export class TabGroupPaginatedExample {
  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
}
