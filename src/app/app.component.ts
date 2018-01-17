import { EnvPage } from './../pages/env/env';
import { StoragePage } from './../pages/storage/storage';
import { Pro } from '@ionic/pro';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

declare var Appsee:any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Storage', component: StoragePage },
      { title: 'Environment', component: EnvPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is('cordova')) {
        Appsee.start("afb691dba33649be97756acf81e06a7e",
        () => {
          Pro.getApp().monitoring.log('Arranque correcto AppSee');
          console.log('Arranque correcto AppSee');
        },
        () => {
          Pro.getApp().monitoring.exception(new Error('Error en el arranque'));
          console.log('Error arranque AppSee');
        });
      }
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
