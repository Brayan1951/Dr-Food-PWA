import { Component, Input, OnInit } from '@angular/core';
import { Productos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() producto!: Productos
  constructor() { }

  ngOnInit(): void {
  }

}
