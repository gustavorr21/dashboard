import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from 'src/app/services/produto.service';
import { VendasService } from 'src/app/services/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {
  form: FormGroup | any;
  constructor(private formBuilder: FormBuilder,private produtoService:ProdutoService,private toastr: ToastrService, private vendasService:VendasService,private router: Router) {
    this.form = this.formBuilder.group({
      codigoProduto: [null, Validators.required],
      nomeProduto: [null, Validators.required],
      quantidade: [null, Validators.required],
      dataVenda: [null,Validators.required],
      valorProduto: [null,Validators.required],
      valorTotal: [null],
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.form.valid){
      return;
    }
    this.vendasService.saveCreateVenda(this.form.value).pipe().subscribe(dataReturn => {
      this.router.navigate(['/listavenda']);
      this.toastr.success('Venda cadastrada com sucesso', 'Sucesso');
    })

  }
  updateValorTotal(){
    this.form.patchValue({ valorTotal: (this.form.getRawValue().quantidade * this.form.getRawValue().valorProduto)});
    this.form.value.valorProduto = this.form.value.valorProduto.toString();
  }

  getProduto(codigoProduto:any){
    this.produtoService.getProdutoCodigo(codigoProduto.value).pipe().subscribe(dataReturn => {
      if(dataReturn == null){
        this.toastr.warning('Codigo do produto inexistente', 'Produto não encontrado');
        return;
      }
      this.form.patchValue({ nomeProduto: dataReturn.nomeProduto, valorProduto: dataReturn.valorProduto });
    })
  }
}
