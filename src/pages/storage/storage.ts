import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoragePage');
  }

  setData() {
    console.log('Establezco el data');
    console.log(this.storage.driver);
    this.storage.set('user', {name: 'Ruben4'}).then(
      (result) => {
        console.log(result);
      }
    )
  }

  getData() {
    console.log('Recupero el dato');
    this.storage.get('user').then(
      (result) => {
        console.log(result.name);
      } 
    );
  }

}
