import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkDetails } from './drink-details';
import { DrinkDetailsRoutingModule } from './drink-details-routing-module';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    DrinkDetails
  ],
  imports: [
    CommonModule,
    DrinkDetailsRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class DrinkDetailsModule { }
