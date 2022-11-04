import { TipoPago } from "./tipoPago";
import { Duenho } from "./duenho";
export class Tienda {
  id: number = 0;
  nombre: string = "";
  direccion: string = "";
  id_duenho: Duenho = new Duenho();
  id_tipo_pago: TipoPago = new TipoPago();
}
