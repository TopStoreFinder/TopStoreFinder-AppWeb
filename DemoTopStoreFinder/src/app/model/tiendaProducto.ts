import { Producto } from "./producto";
import { Tienda } from "./tienda";

export class TiendaProducto {
  id: number = 0;
  productoid: Producto = new Producto();
  tienda_id: Tienda = new Tienda();

}
