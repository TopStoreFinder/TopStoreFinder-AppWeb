import { TipoProductoService } from './../../../service/tipo-producto.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipoProducto } from 'src/app/model/TipoProducto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-producto-creadita',
  templateUrl: './tipo-producto-creadita.component.html',
  styleUrls: ['./tipo-producto-creadita.component.css']
})
export class TipoProductoCreaditaComponent implements OnInit {
TipoProducto: TipoProducto = new TipoProducto();
mensaje: string = ""
edicion: boolean = false;
id: number = 0;
  constructor(private tipoproductoservice: TipoProductoService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.TipoProducto.categoriaNombre.length > 0) {
      if (this.edicion) {
        this.tipoproductoservice.modificar(this.TipoProducto).subscribe(data => {
          this.tipoproductoservice.listar().subscribe(data => {
            this.tipoproductoservice.setLista(data);
          })
        })
      } else {

        this.tipoproductoservice.insertar(this.TipoProducto).subscribe(data => {
          this.tipoproductoservice.listar().subscribe(data => {
            this.tipoproductoservice.setLista(data);
          })
        })
      }
      this.router.navigate(['tipoproducto']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.tipoproductoservice.listarId(this.id).subscribe(data => {
        this.TipoProducto = data;
      })
    }

  }
}
