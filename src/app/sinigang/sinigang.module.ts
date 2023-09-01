import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinigangPageRoutingModule } from './sinigang-routing.module';

import { SinigangPage } from './sinigang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinigangPageRoutingModule
  ],
  declarations: [SinigangPage]
})
export class SinigangPageModule {}
