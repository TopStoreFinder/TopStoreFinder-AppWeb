import { MatDialogRef } from '@angular/material/dialog';
import { CompradorUbicacionService } from 'src/app/service/comprador-ubicacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compradorubicacion-dialogo',
  templateUrl: './compradorubicacion-dialogo.component.html',
  styleUrls: ['./compradorubicacion-dialogo.component.css']
})
export class CompradorubicacionDialogoComponent implements OnInit {

  constructor(private compradorubicacionservice: CompradorUbicacionService,
    private dialogRef: MatDialogRef<CompradorubicacionDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.compradorubicacionservice.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
