import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta5PageRoutingModule } from './pregunta5-routing.module';

import { Pregunta5Page } from './pregunta5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta5PageRoutingModule
  ],
  declarations: [Pregunta5Page]
})
export class Pregunta5PageModule {}
