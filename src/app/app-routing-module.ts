import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'drink-list',
    loadChildren: () => import('./drink-list/drink-list-module').then(m => m.DrinkListModule)
  },
  {
    path: 'drink-details',
    loadChildren: () => import('./drink-details/drink-details-module').then(m => m.DrinkDetailsModule)
  },
  {
    path: '',
    redirectTo: '/drink-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/drink-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
