import { TiendaService } from 'src/app/service/tienda.service';
import { CompradorService } from 'src/app/service/comprador.service';
import { Tienda } from 'src/app/model/tienda';
import { Comprador } from 'src/app/model/comprador';
import { ReseñaCalificacionService } from 'src/app/service/reseña-calificacion.service';
import { Component, OnInit } from '@angular/core';
import { reseCalificacion } from 'src/app/model/reseñaCalificacion';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reseniacalificacion-creaedita',
  templateUrl: './reseniacalificacion-creaedita.component.html',
  styleUrls: ['./reseniacalificacion-creaedita.component.css']
})
export class ReseniacalificacionCreaeditaComponent implements OnInit {
  reseniacalifi: reseCalificacion = new reseCalificacion();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  idClienteSeleccionado: number = 0;
  idTiendaSeleccionada: number = 0;

  listaCliente: Comprador[]=[];
  listaTienda: Tienda[]=[];

  constructor(private reseniacalificacionservice: ReseñaCalificacionService,
    private router: Router, private route: ActivatedRoute, private compradorService: CompradorService, private tiendaService: TiendaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.compradorService.listar().subscribe( data=>{this.listaCliente = data});
    this.tiendaService.listar().subscribe(data => {this.listaTienda = data});
  }

  aceptar(): void {
    if (this.reseniacalifi.qEstrellas>0 && this.reseniacalifi.Resenia.length > 0 && this.idClienteSeleccionado>0 && this.idTiendaSeleccionada>0 ) {
      let p = new Comprador();
      p.id = this.idClienteSeleccionado;
      this.reseniacalifi.Cliente_id = p;

      let a = new Tienda();
      a.id = this.idTiendaSeleccionada;
      this.reseniacalifi.Tienda_id = a;

      if (this.edicion) {
        this.reseniacalificacionservice.modificar(this.reseniacalifi).subscribe(data => {
          this.reseniacalificacionservice.listar().subscribe(data => {
            this.reseniacalificacionservice.setLista(data);
          })
        })
      } else {

        this.reseniacalificacionservice.insertar(this.reseniacalifi).subscribe(data => {
          this.reseniacalificacionservice.listar().subscribe(data => {
            this.reseniacalificacionservice.setLista(data);
          })
        })
      }
      this.router.navigate(['reseniacalificacion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.reseniacalificacionservice.listarId(this.id).subscribe(data => {
        this.reseniacalifi = data;
        this.idClienteSeleccionado = data.Cliente_id.id;
        this.idTiendaSeleccionada = data.Tienda_id.id;

      })
    }

  }

}
