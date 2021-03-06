import { Component, OnInit } from '@angular/core';
import { Multiple } from 'src/models/multiple.interface';
import { Router } from '@angular/router';
import { ResultadosService } from 'src/app/services/resultados.service';
import { anima } from '../../animaciones/animacion';

@Component({
  selector: 'app-pregunta5',
  templateUrl: './pregunta5.page.html',
  styleUrls: ['./pregunta5.page.scss'],
  animations: anima
})
export class Pregunta5Page implements OnInit {

  public isOpen = true;
  constructor(public servicio: ResultadosService, public router: Router) { }

  ngOnInit() {
    console.log(this.servicio.acomulador);
    setTimeout(()=>{
      this.isOpen = false;
    },500)
  }

  respuestas: Multiple [] = [
    {
      descripcion: "Si",
      seleccionada: false,
      valor: 0,
      estado: true
    },
    {
      descripcion:"No",
      seleccionada:false,
      valor: 1,
      estado: true
    }
    
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

  siguiente() {
    for ( let respuesta of this.respuestas) {

      if (respuesta.seleccionada) {
        this.servicio.acomulador += respuesta.valor;  
      }
      
      this.isOpen = true;
      setTimeout(()=>{
        this.router.navigate(['/pregunta6']);
       }, 700);
    
    
  }

  }
}
