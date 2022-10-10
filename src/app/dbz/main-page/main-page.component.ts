import { Component  } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 14000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  agregarNuevoPersonaje(event: Personaje){
    // console.log(argumento);
    this.personajes.push(event);
    
  }


  // cambiarNombre(event: any){
  //   console.log(event.target.value);
    
  // }

  //inyeccion de dependencia
  constructor( private dbzService: DbzService ){  }



}
