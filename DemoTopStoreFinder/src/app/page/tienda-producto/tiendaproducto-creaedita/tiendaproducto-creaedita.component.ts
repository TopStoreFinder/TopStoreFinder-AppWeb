import { TiendaProductoService } from 'src/app/service/tienda-producto.service';
import { TiendaProducto } from 'src/app/model/tiendaProducto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tienda } from 'src/app/model/tienda';
import { Producto } from 'src/app/model/producto';
import { TiendaService } from 'src/app/service/tienda.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-tiendaproducto-creaedita',
  templateUrl: './tiendaproducto-creaedita.component.html',
  styleUrls: ['./tiendaproducto-creaedita.component.css']
})
export class tiendaproductoCreaeditaComponent implements OnInit {
  tiendaproducto: TiendaProducto = new TiendaProducto();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  idTiendaSeleccionado:number =0;
  idProductoSeleccionado:number =0;

  listaTienda: Tienda[]=[];
  listaProducto: Producto[]=[];
  constructor(private TiendaProductoService: TiendaProductoService,
    private router: Router, private route: ActivatedRoute, private tiendaService:TiendaService,private productoService:ProductoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.tiendaService.listar().subscribe(data =>{this.listaTienda = data});
    this.productoService.listar().subscribe(data =>{this.listaProducto = data});
  }
  aceptar(): void {
    if (this.tiendaproducto.tienda_id.id > 0  && this.tiendaproducto.productoid.id > 0) {
      let t = new Tienda();
      t.id = this.idTiendaSeleccionado;
      this.tiendaproducto.tienda_id = t;

      let p = new Producto();
      p.id = this.idProductoSeleccionado;
      this.tiendaproducto.productoid = p;


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
      this.TiendaProductoService.listarId(this.id).subscribe(data => {
        this.tiendaproducto = data;
        this.idTiendaSeleccionado = data.tienda_id.id;
        this.idProductoSeleccionado = data.productoid.id;
      })
    }

  }

}
