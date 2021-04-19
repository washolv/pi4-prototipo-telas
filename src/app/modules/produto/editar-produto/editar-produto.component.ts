import { Component, ComponentFactoryResolver, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagem, Produto } from '../models/Produto';
import { ThemePalette } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertService } from '../../shared/modal-alerta/alert.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { isForOfStatement } from 'typescript';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  color: ThemePalette = 'primary';
  public produto: Produto = new Produto();
  public formProduto: FormGroup;
  public id: number = 0;
  public idImagem: any;
  public currentRate: number = 0;
  public categoria: any;
  mageProduto: any;
  imageToShow: SafeResourceUrl[] = [];
  imagens: Imagem[] = [];
  bsModalRef: BsModalRef = new BsModalRef;
  constructor(private config: NgbRatingConfig, private toastr: ToastrService, private modalService: AlertService, toastrService: ToastrService, private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.formProduto=this.createForm(new Produto);
  }

  ngOnInit() {
  }


  deleteImage(): void {

  }
  editarImagens() {

  }

  dataURItoBlob(dataURI: any) {

  }

  public createForm(produto: Produto, isAdmin: boolean = false): FormGroup {
    return this.fb.group({
      id: new FormControl(produto.id),
      nome: new FormControl({ value: produto.nome, disabled: isAdmin }, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(280)
      ])),
      descricao: new FormControl({ value: produto.descricao, disabled: isAdmin },
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(1000)
        ])),
      quantidadeEstoque: new FormControl({ value: produto.quantidadeEstoque, disabled: false }),
      preco: new FormControl({ value: produto.preco, disabled: isAdmin }, Validators.compose([
        Validators.required,
      ])),
      categoria: new FormControl({ value: produto.categoria, disabled: isAdmin },
        Validators.compose([
          Validators.required,
        ])),
      status: new FormControl({ value: produto.status, disabled: isAdmin }),
      qtdEstrelas: new FormControl('')
    });
  }

  public editarProduto() {

  }

  backProdutos() {
    this.router.navigate(['produtos']);
  }
}
