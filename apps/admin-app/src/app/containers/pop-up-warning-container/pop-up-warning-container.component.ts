import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpWarningComponent } from '../../components/pop-up-warning/pop-up-warning.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamsService } from '../../services/teams.service';
import { TechnologiesService } from '../../services/technologies.service';

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
    @Inject(MAT_DIALOG_DATA) public  data: { event: any, data: any },
    private teamsService: TeamsService,
    private technologiesService: TechnologiesService,
  ) {}

  events($event: any){
    if ($event.data === 'TableTeamsComponent:BUTTON_CLICK') {
      this.teamsService.deleteTeams(this.data.data.id).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else if ($event.data === 'TableTechnologiesComponent:BUTTON_CLICK') {
      this.technologiesService.deleteTechnologies(this.data.data.id).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}
