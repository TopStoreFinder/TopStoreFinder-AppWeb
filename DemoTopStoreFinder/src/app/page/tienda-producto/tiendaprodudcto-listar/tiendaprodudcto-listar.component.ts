import { TiendaProductoService } from './../../../service/tienda-producto.service';
import { TiendaProducto } from './../../../model/tiendaProducto';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiendaprodudcto-listar',
  templateUrl: './tiendaprodudcto-listar.component.html',
  styleUrls: ['./tiendaprodudcto-listar.component.css']
})
export class TiendaprodudctoListarComponent implements OnInit {
  datasource: MatTableDataSource<TiendaProducto> = new MatTableDataSource();
  displayedColumns: string[] = ['producto_id', 'tienda_id','acciones'];
  constructor(private tps: TiendaProductoService) { }

  ngOnInit(): void {
    this.tps.listar().subscribe(d => {
      this.datasource = new MatTableDataSource(d);
    })
    this.tps.getLista().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    });
  }

}
