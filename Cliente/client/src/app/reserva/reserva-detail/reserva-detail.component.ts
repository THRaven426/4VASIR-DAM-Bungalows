import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from 'src/app/core/reserva.service';
import { Reserva } from 'src/app/shared/reserva';

@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
  styleUrls: ['./reserva-detail.component.scss']
})
export class ReservaDetailComponent {
  reserva: Reserva = {
    id: 0,
    idCliente: 0,
    price: 0,
    fechaEntrada: new Date(),    
    fechaSalida: new Date(),    
    fechaReserva: new Date(),    
  };
  id: number = 0;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private reservaService: ReservaService
  ) {}

  ngOnInit() {
    this.id = parseInt(this.activatedroute.snapshot.params['id']);
    this.reservaService
      .getReservaById(this.id)
      .subscribe((data: Reserva) => {
        this.reserva = data
      });
  }
  goEdit(): void {
    this.router.navigate(['/reserva', this.reserva.id, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

}
