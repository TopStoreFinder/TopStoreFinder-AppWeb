import { Producto } from './../../../model/producto';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { ProductoService } from 'src/app/service/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductoDialogoComponent } from './producto-dialogo/producto-dialogo.component';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  datasource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombreProducto','productoDescripcion','precioUnidad','categoriaProdcuto','Stock', 'acciones','accion2'];
  private idMayor: number = 0;
  constructor(private p: ProductoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.p.listar().subscribe(data => {
      this.datasource = new MatTableDataSource(data)
    })
    this.p.getLista().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    });
    this.p.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ProductoDialogoComponent);
  }


  eliminar(id: number) {
    this.p.eliminar(id).subscribe(() => {
      this.p.listar().subscribe(data => {
        this.p.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.datasource.filter = e.target.value.trim();
  }
}
