import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConferenceComponent } from './pages/landing/conference.component';
import { RequestService } from './services/request.service';

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
export class AppComponent implements AfterViewInit {
  constructor(private requestService: RequestService) {
  }

  ngAfterViewInit() {
    console.log('App component initialized');
  }

  click1() {
    console.log('click 1');
    this.requestService.setSession().subscribe((data) => {
      console.log(data);
    });
  }

  click2() {
    console.log('click 2');
    this.requestService.getSession().subscribe((data) => {
      console.log(data);
    });
  }
}
