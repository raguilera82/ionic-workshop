import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoonPage } from './moon';

@NgModule({
  declarations: [
    MoonPage,
  ],
  imports: [
    IonicPageModule.forChild(MoonPage),
  ],
})
export class MoonPageModule {}
