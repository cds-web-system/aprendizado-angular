import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// classe criada no arquivo primeiro-component/
import { PrimeiroComponent } from './primeiro-component/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';

@NgModule({
  declarations: [
    AppComponent,
    // classe criada manualmente no arquivo primeiro-component/primeiro-component.js
    PrimeiroComponent,
    // classe criada pelo comando ng g c segundo
    SegundoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
