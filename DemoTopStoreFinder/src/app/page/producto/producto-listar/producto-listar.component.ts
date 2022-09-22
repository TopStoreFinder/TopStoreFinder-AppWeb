import { Producto } from './../../../model/producto';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { ProductoService } from 'src/app/service/producto.service';
@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  datasource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombreProducto','productoDescripcion','cantidad','precioUnidad','categoriaProdcuto','acciones'];
  constructor(private p: ProductoService) { }

  ngOnInit(): void {
    this.p.listar().subscribe(a => {
      this.datasource = new MatTableDataSource(a)
    })
    this.p.getLista().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    });

  }
}
