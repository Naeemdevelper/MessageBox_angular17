import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxsModule } from '@ngxs/store';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(NgxsModule.forRoot()) ]
};
