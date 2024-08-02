import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Requests } from '@back-app/entities/request.entity';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-requests',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSlideToggle,
    FormsModule

  ],
  templateUrl: './table-requests.component.html',
  styleUrl: './table-requests.component.scss',
})
export class TableRequestsComponent {
  @Input() requests: Requests[] = [];


  displayedColumns: string[] = ['id', 'email', 'name', 'message', 'timestamp', 'processed', 'userName', 'timestampProcessed'];
}
