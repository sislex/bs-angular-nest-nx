import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTeamsComponent } from '../../components/tables/components/table-teams/table-teams.component';
import { Teams } from '@back-app/entities/team.entity';
import { TeamsService } from '../../services/teams.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-teams-container',
  standalone: true,
  imports: [CommonModule, TableTeamsComponent],
  templateUrl: './table-teams-container.component.html',
  styleUrl: './table-teams-container.component.scss',
})
export class TableTeamsContainerComponent implements OnInit {
  teams: Teams[] = [];

  constructor(
    private teamsService: TeamsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.teamsService.getTeams().subscribe((data: Teams[]) => {
      this.teams = data;
    });
  }

}
