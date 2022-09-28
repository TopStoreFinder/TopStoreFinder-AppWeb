import { MatDialogRef } from '@angular/material/dialog';
import { TipoProductoService } from './../../../service/tipo-producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-producto-dialogo',
  templateUrl: './tipo-producto-dialogo.component.html',
  styleUrls: ['./tipo-producto-dialogo.component.css']
})
export class TipoProductoDialogoComponent implements OnInit {

  constructor(private TipoProductoService: TipoProductoService,
    private dialogRef: MatDialogRef<TipoProductoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean){
    this.TipoProductoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
