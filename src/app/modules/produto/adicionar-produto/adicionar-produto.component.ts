import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from '../models/Produto';
import { ThemePalette } from '@angular/material/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css'],
})

export class AdicionarProdutoComponent implements OnInit {
  public produto: Produto = new Produto();
  public produtoRetorno = new Produto();
  public images = [];
  public imageData: any;
  public formProduto: FormGroup;
  public currentRate = 1;
  public isChecked: boolean = false;
  public categoria: any;
  public categoriaNome: string = "";
  public color: ThemePalette = 'primary';
  public formValid = true;
  constructor(private config: NgbRatingConfig, private fb: FormBuilder, public router: Router) {
    this.formProduto = this.createForm(this.produto);
    this.config.max = 5;
    this.categoria = [
      { id: 1, name: 'Cama' },
      { id: 2, name: 'Mesa' },
      { id: 3, name: 'Banho' },
      { id: 4, name: 'Decoração' }
    ];

  }

  ngOnInit() {
  }

  public addProduto() {
     this.formProduto.value.qtdEstrelas = 0;
     this.formProduto.value.status = 1;
     if(this.formProduto.valid){
      this.router.navigateByUrl('/produtos/adicionar/imagens', {
        state: { produto: this.formProduto.value }
      })
     }else{
       this.formValid=false;
     }
  }
  get f() { return this.formProduto.controls; }

  public createForm(produto: Produto): FormGroup {
    return this.fb.group({
      qtdEstrelas: new FormControl(produto.qtdEstrelas),
      nome: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(280),
      ])),
      descricao: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(1000)
        ])),
      quantidadeEstoque: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      preco: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      categoria: new FormControl('',
        Validators.compose([
          Validators.required,
        ])),
      status: new FormControl(this.isChecked),
    });
  }

  backProdutos() {
    this.router.navigate(['produtos']);
  }
  changeStatus() {
    this.formProduto.value.status = !this.formProduto.value.status;
  }



}
