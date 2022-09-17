import { Component, OnInit } from '@angular/core';
import { TipoProdcutoService } from 'src/app/service/tipo-producto.service';
import { TipoProducto } from 'src/app/model/TipoProducto';
import { MatTableDataSource } from '@angular/material/table'
@Component({
  selector: 'app-tipo-producto-listar',
  templateUrl: './tipo-producto-listar.component.html',
  styleUrls: ['./tipo-producto-listar.component.css']
})
export class TipoProductoListarComponent implements OnInit {
  datasource: MatTableDataSource<TipoProducto> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'categoriaNombre'];
  constructor(private tp: TipoProdcutoService) { }

  ngOnInit(): void {
    this.tp.listar().subscribe(Deta => {
      this.datasource = new MatTableDataSource(Deta)
    });
  }

}
