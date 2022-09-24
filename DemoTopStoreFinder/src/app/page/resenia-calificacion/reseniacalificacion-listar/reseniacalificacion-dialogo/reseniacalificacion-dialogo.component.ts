import { Component, OnInit } from '@angular/core';
import { ReseñaCalificacionService } from 'src/app/service/reseña-calificacion.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-reseniacalificacion-dialogo',
  templateUrl: './reseniacalificacion-dialogo.component.html',
  styleUrls: ['./reseniacalificacion-dialogo.component.css']
})
export class ReseniacalificacionDialogoComponent implements OnInit {

  constructor(private reseniacalificaionservice: ReseñaCalificacionService,
    private dialogRef: MatDialogRef<ReseniacalificacionDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.reseniacalificaionservice.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
