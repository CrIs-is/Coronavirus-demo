import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta9PageRoutingModule } from './pregunta9-routing.module';

import { Pregunta9Page } from './pregunta9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta9PageRoutingModule
  ],
  declarations: [Pregunta9Page]
})
export class Pregunta9PageModule {}
