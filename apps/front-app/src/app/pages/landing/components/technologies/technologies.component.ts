import { Component } from '@angular/core'
import { sponsoredData, SponsorsType } from '../../data'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [
    SimplebarAngularModule
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  allSponsoredDetail: SponsorsType[] = sponsoredData;
}
