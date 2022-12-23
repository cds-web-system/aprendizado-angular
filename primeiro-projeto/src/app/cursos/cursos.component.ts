/**
 * Criando o component com o comando ng g c cursos
 * Com mesmo nome da pasta cursos que o module criou
 * Com isso os aquivos serão criados dentra da pasta
 * E componet sera add dentro do module cursos.module.ts
 */

import { Component } from '@angular/core';
import {CursosService} from './cursos.service'; // importando o cursos.service.ts

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

/* Aqui na classe, colocamos nossa logica de programação ou instanciamos os metodos de cursos.service que de boa pratica adicionamos a logica, ex: javascript etc... para deixar mais dinâmico */
export class CursosComponent {

  // passando valor da variavel para cursos.component.html
  minhaVar: string;

  // definindo variavel array
  meuArray: string[];

  /*
    Aplicando injeção de dependencia da classe CursosService na inicialização do construtor
    private cursosService: CursosService
    poderiamos também:
    cursosService = new CursosService
  */
  constructor(private cursosService: CursosService){

    this.minhaVar = "Aqui é o texto passado por pela variavel";

    this.meuArray = this.cursosService.getCursos();
  }
}
