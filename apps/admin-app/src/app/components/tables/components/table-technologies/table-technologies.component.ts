import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technologies } from '@back-app/entities/technologies.entity';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-table-technologies',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './table-technologies.component.html',
  styleUrl: './table-technologies.component.scss',
})
export class TableTechnologiesComponent {
  @Output() emitter = new EventEmitter();
  @Input() technologies: Technologies[] = [];

  buttonClick(element: any, note: string) {
    const message = {
      event: 'TableTechnologiesComponent:BUTTON_CLICK',
      data: element,
      note,
    };
    this.emitter.emit(message);
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'photo', 'update', 'delete'];

  addClick() {
    const message = {
      event: 'TableTechnologiesComponent:BUTTON_CLICK',
      note: 'added',
    };
    this.emitter.emit(message);
  }
}
