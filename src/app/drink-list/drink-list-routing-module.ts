import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkList } from './drink-list';

const routes: Routes = [
  {
    path: '',
    component: DrinkList
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinkListRoutingModule { }
