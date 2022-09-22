import { TipoProducto } from './TipoProducto';
import { Stock } from "./Stock";

export class Producto {
  id: number = 0;
  nombreProducto: string = "";
  productoDescripcion: string = "";
  cantidad: number = 0;
  //cantidad: Stock = new Stock();
  precioUnidad: number = 0;
  //categoriaProdcuto: TipoProducto = new TipoProducto();
  categoriaProdcuto: number = 0;


}
