import { TipoProductoDialogoComponent } from './../tipo-producto-dialogo/tipo-producto-dialogo.component';
import { TipoProductoService } from './../../../service/tipo-producto.service';
import { Component, OnInit } from '@angular/core';
import { TipoProducto } from 'src/app/model/TipoProducto';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-producto-listar',
  templateUrl: './tipo-producto-listar.component.html',
  styleUrls: ['./tipo-producto-listar.component.css']
})
export class TipoProductoListarComponent implements OnInit {
  datasource: MatTableDataSource<TipoProducto> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'categoriaNombre','acciones','acciones2'];
  private idMayor: number = 0;
  constructor(private tp: TipoProductoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tp.listar().subscribe(Deta => {
      this.datasource = new MatTableDataSource(Deta)
    });
    this.tp.getLista().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    });
    this.tp.getConfirmaEliminacion().subscribe(el => {
      el == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(TipoProductoDialogoComponent);
  }


  eliminar(id: number) {
    this.tp.eliminar(id).subscribe(() => {
      this.tp.listar().subscribe(data => {
        this.tp.setLista(data);
      });
    });

  }

}
