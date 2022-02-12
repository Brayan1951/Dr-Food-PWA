import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuProductosRoutingModule } from './menu-productos-routing.module';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MenuProductosRoutingModule,
    FormsModule
  ],
  exports: [
  ]
})
export class MenuProductosModule { }
