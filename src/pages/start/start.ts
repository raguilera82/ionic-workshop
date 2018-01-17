import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the StartPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  starRoot = 'StarPage'
  sunRoot = 'SunPage'
  moonRoot = 'MoonPage'


  constructor(public navCtrl: NavController) {}

}
