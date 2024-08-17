import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { MatButton } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MainComponent,
    LoginComponent,
    MatButton
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  state = false;
  user = '';

  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
  ) {
  }

  ngOnInit() {
    this.checkAuth();
  }

  checkAuth() {
    const token = this.cookieService.get('accessToken');
    if (token) {
      this.loginService.updateLogin().subscribe(
        (data: any) => {
          console.log(' вернулось в компонент ', data);
          this.state = data.success;
          this.user = data.user;
        },
        (error) => {
          console.error('Ошибка при проверке авторизации', error);
          this.state = false;
        }
      );
    } else {
      this.state = false;
    }
  }


  events($event: any) {
    if ($event.event === 'LoginComponent:SUBMIT_LOGIN') {
      this.loginService.login({ login: $event.data.login, pass: $event.data.password }).subscribe(
        (data: any) => {
          this.state = data.data;
          this.user = data.user;
          const token = data.access_token;
          this.cookieService.set('accessToken', token);
          console.log('Пришло из ивента', data.access_token);
        },
        (error) => {
          console.error('Ошибка при логине', error);
        }
      );
    } else if ($event.event === 'NavComponent:SUBMIT_LOGOUT') {
      console.log('out')
      this.loginService.logout().subscribe(
        () => {
          this.cookieService.delete('accessToken');
          this.state = false;
          console.log('Выход выполнен');
        },
        (error) => {
          console.error('Ошибка при выходе', error);
        }
      );
    }
  }
}
