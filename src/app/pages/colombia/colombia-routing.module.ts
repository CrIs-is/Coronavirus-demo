import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColombiaPage } from './colombia.page';

const routes: Routes = [
  {
    path: '',
    component: ColombiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColombiaPageRoutingModule {}
