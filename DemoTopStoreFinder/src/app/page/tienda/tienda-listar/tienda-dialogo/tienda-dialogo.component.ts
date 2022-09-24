import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/service/tienda.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-tienda-dialogo',
  templateUrl: './tienda-dialogo.component.html',
  styleUrls: ['./tienda-dialogo.component.css']
})
export class TiendaDialogoComponent implements OnInit {

  constructor(private TiendaService: TiendaService,
    private dialogRef: MatDialogRef<TiendaDialogoComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.TiendaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
