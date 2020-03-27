import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta6PageRoutingModule } from './pregunta6-routing.module';

import { Pregunta6Page } from './pregunta6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta6PageRoutingModule
  ],
  declarations: [Pregunta6Page]
})
export class Pregunta6PageModule {}
