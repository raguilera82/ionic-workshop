import { ModalPage } from './../modal/modal';
import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {

  showSpinner: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public events: Events,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoragePage');
    this.showSpinner = false;
  }

  setData() {
    console.log('Establezco el data');
    console.log(this.storage.driver);
    this.showSpinner = true;
    const user = {name: 'Ruben4'};
    this.storage.set('user', user).then(
      (result) => {
        console.log(result);
        this.events.publish('user:set', user);
        console.log('Publico el usuario');
        this.showSpinner = false;
      }
      
    );
    this.navCtrl.push(ListPage, {data: 'data'});
  }

  getData() {
    console.log('Recupero el dato');
    this.storage.get('user').then(
      (result) => {
        console.log(result.name);
        this.modalCtrl.create(ModalPage, {data: 'modal'}).present();
      } 
    );
  }

}
