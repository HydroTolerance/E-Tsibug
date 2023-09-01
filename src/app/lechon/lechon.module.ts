import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LechonPageRoutingModule } from './lechon-routing.module';

import { LechonPage } from './lechon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LechonPageRoutingModule
  ],
  declarations: [LechonPage]
})
export class LechonPageModule {}
