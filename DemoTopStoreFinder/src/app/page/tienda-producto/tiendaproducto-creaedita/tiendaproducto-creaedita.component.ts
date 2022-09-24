import { TiendaProductoService } from 'src/app/service/tienda-producto.service';
import { TiendaProducto } from 'src/app/model/tiendaProducto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tiendaproducto-creaedita',
  templateUrl: './tiendaproducto-creaedita.component.html',
  styleUrls: ['./tiendaproducto-creaedita.component.css']
})
export class tiendaproductoCreaeditaComponent implements OnInit {
  tiendaproducto: TiendaProducto = new TiendaProducto();
  mensaje: string = "";
  edicion: boolean = false;
  producto_id: number = 0;
  constructor(private TiendaProductoService: TiendaProductoService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.producto_id = data['producto_id'];
      this.edicion = data['producto_id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.tiendaproducto.tienda_id > 0 ) {
      if (this.edicion) {
        this.TiendaProductoService.modificar(this.tiendaproducto).subscribe(data => {
          this.TiendaProductoService.listar().subscribe(data => {
            this.TiendaProductoService.setLista(data);
          })
        })
      } else {

        this.TiendaProductoService.insertar(this.tiendaproducto).subscribe(data => {
          this.TiendaProductoService.listar().subscribe(data => {
            this.TiendaProductoService.setLista(data);
          })
        })
      }
      this.router.navigate(['tiendaproducto']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.TiendaProductoService.listarId(this.producto_id).subscribe(data => {
        this.tiendaproducto = data;
      })
    }

  }

}
