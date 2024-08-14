import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-warning',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './pop-up-warning.component.html',
  styleUrl: './pop-up-warning.component.scss',
})
export class PopUpWarningComponent {
  @Output() emitter = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<PopUpWarningComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  buttonClick(note: string){
    if (note === 'cancel') {
      this.dialogRef.close();
    } else if (note === 'ok') {

      const message = {
        event: this.data.event,
        data: this.data.data,
        note,
      };

      this.emitter.emit(message);
    }
  }
}
