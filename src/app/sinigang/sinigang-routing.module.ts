import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinigangPage } from './sinigang.page';

const routes: Routes = [
  {
    path: '',
    component: SinigangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinigangPageRoutingModule {}
