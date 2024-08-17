import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConferenceComponent } from './pages/landing/conference.component';

@Component({
  standalone: true,
  imports: [
    ConferenceComponent,
    RouterOutlet
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
