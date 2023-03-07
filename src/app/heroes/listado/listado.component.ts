import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent implements OnInit {

 heroes: string [] = ['Spiderman','Thor','Mujer maravilla','Teddy'];
heroeBorrado: string| undefined;


  constructor() {
   }

  ngOnInit(): void {
  }

  borrarHeroe(): void{
   this.heroeBorrado= this.heroes.shift(); //elimina empezando en la posicion 0 del arreglo
    // this.heroes.pop();//elimina empezando desde la ultima posicion del arreglo
    console.log(this.heroeBorrado);
  }

}
