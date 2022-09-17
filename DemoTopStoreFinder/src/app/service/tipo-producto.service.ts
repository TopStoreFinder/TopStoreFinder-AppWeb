import { TipoProducto } from './../Model/TipoProducto';
import { Injectable } from '@angular/core';
import {HttpClient, HttpXsrfTokenExtractor} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TipoProdcutoService {
  url: string="http://localhost:5000/tipoproducto "

  constructor(private http:HttpClient) { }
listar(){
  return this.http.get<TipoProducto[]>(this.url);
}
}
