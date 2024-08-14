import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technologies } from '@back-app/entities/technologies.entity';
import { TechnologiesService } from '../../services/technologies.service';
import {
  TableTechnologiesComponent
} from '../../components/tables/components/table-technologies/table-technologies.component';
import { PopUpWarningContainerComponent } from '../pop-up-warning-container/pop-up-warning-container.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateFormContainerComponent } from '../update-form-container/update-form-container.component';
import { AddedFormContainerComponent } from '../added-form-container/added-form-container.component';

@Component({
  selector: 'app-table-technologies-container',
  standalone: true,
  imports: [CommonModule, TableTechnologiesComponent],
  templateUrl: './table-technologies-container.component.html',
  styleUrl: './table-technologies-container.component.scss',
})
export class TableTechnologiesContainerComponent implements OnInit {
  technologies: Technologies[] = [];

  constructor(
    private technologiesService: TechnologiesService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.technologiesService.getTechnologies().subscribe((data: Technologies[]) => {
      this.technologies = data;
    });
  }

  events($event: any) {
    if ($event.event === 'TableTechnologiesComponent:BUTTON_CLICK') {
      if ($event.note === 'delete') {
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
      } else if ($event.note === 'update') {
        const dialogRef = this.dialog.open(UpdateFormContainerComponent, {
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
      } else if ($event.note === 'added') {
        const dialogRef = this.dialog.open(AddedFormContainerComponent, {
          data: 'TableTechnologiesComponent:BUTTON_CLICK',
        });
        dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit();
        });
      }
    }
  }
}
