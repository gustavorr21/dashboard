import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private myAppUrl = 'https://localhost:44387/api/cliente/';

  constructor(private http: HttpClient) { }

  getListClient(){
    return this.http.get(this.myAppUrl);
  }

  saveCreateProduto(produto: any):Observable<any> {
    return this.http.post(this.myAppUrl, produto);
  }
}
