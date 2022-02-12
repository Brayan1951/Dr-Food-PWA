import { Pipe, PipeTransform } from '@angular/core';
import { Productos } from '../../../interfaces/interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {


  transform(arreglo: any[], texto: string, columna = "Hamburguesa"): any[] {
    // console.log('arreglo', arreglo);
    // console.log('texto', texto);
    // console.log('columna', columna);


    if (texto == "") {

      return arreglo
    }
    if (!arreglo) {
      return arreglo
    }
    texto = texto.toLowerCase()

    return arreglo.filter(item => item[columna].toLowerCase().includes(texto))

  }
}
