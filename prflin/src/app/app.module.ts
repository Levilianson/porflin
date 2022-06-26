import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Headers/header/header.component';
import { LogoComponent } from './Headers/logo/logo.component';
import { LogsocComponent } from './Headers/logsoc/logsoc.component';
import { BannerComponent } from './Headers/banner/banner.component';
import { AcrkdeComponent } from './Headers/acrkde/acrkde.component';
import { BodyComponent } from './Cuepo/body/body.component';
import { EducComponent } from './Cuepo/educ/educ.component';
import { ExperComponent } from './Cuepo/exper/exper.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LogsocComponent,
    BannerComponent,
    AcrkdeComponent,
    BodyComponent,
    EducComponent,
    ExperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
