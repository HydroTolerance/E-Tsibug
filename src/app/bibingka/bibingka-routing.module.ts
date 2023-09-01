import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibingkaPage } from './bibingka.page';

const routes: Routes = [
  {
    path: '',
    component: BibingkaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibingkaPageRoutingModule {}
