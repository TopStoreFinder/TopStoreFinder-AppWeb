import { UbicacionService } from './../../../../service/ubicacion.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ubicacion-dialogo',
  templateUrl: './ubicacion-dialogo.component.html',
  styleUrls: ['./ubicacion-dialogo.component.css']
})
export class UbicacionDialogoComponent implements OnInit {

  constructor(private ubicacionservice: UbicacionService,
    private dialogRef: MatDialogRef<UbicacionDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.ubicacionservice.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
