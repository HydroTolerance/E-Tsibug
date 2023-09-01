import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutobumbongPageRoutingModule } from './putobumbong-routing.module';

import { PutobumbongPage } from './putobumbong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutobumbongPageRoutingModule
  ],
  declarations: [PutobumbongPage]
})
export class PutobumbongPageModule {}
