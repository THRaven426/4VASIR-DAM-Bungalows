import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/core/reserva.service';
import { Reserva } from 'src/app/shared/reserva';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.scss']
})
export class ReservaListComponent implements OnInit {
  reservas: Reserva[] = [];
  constructor(private reservaService: ReservaService) {}

  ngOnInit() {
    this.reservaService
      .getReservas()
      .subscribe((data: Reserva[]) => (this.reservas = data));
  }
}
