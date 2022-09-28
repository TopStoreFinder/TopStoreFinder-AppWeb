import { CompradorubicacionDialogoComponent } from './compradorubicacion-dialogo/compradorubicacion-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { CompradorUbicacion } from './../../../model/compradorUbicacion';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { CompradorUbicacionService } from 'src/app/service/comprador-ubicacion.service';

@Component({
  selector: 'app-compradorubicacion-listar',
  templateUrl: './compradorubicacion-listar.component.html',
  styleUrls: ['./compradorubicacion-listar.component.css']
})
export class CompradorubicacionListarComponent implements OnInit {
  datasource: MatTableDataSource<CompradorUbicacion> = new MatTableDataSource();
  displayedColumns: string[] = ['clienteid', 'ubicacionid','acciones','accion2'];
  private idMayor: number = 0;

  constructor(private p: CompradorUbicacionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.p.listar().subscribe(a => {
      this.datasource = new MatTableDataSource(a)
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
    this.dialog.open(CompradorubicacionDialogoComponent);
  }

  eliminar(id: number) {
    this.p.eliminar(id).subscribe(() => {
      this.p.listar().subscribe(data => {
        this.p.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }

}
