import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup;
  contemAdicional: boolean = false;
  constructor(private formBuilder: FormBuilder,private produtoService:ProdutoService,private toastr: ToastrService, private vendasService:VendasService,private router: Router) {
    this.form = this.formBuilder.group({
      codigoProduto: [null, Validators.required],
      nomeProduto: [null, Validators.required],
      quantidade: [null, Validators.required],
      dataVenda: [null,Validators.required],
      valorProduto: [null,Validators.required],
      valorTotal: [null],
      adicional: this.formBuilder.array([]),
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
    this.form.patchValue({ valorTotal: (this.form.getRawValue().quantidade * this.form.getRawValue().valorProduto +
      this.form.controls.adicional.value.reduce((sum: any, current: { preco: any; }) => sum + current.preco, 0))});
    this.form.value.valorProduto = this.form.value.valorProduto.toString();
  }

  getProduto(codigoProduto:any){
    this.produtoService.getMercadoriaProdutoCodigo(codigoProduto.value).pipe().subscribe(dataReturn => {
      if(dataReturn == null){
        this.toastr.warning('Codigo do produto inexistente', 'Produto não encontrado');
        return;
      }
      this.form.patchValue({ nomeProduto: dataReturn.nomeMercadoria, valorProduto: dataReturn.valorProduto });
    })
  }

  get formAdicional() {
    return this.form.controls['adicional'] as FormArray;
  }

  openAdicional(event: any){
   this.contemAdicional = event.checked;
   if (this.form.controls['adicional'].value.length === 0) {
     const passageiroForm = this.formBuilder.group({
       nomeAdicional: [null],
       preco: [null],
     });

     this.formAdicional.push(passageiroForm);
   }
  }

  addAdicional(){
    const passageiroForm = this.formBuilder.group({
      nomeAdicional: [null, Validators.required],
      preco: [null, Validators.required],
    });

    this.formAdicional.push(passageiroForm);
  }
  removeAdicional(index:any){
    this.formAdicional.removeAt(index);
    this.updateValorTotal();
  }

}
