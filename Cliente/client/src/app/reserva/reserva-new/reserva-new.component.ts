import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormControlName,
} from '@angular/forms';
import { Reserva } from '../../shared/reserva';
import { ReservaService } from '../../core/reserva.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-reserva-new',
  templateUrl: './reserva-new.component.html',
  styleUrls: ['./reserva-new.component.scss']
})

export class ReservaNewComponent implements OnInit {

  resId: number = 0;
  reserva: Reserva = {
    id: 0,
    idCliente: 0,
    fechaEntrada: new Date(),
    fechaSalida: new Date(),
    fechaReserva: new Date(),
    price: 0,
  };

  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private reservaService : ReservaService
  ) {}
  pageTitle = 'Reserva Edit';
  errorMessage: string = '';
  reservaForm: any;
  ngOnInit(): void {
    this.reservaForm = this.fb.group({
     
      idCliente: '',
      fechaEntrada: '',
      fechaSalida: '',
      fechaReserva: '',
      price: '',
    })
    

  }
  saveReserva(): void {
    if (this.reservaForm.valid) {
      if (this.reservaForm.dirty) {
        this.reserva = this.reservaForm.value;
        this.reservaService.getMaxReservaId().subscribe((id:number)=>{
          this.resId = id +1;
        });    
        this.reserva.id = this.resId;

        this.reservaService.createReserva(this.reserva).subscribe(
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
