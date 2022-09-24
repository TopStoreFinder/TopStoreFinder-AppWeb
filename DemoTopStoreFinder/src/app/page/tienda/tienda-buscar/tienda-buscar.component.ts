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
    let array: Tienda[] = [];
    this.TiendaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.TiendaService.setLista(array);
    })
  }

}
