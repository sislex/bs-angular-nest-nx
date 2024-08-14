import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpWarningComponent } from '../../components/pop-up-warning/pop-up-warning.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamsService } from '../../services/teams.service';
import { TechnologiesService } from '../../services/technologies.service';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-pop-up-warning-container',
  standalone: true,
  imports: [CommonModule, PopUpWarningComponent],
  templateUrl: './pop-up-warning-container.component.html',
  styleUrl: './pop-up-warning-container.component.scss',
})
export class PopUpWarningContainerComponent {

  constructor(
    public dialogRef: MatDialogRef<PopUpWarningComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: any,
    private teamsService: TeamsService,
    private technologiesService: TechnologiesService,
    private requestsService: RequestsService,
  ) {}

  events($event: any){
    if ($event.note === 'ok') {
      if ($event.event === 'TableTeamsComponent:BUTTON_CLICK') {
        this.teamsService.deleteTeams($event.data.id).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else if ($event.event === 'TableTechnologiesComponent:BUTTON_CLICK') {
        this.technologiesService.deleteTechnologies($event.data.id).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else if ($event.event === 'TableRequestsComponent:BUTTON_CLICK') {
        this.requestsService.deleteRequest($event.data.id).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }
}
