import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaNewComponent } from './reserva-new/reserva-new.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { ReservaEditComponent } from './reserva-edit/reserva-edit.component';

import { SharedModule } from '../shared/shared.module';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaItemComponent } from './reserva-item/reserva-item.component';
import { BungalowModule } from "../bungalow/bungalow.module";



@NgModule({
    declarations: [
        ReservaNewComponent,
        ReservaDetailComponent,
        ReservaEditComponent,
        ReservaListComponent,
        ReservaItemComponent
    ],
    imports: [
        CommonModule,
        ReservaRoutingModule,
        SharedModule,
        BungalowModule
    ]
})
export class ReservaModule { }
