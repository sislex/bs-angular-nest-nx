import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technologies } from '@back-app/entities/technologies.entity';
import { TechnologiesService } from '../../services/technologies.service';
import {
  TableTechnologiesComponent
} from '../../components/tables/components/table-technologies/table-technologies.component';

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
  ) {}

  ngOnInit(): void {
    this.technologiesService.getTechnologies().subscribe((data: Technologies[]) => {
      this.technologies = data;
    });
  }
}
