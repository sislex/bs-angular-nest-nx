import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Teams } from '@back-app/entities/team.entity';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private apiUrl = `http://${window.location.hostname}:3000/teams`;

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Teams[]> {
    return this.http.get<Teams[]>(this.apiUrl);
  }
}
