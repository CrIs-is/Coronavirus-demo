import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';
import { Multiple } from '../../../models/multiple.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.page.html',
  styleUrls: ['./pregunta1.page.scss'],
})
export class Pregunta1Page implements OnInit {

  constructor(public servicio: ResultadosService, public router: Router) { }
  
  elegidas = 0;
  mala = false;
  resultado = 1;

  // Objetos de tipo respuesta
  respuestas: Multiple [] = [
    {
      descripcion: "Contacto con objeto contaminado",
      seleccionada: false,
      valor: 0.16666,
      estado: true
    },
    {
      descripcion:"Estornudos",
      seleccionada:false,
      valor: 0.16666,
      estado: true
    },
    {
      descripcion:"Abrazos",
      seleccionada:false,
      valor: 0.16666,
      estado: true
    },
    {
      descripcion:"tos",
      seleccionada:false,
      valor: 0.16666,
      estado:false
    },
    {
      descripcion: "Besos",
      seleccionada:false,
      valor: 0.16666,
      estado:true
    },
    {
      descripcion:"Apretón de manos",
      seleccionada:false,
      valor: 0.16666,
      estado:true

    }
  ];

  ngOnInit() {
  }

  seleccionado(respuesta: Multiple) {

    if (respuesta.seleccionada) {
      respuesta.seleccionada = false;
    } else {
      respuesta.seleccionada = true;
    }
    console.log(respuesta);
  }

  siguiente() {
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
}
