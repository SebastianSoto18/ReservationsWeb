import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ReservationData } from '../../../shared/models/responses/reservationsData';


@Component({
  selector: 'app-list-reservations',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './list-reservations.component.html',
  styleUrl: './list-reservations.component.css'
})
export class ListReservationsComponent {
  @Input() reservations: ReservationData[] = [];

  constructor() { }

}
