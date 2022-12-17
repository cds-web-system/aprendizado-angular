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
export class CursosComponent {

}
