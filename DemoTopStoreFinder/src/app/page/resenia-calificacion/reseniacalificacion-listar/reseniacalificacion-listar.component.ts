import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { reseCalificacion } from 'src/app/model/reseñaCalificacion';
import { ReseñaCalificacionService } from 'src/app/service/reseña-calificacion.service';

@Component({
  selector: 'app-reseniacalificacion-listar',
  templateUrl: './reseniacalificacion-listar.component.html',
  styleUrls: ['./reseniacalificacion-listar.component.css']
})
export class ReseniacalificacionListarComponent implements OnInit {
  dataSource: MatTableDataSource<reseCalificacion> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'qEstrellas', 'Resenia', 'Cliente_id', 'Tienda_id','acciones']
  constructor(private rcs: ReseñaCalificacionService) { }

  ngOnInit(): void {
    this.rcs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
    this.rcs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }


}
