import { ToastrService } from 'ngx-toastr';
import { AdicionarEstoqueComponent } from './../modals/adicionar-estoque/adicionar-estoque.component';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ModalExcluirProdutoComponent } from '../modals/modal-excluir-produto/modal-excluir-produto.component';
import { Produto } from '../models/Produto';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { LOCALE_ID } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { HttpResponse } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  public modalRef: BsModalRef | undefined;
  public produtos: Produto[] = [];
  public filtroPesquisa: string = "";
  searchFilter = new Subject<string>();
  color: ThemePalette = 'primary';
  userRole?:string;
  totalRegistros: number=0;
  page: number=1
  teste: boolean=false;
  isAdmin=false;


  constructor(private dialog: MatDialog, private router: Router, modalService: BsModalService, private toastr: ToastrService) {

  }

  public habilitarProduto(p: Produto) {

  }
  ngOnInit() {

  }



  adicionarProduto() {
    this.router.navigate([`/produtos/adicionar`]);
  }

  excluirProduto(produto: Produto) {

  }

  toggleVisibility(e: any, produto: Produto) {

  }
  editarProduto(produto: Produto) {
  }
  visualizar(produto: Produto) {
  }

  adicionarEstoque(produto: Produto) {
  }

}



