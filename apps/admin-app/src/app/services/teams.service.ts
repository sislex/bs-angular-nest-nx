import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teams } from '@back-app/entities/team.entity';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Teams[]> {
    return this.http.get<Teams[]>(`${this.baseUrl}/teams`, { withCredentials: true });
  }

  getOneTeam(id: number): Observable<Teams> {
    return this.http.get<Teams>(`${this.baseUrl}/teams/${id}`, { withCredentials: true });
  }

  deleteTeams(id: number): Observable<void> {
    const url = `${this.baseUrl}/teams/${id}`;
    return this.http.delete<void>(url, { withCredentials: true });
  }

  updateTeams(id: string, team: any): Observable<any> {
    const url = `${this.baseUrl}/teams/${id}`;
    return this.http.put<any>(url, team, { withCredentials: true });
  }

  addedOne(team: any): Observable<any> {
    const url = `${this.baseUrl}/teams`;
    return this.http.post<any>(url, team, { withCredentials: true });
  }
}
