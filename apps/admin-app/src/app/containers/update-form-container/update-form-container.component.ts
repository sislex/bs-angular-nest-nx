import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamsService } from '../../services/teams.service';
import { TechnologiesService } from '../../services/technologies.service';
import { UpdateFormComponent } from '../../components/update-form/update-form.component';

@Component({
  selector: 'app-update-form-container',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  templateUrl: './update-form-container.component.html',
  styleUrl: './update-form-container.component.scss',
})
export class UpdateFormContainerComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: any ,
    private teamsService: TeamsService,
    private technologiesService: TechnologiesService,
  ) {}

  events($event: any){
    if ($event.event === 'TableTeamsComponent:BUTTON_CLICK') {
      this.teamsService.updateTeams($event.data.id, $event.data).subscribe(() => {
        this.dialogRef.close();
      });
    } else if ($event.event === 'TableTechnologiesComponent:BUTTON_CLICK') {
      this.technologiesService.updateTechnologies($event.data.id, $event.data).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}


