import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Teams } from '@back-app/entities/team.entity';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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

  constructor(
    private http: HttpClient
  ) {}

  buttonClick(id: any, name:string, note: string) {

    const message = {
      event: 'TableTeamsComponent:BUTTON_CLICK',
      id,
      name,
      note,
    };

    this.emitter.emit(message);
  }

  updateTeam(team: any) {
    this.http.put(`/api/teams/${team.id}`, team)
      .subscribe(response => {
        console.log('Team updated', response);
      }, error => {
        console.error('Error updating teams', error);
      });
  }

  newTeam: Partial<Team> = { name: '', description: '', free: 0, photo: '' };

  addTeam() {
    const newId = 1;
    const teamToAdd = { ...this.newTeam, id: newId } as Team;
    this.teams.push(teamToAdd);
    this.newTeam = { name: '', description: '', free: 0, photo: '' }; // Сброс формы
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'free', 'photo', 'update', 'delete' ];

}
