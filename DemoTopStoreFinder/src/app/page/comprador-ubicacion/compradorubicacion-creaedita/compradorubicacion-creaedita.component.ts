import { Ubicacion } from './../../../model/ubicacion';
import { UbicacionService } from './../../../service/ubicacion.service';
import { CompradorService } from './../../../service/comprador.service';
import { CompradorUbicacionService } from './../../../service/comprador-ubicacion.service';
import { CompradorUbicacion } from './../../../model/compradorUbicacion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comprador } from 'src/app/model/comprador';

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
  idCompradorSeleccionado:number =0;
  idUbicacionSeleccionado:number =0;
  listaComprador: Comprador[]=[];
  listaUbicacion: Ubicacion[]=[];
  constructor(private compradorubicacionservice: CompradorUbicacionService,private router: Router, private route: ActivatedRoute,
    private compradorservice:CompradorService ,private ubicacionservice:UbicacionService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.compradorservice.listar().subscribe(data =>{this.listaComprador = data});
    this.ubicacionservice.listar().subscribe(data =>{this.listaUbicacion = data});
  }

  aceptar(): void {
    if (true) {
      let p = new Comprador();
      p.id = this.idCompradorSeleccionado;
      this.compradorubicacion.clienteid = p;

      let a = new Ubicacion();
      a.id = this.idUbicacionSeleccionado;
      this.compradorubicacion.ubicacionid = a;
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
        this.idCompradorSeleccionado = data.clienteid.id;
        this.idUbicacionSeleccionado = data.ubicacionid.id;

      })
    }

  }

}
