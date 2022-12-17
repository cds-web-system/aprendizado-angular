/**
 * Criando o cursos module com o comando: ng g m cursos
 * Ele criou uma pasta cursos dentro da app
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// classe criada no arquivo primeiro-component/
import { PrimeiroComponent } from './primeiro-component/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
// devemos importar a classe cursos.module e cursos.component ao adicionar a mesma no imports
import { CursosModule } from './cursos/cursos.module';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    // classe criada manualmente no arquivo primeiro-component/primeiro-component.js
    PrimeiroComponent,
    // classe criada pelo comando ng g c segundo
    SegundoComponent,
  ],
  imports: [
    BrowserModule,
    // adicionamos o CursosModule que criamos na pasta cursos
    CursosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
