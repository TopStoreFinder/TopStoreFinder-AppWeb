import { Stock } from './../Model/Stock';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StockService {
url: string = "http://localhost:5000//stock"
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Stock[]>(this.url);
  }
}
