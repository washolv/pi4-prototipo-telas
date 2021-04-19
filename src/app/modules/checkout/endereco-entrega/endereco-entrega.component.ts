import { Component, OnInit } from '@angular/core';
import { EnderecoCliente } from '../../cliente/models/Cliente';

@Component({
  selector: 'app-endereco-entrega',
  templateUrl: './endereco-entrega.component.html',
  styleUrls: ['./endereco-entrega.component.css']
})
export class EnderecoEntregaComponent implements OnInit {
  public id: number=0;
  public enderecos: EnderecoCliente[]=[];
  constructor() { }

  ngOnInit() {
  }

}
