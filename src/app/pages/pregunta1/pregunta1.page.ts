import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';
import { Multiple } from '../../../models/multiple.interface';
import {Router} from '@angular/router';
import { anima } from '../../animaciones/animacion';
import { Platform, ToastController,AlertController } from '@ionic/angular';


@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.page.html',
  styleUrls: ['./pregunta1.page.scss'],
  animations:anima
})

export class Pregunta1Page implements OnInit {
  
  subscription: any;
  public isOpen = true;
  public elegidas = 0;
  public mala = false;
  public resultado = 1;

  public alerta = false;

  public subscribe: any;

  constructor(public servicio: ResultadosService, 
    public router: Router, 
    private platform: Platform, 
    private toast: ToastController,
    private alert: AlertController) {

    this.backButton();

    
     }

   backButton() {
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
      if (this.constructor.name == "Pregunta1Page"){
        if(!this.alerta){
          this.presentAlertConfirm();
          this.alerta = true;
        }
        else{
          this.alert.dismiss();
          this.alerta = false;
        }
          
      }
    }
  );
   }

   async presentAlertConfirm() {
    const alert = await this.alert.create({
      header: 'Quieres volver al inicio?',
      message: 'Al volver al inicio tendrás que repetir la prueba!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.alerta = false;
          }
        }, {
          text: 'Si',
          handler: () => {
            this.router.navigate(['/home-info']);
            this.servicio.acomulador = 0;
            this.subscribe.unsubscribe();
            
          }
        }
      ]
    });

    alert.backdropDismiss = false;

    await alert.present();
  }


  


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



async presentToast() {
  const toast = await this.alert.create({
    message: 'saliendo  crack',
    
  });
  toast.present();
}

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

    // Si elije todas menos la mala
    if (!this.mala && this.elegidas === 5){
      this.resultado = 0;
    }

    this.isOpen = true;
    setTimeout(() => {
      this.router.navigate(['/pregunta2']);
      this.isOpen = false;
    }, 700 );

    this.servicio.acomulador += this.resultado;
    
  }

}

