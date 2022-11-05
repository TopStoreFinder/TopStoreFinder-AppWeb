import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/model/tienda';
import { TiendaService } from 'src/app/service/tienda.service';

@Component({
  selector: 'app-tienda-buscar',
  templateUrl: './tienda-buscar.component.html',
  styleUrls: ['./tienda-buscar.component.css']
})
export class TiendaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private TiendaService: TiendaService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    this.TiendaService.buscar(e.target.value).subscribe(data=>{
      this.TiendaService.setLista(data);
    });
  }

}
