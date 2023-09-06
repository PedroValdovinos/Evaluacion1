import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RpasswordPageRoutingModule } from './rpassword-routing.module';

import { RpasswordPage } from './rpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RpasswordPageRoutingModule
  ],
  declarations: [RpasswordPage]
})
export class RpasswordPageModule {}
