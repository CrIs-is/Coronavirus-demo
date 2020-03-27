import { Component, OnInit } from '@angular/core';
import { Multiple } from 'src/models/multiple.interface';
import { ResultadosService } from 'src/app/services/resultados.service';
import { Router } from '@angular/router';
import { anima } from 'src/app/animaciones/animacion';

@Component({
  selector: 'app-pregunta6',
  templateUrl: './pregunta6.page.html',
  styleUrls: ['./pregunta6.page.scss'],
  animations: anima
})
export class Pregunta6Page implements OnInit {

  public isOpen = true;
  constructor(public servicio: ResultadosService, public router: Router) { }

  ngOnInit() {
    console.log(this.servicio.acomulador);
    setTimeout(() => {
      this.isOpen = false;
    }, 500)
  }

  respuestas: Multiple[] = [
    {
      descripcion: "0-9",
      seleccionada: false,
      valor: 0.1,
      estado: true
    },
    {
      descripcion: "10-19",
      seleccionada: false,
      valor: 0.2,
      estado: true
    },
    {
      descripcion: "20-29",
      seleccionada: false,
      valor: 0.3,
      estado: true
    },
    {
      descripcion: "30-39",
      seleccionada: false,
      valor: 0.4,
      estado: false
    },
    {
      descripcion: "40-49",
      seleccionada: false,
      valor: 0.5,
      estado: true
    },
    {
      descripcion: "50-59",
      seleccionada: false,
      valor: 0.6,
      estado: true

    },
    {
      descripcion: "60-69",
      seleccionada: false,
      valor: 0.7,
      estado: true

    },
    {
      descripcion: "70-79",
      seleccionada: false,
      valor: 0.8,
      estado: true

    },
    {
      descripcion: "80-más",
      seleccionada: false,
      valor: 1,
      estado: true

    },

  ];


  seleccionado(respuestaElegida: Multiple) {

    for (let respuesta of this.respuestas) {
      if (respuesta.valor == respuestaElegida.valor) {
        respuesta.seleccionada = true;
      }
      else {
        respuesta.seleccionada = false;
      }

    }
    console.log(respuestaElegida.valor);
  }

  siguiente() {
    for (let respuesta of this.respuestas) {

      if (respuesta.seleccionada) {
        this.servicio.acomulador += respuesta.valor;
      }

      this.isOpen = true;
      setTimeout(() => {
        this.router.navigate(['/pregunta7']);
      }, 700);


    }

  }

 

}
