import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DuenhoService } from 'src/app/service/duenho.service';

@Component({
  selector: 'app-duenho-dialogo',
  templateUrl: './duenho-dialogo.component.html',
  styleUrls: ['./duenho-dialogo.component.css']
})
export class DuenhoDialogoComponent implements OnInit {

  constructor(private duenhoService: DuenhoService,
    private dialogRef: MatDialogRef<DuenhoDialogoComponent>) { }

  ngOnInit(): void {  }
    confirmar(estado: boolean) {
      this.duenhoService.setConfirmaEliminacion(estado);
      this.dialogRef.close();
  }

}
