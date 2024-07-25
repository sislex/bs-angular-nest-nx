import {Component, Input} from '@angular/core'
import { RouterModule } from '@angular/router'
import { LogoBoxComponent } from '../../components/navigation-bar-1/components/logo-box/logo-box.component'
import {catalogI} from "../../conference.component";

@Component({
  selector: 'conference-footer',
  standalone: true,
  imports: [RouterModule, LogoBoxComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() catalog: catalogI[] = []

}
