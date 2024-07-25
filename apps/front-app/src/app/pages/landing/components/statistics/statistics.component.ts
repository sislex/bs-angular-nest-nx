import { Component } from '@angular/core'

export interface statisticsI {
  name: string;
  description: string;
  position?: string;
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {
  statistics: statisticsI[] = [
    {name: 'Free developers', description: '4'},
    {name: 'Hours of work', description: '7k+'},
    {name: 'Completed projects', description: '20+', position: 'justify-content-md-center'},
    {name: 'Satisfied clients', description: '100%', position: 'justify-content-md-end'},
  ]
}
