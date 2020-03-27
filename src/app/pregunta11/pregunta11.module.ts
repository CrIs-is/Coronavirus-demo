import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta11PageRoutingModule } from './pregunta11-routing.module';

import { Pregunta11Page } from './pregunta11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta11PageRoutingModule
  ],
  declarations: [Pregunta11Page]
})
export class Pregunta11PageModule {}
