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

import { Bungalow } from '../../shared/bungalow';
import { BungalowService } from '../../core/bungalow.service';

@Component({
  selector: 'app-bungalow-edit',
  templateUrl: './bungalow-edit.component.html',
  styleUrls: ['./bungalow-edit.component.scss']
})

export class BungalowEditComponent implements OnInit{
  pageTitle = 'Bungalow Edit';
  errorMessage: string = '';
  bungalowForm: any;

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

  ngOnInit(): void {
    this.bungalowForm = this.fb.group({
      title: '',
      id_zona: '',
      price: '',
      people_cantity: '',
      description: '',
      image: '',
    })
    this.bunId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getBungalow(this.bunId);
  }


  getBungalow(id: number): void {
    this.bungalowService.getBungalowById(id).subscribe(
      (bungalow: Bungalow) => this.displayBungalow(bungalow),
      (error: any) => (this.errorMessage = <any>error)
    );
  }

  displayBungalow(bungalow: Bungalow): void {
    if (this.bungalowForm) {
      this.bungalowForm.reset();
    }
    this.bungalow = bungalow;
    this.pageTitle = `Edit bungalow: ${this.bungalow.title}`;

    // Update the data on the form
    this.bungalowForm.patchValue({
      title: this.bungalow.title,
      id_zona : this.bungalow.id_zona,
      price: this.bungalow.price,
      description: this.bungalow.description,
      people_cantity : this.bungalow.people_cantity,
      image: this.bungalow.image,
    });
  }
    
  deleteBungalow(): void {
    
      if (confirm(`Really delete the product: ${this.bungalow.title}?`)) {
        this.bungalowService.deleteBungalow(this.bungalow.id).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    
  }


  saveBungalow(): void {
    if (this.bungalowForm.valid) {
      if (this.bungalowForm.dirty) {
        this.bungalow = this.bungalowForm.value;
        this.bungalow.id = this.bunId;

        this.bungalowService.updateBungalow(this.bungalow).subscribe(
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
