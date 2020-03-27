import { Component, OnInit } from '@angular/core';
import { Multiple } from 'src/models/multiple.interface';
import { Router } from '@angular/router';
import { ResultadosService } from 'src/app/services/resultados.service';
import { anima } from 'src/app/animaciones/animacion';

@Component({
  selector: 'app-pregunta8',
  templateUrl: './pregunta8.page.html',
  styleUrls: ['./pregunta8.page.scss'],
  animations: anima
})
export class Pregunta8Page implements OnInit {
  constructor(public servicio: ResultadosService, public router: Router) { }
  public isOpen = true;

  respuestas: Multiple[] = [
    {
      descripcion: 'Si',
      seleccionada: false,
      valor: 1,
      estado: true
    },
    {
      descripcion: 'No',
      seleccionada: false,
      valor: 0,
      estado: true
    }

  ];

  ngOnInit() {
    console.log(this.servicio.acomulador);
    setTimeout(() => {
      this.isOpen = false;
    }, 500);
  }

  seleccionado(respuestaElegida: Multiple) {

    for (const respuesta of this.respuestas) {
      // tslint:disable-next-line: triple-equals
      if (respuesta.valor == respuestaElegida.valor) {
        respuesta.seleccionada = true;
      } else {
        respuesta.seleccionada = false;
      }

    }
    console.log(respuestaElegida.valor);
  }

  siguiente() {
    for (const respuesta of this.respuestas) {

      if (respuesta.seleccionada) {
        this.servicio.acomulador += respuesta.valor;
      }

      this.isOpen = true;
      setTimeout(() => {
        this.router.navigate(['/pregunta9']);
      }, 700);


    }

  }

}
