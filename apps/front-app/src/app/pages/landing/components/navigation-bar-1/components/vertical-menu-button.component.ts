import {Component, inject, Input, type OnInit} from '@angular/core'
import { VerticalAppMenuComponent } from './vertical-app-menu/vertical-app-menu.component'
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { LogoBoxComponent } from './logo-box/logo-box.component'
import {catalogI} from "../../../conference.component";

@Component({
  selector: 'app-vertical-menu-button',
  standalone: true,
  imports: [VerticalAppMenuComponent, LogoBoxComponent],
  templateUrl: './vertical-menu-button.component.html',
  styleUrl: './vertical-menu-button.component.scss',
})
export class VerticalMenuButtonComponent implements OnInit {
  @Input() catalog: catalogI[] = [];
  offcanvasService = inject(NgbOffcanvas)

  isOffcanvasOpen: boolean = false

  ngOnInit(): void {
    this.offcanvasService.activeInstance.subscribe((e) => {
      this.isOffcanvasOpen = Boolean(e)
    })
  }
}
