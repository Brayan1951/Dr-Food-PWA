import { Injectable } from '@angular/core';
import { Productos, Agregados } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos: Productos[] = []



  constructor() { }

  monto() {
    var monto = 0
    for (let i = 0; i < this.productos.length; i++) {
      monto += this.productos[i].precio
    }
    return monto
  }

  add(producto: Productos) {
    // console.log('agregando:', producto);
    const data: Productos = {
      ...producto,
      cremas: [],
      agregados: []

    }

    this.productos.push(data)
    // console.log('carrtio:', this.productos);
  }

  addCremas(i: number, cremas: string) {

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

  addAdicionales(i: number, agregado: Agregados) {

    if (!this.productos[i].agregados?.includes(agregado)) {
      console.log('agregando adicional');

      this.productos[i].agregados?.push(agregado)
      this.productos[i].precio += agregado.precio
    } else {
      console.log('ya existe ese asicional');

      for (let j = 0; j < this.productos[i].agregados!.length; j++) {
        if (this.productos[i].agregados![j] == agregado) {
          this.productos[i].agregados?.splice(j, 1)
        }
      }
      this.productos[i].precio -= agregado.precio

    }
  }
  deleteProducto(i: number) {
    this.productos.splice(i, 1)
  }
  // cleanadicionales(i: number) {
  //   this.productos[i].agregados?.splice(0, this.productos[i].agregados?.length)

  // }


}
