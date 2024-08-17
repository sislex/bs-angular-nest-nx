import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Requests } from '@back-app/entities/request.entity';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'


@Component({
  selector: 'app-table-requests',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSlideToggle,
    FormsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './table-requests.component.html',
  styleUrl: './table-requests.component.scss',
})
export class TableRequestsComponent {
  @Output() emitter = new EventEmitter();
  @Input() requests: Requests[] = [];

  addClick() {
    const message = {
      event: 'TableRequestsComponent:BUTTON_CLICK',
      note: 'added',
    };
    this.emitter.emit(message);
  }

  buttonClick(element: any, note: string) {
    const message = {
      event: 'TableRequestsComponent:BUTTON_CLICK',
      data: element,
      note,
    };
    this.emitter.emit(message);
  }

  onProcessedChange(event: any, element: any): void {
    element.processed = event.checked ? 1 : 0;

    const message = {
      event: 'TableRequestsComponent:SLIDE',
      data: element
    };
    this.emitter.emit(message);

    console.log('Processed value changed:', element.processed);

  }

  displayedColumns: string[] = ['id', 'email', 'name', 'message', 'timestamp', 'processed', 'userName', 'timestampProcessed', 'delete'];
}
