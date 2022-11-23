import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Stock } from 'src/app/model/Stock';
import { StockService } from 'src/app/service/stock.service';
import * as moment from 'moment';

@Component({
  selector: 'app-stock-creaedita',
  templateUrl: './stock-creaedita.component.html',
  styleUrls: ['./stock-creaedita.component.css']
})
export class StockCreaeditaComponent implements OnInit {
  stock: Stock = new Stock();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(private stockservice: StockService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.stock.enStock > 0 ) {
      this.stock.fecha = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
      if (this.edicion) {
        this.stockservice.modificar(this.stock).subscribe(data => {
          this.stockservice.listar().subscribe(data => {
            this.stockservice.setLista(data);
          })
        })
      } else {
        this.stockservice.insertar(this.stock).subscribe(data => {
          this.stockservice.listar().subscribe(data => {
            this.stockservice.setLista(data);
          })
        })
      }
      this.router.navigate(['stock']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.stockservice.listarId(this.id).subscribe(data => {
        this.stock = data;
      })
    }

  }
}
