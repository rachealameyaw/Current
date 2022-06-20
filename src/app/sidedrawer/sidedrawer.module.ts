import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidedrawerPageRoutingModule } from './sidedrawer-routing.module';

import { SidedrawerPage } from './sidedrawer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidedrawerPageRoutingModule
  ],
  declarations: [SidedrawerPage]
})
export class SidedrawerPageModule {}
