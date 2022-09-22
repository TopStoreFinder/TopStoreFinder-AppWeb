import { TipoPagoService } from 'src/app/service/tipo-pago.service';
import { TipoPago } from 'src/app/model/tipoPago';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipopago-listar',
  templateUrl: './tipopago-listar.component.html',
  styleUrls: ['./tipopago-listar.component.css']
})
export class TipopagoListarComponent implements OnInit {
  datasource: MatTableDataSource<TipoPago> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'tipo'];

  constructor(private tps: TipoPagoService) { }

  ngOnInit(): void {
    this.tps.listar().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    })


  }

}
