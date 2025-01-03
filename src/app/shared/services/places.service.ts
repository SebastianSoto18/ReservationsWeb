import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from './session.storage.service';
import { AvailablePlace } from '../models/responses/availablePlace';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private httpClient : HttpClient, private sessionService : SessionStorageService) { }

  public getAvailablePlaces(startTime : string , endTime : string , date : string) : Observable<AvailablePlace[]> {
    let url = environment.ReservationsApi + 'Place/available';
    url += `?startTime=${startTime}&endTime=${endTime}&date=${date}`;

    return this.httpClient.get<AvailablePlace[]>(url, { headers: this.getHeaders() });
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
