import { TipoPagoService } from 'src/app/service/tipo-pago.service';
import { Component, OnInit } from '@angular/core';
import { TipoPago } from 'src/app/model/tipoPago';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipopago-creaedita',
  templateUrl: './tipopago-creaedita.component.html',
  styleUrls: ['./tipopago-creaedita.component.css']
})
export class TipopagoCreaeditaComponent implements OnInit {
  tipopago :TipoPago = new TipoPago();
  mensaje:string ="";

  constructor(private tipopagoservice: TipoPagoService,private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if ( this.tipopago.tipo.length > 0) {

      this.tipopagoservice.insertar(this.tipopago).subscribe(data => {
        this.tipopagoservice.listar().subscribe(data => {
          this.tipopagoservice.setLista(data);
        })
      })
      this.router.navigate(['tipopago']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
