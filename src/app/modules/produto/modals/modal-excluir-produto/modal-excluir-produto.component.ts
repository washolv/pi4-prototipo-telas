import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from '../../models/Produto';

@Component({
  selector: 'app-modal-excluir-produto',
  templateUrl: './modal-excluir-produto.component.html',
  styleUrls: ['./modal-excluir-produto.component.css']
})
export class ModalExcluirProdutoComponent implements OnInit {
  public prod: Produto = new Produto;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ModalExcluirProdutoComponent>) {
    this.prod = data.prod;
  }

  ngOnInit() {
  }

  public Excluir() {

  }
}
