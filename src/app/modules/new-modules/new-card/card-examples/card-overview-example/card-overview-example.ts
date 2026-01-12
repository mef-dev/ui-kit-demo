import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MDCardModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'card-overview-example',
  templateUrl: 'card-overview-example.html',
  styleUrl: 'card-overview-example.scss',
  imports: [MDCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardOverviewExample {}
