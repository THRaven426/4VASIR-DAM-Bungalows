import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BungalowListRoutingModule } from './bungalow-list-routing.module';
import { BungalowListComponent } from './bungalow-list.component';
import { BungalowModule } from '../bungalow/bungalow.module';


@NgModule({
  declarations: [
    BungalowListComponent
  ],
  imports: [
    CommonModule,
    BungalowListRoutingModule,
    BungalowModule
  ]
})
export class BungalowListModule { }
