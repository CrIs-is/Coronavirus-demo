import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeInfoPageRoutingModule } from './home-info-routing.module';

import { HomeInfoPage } from './home-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeInfoPageRoutingModule
  ],
  declarations: [HomeInfoPage]
})
export class HomeInfoPageModule {}
