import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnvPage } from './env';

@NgModule({
  declarations: [
    EnvPage,
  ],
  imports: [
    IonicPageModule.forChild(EnvPage),
  ],
})
export class EnvPageModule {}
