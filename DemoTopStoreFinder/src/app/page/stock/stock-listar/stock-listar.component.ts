import { StockDialogoComponent } from './../stock-dialogo/stock-dialogo.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from 'src/app/model/Stock';
import { StockService } from 'src/app/service/stock.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-stock-listar',
  templateUrl: './stock-listar.component.html',
  styleUrls: ['./stock-listar.component.css']
})
export class StockListarComponent implements OnInit {
  datasource: MatTableDataSource<Stock> = new MatTableDataSource();
  private idMayor: number = 0;
  displayedColumns: string[] = ['id', 'enStock','fecha','acciones','acciones2'];
  constructor(private s: StockService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.s.listar().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    })
    this.s.getLista().subscribe(a => {
      this.datasource = new MatTableDataSource(a);
    });
    this.s.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(StockDialogoComponent);
  }
  eliminar(id: number) {
    this.s.eliminar(id).subscribe(() => {
      this.s.listar().subscribe(data => {
        this.s.setLista(data);
      });
    });

  }
}
