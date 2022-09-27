import { Component, OnInit } from '@angular/core';
import { TiendaProducto } from 'src/app/model/tiendaProducto';
import { TiendaProductoService } from 'src/app/service/tienda-producto.service';

@Component({
  selector: 'app-tiendaproducto-buscar',
  templateUrl: './tiendaproducto-buscar.component.html',
  styleUrls: ['./tiendaproducto-buscar.component.css']
})
export class TiendaproductoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private TiendaProductoService: TiendaProductoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: TiendaProducto[] = [];
    this.TiendaProductoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.tienda_id.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.TiendaProductoService.setLista(array);
    })
  }

}
