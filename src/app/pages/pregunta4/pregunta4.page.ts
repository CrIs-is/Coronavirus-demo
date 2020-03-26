import { Component, OnInit } from '@angular/core';
import { Multiple } from 'src/models/multiple.interface';
import { ResultadosService } from 'src/app/services/resultados.service';
import { Router } from '@angular/router';
import { anima } from 'src/app/animaciones/animacion';

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.page.html',
  styleUrls: ['./pregunta4.page.scss'],
  animations:anima
})
export class Pregunta4Page implements OnInit {

  public isOpen = true;
  constructor(public servicio: ResultadosService, public router: Router) { }
  
  elegidas = 0;
  mala = false;
  resultado = 1;

  // Objetos de tipo respuesta
  respuestas: Multiple [] = [
    {
      descripcion: "Tos leve",
      seleccionada: false,
      valor: 0.2,
      estado: true
    },
    {
      descripcion:"Dificultad para respirar",
      seleccionada:false,
      valor: 0.2,
      estado: true
    },
    {
      descripcion:"Dolor de espalda",
      seleccionada:false,
      valor: 0.2,
      estado: false
    },
    {
      descripcion:"Fiebre",
      seleccionada: false,
      valor: 0.2,
      estado: true
    },
    {
      descripcion: "Secreción nasal",
      seleccionada: false,
      valor: 0.2,
      estado: false

    }
  ];

  ngOnInit() {
    setTimeout(()=>{
      this.isOpen = false;
    },500)
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

    // Si elije todas menos las malas
    if (!this.mala && this.elegidas === 3){
      this.resultado = 0;
    }

    this.servicio.acomulador += this.resultado;
    this.isOpen = true;
      setTimeout(()=>{
        this.router.navigate(['/pregunta5']);
       }, 700);
    

   
    
  }

}
