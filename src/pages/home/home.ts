import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: any;

  constructor(
    public navCtrl: NavController) {
  }

}
