import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { Login } from '@back-app/entities/login.entity';
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
  login: Login[] = [];
  permission: number | undefined = 0;

  constructor(
    private loginService: LoginService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loginService.getLogin().subscribe((data: Login[]) => {
      this.login = data;
      this.permission = data[0].permission;
    });
  }

  events($event: any) {
    if ($event.event === 'LoginComponent:SUBMIT_LOGIN') {
      if ($event.data.login === this.login[0].name ) {
        if ($event.data.password === this.login[0].password ) {

          const updateData = {
            name: this.login[0].name,
            password: this.login[0].password,
            permission: 1
          };

          this.loginService.updateLogin(1, updateData).subscribe( );
        }
      }
      location.reload();
    } else if ($event.event === 'NavComponent:SUBMIT_LOGOUT') {
      const updateData = {
        name: this.login[0].name,
        password: this.login[0].password,
        permission: 0
      };
      this.loginService.updateLogin(1, updateData).subscribe( );
      location.reload();
    }

  }
}
