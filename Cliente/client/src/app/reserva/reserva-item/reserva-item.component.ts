import { Component, Input } from '@angular/core';
import {Reserva} from 'src/app/shared/reserva'

@Component({
  selector: 'app-reserva-item',
  templateUrl: './reserva-item.component.html',
  styleUrls: ['./reserva-item.component.scss']
})
export class ReservaItemComponent {
  @Input() reserva: Reserva = {
    id: 0,
    idCliente: 0,
    fechaEntrada: new Date(),
    fechaSalida: new Date(),
    fechaReserva: new Date(),
    price: 0,
  };
}
