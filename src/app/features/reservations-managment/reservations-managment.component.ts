import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../core/layout/nav/nav.component';
import { Subscription } from 'rxjs';
import { ReservationData } from '../../shared/models/responses/reservationsData';
import { ReservationsService } from '../../shared/services/reservations.service';
import { LoaderService } from '../../shared/services/loader.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { PlacesService } from '../../shared/services/places.service';
import { AvailablePlace } from '../../shared/models/responses/availablePlace';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservations.managment',
  standalone: true,
  imports: [ NavComponent, ToastModule, ListReservationsComponent,ButtonModule, DialogModule, ReactiveFormsModule, CalendarModule, FormsModule ,TableModule, CommonModule], 
  templateUrl: './reservations-managment.component.html',
  styleUrl: './reservations-managment.component.css',
  providers: [MessageService]
})
export class ReservationsManagmentComponent implements OnInit {

  subscriptions: Subscription[] = [];
  reservations: ReservationData[] = [];
  visibleCreationForm: boolean = false;
  date: Date | undefined;
  startTime: Date | undefined;
  endTime: Date | undefined;
  timeCheck : boolean = false;
  availablePlaces: AvailablePlace[] = [];
  availablePlaceFound : boolean = true;
  selectedPlace : AvailablePlace | undefined;
  metaKey: boolean = true;
  totalPayment: number = 0;

  constructor(private reservationService : ReservationsService, private loaderService : LoaderService, private messageService: MessageService, private placesServices : PlacesService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.reservationService.getReservations(undefined, undefined, undefined).subscribe({
      next : (data) => {
        this.reservations = data;  
      },
      error : (err) => {
        var errMessage = err.error.message;
        this.messageService.add({severity:'error', summary:'Error', detail:errMessage});
        this.loaderService.hideLoading();
      }}
    ));
  }

  showCreationForm(){
    this.visibleCreationForm = true;
  }

  adjustEndTime(newStartTime: Date): void {
    if (newStartTime) {
        const oneHour = 60 * 60 * 1000;
        this.endTime = new Date(newStartTime.getTime() + oneHour);
      } 
    this.startTime = newStartTime;
    this.timeCheck = true;
    this.selectedPlace = undefined;
    this.availablePlaces = [];
    this.availablePlaceFound = true;
  }

  resetValues(): void {
    this.date = undefined;
    this.startTime = undefined;
    this.endTime = undefined;
    this.timeCheck = false;
    this.selectedPlace = undefined;
    this.availablePlaces = [];
    this.availablePlaceFound = true;
    this.totalPayment = 0;
    this.visibleCreationForm = false;
  }

  validateEndTimeGreaterThanStartTime(newEndTime: Date): void {
    if (newEndTime && this.startTime && newEndTime > this.startTime) {
      this.endTime = newEndTime;
      this.timeCheck = true;
      this.selectedPlace = undefined;
      this.availablePlaces = [];
      this.availablePlaceFound = true;
    }
  }

  sherchAvailablePlaces(){
    if(this.timeCheck){
      this.loaderService.showLoading();
      this.subscriptions.push(this.placesServices.getAvailablePlaces(this.startTime!.getHours().toString() + ":"+ this.startTime!.getMinutes().toString(), 
      this.endTime!.getHours().toString() + ":"+ this.endTime!.getMinutes().toString(), this.date!.toDateString()).subscribe({
        next : (data) => {
          this.availablePlaces = data;
          this.timeCheck = false;
          this.availablePlaceFound = data.length > 0;
          this.loaderService.hideLoading();
        },
        error : (err) => {
          var errMessage = err.error.message;
          this.messageService.add({severity:'error', summary:'Error', detail:errMessage});
          this.loaderService.hideLoading();
        }
      }));
    }else{
      this.messageService.add({severity:'error', summary:'Error', detail:'Por favor, complete los campos de fecha y hora'});
    }
  }

  onPlaceSelected() : void{
    this.totalPayment = this.selectedPlace!.placePrice * (this.endTime!.getHours()-this.startTime!.getHours() );
  }

  createReservation(){
    if(this.selectedPlace){
      this.loaderService.showLoading();
      var newReservation : ReservationData = {
        reservationId: 0,
        placeName: this.selectedPlace.placeName,
        checkInHour: this.startTime!.getHours().toString() + ":"+ this.startTime!.getMinutes().toString(),
        checkOutHour: this.endTime!.getHours().toString() + ":"+ this.endTime!.getMinutes().toString(),
        reservationDate: this.date!.toISOString(),
        totalPayment: this.totalPayment
      };

      this.subscriptions.push(this.reservationService.createReservation(
        this.selectedPlace.placeId,
        newReservation.checkInHour,
        newReservation.checkOutHour,
        newReservation.reservationDate,
        newReservation.totalPayment
      ).subscribe({
        next : (data) => {
          newReservation.reservationId = data;
          this.reservations.push(newReservation);
          this.loaderService.hideLoading();
          this.messageService.add({severity:'success', summary:'Reserva creada', detail:'La reserva se ha creado correctamente'});
          console.table(this.reservations);
          this.resetValues();
        },
        error : (err) => {
          var errMessage = err.error.message;
          this.messageService.add({severity:'error', summary:'Error', detail:errMessage});
          this.loaderService.hideLoading();
        }
      }));
    }
  }
}
