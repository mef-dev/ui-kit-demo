import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MDDialog, MDModalModule } from '@natec/mef-dev-ui-kit';

@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
  imports: [MDModalModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExample {
  readonly dialog = inject(MDDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  imports: [MDModalModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExampleDialog {}
