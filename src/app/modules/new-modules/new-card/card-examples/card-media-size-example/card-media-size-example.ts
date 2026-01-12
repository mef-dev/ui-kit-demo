import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MDCardModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'card-media-size-example',
  templateUrl: 'card-media-size-example.html',
  styleUrl: 'card-media-size-example.scss',
  imports: [MDCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardMediaSizeExample {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
