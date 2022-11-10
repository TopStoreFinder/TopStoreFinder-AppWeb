import { TipoProducto } from './TipoProducto';
import { Stock } from "./Stock";

export class Producto {
  id: number = 0;
  nombreProducto: string = "";
  productoDescripcion: string = "";
  cantidad: number = 0;
  precioUnidad: number = 0;
  categoriaProdcuto: TipoProducto = new TipoProducto();
  id_Stock: Stock = new Stock();


}
