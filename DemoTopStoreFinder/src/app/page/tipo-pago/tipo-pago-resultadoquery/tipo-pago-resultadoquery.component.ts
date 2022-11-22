import { TipoPagoService } from 'src/app/service/tipo-pago.service';
import { ResultadoTIendasPorTipoPago } from './../../../model/resultadoTIendasPorTipoPago';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-pago-resultadoquery',
  templateUrl: './tipo-pago-resultadoquery.component.html',
  styleUrls: ['./tipo-pago-resultadoquery.component.css']
})
export class TipoPagoResultadoqueryComponent implements OnInit {
  dataSource: MatTableDataSource<ResultadoTIendasPorTipoPago> = new MatTableDataSource();
  displayedColumns: string[] = ['tipopago', 'cantidad'];
  constructor(private tp:TipoPagoService) { }

  ngOnInit(): void {
    this.tp.BuscarTipopagoPorTienda().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
