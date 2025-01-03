import { Injectable } from '@angular/core';
import { SessionStorageService } from './session.storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from '../models/responses/userData';
import { environment } from '../../../enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private sessionService : SessionStorageService,private http: HttpClient,) { }

  public getUserData() : Observable<UserData> {
    return this.http.get<UserData>(environment.ReservationsApi + 'User/basic-info', { headers: this.getHeaders() });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.getToken()}`);
  }

  getToken(): string | null {
    const rawToken = this.sessionService.getItem<string>('token');
    return rawToken ? rawToken.replace(/^"|"$/g, '') : null;
  }
}
