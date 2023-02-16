import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BungalowListComponent } from './bungalow-list.component';

const routes: Routes = [{ path: '', component: BungalowListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BungalowListRoutingModule { }
