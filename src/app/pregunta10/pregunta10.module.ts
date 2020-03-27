import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta10PageRoutingModule } from './pregunta10-routing.module';

import { Pregunta10Page } from './pregunta10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta10PageRoutingModule
  ],
  declarations: [Pregunta10Page]
})
export class Pregunta10PageModule {}
