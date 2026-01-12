import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MDCardModule, MDDialog, MDModalModule } from '@natec/mef-dev-ui-kit';

@Component({
    selector: 'menu-overview-example',
    styleUrls: ['modals-overview-example.scss'],
    templateUrl: 'modals-overview-example.html',
    imports: [MDModalModule, CommonModule, RouterModule, MDModalModule, MDCardModule],
})
export class ModalsOverviewExample {
    @ViewChild('modal1', { read: TemplateRef }) modal1Template!: any;

    readonly dialog = inject(MDDialog);
    openDialog(position: 'left' | 'right' | 'top' | 'bottom'): void {
        const dialogRef = this.dialog.open(this.modal1Template, {
            enterAnimationDuration: '300ms',
            exitAnimationDuration: '300ms',
            position: { top: '0', [position]: '0' } as any,
            height: '100%',
            maxHeight: '100%',
            animationPosition: position as any,
        });

        dialogRef.afterOpened().subscribe(() => {
            console.log('dialog\'s enter animation is completed')
        })

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
