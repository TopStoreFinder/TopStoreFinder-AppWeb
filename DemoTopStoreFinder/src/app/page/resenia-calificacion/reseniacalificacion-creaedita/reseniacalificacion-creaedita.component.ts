import { ReseñaCalificacionService } from 'src/app/service/reseña-calificacion.service';
import { Component, OnInit } from '@angular/core';
import { reseCalificacion } from 'src/app/model/reseñaCalificacion';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reseniacalificacion-creaedita',
  templateUrl: './reseniacalificacion-creaedita.component.html',
  styleUrls: ['./reseniacalificacion-creaedita.component.css']
})
export class ReseniacalificacionCreaeditaComponent implements OnInit {
  reseniacalifi: reseCalificacion = new reseCalificacion();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private reseniacalificacionservice: ReseñaCalificacionService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.reseniacalifi.Resenia.length > 0 && this.reseniacalifi.Cliente_id > 0&& this.reseniacalifi.Tienda_id > 0&& this.reseniacalifi.qEstrellas > 0) {
      if (this.edicion) {
        this.reseniacalificacionservice.modificar(this.reseniacalifi).subscribe(data => {
          this.reseniacalificacionservice.listar().subscribe(data => {
            this.reseniacalificacionservice.setLista(data);
          })
        })
      } else {

        this.reseniacalificacionservice.insertar(this.reseniacalifi).subscribe(data => {
          this.reseniacalificacionservice.listar().subscribe(data => {
            this.reseniacalificacionservice.setLista(data);
          })
        })
      }
      this.router.navigate(['reseniacalificacion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.reseniacalificacionservice.listarId(this.id).subscribe(data => {
        this.reseniacalifi = data;
      })
    }

  }

}
