import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'component-logo-box',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './logo-box.component.html',
})

export class LogoBoxComponent {
  @Input() className?: string
}
