import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {

  showSpinner: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoragePage');
    this.showSpinner = false;
  }

  setData() {
    console.log('Establezco el data');
    console.log(this.storage.driver);
    this.showSpinner = true;
    this.storage.set('user', {name: 'Ruben4'}).then(
      (result) => {
        console.log(result);
        this.showSpinner = false;
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
