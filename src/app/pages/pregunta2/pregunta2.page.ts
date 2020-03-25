import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';
import { Router } from '@angular/router';
import { Multiple } from 'src/models/multiple.interface';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.page.html',
  styleUrls: ['./pregunta2.page.scss'],
})
export class Pregunta2Page implements OnInit {

 
  constructor(public servicio: ResultadosService, public router: Router) { }

  ngOnInit() {
    console.log(this.servicio.acomulador);
  }

  respuestas: Multiple [] = [
    {
      descripcion: "De acuerdo",
      seleccionada: false,
      valor: 1,
      estado: true
    },
    {
      descripcion:"Parcialmente deacuerdo",
      seleccionada:false,
      valor: 0.75,
      estado: true
    },
    {
      descripcion:"Parcielmente en desacuerdo",
      seleccionada:false,
      valor: 0.5,
      estado: true
    },
    {
      descripcion:"en desacuerdo",
      seleccionada:false,
      valor: 0,
      estado:false
    },
    
  ];

  seleccionado(respuestaElegida: Multiple) {

    for ( let respuesta of this.respuestas) {
      if (respuesta.valor == respuestaElegida.valor) {
        respuesta.seleccionada = true;
      }
      else{
        respuesta.seleccionada = false;
      }
      
    }   
    console.log(respuestaElegida.valor);
  }

  /*siguiente() {
    for (const respuesta of this.respuestas) {
      // Si eligío alguna respuesta
      if (respuesta.seleccionada) {
        // cuantas elijio
        this.elegidas += 1;
        this.resultado -= respuesta.valor;
        if (!respuesta.estado) {
          this.mala = true;
          this.resultado += respuesta.valor;
        }
      }
    }

    // Si no elije ninguna respuesta el acomulado será 1
    if (this.elegidas === 0) {
      this.resultado = 1;
    }

    // Si elije todas menos la mala
    if (!this.mala && this.elegidas === 5){
      this.resultado = 0;
    }


    this.servicio.acomulador += this.resultado;
    this.router.navigate(['/pregunta2']);
  }


*/


}
