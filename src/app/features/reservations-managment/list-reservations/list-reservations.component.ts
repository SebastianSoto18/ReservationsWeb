import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ReservationData } from '../../../shared/models/responses/reservationsData';
import { ButtonModule } from 'primeng/button';
import { ReservationsService } from '../../../shared/services/reservations.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { LoaderService } from '../../../shared/services/loader.service';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-list-reservations',
  standalone: true,
  imports: [TableModule, CommonModule,ButtonModule, ToastModule, CalendarModule],
  templateUrl: './list-reservations.component.html',
  styleUrl: './list-reservations.component.css',
  providers: [MessageService]
})
export class ListReservationsComponent {

  @Input() reservations: ReservationData[] = [];

  constructor(private reservationService : ReservationsService, private loaderService : LoaderService, private messageService : MessageService) { }

  deleteReservation(target : ReservationData){
      this.loaderService.showLoading();
      this.reservationService.deleteReservation(target.reservationId).subscribe({
        next : () => {
          this.loaderService.hideLoading();
          this.messageService.add({severity:'success', summary:'Success', detail:'Reserva eliminada correctamente'});
          this.reservations = this.reservations.filter((res) => res.reservationId !== target.reservationId);
        },
        error : (err) => {
          var errMessage = err.error.message;
          this.messageService.add({severity:'error', summary:'Error', detail:errMessage});
          this.loaderService.hideLoading();
        }
      });
  }

}
