
import { UpperCasePipe } from '@angular/common';
import {Component, ValueProvider} from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})

export class HeroeComponent{

  nombre: string = 'iroman';
  edad : number = 50;


  get nombreCapitalizado(): string{
return this.nombre.toUpperCase();
  }


  obtenerNombre():string{
return `${ this.nombre } - ${this.edad}`
  }

  cambiarNombre(): void{
    this.nombre= 'spiderman';
  }

  cambiarEdad(): void{
    this.edad = 39;
  }

}
