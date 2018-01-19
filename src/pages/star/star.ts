import { ThemeStateProvider } from './../../providers/theme-state/theme-state';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-star',
  templateUrl: 'star.html',
})
export class StarPage {

  selectedTheme: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public themeStateProvider: ThemeStateProvider) {
  }

  ionViewDidLoad() {
    this.themeStateProvider.getActiveTheme().subscribe(
      activeTheme => this.selectedTheme = activeTheme
    )
  }

  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.themeStateProvider.setActiveTheme('light-theme');
    }else{
      this.themeStateProvider.setActiveTheme('dark-theme');
    }
  }

}
