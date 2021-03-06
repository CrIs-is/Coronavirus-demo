import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';
import { Router } from '@angular/router';
import { Multiple } from 'src/models/multiple.interface';
import { anima } from '../../animaciones/animacion';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.page.html',
  styleUrls: ['./pregunta2.page.scss'],
  animations:anima
})
export class Pregunta2Page implements OnInit {

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

  siguiente() {
    for ( let respuesta of this.respuestas) {

      if (respuesta.seleccionada) {
        this.servicio.acomulador += respuesta.valor;  
      }
      
      this.isOpen = true;
      setTimeout(()=>{
        this.router.navigate(['/pregunta3']);
      }, 700)

    
   
  }

  }

}
