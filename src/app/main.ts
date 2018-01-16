import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

declare var Appsee:any;

Appsee.start("afb691dba33649be97756acf81e06a7e");

platformBrowserDynamic().bootstrapModule(AppModule);
