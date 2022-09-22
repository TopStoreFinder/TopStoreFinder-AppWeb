import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './../model/Stock';
@Injectable({
  providedIn: 'root'
})
export class StockService {
url: string = "http://localhost:5000/stock"
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Stock[]>(this.url);
  }
}
