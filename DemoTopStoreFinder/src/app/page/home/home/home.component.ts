import { StockService } from 'src/app/service/stock.service';
import { TiendaProductoService } from './../../../service/tienda-producto.service';
import { ProductoService } from './../../../service/producto.service';
import { ReseñaCalificacionService } from 'src/app/service/reseña-calificacion.service';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { TipoProductoService } from './../../../service/tipo-producto.service';
import { CompradorService } from 'src/app/service/comprador.service';
import { DuenhoService } from 'src/app/service/duenho.service';
import { TipoPagoService } from 'src/app/service/tipo-pago.service';
import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/service/tienda.service';
import { CompradorUbicacionService } from 'src/app/service/comprador-ubicacion.service';

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
  countUbicacion: number = 0;
  countcompUbicacion: number = 0;
  countproducto: number = 0;
  countresenha: number = 0;
  counttiendaproducto: number = 0;
  countstock: number = 0;

  constructor(private tipopago: TipoPagoService, private duenho: DuenhoService, private tienda: TiendaService,
    private comprador: CompradorService, private tipoproducto: TipoProductoService, private ubicacion: UbicacionService, private compUbicacion: CompradorUbicacionService
    , private resenha: ReseñaCalificacionService, private producto: ProductoService, private tiendaproducto: TiendaProductoService,
    private stock: StockService) { }

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
    this.ubicacion.getCount().subscribe(data => {
      this.countUbicacion = data.length;
    });
    this.compUbicacion.getCount().subscribe(data => {
      this.countcompUbicacion = data.length;
    });
    this.resenha.getCount().subscribe(data => {
      this.countresenha = data.length;
    });
    this.producto.getCount().subscribe(data => {
      this.countproducto = data.length;
    });
    this.tiendaproducto.getCount().subscribe(data => {
      this.counttiendaproducto = data.length;
    });
    this.stock.getCount().subscribe(data => {
      this.countstock = data.length;
    });
  }

}
