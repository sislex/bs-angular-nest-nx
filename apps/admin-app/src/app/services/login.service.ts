import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  login(data: {login: string, pass: string}) {
    return this.http.post(`${this.baseUrl}/login`, data, { withCredentials: true });
  }

  updateLogin(): Observable<any> {
    console.log('Работа')
    return this.http.get(`${this.baseUrl}/login/check`, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/login/logout`, {}, { withCredentials: true });
  }

}
