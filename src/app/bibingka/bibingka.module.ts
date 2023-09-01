import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibingkaPageRoutingModule } from './bibingka-routing.module';

import { BibingkaPage } from './bibingka.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibingkaPageRoutingModule
  ],
  declarations: [BibingkaPage]
})
export class BibingkaPageModule {}
