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
  public riesgo = '';
  public recomendaciones='';

  contador() {
    this.incremento += 0.01;
    this.valor = this.incremento*100;
    if(this.valor==0 || this.valor<=25 ){

      this.riesgo = 'RIESGO BAJO';
      this.recomendaciones = 'Usted presenta un riesgo bajo con respecto a la población,'+
      'en general, conoce las posibles caracteristicas y situaciones de contagio del virus. '+
      'Lo animamos a compartir su conocimiento con los demás y así ayudar a disminuir la curva de contagio.';

    } else if (this.valor == 26 || this.valor <= 50){

      this.riesgo = 'RIESGO MEDIO';
      this.recomendaciones = 'Usted presenta un riesgo medio con respecto a la población,' +
        'es posible que siga algunas de las recomendaciones dadas por los expertos, pero no en su totalidad y se expone' +
        'en algunas ocasiones a situaciones de riesgo, lo invitamos a seguir mas las recomendaciones dadas, lávese las manos al menos 5 veces al día, evite los grupos grandes de gente y si presenta alguna enfermedad subyacente, consulte a su medico acerca de medidas adicionales. ';

    } else if (this.valor == 51 || this.valor <= 70) {

      this.riesgo = 'RIESGO MEDIO - ALTO';
      this.recomendaciones = 'Usted presenta un riesgo medio-alto con respecto a la población,' +
        'es posible que siga pocas de las recomendaciones dadas por los expertos, se expone ' +
        'seguido a situaciones de riesgo, lo invitamos a seguir mas las recomendaciones dadas. Lávese las manos al menos 5 veces al día, informese mas acerca de las caracteristicas del virus y formas de prevención,evite los grupos grandes de gente y si presenta alguna enfermedad subyacente, consulte a su medico acerca de medidas adicionales. ';



    } else if (this.valor == 71 || this.valor <= 100) {

      this.riesgo = 'RIESGO ALTO';
      this.recomendaciones = 'Usted presenta un riesgo alto con respecto a a la población, es posible que no siga ni esté correctamente informado acerca de las caracteristicas del virus y las formas de prevención de contagio. Le invitamos a informarse mas y a empezar a seguir las recomendaciones dadas por los expertos,lavese las manos al menos 5 veces al día, si tiene que salir evite el contacto físico con otras personas y si posee enfermedades subyacentes consulte inmediatamente acerca de medidas de prevención adicionales';


    }
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

