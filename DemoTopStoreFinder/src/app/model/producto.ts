import { TipoProducto } from './TipoProducto';
import { Stock } from "./Stock";

export class Producto {
    id: number = 0;
    nombreProducto: string = "";
    productoDescripcion: string = "";
    cantidad: Stock = new Stock();
    precioUnidad: number = 0;
    categoriaProdcuto: TipoProducto = new TipoProducto();


}
