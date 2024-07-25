import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConferenceComponent } from './pages/landing/conference.component';

@Component({
  standalone: true,
  imports: [
    ConferenceComponent,
    RouterModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front-app';
}
