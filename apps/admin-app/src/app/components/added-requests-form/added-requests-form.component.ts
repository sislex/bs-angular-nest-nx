import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-added-requests-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './added-requests-form.component.html',
  styleUrl: './added-requests-form.component.scss',
})
export class AddedRequestsFormComponent {
  @Output() emitter = new EventEmitter()

  email = '';
  name = '';
  message = '';

  constructor(
    public dialogRef: MatDialogRef<AddedRequestsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  buttonClick(note: string){
    if (note === 'cancel') {
      this.dialogRef.close();
    } else if (note === 'ok') {

      const message = {
        event: this.data,
        data: {
          email: this.email,
          name: this.name,
          message: this.message
        },
      };
      this.emitter.emit(message);
    }
  }
}
