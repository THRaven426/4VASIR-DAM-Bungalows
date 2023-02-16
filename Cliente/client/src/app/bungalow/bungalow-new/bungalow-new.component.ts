import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormControlName,
} from '@angular/forms';
import { Bungalow } from '../../shared/bungalow';
import { BungalowService } from '../../core/bungalow.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bungalow-new',
  templateUrl: './bungalow-new.component.html',
  styleUrls: ['./bungalow-new.component.scss']
})

export class BungalowNewComponent implements OnInit {

  bunId: number = 0;
  bungalow: Bungalow = {
    id: 0,
    id_zona: 0,
    title: '',
    price: 0,
    people_cantity: 0,
    description: '',
    image: '',
  };

  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private bungalowService : BungalowService
  ) {}
  pageTitle = 'Bungalow Edit';
  errorMessage: string = '';
  bungalowForm: any;
  ngOnInit(): void {
    this.bungalowForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      idZona: '',
      price: '',
      peopleCantity: '',
      description: '',
      image: '',
    })
    

  }
  savebungalow(): void {
    if (this.bungalowForm.valid) {
      if (this.bungalowForm.dirty) {
        this.bungalow = this.bungalowForm.value;
        this.bungalowService.getMaxBungalowId().subscribe((id:number)=>{
          this.bunId = id +1;
        });    
        this.bungalow.id = this.bunId;

        this.bungalowService.createBungalow(this.bungalow).subscribe(
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
    this.bungalowForm.reset();
    this.router.navigate(['']);
  }
  
}
