import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';
import { EntityDataModule } from '@ngrx/data';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    EntityDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
