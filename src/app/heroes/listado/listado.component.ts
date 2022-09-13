import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
 
 heroes: string[] = ['spiderman', 'ironman', 'hulk', 'thor', 'capitan america'];
 heroeBorrado: string = ''; //false || null || undefined
 
borrarHeroe(){
  console.log('borrando cambios');
  // this.heroes.splice(0,1); 

  //otra opcion 
   this.heroeBorrado = this.heroes.shift() || ''; 
  
}


  }

 