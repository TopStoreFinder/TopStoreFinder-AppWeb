import { MatDialogRef } from '@angular/material/dialog';
import { StockService } from './../../../service/stock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-dialogo',
  templateUrl: './stock-dialogo.component.html',
  styleUrls: ['./stock-dialogo.component.css']
})
export class StockDialogoComponent implements OnInit {

  constructor(private StockService: StockService,
    private dialogRef: MatDialogRef<StockDialogoComponent>) { }

  ngOnInit(): void {
  }
confirmar(estado: boolean){
  this.StockService.setConfirmaEliminacion(estado);
  this.dialogRef.close();
}
}
