import { Component, OnInit } from '@angular/core';
import { CompradorService } from './../../../service/comprador.service';
import { Comprador } from './../../../model/comprador';
 
@Component({
  selector: 'app-comprador-buscar',
  templateUrl: './comprador-buscar.component.html',
  styleUrls: ['./comprador-buscar.component.css']
})
export class CompradorBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private compradorservice: CompradorService) { }
  ngOnInit(): void {}
  buscar(e: any) {
    let array: Comprador[] = [];
    this.compradorservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.compradorservice.setLista(array);
    })
  }
}
