import { Component, OnInit } from '@angular/core';
import { CompradorService } from 'src/app/service/comprador.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comprador-dialogo',
  templateUrl: './comprador-dialogo.component.html',
  styleUrls: ['./comprador-dialogo.component.css']
})
export class CompradorDialogoComponent implements OnInit {

  constructor(private compradorService: CompradorService,
    private dialogRef: MatDialogRef<CompradorDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.compradorService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}