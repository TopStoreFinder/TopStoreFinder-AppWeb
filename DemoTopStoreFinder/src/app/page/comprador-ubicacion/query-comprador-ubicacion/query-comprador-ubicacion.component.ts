import { CompradorUbicacionService } from 'src/app/service/comprador-ubicacion.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultadoCantidadPorUbicaion } from './../../../model/resultadoquerycompradorubicacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-comprador-ubicacion',
  templateUrl: './query-comprador-ubicacion.component.html',
  styleUrls: ['./query-comprador-ubicacion.component.css']
})
export class QueryCompradorUbicacionComponent implements OnInit {
  dataSource: MatTableDataSource<ResultadoCantidadPorUbicaion> = new MatTableDataSource();
  displayedColumns: string[] = ['latitud', 'longitud','cantidad'];
  constructor(private cu :CompradorUbicacionService) { }

  ngOnInit(): void {
    this.cu.BuscarCantidadporUbicaion().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
