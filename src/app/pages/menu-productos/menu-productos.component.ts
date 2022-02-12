import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu-productos',
  templateUrl: './menu-productos.component.html',
  styleUrls: ['./menu-productos.component.scss']
})
export class MenuProductosComponent implements OnInit {
  tipos: any[] = [
    {
      nombre: "Hamburguesa"
    },
    {
      nombre: "Broaster"
    },
    {
      nombre: "Cheveres"
    },
    {
      nombre: "Salchipapa"
    },
    {
      nombre: "Chaufa"
    },
    {
      nombre: "Enchiladas"
    },
    {
      nombre: "Alitas BBQ"
    },
    {
      nombre: "Pepitos"
    },
    {
      nombre: "Panini"
    },
    {
      nombre: "Cachapas"
    },
    {
      nombre: "Choripan"
    },
  ]

  // productos: Observable<Productos[]>
  productos: Productos[] = []
  tipo = 'Hamburguesa'


  constructor(private dataService: DataService) {
    // this.productos = this.dataService.getMenuProductos()
  }

  ngOnInit(): void {
    this.dataService.getMenuProductos().subscribe(resp => {
      this.productos = resp
    })
    // this.productos = this.dataService.getMenuProductos()
  }
  // segmentChanged(event: any) {
  //   console.log(event);

  //   this.tipo = event.detail.value

  // }
  onChange(e: any) {
    this.tipo = e.target.value
    // console.log(this.tipo);

  }
}
