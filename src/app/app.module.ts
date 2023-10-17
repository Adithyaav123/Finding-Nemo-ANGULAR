import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NemoGameComponent } from './nemo-game/nemo-game.component';

@NgModule({
  declarations: [
    AppComponent,
    NemoGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
