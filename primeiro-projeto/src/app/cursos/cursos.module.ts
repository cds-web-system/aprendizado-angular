import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  // criamos o exports para dizer que estamos expondo o CursosComponents para o angular e no qual usaremos no imports do app.module.ts
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
