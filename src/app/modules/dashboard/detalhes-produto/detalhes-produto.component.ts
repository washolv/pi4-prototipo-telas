import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { timeoutWith } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { Produto } from '../../produto/models/Produto';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  id: number = 0;
  formProduto: FormGroup;
  imageProduto: any;
  imageToShow: SafeResourceUrl[] = [];
  public currentRate: number=0;
  imagens: any;
  cont: number = 0;
  constructor(private cartService: CartService, private config: NgbRatingConfig, private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    ) {
    this.config.max = 5;
    this.route.params.subscribe(parametros => {
      this.id = parametros['id'];
    });
      this.produto.nome='Jogo de Cama Solteiro Infantil Karsten 180 Fios Percal 100% Algodão Missi'
      this.produto.descricao='Sobre lençol 180 x 240 cm, Lençol de elástico 100 x 200 x 35 cm, Fronha 50 x 70 cm';
      this.produto.preco=214.9;
      this.produto.status=1;
      this.produto.qtdEstrelas=3;
      this.produto.categoria='Cama'
      this.formProduto = this.createForm(this.produto);


  }

  ngOnInit() {
    this.formProduto.disable();
  }

  public createForm(produto: Produto): FormGroup {
    const status = produto.status == 1;
    if (status) {
      return this.fb.group({
        id: new FormControl(produto.id),
        nome: new FormControl(produto.nome),
        descricao: new FormControl(produto.descricao),
        quantidadeEstoque: new FormControl(produto.quantidadeEstoque),
        preco: new FormControl(produto.preco),
        categoria: new FormControl(produto.categoria),
        status: new FormControl(produto.status),
        qtdEstrelas: new FormControl(produto.qtdEstrelas)
      });
    } else {
      return this.fb.group({
        id: new FormControl(produto.id, Validators.required),
        nome: new FormControl(produto.nome, Validators.required),
        descricao: new FormControl(produto.descricao, Validators.required),
        quantidadeEstoque: new FormControl(produto.quantidadeEstoque, Validators.required),
        preco: new FormControl(produto.preco, Validators.required),
        categoria: new FormControl(produto.categoria, Validators.required),
        status: new FormControl(produto.status, Validators.required),
        qtdEstrelas: new FormControl(produto.qtdEstrelas)
      });
    }
  }
  adicionarCarrinho(){
      this.cartService.adicionarProduto(this.produto);
      window.location.reload();
  }
  backProdutos() {
    this.router.navigate(['dashboard']);
  }
}
