import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  form: FormGroup | any;
  constructor(private formBuilder: FormBuilder,private produtoService: ProdutoService, private toastr: ToastrService,private router: Router) {
    this.form = this.formBuilder.group({
      codigoProduto: [null, Validators.required],
      nomeProduto: [null, Validators.required],
      quantidade: [null, Validators.required],
      dataCompra: [null,Validators.required],
      valorProduto: [null,Validators.required],
      valorTotal: [null],
    });
   }

  ngOnInit(): void {

  }

  onSubmit(){
    if(!this.form.valid){
      this.toastr.success('Existem campo obrigatorios não preenchidos', 'Dados obrigatorios');
      return;
    }

    this.produtoService.saveCreateProduto(this.form.value).pipe().subscribe(dataReturn => {
      this.router.navigate(['/']);
      this.toastr.success('Produto cadastrado com sucesso', 'Sucesso');
    })
  }
  updateValorTotal(){
    this.form.patchValue({ valorTotal: (this.form.getRawValue().quantidade * this.form.getRawValue().valorProduto)});
    this.form.value.valorProduto = this.form.value.valorProduto.toString();
  }
}
