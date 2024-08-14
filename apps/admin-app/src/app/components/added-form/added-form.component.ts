import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-added-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './added-form.component.html',
  styleUrl: './added-form.component.scss',
})
export class AddedFormComponent {
  @Output() emitter = new EventEmitter()

  name = '';
  description = '';
  photo = '';

  constructor(
    public dialogRef: MatDialogRef<AddedFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  buttonClick(note: string){
    if (note === 'cancel') {
      this.dialogRef.close();
    } else if (note === 'ok') {

      const message = {
        event: this.data,
        data: {
          name: this.name,
          description: this.description,
          photo: this.photo
        },
      };
      this.emitter.emit(message);
    }
  }
}
