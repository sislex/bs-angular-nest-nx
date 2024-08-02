import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() emitter = new EventEmitter();

  events(data: any){
    this.emitter.emit({
      event: data.event,
      data: data.data
    })
  }
}
