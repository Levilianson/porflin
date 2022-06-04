import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Headers/header/header.component';
import { LogoComponent } from './Headers/logo/logo.component';
import { LogsocComponent } from './Headers/logsoc/logsoc.component';
import { BannerComponent } from './Headers/banner/banner.component';
import { AcrkdeComponent } from './Headers/acrkde/acrkde.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LogsocComponent,
    BannerComponent,
    AcrkdeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
