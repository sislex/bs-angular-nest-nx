import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technologies } from '@back-app/entities/technologies.entity';

@Injectable({ providedIn: 'root' })
export class TechnologiesService {
  private baseUrl = 'http://localhost:3000/technologies';

  constructor(private http: HttpClient) {}

  getTechnologies(): Observable<Technologies[]> {
    return this.http.get<Technologies[]>(this.baseUrl);
  }

  deleteTechnologies(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
