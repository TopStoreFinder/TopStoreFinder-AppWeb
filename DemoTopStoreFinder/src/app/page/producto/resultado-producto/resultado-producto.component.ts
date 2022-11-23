import { ProductoService } from 'src/app/service/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultadoCantidadProductosporcadaTienda } from './../../../model/ResultadoCantidadProductosporcadaTienda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-producto',
  templateUrl: './resultado-producto.component.html',
  styleUrls: ['./resultado-producto.component.css']
})
export class ResultadoProductoComponent implements OnInit {
  dataSource: MatTableDataSource<ResultadoCantidadProductosporcadaTienda> = new MatTableDataSource();
  displayedColumns: string[] = ['categorianombre', 'cantidad'];
  constructor(private tp:ProductoService) { }

  ngOnInit(): void {
    this.tp.BuscarCantidadProductosPorTienda().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
