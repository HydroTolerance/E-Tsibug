import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YemacakePageRoutingModule } from './yemacake-routing.module';

import { YemacakePage } from './yemacake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YemacakePageRoutingModule
  ],
  declarations: [YemacakePage]
})
export class YemacakePageModule {}
