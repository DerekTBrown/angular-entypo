import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AngularEntypoComponent } from './angular-entypo.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AngularEntypoComponent],
  exports: [AngularEntypoComponent]
})
export class AngularEntypoModule { }
