import { Producto } from './../../../model/producto';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  constructor(private productoservice: ProductoService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.producto.nombreProducto.length > 0 && this.producto.productoDescripcion.length > 0 && this.producto.cantidad > 0 && this.producto.precioUnidad > 0 && this.producto.categoriaProdcuto > 0) {
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
      })
    }

  }

}
