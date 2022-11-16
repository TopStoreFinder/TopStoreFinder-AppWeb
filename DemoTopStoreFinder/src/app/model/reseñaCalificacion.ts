import { Tienda } from "./tienda";
import { Comprador } from "./comprador";

export class reseCalificacion {
  id: number = 0;
  cantestrellas: number = 0;
  resenia: string = "";
  clienteid: Comprador = new Comprador();
  tiendaid: Tienda = new Tienda();
}
