import { MyTemplateComponent } from './../../components/my-template/my-template';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarPage } from './star';

@NgModule({
  declarations: [
    StarPage,
    MyTemplateComponent
  ],
  imports: [
    IonicPageModule.forChild(StarPage),
  ],
})
export class StarPageModule {}
