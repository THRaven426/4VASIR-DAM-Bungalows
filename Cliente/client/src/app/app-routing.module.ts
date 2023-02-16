import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bungalow-list', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./bungalow-list/bungalow-list.module').then((m) => m.BungalowListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
