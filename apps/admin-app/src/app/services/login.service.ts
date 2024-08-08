import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  login(data: {login: string, pass: string}) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  updateLogin(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/login/${id}`, data);
  }

  updatePermission(id: number, permission: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/login/${id}`, { permission });
  }
}
