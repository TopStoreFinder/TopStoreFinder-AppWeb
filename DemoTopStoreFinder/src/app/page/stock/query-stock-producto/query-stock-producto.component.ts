import { StockService } from 'src/app/service/stock.service';
import { ResultadoCantidadStockPorProducto } from './../../../model/ResultadoCantidadStockPorProducto';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-stock-producto',
  templateUrl: './query-stock-producto.component.html',
  styleUrls: ['./query-stock-producto.component.css']
})
export class QueryStockProductoComponent implements OnInit {
  dataSource: MatTableDataSource<ResultadoCantidadStockPorProducto> = new MatTableDataSource();
  displayedColumns: string[] = ['Nombre', 'Cantidad'];
  constructor(private tp:StockService) { }

  ngOnInit(): void {
    this.tp.BuscarStockPorProducto().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
