import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private myAppUrl = 'https://localhost:44387/api/produto/';

  constructor(private http: HttpClient) { }

  listProduto():Observable<any> {
    return this.http.get(this.myAppUrl);
  }

  getProdutoCodigo(codigoProduto: any):Observable<any> {
    return this.http.get(`${this.myAppUrl}${codigoProduto}`);
  }
  saveCreateProduto(produto: any):Observable<any> {
    return this.http.post(this.myAppUrl, produto);
  }
}
