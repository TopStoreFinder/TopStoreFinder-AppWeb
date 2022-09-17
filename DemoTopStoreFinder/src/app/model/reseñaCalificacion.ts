import { Tienda } from "./tienda";
import { Comprador } from "./comprador";

export class reseCalificacion {
    id: number = 0;
    qEstrellas: number = 0;
    Reseña: string = "";
    Cliente_id: Comprador = new Comprador();
    Tienda_id: Tienda = new Tienda();


}
