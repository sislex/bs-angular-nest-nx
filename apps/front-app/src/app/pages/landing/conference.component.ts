import {Component} from '@angular/core'
import { AboutComponent } from './components/about/about.component'
import { StatisticsComponent } from './components/statistics/statistics.component'
import { TargetComponent } from './components/target/target.component'
import { DevelopersComponent } from './components/developers/developers.component'
import { TechnologiesComponent } from './components/technologies/technologies.component'
import { ContactComponent } from './components/contact/contact.component'
import { FooterComponent } from './components/footer/footer.component'
import { NavigationBarComponent } from './components/navigation-bar-1/navigation-bar.component'

export interface catalogI {
  name: string;
  url: string;
}

@Component({
  selector: 'landings-conference',
  standalone: true,
  imports: [
    NavigationBarComponent,
    AboutComponent,
    StatisticsComponent,
    TargetComponent,
    DevelopersComponent,
    TechnologiesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './conference.component.html',
  styles: ``,
})
export class ConferenceComponent {
  catalog: catalogI[] = [
    {name: 'About', url: '#about'},
    {name: 'Statistics', url: '#statistics'},
    {name: 'Clients', url: '#clients'},
    {name: 'Team', url: '#team'},
    {name: 'Contact', url: '#contact'},
    {name: 'Technologies', url: '#technologies'},
  ];

}
