import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TechnologiesService {
  private baseUrl = `http://185.244.50.198:3000`;

  constructor(private http: HttpClient) {}

  getTechnologies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/technologies`, { withCredentials: true });
  }
}
