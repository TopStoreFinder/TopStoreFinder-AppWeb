import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from 'src/app/model/Stock';
import { StockService } from 'src/app/service/stock.service';
@Component({
  selector: 'app-stock-listar',
  templateUrl: './stock-listar.component.html',
  styleUrls: ['./stock-listar.component.css']
})
export class StockListarComponent implements OnInit {
  datasource: MatTableDataSource<Stock> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'enStock','LastUpdateTime','acciones'];
  constructor(private s: StockService) { }

  ngOnInit(): void {
    this.s.listar().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    })
    this.s.getLista().subscribe(a => {
      this.datasource = new MatTableDataSource(a);
    });
  }

}
