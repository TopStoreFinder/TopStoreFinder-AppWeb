import { TipopagoCreaeditaComponent } from './page/tipo-pago/tipopago-creaedita/tipopago-creaedita.component';
import { TipoPagoComponent } from './page/tipo-pago/tipo-pago.component';
import { CompradorComponent } from './page/comprador/comprador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProductoComponent } from './page/tipo-producto/tipo-producto.component';
import { StockComponent } from './page/stock/stock.component';
import { UbicacionComponent } from './page/ubicacion/ubicacion.component';
import { DuenhoComponent } from './page/duenho/duenho.component';
import { CompradorUbicacionComponent } from './page/comprador-ubicacion/comprador-ubicacion.component';
import { ReseniaCalificacionComponent } from './page/resenia-calificacion/resenia-calificacion.component';
import { ProductoComponent } from './page/producto/producto.component';
import { TiendaProductoComponent } from './page/tienda-producto/tienda-producto.component';
import { TiendaComponent } from './page/tienda/tienda.component';


const routes: Routes = [
  {
    path: 'tipopago', component: TipoPagoComponent, children: [
      {path: 'nuevo', component: TipopagoCreaeditaComponent}
    ]
  }, {
    path: 'reseniacalificacion', component: ReseniaCalificacionComponent, children: [

    ]
  }, {
    path: 'tipoproducto', component: TipoProductoComponent, children: [

    ]
  }, {
    path: 'stock', component: StockComponent, children: [

    ]
  }, {
    path: 'producto', component: ProductoComponent, children: [

    ]
  }, {
    path: 'compradorubicacion', component: CompradorUbicacionComponent, children: [

    ]
  }, {
    path: 'ubicacion', component: UbicacionComponent, children: [

    ]
  }, {
    path: 'tiendaproducto', component: TiendaProductoComponent, children: [

    ]
  }, {
    path: 'tienda', component: TiendaComponent, children: [

    ]
  }, {
    path: 'duenho', component: DuenhoComponent, children: [

    ]
  }, {
    path: 'comprador', component: CompradorComponent, children: [

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
