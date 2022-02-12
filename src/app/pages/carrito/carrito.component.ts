import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Productos, Cremas } from '../../interfaces/interfaces';
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
  constructor(private carritoService: CarritoService, private dataService: DataService) { }

  ngOnInit(): void {
    if (this.carritoService.productos.length < 1) {
      window.location.href = '/menu'
    }

    this.productos = this.carritoService.productos
    this.cremas = this.dataService.getCremas()

  }


  changeCrema(i: number, event: any) {
    this.carritoService.addCremas(i, event.target.value)

  }

}
