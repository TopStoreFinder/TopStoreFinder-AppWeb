import { CompradorUbicacion } from './../../../model/compradorUbicacion';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { CompradorUbicacionService } from 'src/app/service/comprador-ubicacion.service';

@Component({
  selector: 'app-compradorubicacion-listar',
  templateUrl: './compradorubicacion-listar.component.html',
  styleUrls: ['./compradorubicacion-listar.component.css']
})
export class CompradorubicacionListarComponent implements OnInit {
  datasource: MatTableDataSource<CompradorUbicacion> = new MatTableDataSource();
  displayedColumns: string[] = ['clienteid', 'ubicacionid'];
  constructor(private p: CompradorUbicacionService) { }

  ngOnInit(): void {
    this.p.listar().subscribe(a => {
      this.datasource = new MatTableDataSource(a)
    })
  }

}
