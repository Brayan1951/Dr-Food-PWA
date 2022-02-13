import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './carrito.component';
// Angular material
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarritoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    MatExpansionModule,
    FormsModule
  ]
})
export class CarritoModule { }
