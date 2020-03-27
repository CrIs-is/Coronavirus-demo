import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pregunta11Page } from './pregunta11.page';

const routes: Routes = [
  {
    path: '',
    component: Pregunta11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pregunta11PageRoutingModule {}
