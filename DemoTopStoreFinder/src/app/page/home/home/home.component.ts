import { TipoProductoService } from './../../../service/tipo-producto.service';
import { CompradorService } from 'src/app/service/comprador.service';
import { DuenhoService } from 'src/app/service/duenho.service';
import { TipoPagoService } from 'src/app/service/tipo-pago.service';
import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/service/tienda.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countTipoPago: number = 0;
  countTienda: number = 0;
  countDuenho: number = 0;
  countComprador: number = 0;
  countTipoProducto: number = 0;

  constructor(private tipopago: TipoPagoService, private duenho: DuenhoService, private tienda: TiendaService,
     private comprador:CompradorService, private tipoproducto:TipoProductoService) { }

  ngOnInit(): void {
    this.tipopago.getCount().subscribe(data => {
      this.countTipoPago = data.length;
    });

    this.duenho.getCount().subscribe(data => {
      this.countDuenho = data.length;
    });

    this.tienda.getCount().subscribe(data => {
      this.countTienda = data.length;
    });
    this.comprador.getCount().subscribe(data => {
      this.countComprador = data.length;
    });

    this.tipoproducto.getCount().subscribe(data => {
      this.countTipoProducto = data.length;
    });

  }

}
