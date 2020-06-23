import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import  localeEs  from '@angular/common/locales/es';
import  localeFr  from '@angular/common/locales/fr';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SecureDomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
