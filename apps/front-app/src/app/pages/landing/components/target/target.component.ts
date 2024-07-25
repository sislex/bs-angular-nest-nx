import { Component } from '@angular/core'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { targetData, TargetDataType } from '../../data'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-conference-target',
  standalone: true,
  imports: [
    NgbNavModule,
    SimplebarAngularModule
  ],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss',
})
export class TargetComponent {
  allTargetData: TargetDataType[] = targetData
}
