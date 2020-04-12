import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';

@Component({
  selector: 'app-colombia',
  templateUrl: './colombia.page.html',
  styleUrls: ['./colombia.page.scss'],
})
export class ColombiaPage implements OnInit {

  public data: any;
  constructor(public servicio: ResultadosService) { }

  ngOnInit() {
     
  }

}
