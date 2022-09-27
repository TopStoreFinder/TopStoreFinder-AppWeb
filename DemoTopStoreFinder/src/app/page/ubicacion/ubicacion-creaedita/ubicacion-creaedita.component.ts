import { Ubicacion } from './../../../model/ubicacion';
import { Component, OnInit } from '@angular/core';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ubicacion-creaedita',
  templateUrl: './ubicacion-creaedita.component.html',
  styleUrls: ['./ubicacion-creaedita.component.css']
})
export class UbicacionCreaeditaComponent implements OnInit {
  ubicacion: Ubicacion = new Ubicacion();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private ubicacionservice: UbicacionService,private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.ubicacion.longitud > 0 && this.ubicacion.latitud >0 ) {
      if (this.edicion) {
        this.ubicacionservice.modificar(this.ubicacion).subscribe(data => {
          this.ubicacionservice.listar().subscribe(data => {
            this.ubicacionservice.setLista(data);
          })
        })
      } else {

        this.ubicacionservice.insertar(this.ubicacion).subscribe(data => {
          this.ubicacionservice.listar().subscribe(data => {
            this.ubicacionservice.setLista(data);
          })
        })
      }
      this.router.navigate(['ubicacion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.ubicacionservice.listarId(this.id).subscribe(data => {
        this.ubicacion = data;
      })
    }

  }

}
