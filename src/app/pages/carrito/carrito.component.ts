import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Productos, Cremas, Agregados } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  productos: Productos[] = []
  cremas!: Observable<Cremas[]>
  agregados!: Observable<Agregados[]>
  dinero!: number

  constructor(private carritoService: CarritoService, private dataService: DataService) { }

  ngOnInit(): void {
    if (this.carritoService.productos.length < 1) {
      window.location.href = '/#/menu'
    }

    this.productos = this.carritoService.productos
    this.cremas = this.dataService.getCremas()
    this.agregados = this.dataService.getAgregados()

  }

  monto() {
    return this.carritoService.monto()
  }

  changeCrema(i: number, event: any) {
    this.carritoService.addCremas(i, event.target.value)

  }
  cleanCremas(i: number) {
    this.carritoService.cleancremas(i)
  }
  changeAdi(i: number, agregado: Agregados) {




    this.carritoService.addAdicionales(i, agregado)

  }

  eliminar(i: number) {
    this.carritoService.deleteProducto(i)
    if (this.carritoService.productos.length < 1) {
      window.location.href = '/#/menu'
    }
  }
  // cleanadi(i: number) {
  //   this.carritoService.cleanadicionales(i)
  // }

}
