import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsService } from '../../services/requests.service';
import { Requests } from '@back-app/entities/request.entity';
import { TableRequestsComponent } from '../../components/tables/components/table-requests/table-requests.component';
import { MatDialog } from '@angular/material/dialog';
import {
  AddedFormRequestsContainerComponent
} from '../added-form-requests-container/added-form-requests-container.component';
import { PopUpWarningContainerComponent } from '../pop-up-warning-container/pop-up-warning-container.component';

@Component({
  selector: 'app-table-requests-container',
  standalone: true,
  imports: [CommonModule, TableRequestsComponent],
  templateUrl: './table-requests-container.component.html',
  styleUrl: './table-requests-container.component.scss',
})
export class TableRequestsContainerComponent implements OnInit {
  requests: Requests[] = [];

  constructor(
    private requestsService: RequestsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.requestsService.getRequests().subscribe((data: Requests[]) => {
      this.requests = data;
    });
  }

  events($event: any) {
    if ($event.event === 'TableRequestsComponent:BUTTON_CLICK') {
      if ($event.note === 'added') {
        const dialogRef = this.dialog.open(AddedFormRequestsContainerComponent, {
          data: 'TableRequestsComponent:BUTTON_CLICK',
        });
        dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit();
        });
      } else if ($event.note === 'delete') {
        const dialogRef = this.dialog.open(PopUpWarningContainerComponent, {
          data: {
            data: $event.data,
            event: $event.event
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.ngOnInit();
          }
        });
      }
    } else if ($event.event === 'TableRequestsComponent:SLIDE') {
      this.requestsService.updateRequests($event.data.id, $event.data).subscribe(() => {
      });
    }
  }
}
