import { Component } from '@angular/core'
import { SpeakerType, speakersData } from '../../data'
import {SimplebarAngularModule} from "simplebar-angular";

@Component({
  selector: 'developers',
  standalone: true,
  imports: [
    SimplebarAngularModule
  ],
  templateUrl: './developers.component.html',
  styleUrl: './developers.component.scss',
})
export class DevelopersComponent {
  speakerData: SpeakerType[] = speakersData
}
