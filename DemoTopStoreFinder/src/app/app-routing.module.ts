import { ReseniacalificacionCreaeditaComponent } from './page/resenia-calificacion/reseniacalificacion-creaedita/reseniacalificacion-creaedita.component';
import { ProductoCreaeditaComponent } from './page/producto/producto-creaedita/producto-creaedita.component';
import { StockComponent } from './page/stock/stock.component';
import { TipopagoCreaeditaComponent } from './page/tipo-pago/tipopago-creaedita/tipopago-creaedita.component';
import { TipoPagoComponent } from './page/tipo-pago/tipo-pago.component';
import { CompradorComponent } from './page/comprador/comprador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProductoComponent } from './page/tipo-producto/tipo-producto.component';
import { UbicacionComponent } from './page/ubicacion/ubicacion.component';
import { DuenhoComponent } from './page/duenho/duenho.component';
import { CompradorUbicacionComponent } from './page/comprador-ubicacion/comprador-ubicacion.component';
import { ReseniaCalificacionComponent } from './page/resenia-calificacion/resenia-calificacion.component';
import { ProductoComponent } from './page/producto/producto.component';
import { TiendaProductoComponent } from './page/tienda-producto/tienda-producto.component';
import { TiendaComponent } from './page/tienda/tienda.component';
import { CompradorCreaeditaComponent } from './page/comprador/comprador-creaedita/comprador-creaedita.component';
import { tiendaCreaeditaComponent } from './page/tienda/tienda-creaedita/tienda-creaedita.component';

const routes: Routes = [
  {
    path: 'tipopago', component: TipoPagoComponent, children: [
      {path: 'nuevo', component: TipopagoCreaeditaComponent},
      { path: 'edicion/:id', component: TipopagoCreaeditaComponent }
    ]
  }, {
    path: 'reseniacalificacion', component: ReseniaCalificacionComponent, children: [
      { path: 'nuevo', component: ReseniacalificacionCreaeditaComponent },
    { path: 'edicion/:id', component: ReseniacalificacionCreaeditaComponent }
    ]
  }, {
    path: 'tipoproducto', component: TipoProductoComponent, children: [

    ]
  }, {
    path: 'producto', component: ProductoComponent, children: [
      { path: 'nuevo', component: ProductoCreaeditaComponent },
    { path: 'edicion/:id', component: ProductoCreaeditaComponent }
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
      {path: 'nuevo', component: tiendaCreaeditaComponent},
      { path: 'edicion/:id', component: tiendaCreaeditaComponent }

    ]
  }, {
    path: 'duenho', component: DuenhoComponent, children: [

    ]
  }, {
    path: 'comprador', component: CompradorComponent, children: [
      { path: 'nuevo', component: CompradorCreaeditaComponent },
      { path: 'edicion/:id', component: CompradorCreaeditaComponent }
    ]
  },{
    path: 'stock', component: StockComponent, children: [

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
