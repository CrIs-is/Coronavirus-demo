import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pregunta10Page } from './pregunta10.page';

const routes: Routes = [
  {
    path: '',
    component: Pregunta10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pregunta10PageRoutingModule {}
