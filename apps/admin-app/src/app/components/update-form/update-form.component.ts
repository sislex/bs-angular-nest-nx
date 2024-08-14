import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],

  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.scss',
})
export class UpdateFormComponent {
  @Output() emitter = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<UpdateFormComponent>,
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
