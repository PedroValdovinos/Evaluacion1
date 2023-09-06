import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RpasswordPage } from './rpassword.page';

const routes: Routes = [
  {
    path: '',
    component: RpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RpasswordPageRoutingModule {}
