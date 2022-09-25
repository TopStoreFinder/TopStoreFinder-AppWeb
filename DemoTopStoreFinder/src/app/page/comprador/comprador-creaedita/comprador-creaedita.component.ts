import { Component, OnInit } from '@angular/core';
import {CompradorService} from 'src/app/service/comprador.service';
import { Comprador } from 'src/app/model/comprador';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-comprador-creaedita',
  templateUrl: './comprador-creaedita.component.html',
  styleUrls: ['./comprador-creaedita.component.css']
})
export class CompradorCreaeditaComponent implements OnInit {
  comprador: Comprador = new Comprador();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private compradorservice: CompradorService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.comprador.nombre.length > 0 && this.comprador.apellido.length > 0 && this.comprador.ciudad_id > 0) {
      if (this.edicion) {
        this.compradorservice.modificar(this.comprador).subscribe(data => {
          this.compradorservice.listar().subscribe(data => {
            this.compradorservice.setLista(data);
          })
        })
      } else {

        this.compradorservice.insertar(this.comprador).subscribe(data => {
          this.compradorservice.listar().subscribe(data => {
            this.compradorservice.setLista(data);
          })
        })
      }
      this.router.navigate(['comprador']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.compradorservice.listarId(this.id).subscribe(data => {
        this.comprador = data;
      })
    }

  }

}
