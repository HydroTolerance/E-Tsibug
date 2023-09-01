import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukopiePageRoutingModule } from './bukopie-routing.module';

import { BukopiePage } from './bukopie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukopiePageRoutingModule
  ],
  declarations: [BukopiePage]
})
export class BukopiePageModule {}
