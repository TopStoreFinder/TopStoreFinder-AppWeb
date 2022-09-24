import { TipoPagoService } from './../../../../service/tipo-pago.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipopago-dialogo',
  templateUrl: './tipopago-dialogo.component.html',
  styleUrls: ['./tipopago-dialogo.component.css']
})
export class TipopagoDialogoComponent implements OnInit {

  constructor(private tipopagoservice: TipoPagoService,
    private dialogRef: MatDialogRef<TipopagoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.tipopagoservice.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
