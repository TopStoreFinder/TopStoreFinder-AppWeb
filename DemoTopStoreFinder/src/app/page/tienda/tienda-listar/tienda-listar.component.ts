import { TiendaService } from './../../../service/tienda.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tienda } from 'src/app/model/tienda';
import { MatDialog } from '@angular/material/dialog';
import {TiendaDialogoComponent} from './tienda-dialogo/tienda-dialogo.component'

@Component({
  selector: 'app-tienda-listar',
  templateUrl: './tienda-listar.component.html',
  styleUrls: ['./tienda-listar.component.css']
})
export class TiendaListarComponent implements OnInit {
  datasource: MatTableDataSource<Tienda> = new MatTableDataSource();
  private idMayor: number = 0;
  displayedColumns: string[] = ['id', 'nombre','direccion','id_duenho','id_tipo_pago', 'acciones', 'acciones2'];
  constructor(private tps: TiendaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tps.listar().subscribe(d => {
      this.datasource = new MatTableDataSource(d);
    })
    this.tps.getLista().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    });
    this.tps.getConfirmaEliminacion().subscribe(ds => {
      ds == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(TiendaDialogoComponent);
  }


  eliminar(id: number) {
    this.tps.eliminar(id).subscribe(() => {
      this.tps.listar().subscribe(data => {
        this.tps.setLista(data);
      });
    });

  }

  filtrar(e: any) {
    this.datasource.filter = e.target.value.trim();
  }

}
