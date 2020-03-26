import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  constructor(public resultado: ResultadosService) { }

 
  public porcentaje;
  public clase = false;
  public incremento = 0.00;
  public valor;

  contador() {
    this.incremento += 0.01;
    this.valor = this.incremento*100;
  }
  ngOnInit() {
    console.log(this.resultado.acomulador);
    console.log("Porcentaje",this.resultado.porcentaje());
    this.porcentaje = this.resultado.porcentaje() /100;
    
      setInterval(() => {
        if(this.incremento < this.porcentaje){
          this.contador();
        }
        
        }, 200);
    
  }

  animar() {
    for ( let i = 0; i < 0.71; i++) {
        this.incremento += 0.1;
    }
  }
}

