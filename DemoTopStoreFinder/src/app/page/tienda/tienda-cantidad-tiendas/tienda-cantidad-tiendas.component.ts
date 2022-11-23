import { TiendaService } from 'src/app/service/tienda.service';
import { ResultadoCantidadTiendasPorCadaDuenho } from './../../../model/resultadoCantidadTiendasPorCadaDuenho';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda-cantidad-tiendas',
  templateUrl: './tienda-cantidad-tiendas.component.html',
  styleUrls: ['./tienda-cantidad-tiendas.component.css']
})
export class TiendaCantidadTiendasComponent implements OnInit {

  dataSource: MatTableDataSource<ResultadoCantidadTiendasPorCadaDuenho> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre','edad', 'cantidad'];
  constructor(private ts:TiendaService) { }

  ngOnInit(): void {
    this.ts.BuscarCantidadTiendasPorCadaDuenho().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
