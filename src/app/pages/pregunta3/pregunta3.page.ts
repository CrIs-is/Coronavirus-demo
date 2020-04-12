import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/services/resultados.service';
import { Router } from '@angular/router';
import { Multiple } from 'src/models/multiple.interface';
import { anima } from '../../animaciones/animacion';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.page.html',
  styleUrls: ['./pregunta3.page.scss'],
  animations:anima
})
export class Pregunta3Page implements OnInit {

  public isOpen = true;
  public resultado =1;

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
    
  }

  this.isOpen = true;
  setTimeout(()=>{
    this.router.navigate(['/pregunta4']);
   }, 700);

  }

}
