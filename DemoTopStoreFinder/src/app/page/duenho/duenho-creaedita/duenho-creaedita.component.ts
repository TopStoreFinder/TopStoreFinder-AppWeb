import { Duenho } from './../../../model/duenho';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {DuenhoService} from 'src/app/service/duenho.service';


@Component({
  selector: 'app-duenho-creaedita',
  templateUrl: './duenho-creaedita.component.html',
  styleUrls: ['./duenho-creaedita.component.css']
})
export class DuenhoCreaeditaComponent implements OnInit {
  duenho: Duenho = new Duenho();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private duenhoservice: DuenhoService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.duenho.nombre.length > 0 && this.duenho.edad > 0 && this.duenho.direccion.length > 0) {
      if (this.edicion) {
        this.duenhoservice.modificar(this.duenho).subscribe(data => {
          this.duenhoservice.listar().subscribe(data => {
            this.duenhoservice.setLista(data);
          })
        })
      } else {

        this.duenhoservice.insertar(this.duenho).subscribe(data => {
          this.duenhoservice.listar().subscribe(data => {
            this.duenhoservice.setLista(data);
          })
        })
      }
      this.router.navigate(['duenho']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.duenhoservice.listarId(this.id).subscribe(data => {
        this.duenho = data;
      })
    }

  }


}
