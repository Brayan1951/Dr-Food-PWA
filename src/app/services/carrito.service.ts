import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/interfaces';
import { productos } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos: Productos[] = []



  constructor() { }



  add(producto: Productos) {
    // console.log('agregando:', producto);
    const data: Productos = {
      ...producto,
      cremas: []
    }

    this.productos.push(data)
    // console.log('carrtio:', this.productos);
  }

  addCremas(i: number, cremas: string) {

    console.log(this.productos[i]);

    if (this.productos[i].cremas?.filter(crema => crema.includes(cremas))) {
      console.log('si existe esa crema');

    } else {
      console.log('no existe esa crema');
      this.productos[i].cremas?.push(cremas)


    }



  }


}
