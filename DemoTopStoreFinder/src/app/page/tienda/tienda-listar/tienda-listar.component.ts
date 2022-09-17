import { TiendaService } from './../../../service/tienda.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tienda } from 'src/app/model/tienda';

@Component({
  selector: 'app-tienda-listar',
  templateUrl: './tienda-listar.component.html',
  styleUrls: ['./tienda-listar.component.css']
})
export class TiendaListarComponent implements OnInit {
  datasource: MatTableDataSource<Tienda> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre','direccion','resenha','calificacion','id_duenho','id_tipo_pago'];
  constructor(private tps: TiendaService) { }

  ngOnInit(): void {
    this.tps.listar().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    })
  }

}
