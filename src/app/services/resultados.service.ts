import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { map, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  base = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';

  acomulador = 0;

   porcentaje() {
    return (this.acomulador * 100 ) / 11;
   }

  constructor(public http: HttpClient, public plt: Platform) {

      if (this.plt.is('cordova')) {
          this.base = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
      }
  }


  getCiudades() {
    /*const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With');

    headers.append('Accept','DOWNLOAD');
    headers.append('content-type','DOWNLOAD');

    const options = {
      headers
    };*/

    // tslint:disable-next-line: max-line-length
    const headers = new HttpHeaders({
      'host': 'soda.demo.socrata.com',
      'keyId': '78sei884yopaocofpr7tpd42s',
      'keySecret': '2o9jhuxlyrxqpzzk636yxk3dm810kl8h9dvmu5hx5pgvcgfoq7'
    });
    const options = {
      headers
    };

    //
    return this.http.get('https://www.datos.gov.co/api/views/gt2j-8ykr/rows.json?accessType=DOWNLOAD');

    //.pipe(filter((n: any) => n.id === 1));

    //return this.lista.filter((n: any) => n.id == 1);
   }

   // tslint:disable-next-line: member-ordering
   lista = [
     {
       id: 1,
       nombre: 'cristian'
     },
     {
      id: 2,
      nombre: 'david'
    },
    {
      id: 3,
      nombre: 'juan'
    }
   ];
}
