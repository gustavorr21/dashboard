import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edicao-produto',
  templateUrl: './dialog-edicao-produto.component.html',
  styleUrls: ['./dialog-edicao-produto.component.scss']
})
export class DialogEdicaoProdutoComponent implements OnInit {

  form: FormGroup | any;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: {
    title: string;
    produto: any[];
    // parametro: Parametro;
  }) { }
  get isEdicao() {
    const { produto } = this.data;
    return !!produto;
  }

  get title(){
    if (this.isEdicao)
      return this.data.title;
    else
    return 'olaaa';
  }

  ngOnInit() {
    this.form = this.fb.group({
      nomeProduto: [null, [Validators.required]],
      quantidade: [null, [Validators.required]],
      valor: [null, [Validators.required]]
    });

    if (this.isEdicao)
      this.form.patchValue(this.data.produto);

  }

  submit(){

  }
}
