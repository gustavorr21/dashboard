import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private myAppUrl = 'https://localhost:44387/api/cliente/';

  constructor(private http: HttpClient) { }

  getListClient(){
    return this.http.get(this.myAppUrl);
  }
}
