import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent {
  url: string = 'https:cds.tec.br';

  getEx1(){
    return "Resultado Ex1 vindo do component data-binding.component.ts";
  }

  ex2 = true;

  getEx3(){
    return true;
  }

  ex4 = "http://lorempixel.com.br/500/400/?1";
}
