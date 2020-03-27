import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta8PageRoutingModule } from './pregunta8-routing.module';

import { Pregunta8Page } from './pregunta8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta8PageRoutingModule
  ],
  declarations: [Pregunta8Page]
})
export class Pregunta8PageModule {}
