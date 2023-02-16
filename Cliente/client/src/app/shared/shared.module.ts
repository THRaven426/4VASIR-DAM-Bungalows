import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navar/navar.component';



@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent
  ],
})
export class SharedModule { }
