import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teams } from '@back-app/entities/team.entity';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private baseUrl = 'http://localhost:3000/teams';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Teams[]> {
    return this.http.get<Teams[]>(this.baseUrl);
  }
}
