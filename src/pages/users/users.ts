import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: Array<any> = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
    this.api.getUsersWithMoreInfo().subscribe(
      users => {
        console.log(users);
        this.users = users;
      }
    )
  }

}
