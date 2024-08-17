import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests } from '@back-app/entities/request.entity';

@Injectable({ providedIn: 'root' })
export class RequestsService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRequests(): Observable<Requests[]> {
    return this.http.get<Requests[]>(`${this.baseUrl}/requests`, { withCredentials: true });
  }

  sendRequest(requestData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/requests`, requestData, { withCredentials: true });
  }

  deleteRequest(id: number): Observable<void> {
    const url = `${this.baseUrl}/requests/${id}`;
    return this.http.delete<void>(url, { withCredentials: true });
  }

  updateRequests(id: string, requests: any): Observable<any> {
    const url = `${this.baseUrl}/requests/${id}`;
    return this.http.put<any>(url, requests, { withCredentials: true });
  }
}

