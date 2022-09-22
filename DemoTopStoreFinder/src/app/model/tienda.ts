import { TipoPago } from "./tipoPago";
import { Duenho } from "./duenho";
export class Tienda {
  id: number = 0;
  nombre: string = "";
  direccion: string = "";
  resenha: string = "";
  calificacion: number = 0;
  id_duenho: number = 0;
  id_tipo_pago: number = 0;
  /*
  id_duenho: Duenho = new Duenho();
  id_tipo_pago: TipoPago = new TipoPago();
  */
}
