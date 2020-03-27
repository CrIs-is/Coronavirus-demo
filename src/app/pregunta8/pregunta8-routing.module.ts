import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pregunta8Page } from './pregunta8.page';

const routes: Routes = [
  {
    path: '',
    component: Pregunta8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pregunta8PageRoutingModule {}
