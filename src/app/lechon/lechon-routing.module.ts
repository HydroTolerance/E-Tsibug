import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LechonPage } from './lechon.page';

const routes: Routes = [
  {
    path: '',
    component: LechonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LechonPageRoutingModule {}
