import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {

  nome: string = "abc";

  getValorDigitado()
  {
      return this.nome;
  }

  pessoa: any = {
    nome:'cleberson',
    idade: 38
  }

}