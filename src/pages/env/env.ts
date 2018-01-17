import { ENV } from '@app/env';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-env',
  templateUrl: 'env.html',
})
export class EnvPage {

  env: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnvPage');
    this.env = ENV;
    console.log(ENV);
  }

  ionViewCanEnter(): boolean {
    return true;
  }

  ionViewCanLeave(): boolean {
    return true;
  }

}
