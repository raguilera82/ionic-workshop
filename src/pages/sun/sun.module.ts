import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SunPage } from './sun';

@NgModule({
  declarations: [
    SunPage,
  ],
  imports: [
    IonicPageModule.forChild(SunPage),
  ],
})
export class SunPageModule {}
