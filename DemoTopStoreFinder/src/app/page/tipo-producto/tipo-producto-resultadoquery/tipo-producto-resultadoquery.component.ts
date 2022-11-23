import { TipoProductoService } from 'src/app/service/tipo-producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { ResultadoCantidadProductosTipo } from 'src/app/model/ResultadoCantidadProductosTipo';

@Component({
  selector: 'app-tipo-producto-resultadoquery',
  templateUrl: './tipo-producto-resultadoquery.component.html',
  styleUrls: ['./tipo-producto-resultadoquery.component.css']
})
export class TipoProductoResultadoqueryComponent implements OnInit {
dataSource: MatTableDataSource<ResultadoCantidadProductosTipo>= new MatTableDataSource();
displayedColumns: string[]=['categoria_nombre','cantidad']; 
constructor(private tp:TipoProductoService) { }

  ngOnInit(): void {
    this.tp.BuscarCantidadProductosTipo().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
