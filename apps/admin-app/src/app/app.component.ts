import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MainComponent,
    LoginComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  permission: number | undefined = 0;

  constructor(
    private loginService: LoginService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loginService.login({login: 'login', pass: 'pass'}).subscribe((data) => {
      console.log(data);
    });
  }
}
