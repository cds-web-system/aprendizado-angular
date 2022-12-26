import { Component } from '@angular/core';

@Component({
  selector: 'app-envent-binding',
  templateUrl: './envent-binding.component.html',
  styleUrls: ['./envent-binding.component.css']
})

export class EnventBindingComponent {

    classe: any;
    valorAtual: String = "";
    valorSalvo: string = "";

    isMouseSobre: boolean = false;

    constructor(){
      this.classe = "";
    }

    getBotaoClicado()
    {
       alert ('Clicou!!!');
    }

    digitando(evento: KeyboardEvent)
    {
      this.valorAtual = (<HTMLInputElement>evento.target).value;
    }

    salvar(valor:any)
    {
      this.valorSalvo = valor;
    }

    mouseSobre()
    {
      this.isMouseSobre = !this.isMouseSobre;
    }

    mouseSaiu()
    {
      this.isMouseSobre = !this.isMouseSobre;
    }
}
