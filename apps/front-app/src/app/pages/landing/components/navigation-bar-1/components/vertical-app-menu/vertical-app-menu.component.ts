import { Component, Input } from '@angular/core'
import {catalogI} from "../../../../conference.component";

@Component({
  selector: 'app-vertical-app-menu',
  standalone: true,
  imports: [],
  templateUrl: './vertical-app-menu.component.html',
})
export class VerticalAppMenuComponent {
  @Input() catalog: catalogI[] = [];
}
