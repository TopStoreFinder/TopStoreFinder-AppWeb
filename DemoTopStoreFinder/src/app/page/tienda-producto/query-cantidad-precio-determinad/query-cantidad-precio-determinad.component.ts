import { TiendaProductoService } from './../../../service/tienda-producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultadoCantidadPrecioDeterminado } from './../../../model/ResultadoCantidadPrecioDeterminados';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-cantidad-precio-determinad',
  templateUrl: './query-cantidad-precio-determinad.component.html',
  styleUrls: ['./query-cantidad-precio-determinad.component.css']
})
export class QueryCantidadPrecioDeterminadComponent implements OnInit {
  dataSource: MatTableDataSource<ResultadoCantidadPrecioDeterminado> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre_producto', 'precio_unidad','cantidad'];
  constructor(private tp:TiendaProductoService) { }

  ngOnInit(): void {
    this.tp.BuscarCantidadTiendasPorCadaDuenho().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
