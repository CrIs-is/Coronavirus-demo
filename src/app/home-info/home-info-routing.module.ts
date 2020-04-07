import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeInfoPage } from './home-info.page';

const routes: Routes = [
  {
    path: '',
    component: HomeInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeInfoPageRoutingModule {}
