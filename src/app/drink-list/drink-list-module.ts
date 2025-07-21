import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkList } from './drink-list';
import { DrinkListRoutingModule } from './drink-list-routing-module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DrinkList
  ],
  imports: [
    CommonModule,
    DrinkListRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatCardActions,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class DrinkListModule { }
