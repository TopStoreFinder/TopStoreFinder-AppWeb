import { DuenhoService } from './../../../service/duenho.service';
import { Component, OnInit } from '@angular/core';
import { Duenho } from 'src/app/model/duenho';
 

@Component({
  selector: 'app-duenho-buscar',
  templateUrl: './duenho-buscar.component.html',
  styleUrls: ['./duenho-buscar.component.css']
})
export class DuenhoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private duenhoservice: DuenhoService) { }
  ngOnInit(): void {}
  buscar(e: any) {
    let array: Duenho[] = [];
    this.duenhoservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.duenhoservice.setLista(array);
    })
}
}
