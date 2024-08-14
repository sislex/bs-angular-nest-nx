import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Teams } from '@back-app/entities/team.entity';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

export interface Team {
  id: number;
  name: string;
  description: string;
  free: number;
  photo: string;
}
@Component({
  selector: 'app-table-teams',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
  ],
  templateUrl: './table-teams.component.html',
  styleUrl: './table-teams.component.scss',
})
export class TableTeamsComponent {
  @Output() emitter = new EventEmitter();
  @Input() teams: Teams[] = [];

  buttonClick(element: any, note: string) {
    const message = {
      event: 'TableTeamsComponent:BUTTON_CLICK',
      data: element,
      note,
    };
    this.emitter.emit(message);
  }

  addClick() {
    const message = {
      event: 'TableTeamsComponent:BUTTON_CLICK',
      note: 'added',
    };
    this.emitter.emit(message);
  }

  onFreeChange(event: any, element: any): void {
    element.processed = event.checked ? 1 : 0;

    const message = {
      event: 'TableTeamsComponent:SLIDE',
      data: element
    };
    this.emitter.emit(message);

    console.log('Processed value changed:', element.processed);

  }

  displayedColumns: string[] = ['id', 'name', 'description', 'free', 'photo', 'update', 'delete' ];
}
