import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-main-nav-cliente',
  templateUrl: './main-nav-cliente.component.html',
  styleUrls: ['./main-nav-cliente.component.css']
})
export class MainNavClienteComponent implements OnInit {


  public qtdCarrinho: number = 0;
  constructor(private cartService: CartService, private router: Router) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.qtdCarrinho = this.cartService.qtdCarrinho();
    }
  }
  ngOnInit() {
    this.qtdCarrinho = this.cartService.qtdCarrinho();
  }
  configuracoes() {
    this.router.navigate(['/configuracoes']);
  }
  dashboard() {
    this.router.navigate([``]);
  }
  public logout() {

  }

}
