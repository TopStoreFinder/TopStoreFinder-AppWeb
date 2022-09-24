import { TiendaService } from 'src/app/service/tienda.service';
import { Tienda } from 'src/app/model/tienda';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  constructor(private TiendaService: TiendaService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.tienda.nombre.length > 0 && this.tienda.direccion.length > 0 && this.tienda.resenha.length > 0 && this.tienda.calificacion > 0 &&this.tienda.id_duenho > 0 &&this.tienda.id_tipo_pago > 0 ) {
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
      })
    }

  }

}
