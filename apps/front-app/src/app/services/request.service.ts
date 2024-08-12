import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  setSession(): Observable<any> {
    return this.http.get('http://localhost:3000/teams/setSession', { withCredentials: true });
  }

  getSession(): Observable<any> {
    return this.http.get('http://localhost:3000/teams/getSession', { withCredentials: true });
  }

  sendRequest(requestData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/requests`, requestData);
  }


}
