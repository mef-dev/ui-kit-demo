import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MDCheckBoxModule } from '@natec/mef-dev-ui-kit';


@Component({
  selector: 'checkbox-overview-example',
  templateUrl: 'checkbox-overview-example.html',
  styleUrl: 'checkbox-overview-example.scss',
  imports: [MDCheckBoxModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxOverviewExample {

}
