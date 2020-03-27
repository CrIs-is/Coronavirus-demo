import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta7PageRoutingModule } from './pregunta7-routing.module';

import { Pregunta7Page } from './pregunta7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta7PageRoutingModule
  ],
  declarations: [Pregunta7Page]
})
export class Pregunta7PageModule {}
