import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IconsProvider } from './../../providers/icons/icons';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  data: string;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public iconsProvider: IconsProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.data = navParams.get('data');

    // Let's populate this page with some filler content for funzies
    this.icons = this.iconsProvider.getIcons();

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
