import { Component, OnInit } from '@angular/core';
import { TiendaProductoService } from 'src/app/service/tienda-producto.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-tiendaproducto-dialogo',
  templateUrl: './tiendaproducto-dialogo.component.html',
  styleUrls: ['./tiendaproducto-dialogo.component.css']
})
export class TiendaproductoDialogoComponent implements OnInit {

  constructor(private TiendaProductoService: TiendaProductoService,
    private dialogRef: MatDialogRef<TiendaproductoDialogoComponent>
  ) { }

  ngOnInit(): void {}

    confirmar(estado: boolean) {
      this.TiendaProductoService.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
