import { CompradorUbicacionService } from './../../../service/comprador-ubicacion.service';
import { CompradorUbicacion } from './../../../model/compradorUbicacion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-compradorubicacion-creaedita',
  templateUrl: './compradorubicacion-creaedita.component.html',
  styleUrls: ['./compradorubicacion-creaedita.component.css']
})
export class CompradorubicacionCreaeditaComponent implements OnInit {
  compradorubicacion: CompradorUbicacion = new CompradorUbicacion();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private compradorubicacionservice: CompradorUbicacionService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.compradorubicacion.ubicacionid > 0 ) {
      if (this.edicion) {
        this.compradorubicacionservice.modificar(this.compradorubicacion).subscribe(data => {
          this.compradorubicacionservice.listar().subscribe(data => {
            this.compradorubicacionservice.setLista(data);
          })
        })
      } else {

        this.compradorubicacionservice.insertar(this.compradorubicacion).subscribe(data => {
          this.compradorubicacionservice.listar().subscribe(data => {
            this.compradorubicacionservice.setLista(data);
          })
        })
      }
      this.router.navigate(['compradorubicacion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.compradorubicacionservice.listarId(this.id).subscribe(data => {
        this.compradorubicacion = data;
      })
    }

  }

}
