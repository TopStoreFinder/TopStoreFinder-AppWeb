import { ResultadoCantidadPrecioDeterminado } from './../model/ResultadoCantidadPrecioDeterminados';
import { environment } from './../../environments/environment';
import { TiendaProducto } from './../model/tiendaProducto';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject, EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaProductoService {
  url: string = `https://app-topstorefinder.herokuapp.com/tiendaproducto`
  private listaCambio = new Subject<TiendaProducto[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  getCount(){
    return this.http.get<TiendaProducto[]>(this.url);
  }
  listar() {
    return this.http.get<TiendaProducto[]>(this.url);
  }
  insertar(TiendaProducto: TiendaProducto) {
    return this.http.post(this.url, TiendaProducto);
  }
  BuscarCantidadTiendasPorCadaDuenho(){
    return this.http.get<ResultadoCantidadPrecioDeterminado[]>(`${this.url}/buscarcantidadpreciosDeterminados`);
  }

  setLista(listaNueva: TiendaProducto[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(TiendaProducto: TiendaProducto) {
    return this.http.put(this.url,TiendaProducto);
  }
  listarId(id: number) {
    return this.http.get<TiendaProducto>(`${this.url}/${id}`);
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
      return this.http.post<TiendaProducto[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
