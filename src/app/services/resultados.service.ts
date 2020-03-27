import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  constructor() { }

   acomulador = 0;

   porcentaje() {
    return (this.acomulador * 100 ) / 11;
   }
}
