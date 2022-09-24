import { TipoPagoService } from './../../../service/tipo-pago.service';
import { Component, OnInit } from '@angular/core';
import { TipoPago } from 'src/app/model/tipoPago';

@Component({
  selector: 'app-tipopago-buscar',
  templateUrl: './tipopago-buscar.component.html',
  styleUrls: ['./tipopago-buscar.component.css']
})
export class TipopagoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private tipopagoservice: TipoPagoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: TipoPago[] = [];
    this.tipopagoservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.tipo.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.tipopagoservice.setLista(array);
    })
  }

}
