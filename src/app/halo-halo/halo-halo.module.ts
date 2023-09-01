import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaloHaloPageRoutingModule } from './halo-halo-routing.module';

import { HaloHaloPage } from './halo-halo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaloHaloPageRoutingModule
  ],
  declarations: [HaloHaloPage]
})
export class HaloHaloPageModule {}
