import { UbicacionDialogoComponent } from './ubicacion-dialogo/ubicacion-dialogo.component';
import { UbicacionService } from './../../../service/ubicacion.service';
import { Ubicacion } from './../../../model/ubicacion';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ubicacion-listar',
  templateUrl: './ubicacion-listar.component.html',
  styleUrls: ['./ubicacion-listar.component.css']
})
export class UbicacionListarComponent implements OnInit {
  datasource: MatTableDataSource<Ubicacion> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'latitud','longitud','acciones','accion2'];
  private idMayor: number = 0;

  constructor(private b: UbicacionService, private dialog: MatDialog){}

  ngOnInit(): void {

    this.b.listar().subscribe(Deta => {
      this.datasource = new MatTableDataSource(Deta)
    });
    this.b.getLista().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    });
    this.b.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(UbicacionDialogoComponent);
  }

  eliminar(id: number) {
    this.b.eliminar(id).subscribe(() => {
      this.b.listar().subscribe(data => {
        this.b.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }

}