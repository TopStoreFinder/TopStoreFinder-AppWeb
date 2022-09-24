import { TipopagoDialogoComponent } from './tipopago-dialogo/tipopago-dialogo.component';
import { TipoPagoService } from 'src/app/service/tipo-pago.service';
import { TipoPago } from 'src/app/model/tipoPago';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tipopago-listar',
  templateUrl: './tipopago-listar.component.html',
  styleUrls: ['./tipopago-listar.component.css']
})
export class TipopagoListarComponent implements OnInit {
  datasource: MatTableDataSource<TipoPago> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'tipo','acciones','accion2'];
  private idMayor: number = 0;

  constructor(private tps: TipoPagoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tps.listar().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    })
    this.tps.getLista().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    });
    this.tps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(TipopagoDialogoComponent);
  }


  eliminar(id: number) {
    this.tps.eliminar(id).subscribe(() => {
      this.tps.listar().subscribe(data => {
        this.tps.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }
}
