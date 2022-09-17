import { UbicacionService } from './../../../service/ubicacion.service';
import { Ubicacion } from './../../../model/ubicacion';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-ubicacion-listar',
  templateUrl: './ubicacion-listar.component.html',
  styleUrls: ['./ubicacion-listar.component.css']
})
export class UbicacionListarComponent implements OnInit {
  datasource: MatTableDataSource<Ubicacion> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'latitud','longitud'];
  constructor(private b: UbicacionService){}

  ngOnInit(): void {

    this.b.listar().subscribe(Deta => {
      this.datasource = new MatTableDataSource(Deta)
    });
  }

}