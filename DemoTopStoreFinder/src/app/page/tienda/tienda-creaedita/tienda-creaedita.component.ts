import { TipoPago } from './../../../model/tipoPago';
import { Duenho } from './../../../model/duenho';
import { TiendaService } from 'src/app/service/tienda.service';
import { Tienda } from 'src/app/model/tienda';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DuenhoService } from 'src/app/service/duenho.service';
import { TipoPagoService } from 'src/app/service/tipo-pago.service';

@Component({
  selector: 'app-tienda-creaedita',
  templateUrl: './tienda-creaedita.component.html',
  styleUrls: ['./tienda-creaedita.component.css']
})
export class tiendaCreaeditaComponent implements OnInit {
  tienda: Tienda = new Tienda();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  idDuenhoSeleccionado:number =0;
  idTipoPagoSeleccionado:number =0;

  listaDuenho: Duenho[]=[];
  listaTipoPago: TipoPago[]=[];
  constructor(private TiendaService: TiendaService,
    private router: Router, private route: ActivatedRoute, private duenhoService:DuenhoService,private tipopagoService: TipoPagoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.duenhoService.listar().subscribe(data =>{this.listaDuenho = data});
    this.tipopagoService.listar().subscribe(data =>{this.listaTipoPago = data});

  }
  aceptar(): void {
    if (this.tienda.nombre.length > 0 && this.tienda.direccion.length > 0 && this.idDuenhoSeleccionado>0 && this.idTipoPagoSeleccionado>0 ) {
      let p = new Duenho();
      p.id = this.idDuenhoSeleccionado;
      this.tienda.id_duenho = p;

      let a = new TipoPago();
      a.id = this.idTipoPagoSeleccionado;
      this.tienda.id_tipo_pago = a;


      if (this.edicion) {
        this.TiendaService.modificar(this.tienda).subscribe(data => {
          this.TiendaService.listar().subscribe(data => {
            this.TiendaService.setLista(data);
          })
        })
      } else {

        this.TiendaService.insertar(this.tienda).subscribe(data => {
          this.TiendaService.listar().subscribe(data => {
            this.TiendaService.setLista(data);
          })
        })
      }
      this.router.navigate(['tienda']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.TiendaService.listarId(this.id).subscribe(data => {
        this.tienda = data;
        this.idDuenhoSeleccionado = data.id_duenho.id;
        this.idTipoPagoSeleccionado = data.id_tipo_pago.id;
      })
    }

  }

}
