import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pregunta7Page } from './pregunta7.page';

const routes: Routes = [
  {
    path: '',
    component: Pregunta7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pregunta7PageRoutingModule {}
