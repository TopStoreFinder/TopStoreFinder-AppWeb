import { TipoProducto } from './TipoProducto';
import { Stock } from "./Stock";

export class Producto {
  id: number = 0;
  nombreProducto: string = "";
  productoDescripcion: string = "";
<<<<<<< Updated upstream
  cantidad: number = 0;
<<<<<<< HEAD
=======
  //cantidad: Stock = new Stock();
=======
>>>>>>> Stashed changes
>>>>>>> Carlos-Alberto-Quispe-Guzman
  precioUnidad: number = 0;
  categoriaProdcuto: TipoProducto = new TipoProducto();
  id_Stock: Stock = new Stock();


}
