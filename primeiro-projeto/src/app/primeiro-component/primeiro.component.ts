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
  //template do html
  template: `
            <p>Meu Primeiro Component Angular</p>
            `
})

// devemos importar no app.module.ts o nome da classa abaixo
export class PrimeiroComponent{}
