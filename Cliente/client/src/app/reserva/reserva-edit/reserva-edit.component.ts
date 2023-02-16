import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChildren,
  ElementRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormControlName,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Reserva } from '../../shared/reserva';
import { ReservaService } from '../../core/reserva.service';

@Component({
  selector: 'app-reserva-edit',
  templateUrl: './reserva-edit.component.html',
  styleUrls: ['./reserva-edit.component.scss']
})

export class ReservaEditComponent implements OnInit{
  pageTitle = 'Reserva Edit';
  errorMessage: string = '';
  reservaForm: any;

  resId: number = 0;
  reserva: Reserva = {
    id: 0,
    idCliente: 0,
    price: 0,
    fechaEntrada: new Date(),    
    fechaSalida: new Date(),    
    fechaReserva: new Date(),
  };

  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private reservaService : ReservaService
  ) {}

  ngOnInit(): void {
    this.reservaForm = this.fb.group({
      
      idCliente: '',
      fechaEntrada: '',
      fechaSalida: '',
      fechaReserva: '',
      price: '',
    })
    this.resId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getReserva(this.resId);
  }


  getReserva(id: number): void {
    this.reservaService.getReservaById(id).subscribe(
      (reserva: Reserva) => this.displayReserva(reserva),
      (error: any) => (this.errorMessage = <any>error)
    );
  }

  displayReserva(reserva: Reserva): void {
    if (this.reservaForm) {
      this.reservaForm.reset();
    }
    this.reserva = reserva;
    this.pageTitle = `Edit reserva:${this.reserva.id}`;

    // Update the data on the form
    this.reservaForm.patchValue({
      fechaEntrada: this.reserva.fechaEntrada,
      fechaSalida : this.reserva.fechaSalida,
      fechaReserva: this.reserva.fechaReserva,
      price: this.reserva.price,
    });
  }
    
  deleteReserva(): void {
    
      if (confirm(`Really delete the product`)) {
        this.reservaService.deleteReserva(this.reserva.id).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    
  }


  saveReserva(): void {
    if (this.reservaForm.valid) {
      if (this.reservaForm.dirty) {
        this.reserva = this.reservaForm.value;
        this.reserva.id = this.resId;

        this.reservaService.updateReserva(this.reserva).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.reservaForm.reset();
    this.router.navigate(['']);
  }

}
