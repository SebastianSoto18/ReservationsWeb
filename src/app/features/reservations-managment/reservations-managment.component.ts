import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../core/layout/nav/nav.component';
import { Subscription } from 'rxjs';
import { ReservationData } from '../../shared/models/responses/reservationsData';
import { ReservationsService } from '../../shared/services/reservations.service';
import { LoaderService } from '../../shared/services/loader.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';

@Component({
  selector: 'app-reservations.managment',
  standalone: true,
  imports: [ NavComponent, ToastModule, ListReservationsComponent],
  templateUrl: './reservations-managment.component.html',
  styleUrl: './reservations-managment.component.css',
  providers: [MessageService]
})
export class ReservationsManagmentComponent implements OnInit {

  subscriptions: Subscription[] = [];
  reservations: ReservationData[] = [];

  constructor(private reservationService : ReservationsService, private loaderService : LoaderService, private messageService: MessageService) { }

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
}
