import { TipoPagoService } from 'src/app/service/tipo-pago.service';
import { TipoPago } from 'src/app/model/tipoPago';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tipopago-creaedita',
  templateUrl: './tipopago-creaedita.component.html',
  styleUrls: ['./tipopago-creaedita.component.css']
})
export class TipopagoCreaeditaComponent implements OnInit {

  tipopago: TipoPago = new TipoPago();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private tipopagoservice: TipoPagoService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.tipopago.tipo.length > 0 ) {
      if (this.edicion) {
        this.tipopagoservice.modificar(this.tipopago).subscribe(data => {
          this.tipopagoservice.listar().subscribe(data => {
            this.tipopagoservice.setLista(data);
          })
        })
      } else {

        this.tipopagoservice.insertar(this.tipopago).subscribe(data => {
          this.tipopagoservice.listar().subscribe(data => {
            this.tipopagoservice.setLista(data);
          })
        })
      }
      this.router.navigate(['tipopago']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.tipopagoservice.listarId(this.id).subscribe(data => {
        this.tipopago = data;
      })
    }

  }

}
