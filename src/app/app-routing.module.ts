import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu-productos/menu-productos.module').then(m => m.MenuProductosModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/menu-productos/menu-productos.module').then(m => m.MenuProductosModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
