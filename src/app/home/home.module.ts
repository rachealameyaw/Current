import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { BrowserModule } from '@angular/platform-browser' ;

import { HomePageRoutingModule } from './home-routing.module';
import { AppComponent } from '../app.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BrowserModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
