import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technologies } from '@back-app/entities/technologies.entity';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';


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
    MatSlideToggle,
    MatExpansionModule
  ],
  templateUrl: './table-technologies.component.html',
  styleUrl: './table-technologies.component.scss',
})
export class TableTechnologiesComponent {
  @Output() emitter = new EventEmitter();
  @Input() technologies: Technologies[] = [];

  constructor(
    private http: HttpClient
  ) {}

  buttonClick(id: any, name:string, note: string) {

    const message = {
      event: 'TableTechnologiesComponent:BUTTON_CLICK',
      id,
      name,
      note,
    };

    this.emitter.emit(message);
  }

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
