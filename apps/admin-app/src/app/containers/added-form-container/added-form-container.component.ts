import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddedFormComponent } from '../../components/added-form/added-form.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamsService } from '../../services/teams.service';
import { TechnologiesService } from '../../services/technologies.service';

@Component({
  selector: 'app-added-form-container',
  standalone: true,
  imports: [CommonModule, AddedFormComponent],
  templateUrl: './added-form-container.component.html',
  styleUrl: './added-form-container.component.scss',
})
export class AddedFormContainerComponent {

  constructor(
    public dialogRef: MatDialogRef<AddedFormComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: any ,
    private teamsService: TeamsService,
    private technologiesService: TechnologiesService,
  ) {}

  events($event: any){
      if (this.data === 'TableTeamsComponent:BUTTON_CLICK') {
        this.teamsService.addedOne($event.data).subscribe(() => {
          this.dialogRef.close();
        });
    } else if ($event.event === 'TableTechnologiesComponent:BUTTON_CLICK') {
      this.technologiesService.addedOne($event.data).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

}
