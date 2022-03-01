import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private myAppUrl = 'https://localhost:44387/api/venda/';
  private myAppUrlIfood = 'https://merchant-api.ifood.com.br/authentication/v1.0/oauth/userCode';

  constructor(private http: HttpClient) { }

  listVendas():Observable<any> {
    return this.http.get(this.myAppUrl);
  }

  listVendasIfood():Observable<any> {
    var clientId = {clientId:'fb4cbb0e-6e59-40e0-8053-388dbe17938a'}
    return this.http.post(this.myAppUrlIfood,clientId);
  }
  saveCreateVenda(venda: any):Observable<any> {
    return this.http.post(this.myAppUrl, venda);
  }

}
