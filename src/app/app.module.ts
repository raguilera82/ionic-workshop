import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Pro } from '@ionic/pro';
import { IonicStorageModule } from '@ionic/storage';
import { Events, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';
import { IconsProvider } from '../providers/icons/icons';
import { ErrorInterceptor } from './../interceptors/error.interceptor';
import { TimeoutInterceptor } from './../interceptors/timeout.interceptor';
import { EnvPageModule } from './../pages/env/env.module';
import { LoginPageModule } from './../pages/login/login.module';
import { ModalPage } from './../pages/modal/modal';
import { MoonPageModule } from './../pages/moon/moon.module';
import { StarPageModule } from './../pages/star/star.module';
import { StartPageModule } from './../pages/start/start.module';
import { StoragePage } from './../pages/storage/storage';
import { SunPageModule } from './../pages/sun/sun.module';
import { UsersPageModule } from './../pages/users/users.module';
import { PipesModule } from './../pipes/pipes.module';
import { MyApp } from './app.component';

const IonicPro = Pro.init('9be60216', {
  appVersion: "0.0.1"
});

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector, public events: Events) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure 
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);

    this.events.publish('show:error', {dataerror: err});
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StoragePage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EnvPageModule,
    LoginPageModule,
    PipesModule,
    StartPageModule,
    SunPageModule,
    MoonPageModule,
    StarPageModule,
    UsersPageModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['sqlite', 'indexeddb', 'websql']
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StoragePage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: MyErrorHandler},
    IconsProvider,
    AuthProvider,
    ApiProvider,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true}
  ]
})
export class AppModule {}
