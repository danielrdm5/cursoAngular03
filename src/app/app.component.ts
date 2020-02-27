import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  nombreCont: string = this.nombre;
  nombre2: string = 'anGeL daNiel gArcía LÓpez';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  personajes: string[] =['Goku', 'Iron Man', 'Vegeta', 'El Chavo'];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 12345.2;
  fecha: Date  = new Date();
  idioma: string = 'en';
  videoUrl: string = 'https://www.youtube.com/embed/bkUxfqXTZMs';
  activar: boolean = true;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(()=>{
      resolve('llego la data')
    }, 4500)
  });

  heroe = {
    nombre: 'El Chavo',
    edad: '678',
    direccion:{
      calle: 'Primera',
      casa: 'Barril',
      lugar: 'La vecindad'
    }
  };

  cambiarIdiomaEsp()
  {

    this.idioma = 'es';

  }

  cambiarIdiomaEn()
  {

    this.idioma = 'en';
  }

  cambiarIdiomaFr()
  {
    this.idioma = 'fr';
    
  }

  activarContrasena(){
      this.activar = !this.activar;
  }

}
