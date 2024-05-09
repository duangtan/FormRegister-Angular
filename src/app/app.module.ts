import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { FormsModule } from '@angular/forms';
import { LogoHeadComponent } from './logo-head/logo-head.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegisterComponent,
    LogoHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
