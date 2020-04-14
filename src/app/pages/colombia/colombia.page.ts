import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';
import { map, filter} from 'rxjs/operators';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-colombia',
  templateUrl: './colombia.page.html',
  styleUrls: ['./colombia.page.scss'],
})
export class ColombiaPage implements OnInit {

  bars: any;
  colorArray: any;
  public barChart;

  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  createBarChart() {
    this.generateColorArray(8); 
    this.bars = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Bogotá', 'V. Cauca', 'Antioquia', 'Bolívar', 'Cundinamarca', 
        'Atlantico', 'Risaralda', 'Magdalena','Bogotá', 'V. Cauca', 'Antioquia', 
        'Bolívar', 'Cundinamarca', 'Atlantico', 'Risaralda', 'Magdalena',
        'Bogotá', 'V. Cauca', 'Antioquia', 'Bolívar', 'Cundinamarca'],
        datasets: [{
          label: 'Viewers in millions',
          data: [this.bogota.length, 3.8, 5, 6.9, 6.9, 7.5, 10, 17,51,52,9,6,10,58,6,2,4,],
          backgroundColor: this.colorArray,
          borderColor: this.colorArray,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  ionViewDidEnter() {
    
    
  }
  public atlantico;
  public barranquilla;

  public magdalena;
  public santamarta;

  public bolivar;
  public cartagena; 

  public valleDelCa;
  public buenaAventura;

  public bogota ;
  public antioquia;  
  public cundinamarca;
  public risaralda;
  public huila;
  public quindio;
  public norteDeSantander;
  public narino;
  public caldas;
  public cesar;
  public boyaca;
  public santander;
  public tolima;
  public meta;
  public cauca;
  public cordoba;
  public casanare;
  public sanAndresYprovidencia ;
  public sucre;
  public guajira;
  public choco;

  public data: any;
  constructor(public servicio: ResultadosService) { }


  //['meta']['view']['columns'][9];
  ngOnInit() {
    this.servicio.getCiudades().subscribe(
      (data) => {
        this.data = data['data']
        //Departamentos

        this.getBogota();
        this.getValleDelCauca();
        this.getAntioquia();
        this.getBolivar();
        this.getCundinamarca();
        this.getAtlantico();
        this.getRisaralda();
        this.getMagdalena();
        this.getHuila();
        this.getQuindio();
        this.getNorteDeSantander();
        this.getNarino();
        this.getCaldas();
        this.getCesar();
        this.getBoyaca();
        this.getSantander();
        this.getTolima();
        this.getMeta();
        this.getCauca();
        this.getCordoba();
        this.getCasanare();
        this.getSanAndresProvidencia();
        this.getSucre();
        this.getGuajira();
        this.getChoco();

        this.createBarChart();
      }
    );
  }

  getBogota() {
    //ciudad de bogota
    this.bogota = this.data.filter((n: any) => n[11] === 'BOGOTÁ D.C.');
    console.log(this.bogota.length);
  }
  getValleDelCauca() {
    //BUENA AVENTURA
    this.buenaAventura = this.data.filter((n: any) => n[11] === 'BUENAVENTURA D.E.');
    //Valle del cauca
    this.valleDelCa = this.data.filter((n: any) => n[11] === 'VALLE DEL CAUCA');
    this.valleDelCa = this.valleDelCa.length + this.buenaAventura.length;
    console.log(this.valleDelCa);
  }
  getAntioquia() {
      //antioquia
      this.antioquia = this.data.filter((n: any) => n[11] === 'ANTIOQUIA');
      console.log(this.antioquia.length);
  }
  getBolivar() {
    //cartagena para bolivar
    this.cartagena = this.data.filter((n: any) => n[11] === 'CARTAGENA D.T. Y C');

    //Bolivar
    this.bolivar = this.data.filter((n: any) => n[11] === 'BOLÍVAR');
    console.log( this.bolivar.length + this.cartagena.length);
  }
  getCundinamarca() {
    //Cundinamarca
    this.cundinamarca = this.data.filter((n: any) => n[11] === 'CUNDINAMARCA');
    console.log(this.cundinamarca.length);
  }
  getAtlantico() {
    //barranquilla para atlantico
    this.barranquilla = this.data.filter((n: any) => n[11] === 'BARRANQUILLA D.E.');

    //Atlantico
    this.atlantico = this.data.filter((n: any) => n[11] === 'ATLÁNTICO');
    console.log( this.atlantico.length + this.barranquilla.length);
  }
  getRisaralda() {
    //Risaralda
    this.risaralda = this.data.filter((n: any) => n[11] === 'RISARALDA');
    console.log( this.risaralda.length);
  }
  getMagdalena() {
    //santamarta para magdalena
    this.santamarta = this.data.filter((n: any) => n[11] === 'SANTA MARTA D.T. Y C.');
       

    //Magdalena
    this.magdalena = this.data.filter((n: any) => n[11] === 'MAGDALENA');
    console.log(this.magdalena.length + this.santamarta .length);
  }
  getHuila() {
      //huila
      this.huila = this.data.filter((n: any) => n[11] === 'HUILA');
      console.log( this.huila.length);
  }
  getQuindio() {
    //quindio
    this.quindio = this.data.filter((n: any) => n[11] === 'QUINDÍO');
    console.log( this.quindio.length);
  }
  getNorteDeSantander() {
    //NorteDeSantander
    this.norteDeSantander = this.data.filter((n: any) => n[11] === 'NORTE DE SANTANDER');
    console.log( this.norteDeSantander.length);
  }
  getNarino() {
    //Nariño
    this.narino = this.data.filter((n: any) => n[11] === 'NARIÑO');
    console.log( this.narino.length);
  }
  getCaldas() {
     //caldas
     this.caldas = this.data.filter((n: any) => n[11] === 'CALDAS');
     console.log( this.caldas.length);
  }
  getCesar() {
    //cesar
    this.cesar = this.data.filter((n: any) => n[11] === 'CESAR');
    console.log( this.cesar.length);
  }
  getBoyaca() {
      //Boyaca
           this.boyaca = this.data.filter((n: any) => n[11] === 'BOYACÁ');
           console.log( this.boyaca.length);
  }
  getSantander() {
         //Santander
         this.santander = this.data.filter((n: any) => n[11] === 'SANTANDER');
         console.log( this.santander.length);
  }
  getTolima() {
    //Tolima
    this.tolima = this.data.filter((n: any) => n[11] === 'TOLIMA');
    console.log( this.tolima.length);
  }
  getMeta() {
    //Meta 
    this.meta = this.data.filter((n: any) => n[11] === 'META');
    console.log( this.meta.length);
  }
  getCauca() {
     //cauca
     this.cauca = this.data.filter((n: any) => n[11] === 'CAUCA');
     console.log( this.cauca.length);
  }
  getCordoba() {
     //Cordoba
     this.cordoba = this.data.filter((n: any) => n[11] === 'CÓRDOBA');
     console.log( this.cordoba.length);
  }
  getCasanare() {
    //Casanare
    this.casanare = this.data.filter((n: any) => n[11] === 'CASANARE');
    console.log( this.casanare.length);
  }
  getSanAndresProvidencia() {
    //San andres y providencia
    this.sanAndresYprovidencia = this.data.filter((n: any) => n[11] === 'SAN ANDRÉS');
    console.log( this.sanAndresYprovidencia .length);
  }
  getSucre() {
    //sucre
    this.sucre = this.data.filter((n: any) => n[11] === 'SUCRE');
    console.log( this.sucre .length);
  }
  getGuajira() {
    
        //Guajira
        this.guajira = this.data.filter((n: any) => n[11] === 'LA GUAJIRA');
        console.log( this.guajira .length);
  }
  getChoco() {
    //choco
    this.choco = this.data.filter((n: any) => n[11] === 'CHOCÓ');
    console.log( this.choco.length);
  }
}
