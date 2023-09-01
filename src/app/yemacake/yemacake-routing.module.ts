import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YemacakePage } from './yemacake.page';

const routes: Routes = [
  {
    path: '',
    component: YemacakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YemacakePageRoutingModule {}
