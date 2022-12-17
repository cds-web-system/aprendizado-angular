/**
 * Criando componente manual
 * Para criar via terminal: $ ng g c segundo-component
 */

// importando component da biblioteca angular/core
import {Component} from '@angular/core'
// @Component, informa que essa classe pertence a Angular
@Component({
  // tag para o html ex: no app.component.html basta add <primeiro-component></primeiro-component>
  selector: 'primeiro-component',
  //template do html via arquivo
  templateUrl: './primeiro.component.html',
  //template do html via tag, mas quando é add o templateUrl ele desconsidera o template
  template: `<p>Teste template via tag</p>`
})

// devemos importar no app.module.ts o nome da classa abaixo
export class PrimeiroComponent{
  teste = "Teste template via arquivo html";
}
