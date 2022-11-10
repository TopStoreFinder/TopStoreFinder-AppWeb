import { Producto } from './../../../model/producto';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Stock } from 'src/app/model/Stock';
import { StockService } from 'src/app/service/stock.service';
import { TipoProducto } from 'src/app/model/TipoProducto';
import { TipoProductoService } from 'src/app/service/tipo-producto.service';

@Component({
  selector: 'app-producto-creaedita',
  templateUrl: './producto-creaedita.component.html',
  styleUrls: ['./producto-creaedita.component.css']
})
export class ProductoCreaeditaComponent implements OnInit {
  producto: Producto = new Producto();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  idTipoProductoSeleccionado:number =0;
  idStockSeleccionado:number =0;

  listaTipoProducto: TipoProducto[]=[];
  listaStock: Stock[]=[];
  constructor(private productoservice: ProductoService,
    private router: Router, private route: ActivatedRoute, private tipoProductoService: TipoProductoService, private stockService:StockService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.tipoProductoService.listar().subscribe(data =>{this.listaTipoProducto = data});
    this.stockService.listar().subscribe(data =>{this.listaStock = data});
  }
  aceptar(): void {
    if (this.producto.nombreProducto.length > 0 && this.producto.productoDescripcion.length > 0 && this.producto.cantidad > 0 && this.producto.precioUnidad > 0 && this.producto.categoriaProdcuto.id > 0 &&  this.producto.id_Stock.id > 0) {
      let c = new TipoProducto();
      c.id = this.idTipoProductoSeleccionado;
      this.producto.categoriaProdcuto = c;

      let s = new Stock();
      s.id = this.idStockSeleccionado;
      this.producto.id_Stock = s;

      if (this.edicion) {
        this.productoservice.modificar(this.producto).subscribe(data => {
          this.productoservice.listar().subscribe(data => {
            this.productoservice.setLista(data);
          })
        })
      } else {

        this.productoservice.insertar(this.producto).subscribe(data => {
          this.productoservice.listar().subscribe(data => {
            this.productoservice.setLista(data);
          })
        })
      }
      this.router.navigate(['producto']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.productoservice.listarId(this.id).subscribe(data => {
        this.producto = data;
        this.idTipoProductoSeleccionado = data.categoriaProdcuto.id;
        this.idStockSeleccionado = data.id_Stock.id;
      })
    }

  }

}
