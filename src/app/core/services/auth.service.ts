import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  authUser(email:string,password:string): Observable<string> {
    return this.http.post<string>(environment.ReservationsApi + 'Auth', {email: email, password: password});
  }
}