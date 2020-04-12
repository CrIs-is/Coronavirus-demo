import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { HomeInfoService } from '../home-info.service';
import { Router } from '@angular/router';
import { ResultadosService } from '../services/resultados.service';


@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.page.html',
  styleUrls: ['./home-info.page.scss'],
})
export class HomeInfoPage implements OnInit {

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  informacion;
  informaciong;
  recuperados;
  muertes;
  contagiados;

  recuperadosg;
  muertesg;
  contagiadosg;


  constructor(public navCtrl: NavController,
              public info: HomeInfoService,
              public loadingCtrl: LoadingController,
              public router: Router,
              public servicio: ResultadosService,
              public plataforma: Platform,
              public toast: ToastController) {
                this.servicio.acomulador = 0;
                this.backButtonEvent();
               }

  backButtonEvent(){
    this.plataforma.backButton.subscribe(async () => {
      if (this.router.url === '/home-info') {
        if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            // this.platform.exitApp(); // Exit from app
            navigator['app'].exitApp(); // work in ionic 4

        } else {
            this.presentToast();

            this.lastTimeBackPress = new Date().getTime();
        }
    }});
  }


  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }



  ngOnInit() {
    this.servicio.acomulador = 0;
    
    this.info.getUsers()
      .subscribe(
        (data) => { // Success
          this.informacion = data['response'][0];
          this.contagiados = data['response'][0]['cases']['total'];
          this.recuperados = data['response'][0]['cases']['recovered'];
          this.muertes = data['response'][0]['deaths']['total'];

          console.log(this.contagiados);
          console.log(this.informacion);
        },
        (error) => {
          console.error(error);
        }
      );
    this.info.getGlobal()
      .subscribe(
        (data) => { // Success
          this.informaciong = data['response'][0];
          this.contagiadosg = data['response'][0]['cases']['total'];
          this.recuperadosg = data['response'][0]['cases']['recovered'];
          this.muertesg = data['response'][0]['deaths']['total'];

         
          console.log(this.informaciong);
        },
        (error) => {
          console.error(error);
        }
      )
  }

  siguiente() {

    setTimeout(() => {
      this.router.navigate(['/home']);

    }, 700);
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Presione dos veces para salír.',
      duration: 2000
    });
    toast.present();
  }

}
