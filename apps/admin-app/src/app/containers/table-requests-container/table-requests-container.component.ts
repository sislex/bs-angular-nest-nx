import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsService } from '../../services/requests.service';
import { Requests } from '@back-app/entities/request.entity';
import { TableRequestsComponent } from '../../components/tables/components/table-requests/table-requests.component';

@Component({
  selector: 'app-table-requests-container',
  standalone: true,
  imports: [CommonModule, TableRequestsComponent],
  templateUrl: './table-requests-container.component.html',
  styleUrl: './table-requests-container.component.scss',
})
export class TableRequestsContainerComponent implements OnInit {
  requests: Requests[] = [];

  constructor(private requestsService: RequestsService) {}

  ngOnInit() {
    this.requestsService.getRequests().subscribe((data: Requests[]) => {
      this.requests = data;
    });
  }

}
