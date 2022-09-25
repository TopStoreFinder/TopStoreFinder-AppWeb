import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Duenho } from 'src/app/model/duenho';
import { DuenhoService } from 'src/app/service/duenho.service';
import { MatDialog } from '@angular/material/dialog';
import { DuenhoDialogoComponent } from '../duenho-dialogo/duenho-dialogo.component';


@Component({
  selector: 'app-duenho-listar',
  templateUrl: './duenho-listar.component.html',
  styleUrls: ['./duenho-listar.component.css']
})
export class DuenhoListarComponent implements OnInit {
  datasource: MatTableDataSource<Duenho> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre','edad','direccion','acciones','accion2'];
  private idMayor: number = 0;
  constructor(private d: DuenhoService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.d.listar().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    })
    this.d.getLista().subscribe(a => {
      this.datasource = new MatTableDataSource(a);
    });
    this.d.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
    confirmar(id: number) {
      this.idMayor = id;  
      this.dialog.open(DuenhoDialogoComponent);
    }
    eliminar(id: number) {
      this.d.eliminar(id).subscribe(() => {
        this.d.listar().subscribe(data => {
          this.d.setLista(data);/* se ejecuta la línea 27*/
        });
      });
  }
}


