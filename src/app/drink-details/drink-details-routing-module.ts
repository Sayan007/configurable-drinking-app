import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkDetails } from './drink-details';

const routes: Routes = [
  {
    path: ':id',
    component: DrinkDetails
  },
  {
    path: '**',
    component: DrinkDetails
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinkDetailsRoutingModule { }
