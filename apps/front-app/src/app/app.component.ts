import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConferenceComponent } from './pages/landing/conference.component';
import { RequestService } from './services/request.service';

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
export class AppComponent implements AfterViewInit {
  title = 'front-app';

  constructor(private requestService: RequestService) {
  }

  ngAfterViewInit() {
    console.log('App component initialized');
    this.requestService.setSession().subscribe((data) => {
      console.log(data);

      setTimeout(() => {
        this.requestService.getSession().subscribe((data) => {
          console.log(data);
        });
      }, 1000);

    });
  }
}
