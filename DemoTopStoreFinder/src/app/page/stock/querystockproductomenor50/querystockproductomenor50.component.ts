import { StockService } from 'src/app/service/stock.service';
import { ResultadoCantidadStockPorProducto } from './../../../model/ResultadoCantidadStockPorProducto';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-querystockproductomenor50',
  templateUrl: './querystockproductomenor50.component.html',
  styleUrls: ['./querystockproductomenor50.component.css']
})
export class Querystockproductomenor50Component implements OnInit {
  dataSource: MatTableDataSource<ResultadoCantidadStockPorProducto> = new MatTableDataSource();
  displayedColumns: string[] = ['Nombre', 'Cantidad'];
  constructor(private tp:StockService) { }

  ngOnInit(): void {
    this.tp.BuscarStockPorProductoMenor50().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
