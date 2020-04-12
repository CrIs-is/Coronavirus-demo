import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  constructor(public http: HttpClient) { }

   acomulador = 0;

   porcentaje() {
    return (this.acomulador * 100 ) / 11;
   }

   getUsers() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');

    const options = {
      headers
    };

   }
}
