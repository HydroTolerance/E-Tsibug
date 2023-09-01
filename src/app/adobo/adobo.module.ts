import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoboPageRoutingModule } from './adobo-routing.module';

import { AdoboPage } from './adobo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoboPageRoutingModule
  ],
  declarations: [AdoboPage]
})
export class AdoboPageModule {}
