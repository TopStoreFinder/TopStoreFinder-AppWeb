import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { reseCalificacion } from 'src/app/model/reseñaCalificacion';
import { ReseñaCalificacionService } from 'src/app/service/reseña-calificacion.service';
import { MatDialog } from '@angular/material/dialog';
import { ReseniacalificacionDialogoComponent } from './reseniacalificacion-dialogo/reseniacalificacion-dialogo.component';
@Component({
  selector: 'app-reseniacalificacion-listar',
  templateUrl: './reseniacalificacion-listar.component.html',
  styleUrls: ['./reseniacalificacion-listar.component.css']
})
export class ReseniacalificacionListarComponent implements OnInit {
  dataSource: MatTableDataSource<reseCalificacion> = new MatTableDataSource();
  private idMayor: number = 0;
  displayedColumns: string[] = ['id', 'cantestrellas', 'resenia', 'clienteid', 'tiendaid','acciones','accion2'];
  constructor(private rcs: ReseñaCalificacionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.rcs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
    this.rcs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.rcs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ReseniacalificacionDialogoComponent);
  }


  eliminar(id: number) {
    this.rcs.eliminar(id).subscribe(() => {
      this.rcs.listar().subscribe(data => {
        this.rcs.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }


}
