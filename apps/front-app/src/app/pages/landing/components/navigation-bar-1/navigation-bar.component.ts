import {Component, Input} from '@angular/core'
import { VerticalMenuButtonComponent } from './components/vertical-menu-button.component'
import { LogoBoxComponent } from './components/logo-box/logo-box.component'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'
import { HorizontalAppMenu } from "./components/horizontal-app-menu/horizontal-app-menu.component";
import {catalogI} from "../../conference.component";

@Component({
  selector: 'component-navigation-bar',
  standalone: true,
  imports: [
    HorizontalAppMenu,
    LogoBoxComponent,
    NgbCollapseModule,
    VerticalMenuButtonComponent,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {
  @Input() catalog: catalogI[] = [];

  isMenuCollapsed = false



}
