import { CommonModule } from '@angular/common'
import {Component, Input} from '@angular/core'
import { RouterModule } from '@angular/router'
import {catalogI} from "../../../../conference.component";

@Component({
  selector: 'app-horizontal-app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './horizontal-app-menu.component.html',
  styleUrl: './horizontal-app-menu.component.scss',
})
export class HorizontalAppMenuComponent {
  @Input() catalog: catalogI[] = [];
}
