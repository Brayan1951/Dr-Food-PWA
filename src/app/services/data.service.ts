import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente, Productos } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json')
  }
  getMenuProductos() {
    return this.http.get<Productos[]>('/assets/data/productos.json')
  }
  getCremas() {
    return this.http.get<Productos[]>('/assets/data/cremas.json')

  }
  getAgregados() {
    return this.http.get<Productos[]>('/assets/data/agregados.json')

  }
}
