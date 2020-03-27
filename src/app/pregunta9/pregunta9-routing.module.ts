import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pregunta9Page } from './pregunta9.page';

const routes: Routes = [
  {
    path: '',
    component: Pregunta9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pregunta9PageRoutingModule {}
