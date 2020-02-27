import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  personajes: string[] =['Goku', 'Iron Man', 'Vegeta', 'El Chavo'];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 12345.2;

  heroe = {
    nombre: 'El Chavo',
    edad: '678',
    direccion:{
      calle: 'Primera',
      casa: 'Barril',
      lugar: 'La vecindad'
    }
  };
}
