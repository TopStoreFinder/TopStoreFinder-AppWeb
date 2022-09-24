import { Comprador } from './../../../model/comprador';
import { CompradorService } from './../../../service/comprador.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-comprador-listar',
  templateUrl: './comprador-listar.component.html',
  styleUrls: ['./comprador-listar.component.css']
})
export class CompradorListarComponent implements OnInit {
  datasource: MatTableDataSource<Comprador> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre','apellido','ciudad_id','acciones'];
  constructor(private c: CompradorService) { }

  ngOnInit(): void {
    this.c.listar().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    })
    this.c.getLista().subscribe(a => {
      this.datasource = new MatTableDataSource(a);
    });
  }

}
