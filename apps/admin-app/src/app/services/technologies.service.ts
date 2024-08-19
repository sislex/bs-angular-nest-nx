import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TechnologiesService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTechnologies(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/technologies`, { withCredentials: true });
  }

  deleteTechnologies(id: number): Observable<void> {
    const url = `${this.baseUrl}/technologies/${id}`;
    return this.http.delete<void>(url, { withCredentials: true });
  }

  updateTechnologies(id: string, technologies: any): Observable<any> {
    const url = `${this.baseUrl}/technologies/${id}`;
    return this.http.put<any>(url, technologies, { withCredentials: true });
  }

  addedOne(technologies: any): Observable<any> {
    const url = `${this.baseUrl}/technologies`;
    return this.http.post<any>(url, technologies, { withCredentials: true });
  }
}
