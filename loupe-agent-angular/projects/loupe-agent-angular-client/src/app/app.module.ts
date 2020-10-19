import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoupeAgentAngularModule, MyErrorHandler } from 'loupe-agent-angular';
import { ErrorHandler } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoupeAgentAngularModule
  ],
  providers: [
    { provide: Window, useValue: window },
    { provide: Document, useValue: document },
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
