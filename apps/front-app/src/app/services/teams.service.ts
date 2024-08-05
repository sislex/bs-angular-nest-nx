import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Teams } from '@back-app/entities/team.entity';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private apiUrl = `http://178.159.45.219:3000/teams`;

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Teams[]> {
    console.log(this.getHostnameFromServer());
    console.log('getTeams');

    return this.http.get<Teams[]>(this.apiUrl);
  }

  private getHostnameFromServer(): string {
    const headers = new HttpHeaders();
    const hostname = headers.get('host-name') || 'localhost'; // Используйте 'localhost' по умолчанию
    return hostname;
  }
}
