import { TiendaProductoService } from 'src/app/service/tienda-producto.service';
import { ResultadoCantidadPrecioDeterminado } from './../../../model/ResultadoCantidadPrecioDeterminados';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-cantidad-predcio-determinad',
  templateUrl: './query-cantidad-predcio-determinad.component.html',
  styleUrls: ['./query-cantidad-predcio-determinad.component.css']
})
export class QueryCantidadPredcioDeterminadComponent implements OnInit {
  dataSource: MatTableDataSource<ResultadoCantidadPrecioDeterminado> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre_producto', 'precio_unidad','cantidad'];
  constructor(private tp:TiendaProductoService) { }

  ngOnInit(): void {
    this.tp.BuscarCantidadTiendasPorCadaDuenho().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
