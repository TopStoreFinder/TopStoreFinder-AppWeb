import { Comprador } from './../../../model/comprador';
import { CompradorService } from './../../../service/comprador.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CompradorDialogoComponent } from '../comprador-dialogo/comprador-dialogo.component';

@Component({
  selector: 'app-comprador-listar',
  templateUrl: './comprador-listar.component.html',
  styleUrls: ['./comprador-listar.component.css']
})
export class CompradorListarComponent implements OnInit {
  datasource: MatTableDataSource<Comprador> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre','apellido','ciudad_id','acciones','accion2'];
  private idMayor: number = 0;
  constructor(private c: CompradorService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.c.listar().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    })
    this.c.getLista().subscribe(a => {
      this.datasource = new MatTableDataSource(a);
    });
    this.c.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CompradorDialogoComponent);
  }
  eliminar(id: number) {
    this.c.eliminar(id).subscribe(() => {
      this.c.listar().subscribe(data => {
        this.c.setLista(data);/* se ejecuta la línea 27*/
      });
    });
  }
}
