import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/interfaces';

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
    console.log(cremas);

    if (!this.productos[i].cremas?.includes(cremas)) {
      console.log('agregando crema');

      this.productos[i].cremas?.push(cremas)
    } else {
      console.log('ya existe esa crema');

      for (let j = 0; j < this.productos[i].cremas!.length; j++) {
        if (this.productos[i].cremas![j] == cremas) {
          this.productos[i].cremas?.splice(j, 1)
        }
      }

    }
  }

  cleancremas(i: number) {
    this.productos[i].cremas?.splice(0, this.productos[i].cremas?.length)
  }


}
