import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaloHaloPage } from './halo-halo.page';

const routes: Routes = [
  {
    path: '',
    component: HaloHaloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaloHaloPageRoutingModule {}
