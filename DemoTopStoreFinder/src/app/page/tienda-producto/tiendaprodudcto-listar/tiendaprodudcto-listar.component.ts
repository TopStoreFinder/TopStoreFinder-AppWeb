import { TiendaProductoService } from './../../../service/tienda-producto.service';
import { TiendaProducto } from './../../../model/tiendaProducto';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TiendaproductoDialogoComponent } from './tiendaproducto-dialogo/tiendaproducto-dialogo.component';

@Component({
  selector: 'app-tiendaprodudcto-listar',
  templateUrl: './tiendaprodudcto-listar.component.html',
  styleUrls: ['./tiendaprodudcto-listar.component.css']
})
export class TiendaprodudctoListarComponent implements OnInit {
  datasource: MatTableDataSource<TiendaProducto> = new MatTableDataSource();
  private idMayor: number = 0;
  displayedColumns: string[] = ['id', 'tiendaid', 'productoid', 'acciones','acciones2'];
  constructor(private tps: TiendaProductoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tps.listar().subscribe(d => {
      this.datasource = new MatTableDataSource(d);
    })
    this.tps.getLista().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    });
    this.tps.getConfirmaEliminacion().subscribe(el => {
      el == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(TiendaproductoDialogoComponent);
  }


  eliminar(id: number) {
    this.tps.eliminar(id).subscribe(() => {
      this.tps.listar().subscribe(data => {
        this.tps.setLista(data);
      });
    });

  }
  filtrar(e: any) {
    this.datasource.filter = e.target.value.trim();
  }

}
