import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MDRadioModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'radio-ng-model-example',
  templateUrl: 'radio-ng-model-example.html',
  styleUrl: 'radio-ng-model-example.scss',
  imports: [MDRadioModule, FormsModule],
})
export class RadioNgModelExample {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
