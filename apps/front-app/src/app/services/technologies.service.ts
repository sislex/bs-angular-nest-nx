import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Technologies } from '@back-app/entities/technologies.entity';

@Injectable({ providedIn: 'root' })
export class TechnologiesService {
  private apiUrl = `http://185.244.50.198/:3000/technologies`;

  constructor(private http: HttpClient) {}

  getTechnologies(): Observable<Technologies[]> {
    return this.http.get<Technologies[]>(this.apiUrl);
  }
}
