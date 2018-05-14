import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularEntypoModule } from 'angular-entypo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularEntypoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
