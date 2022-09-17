import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/Stock';
import { StockService } from 'src/app/service/stock.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-stokc-listar',
  templateUrl: './stokc-listar.component.html',
  styleUrls: ['./stokc-listar.component.css']
})
export class StokcListarComponent implements OnInit {
  dataSource: MatTableDataSource<Stock> = new MatTableDataSource();
  displayedColumns: string[] = ['Id', 'enStock', 'LastUpdateTime'];
  constructor(private s: StockService) { }

  ngOnInit(): void {
    this.s.listar().subscribe(a => { this.dataSource = new MatTableDataSource(a) });
  }

}
