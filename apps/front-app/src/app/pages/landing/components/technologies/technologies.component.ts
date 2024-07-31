import { Component, OnInit } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular'
import { TechnologiesService } from '../../../../services/technologies.service';
import { Technologies } from '@back-app/entities/technologies.entity';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [
    SimplebarAngularModule
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent implements OnInit {
  allSponsoredDetail: Technologies[] = [];

  constructor(private technologiesService: TechnologiesService) {}

  ngOnInit(): void {
    this.technologiesService.getTechnologies().subscribe((data: Technologies[]) => {
      this.allSponsoredDetail = data;
    });

  }
}
