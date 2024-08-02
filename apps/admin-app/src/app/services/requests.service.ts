import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests } from '@back-app/entities/request.entity';

@Injectable({ providedIn: 'root' })
export class RequestsService {
  private baseUrl = 'http://localhost:3000/requests';

  constructor(private http: HttpClient) {}

  getRequests(): Observable<Requests[]> {
    return this.http.get<Requests[]>(this.baseUrl);
  }
}

