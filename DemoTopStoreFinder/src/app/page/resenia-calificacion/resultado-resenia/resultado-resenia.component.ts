import { ReseñaCalificacionService } from 'src/app/service/reseña-calificacion.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultadoCantidadReseniaporTienda } from './../../../model/ResultadoCantidadReseniaporTienda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-resenia',
  templateUrl: './resultado-resenia.component.html',
  styleUrls: ['./resultado-resenia.component.css']
})
export class ResultadoReseniaComponent implements OnInit {
  dataSource: MatTableDataSource<ResultadoCantidadReseniaporTienda> = new MatTableDataSource();
  displayedColumns: string[] = ['tienda', 'cantidadresenia'];
  constructor(private tp:ReseñaCalificacionService) { }

  ngOnInit(): void {
    this.tp.BuscarCantidadReseniasPorTienda().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
