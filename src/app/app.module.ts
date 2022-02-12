import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuProductosComponent } from './pages/menu-productos/menu-productos.component';
import { FiltroPipe } from './pages/menu-productos/pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuProductosComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
