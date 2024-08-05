import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = `http://178.159.45.219:3000/requests`;


  constructor(private http: HttpClient) {
  }

  sendRequest(requestData: any): Observable<any> {
    return this.http.post(this.apiUrl, requestData);
  }
}
