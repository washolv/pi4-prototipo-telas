import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Imagem, Produto } from '../../models/Produto';

@Component({
  selector: 'app-editar-imagens-produto',
  templateUrl: './editar-imagens-produto.component.html',
  styleUrls: ['./editar-imagens-produto.component.css']
})
export class EditarImagensProdutoComponent implements OnInit {
  public imageToShow: Imagem[] = new Array();
  public imagens: any;
  public produto: Produto = new Produto;
  public files: any = new Array();
  public fileList: any = new Array();
  public novasImagems: any = new Array();
  public imagensUpload: FormData = new FormData;
  id: number = 0;
  constructor(private toastr: ToastrService, private sanitizer: DomSanitizer, private route: ActivatedRoute,private router: Router) {
    this.route.params.subscribe(parametros => {
      this.id = parametros['id'];
    });

  }

  ngOnInit() {

  }

  enviar() {

  }
  processFile(event: any) {
    for (let file of event.target.files) {
      this.files.push(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = event => {
        this.novasImagems = this.novasImagems.filter((a: any) => a !== reader.result);
        this.novasImagems.push(reader.result)
      }
    }
  }
  deleteImage(url: any, i: number): void {
    this.novasImagems = this.novasImagems.filter((a: any) => a !== url);
    for (const file of this.files) {
      if (this.files[i] != file) {
        this.fileList.push(file);
      }
    }
    this.files = this.fileList;
    this.fileList = null;
  }
  deleteImageBanco(img: Imagem): void {

  }

  backProdutos() {
    this.router.navigate(['produtos/editar', this.produto.id]);
  }
  public toggleSelected(img: Imagem) {

  }
}
