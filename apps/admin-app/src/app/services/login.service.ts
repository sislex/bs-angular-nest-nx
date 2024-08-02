import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '@back-app/entities/login.entity';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private baseUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  getLogin(): Observable<Login[]> {
    return this.http.get<Login[]>(this.baseUrl);
  }

  updateLogin(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  updatePermission(id: number, permission: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, { permission });
  }
}
