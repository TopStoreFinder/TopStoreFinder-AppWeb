import { CompradorUbicacion } from './../../../model/compradorUbicacion';
import { CompradorUbicacionService } from 'src/app/service/comprador-ubicacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compradorubicacion-buscar',
  templateUrl: './compradorubicacion-buscar.component.html',
  styleUrls: ['./compradorubicacion-buscar.component.css']
})
export class CompradorubicacionBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private compradorubicacionservice: CompradorUbicacionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: CompradorUbicacion[] = [];
    this.compradorubicacionservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.id.toString().includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.compradorubicacionservice.setLista(array);
    })
  }

}
