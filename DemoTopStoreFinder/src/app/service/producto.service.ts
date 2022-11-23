import { ResultadoCantidadProductosporcadaTienda } from './../model/ResultadoCantidadProductosporcadaTienda';
import { Producto } from './../model/producto';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject , EMPTY } from 'rxjs';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url: string = `https://app-topstorefinder.herokuapp.com/producto`
  private listaCambio = new Subject<Producto[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  getCount(){
    return this.http.get<Producto[]>(this.url);
  }
  listar() {
    return this.http.get<Producto[]>(this.url);
  }
  insertar(propietario: Producto) {
    return this.http.post(this.url, propietario);
  }
  setLista(listaNueva: Producto[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(producto: Producto) {
   return this.http.put(this.url,producto);
  }
  listarId(id: number) {
    return this.http.get<Producto>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Producto[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
  BuscarCantidadProductosPorTienda(){
    return this.http.get<ResultadoCantidadProductosporcadaTienda[]>(`${this.url}/buscarcantidadtiendasporproducto`);
  }
}
