import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BungalowRoutingModule } from './bungalow-routing.module';
import { BungalowDetailComponent } from './bungalow-detail/bungalow-detail.component';
import { BungalowEditComponent } from './bungalow-edit/bungalow-edit.component';
import { BungalowItemComponent } from './bungalow-item/bungalow-item.component';
import { BungalowNewComponent } from './bungalow-new/bungalow-new.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BungalowDetailComponent,
    BungalowEditComponent,
    BungalowItemComponent,
    BungalowNewComponent
  ],
  imports: [
    CommonModule,
    BungalowRoutingModule,
    SharedModule
  ],exports: [BungalowItemComponent],
  
})
export class BungalowModule { }
