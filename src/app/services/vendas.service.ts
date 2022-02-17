import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private myAppUrl = 'https://localhost:44387/api/venda/';

  constructor(private http: HttpClient) { }

  listVendas():Observable<any> {
    return this.http.get(this.myAppUrl);
  }

  saveCreateVenda(venda: any):Observable<any> {
    return this.http.post(this.myAppUrl, venda);
  }

}
