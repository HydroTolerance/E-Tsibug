import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoboPage } from './adobo.page';

const routes: Routes = [
  {
    path: '',
    component: AdoboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoboPageRoutingModule {}
