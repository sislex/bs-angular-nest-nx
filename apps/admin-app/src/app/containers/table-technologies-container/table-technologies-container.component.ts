import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technologies } from '@back-app/entities/technologies.entity';
import { TechnologiesService } from '../../services/technologies.service';
import {
  TableTechnologiesComponent
} from '../../components/tables/components/table-technologies/table-technologies.component';
import { PopUpWarningContainerComponent } from '../pop-up-warning-container/pop-up-warning-container.component';
import { MatDialog } from '@angular/material/dialog';

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
            event: 'TableTechnologiesComponent:BUTTON_CLICK',
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
