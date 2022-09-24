import { Producto } from './../../../model/producto';
import { ProductoService } from './../../../service/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-buscar',
  templateUrl: './producto-buscar.component.html',
  styleUrls: ['./producto-buscar.component.css']
})
export class ProductoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private productoservice: ProductoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Producto[] = [];
    this.productoservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreProducto.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.productoservice.setLista(array);
    })
  }
}
