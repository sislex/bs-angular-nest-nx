import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technologies } from '@back-app/entities/technologies.entity';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-table-technologies',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatIcon,
    MatMiniFabButton,
    MatSlideToggle
  ],
  templateUrl: './table-technologies.component.html',
  styleUrl: './table-technologies.component.scss',
})
export class TableTechnologiesComponent {
  @Input() technologies: Technologies[] = [];

  constructor(
    private http: HttpClient
  ) {}

  updateTechnologies(technologies: any) {
    this.http.put(`/api/teams/${technologies.id}`, technologies)
      .subscribe(response => {
        console.log('Team updated', response);
      }, error => {
        console.error('Error updating teams', error);
      });
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'photo', 'update', 'delete'];
}
