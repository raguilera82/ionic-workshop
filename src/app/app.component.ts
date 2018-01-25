import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Events, Nav, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EnvPage } from './../pages/env/env';
import { LoginPage } from './../pages/login/login';
import { StartPage } from './../pages/start/start';
import { StoragePage } from './../pages/storage/storage';
import { UsersPage } from './../pages/users/users';
import { AuthProvider } from './../providers/auth/auth';
import { ThemeStateProvider } from './../providers/theme-state/theme-state';

import { HockeyApp } from 'ionic-hockeyapp';

//declare var Appsee:any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  selectedTheme: string;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public events: Events,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public themeStateProvider: ThemeStateProvider,
    public hockeyapp: HockeyApp) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Storage', component: StoragePage },
      { title: 'Environment', component: EnvPage },
      { title: 'Users', component: UsersPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      /*if (this.platform.is('cordova')) {
        Appsee.start("apikey",
        () => {
          console.log('Arranque correcto AppSee');
        },
        () => {
          Pro.getApp().monitoring.exception(new Error('Error en el arranque'));
          console.log('Error arranque AppSee');
        });
      }*/

      const androidAppId = 'a5b4d6d1f533468bbf1632a8e9cf025c';
      const iosAppId = '';
      const autoSendCrashReports = true;
      const ignoreCrashDialog = true;

      this.hockeyapp.start(androidAppId, iosAppId, autoSendCrashReports, ignoreCrashDialog);


      this.themeStateProvider.getActiveTheme().subscribe(
        activeTheme => this.selectedTheme = activeTheme
      )

      this.events.subscribe('user:set', (user) => {
        this.alertCtrl.create({
          title: 'Usuario creado',
          subTitle: 'Creado correctamente',
          buttons: ['Ok']
        }).present();
      })

      this.events.subscribe('show:error', (error) => {
        this.alertCtrl.create({
          title: 'Error',
          subTitle: error.dataerror,
          buttons: ['Ok']
        }).present();
      })

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authProvider.getLoginIn().subscribe(
        (result) => {
          if (!result) {
            this.rootPage = StartPage;
          }else {
            this.rootPage = LoginPage;
          }
        } 
      )

    });
  }

  ionViewWillLeave() {
    this.events.unsubscribe('user:set', () => {
      console.log('Desuscribo el evento');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
