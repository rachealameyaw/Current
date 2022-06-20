import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidedrawerPage } from './sidedrawer.page';

const routes: Routes = [
  {
    path: '',
    component: SidedrawerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidedrawerPageRoutingModule {}
