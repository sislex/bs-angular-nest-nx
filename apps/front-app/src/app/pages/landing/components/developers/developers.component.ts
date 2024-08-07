import { Component, OnInit } from '@angular/core';
import {SimplebarAngularModule} from "simplebar-angular";
import { TeamsService } from '../../../../services/teams.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Teams } from '@back-app/entities/team.entity';

@Component({
  selector: 'app-developers',
  standalone: true,
  imports: [
    SimplebarAngularModule
  ],
  templateUrl: './developers.component.html',
  styleUrl: './developers.component.scss',
})
export class DevelopersComponent implements OnInit {
  speakerData: Teams[] = [];

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    console.log('getTeams');
    this.teamsService.getTeams().subscribe((data: Teams[]) => {
      this.speakerData = data;
    });

  }
}
