import { Component, OnInit } from '@angular/core';
import { Multiple } from 'src/models/multiple.interface';
import { Router } from '@angular/router';
import { ResultadosService } from 'src/app/services/resultados.service';
import { anima } from 'src/app/animaciones/animacion';


@Component({
  selector: 'app-pregunta7',
  templateUrl: './pregunta7.page.html',
  styleUrls: ['./pregunta7.page.scss'],
  animations: anima
})
export class Pregunta7Page implements OnInit {

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
      descripcion: "Si",
      seleccionada: false,
      valor: 1,
      estado: true
    },
    {
      descripcion: "No",
      seleccionada: false,
      valor: 0,
      estado: true
    }

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
        this.router.navigate(['/pregunta8']);
      }, 700);


    }

  }

}
