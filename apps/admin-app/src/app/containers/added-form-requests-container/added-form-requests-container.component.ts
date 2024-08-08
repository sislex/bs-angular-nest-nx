import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddedRequestsFormComponent } from '../../components/added-requests-form/added-requests-form.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-added-form-requests-container',
  standalone: true,
  imports: [CommonModule, AddedRequestsFormComponent],
  templateUrl: './added-form-requests-container.component.html',
  styleUrl: './added-form-requests-container.component.scss',
})
export class AddedFormRequestsContainerComponent {

  constructor(
    public dialogRef: MatDialogRef<AddedRequestsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: any ,
    private requestsService: RequestsService,
  ) {}

  events($event: any){
    if (this.data === 'TableRequestsComponent:BUTTON_CLICK') {
      this.requestsService.sendRequest($event.data).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }
}
