import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from './session.storage.service';
import { Observable } from 'rxjs';
import { ReservationData } from '../models/responses/reservationsData';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private sessionService : SessionStorageService, private httpClient : HttpClient ) { }

  public getReservations(startTime : number | undefined, endTime : number | undefined, date : string | undefined ) : Observable<ReservationData[]> {

    let url = environment.ReservationsApi + 'Reservation';
    if(startTime && endTime && date){
      url += `?startTime=${startTime}&endTime=${endTime}&date=${date}`;
    }

    return this.httpClient.get<ReservationData[]>(url, { headers: this.getHeaders() });
  }

  public createReservation(placeId : number, checkInHour : string, checkOutHour : string, reservationDate : string, totalPayment : number) : Observable<number> {
    return this.httpClient.post<number>(environment.ReservationsApi + 'Reservation' ,{ placeId, checkInHour, checkOutHour, reservationDate, totalPayment }, { headers: this.getHeaders() });
  }

  public deleteReservation(id : number) : Observable<any> {
    return this.httpClient.delete(environment.ReservationsApi + `Reservation/${id}`, { headers: this.getHeaders() });
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
