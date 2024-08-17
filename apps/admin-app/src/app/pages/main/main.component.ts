import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { TablesComponent } from '../../components/tables/tables.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    TablesComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @Input() user = '';
  @Output() emitter = new EventEmitter();


  events($event: any){
    this.emitter.emit({
      event: $event.event,
      data: $event.data
    })
  }
}
