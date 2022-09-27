import { ReseñaCalificacionService } from 'src/app/service/reseña-calificacion.service';
import { Component, OnInit } from '@angular/core';
import { reseCalificacion } from 'src/app/model/reseñaCalificacion';

@Component({
  selector: 'app-reseniacalificacion-buscar',
  templateUrl: './reseniacalificacion-buscar.component.html',
  styleUrls: ['./reseniacalificacion-buscar.component.css']
})
export class ReseniacalificacionBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private reseniacalificacionservice: ReseñaCalificacionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: reseCalificacion[] = [];
    this.reseniacalificacionservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.Resenia.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.reseniacalificacionservice.setLista(array);
    })
  }
}
