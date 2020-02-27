import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = false): string {
    let valorAux = value;
    
    if(activar){
      valorAux = valorAux.replace(/./g, '*');
    }
    return valorAux;
  }

}
