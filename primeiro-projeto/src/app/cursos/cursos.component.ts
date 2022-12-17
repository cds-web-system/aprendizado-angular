/**
 * Criando o component com o comando ng g c cursos
 * Com mesmo nome da pasta cursos que o module criou
 * Com isso os aquivos serão criados dentra da pasta
 * E componet sera add dentro do module cursos.module.ts
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent { // Aqui na classe, colocamos nossa logica de programação, ex: javascript etc... para deixar mais dinâmico
// passando valor da variavel para cursos.component
  minhaVar: string;

  meuArray: string[] = ['Angular', 'Typescript', 'Html'];

  constructor(){
    this.minhaVar = "Aqui é o texto passado por pela variavel";
  }
}
