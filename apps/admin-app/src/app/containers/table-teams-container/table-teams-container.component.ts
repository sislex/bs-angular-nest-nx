import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTeamsComponent } from '../../components/tables/components/table-teams/table-teams.component';
import { Teams } from '@back-app/entities/team.entity';
import { TeamsService } from '../../services/teams.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpWarningContainerComponent } from '../pop-up-warning-container/pop-up-warning-container.component';

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
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.teamsService.getTeams().subscribe((data: Teams[]) => {
      this.teams = data;
    });
  }

  events($event: any) {
    if ($event.event === 'TableTeamsComponent:BUTTON_CLICK') {
      if ($event.note === 'delete') {
        const dialogRef = this.dialog.open(PopUpWarningContainerComponent, {
          data: {
            event: 'TableTeamsComponent:BUTTON_CLICK',
            data: $event
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.ngOnInit(); // Обновить список команд после удаления
          }
        });
      } else if ($event.note === 'update') {
        console.log('up', $event);
      }
    }
  }
}
