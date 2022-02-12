import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuProductosComponent } from './menu-productos.component';

const routes: Routes = [
  { path: '', component: MenuProductosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuProductosRoutingModule { }
