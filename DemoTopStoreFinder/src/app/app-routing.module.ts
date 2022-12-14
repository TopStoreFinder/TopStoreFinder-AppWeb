import { Querystockproductomenor50Component } from './page/stock/querystockproductomenor50/querystockproductomenor50.component';
import { QueryStockProductoComponent } from './page/stock/query-stock-producto/query-stock-producto.component';
import { TipoProductoResultadoqueryComponent } from './page/tipo-producto/tipo-producto-resultadoquery/tipo-producto-resultadoquery.component';
import { QueryCantidadPrecioDeterminadComponent } from './page/tienda-producto/query-cantidad-precio-determinad/query-cantidad-precio-determinad.component';
import { ResultadoReseniaComponent } from './page/resenia-calificacion/resultado-resenia/resultado-resenia.component';
import { ResultadoProductoComponent } from './page/producto/resultado-producto/resultado-producto.component';
import { ResultadoCantidadProductosporcadaTienda } from './model/ResultadoCantidadProductosporcadaTienda';
import { QueryCompradorUbicacionComponent } from './page/comprador-ubicacion/query-comprador-ubicacion/query-comprador-ubicacion.component';
import { TiendaCantidadTiendasComponent } from './page/tienda/tienda-cantidad-tiendas/tienda-cantidad-tiendas.component';
import { TipoPagoResultadoqueryComponent } from './page/tipo-pago/tipo-pago-resultadoquery/tipo-pago-resultadoquery.component';

import { CompradorubicacionCreaeditaComponent } from './page/comprador-ubicacion/compradorubicacion-creaedita/compradorubicacion-creaedita.component';
import { TipoProductoCreaditaComponent } from './page/tipo-producto/tipo-producto-creadita/tipo-producto-creadita.component';
import { tiendaproductoCreaeditaComponent } from './page/tienda-producto/tiendaproducto-creaedita/tiendaproducto-creaedita.component';
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
import { DuenhoCreaeditaComponent } from './page/duenho/duenho-creaedita/duenho-creaedita.component';
import { StockCreaeditaComponent } from './page/stock/stock-creaedita/stock-creaedita.component';
import { UbicacionCreaeditaComponent } from './page/ubicacion/ubicacion-creaedita/ubicacion-creaedita.component';
import { HomeComponent } from './page/home/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [

    ]
  },{
    path: 'tipopago', component: TipoPagoComponent, children: [
      {path: 'nuevo', component: TipopagoCreaeditaComponent},
      { path: 'edicion/:id', component: TipopagoCreaeditaComponent },
      { path :'resultadocanttipopagoportienda',component: TipoPagoResultadoqueryComponent}
    ]
  }, {
    path: 'reseniacalificacion', component: ReseniaCalificacionComponent, children: [
      { path: 'nuevo', component: ReseniacalificacionCreaeditaComponent },
    { path: 'edicion/:id', component: ReseniacalificacionCreaeditaComponent },
    { path: 'buscarcantidadreseniasportienda', component: ResultadoReseniaComponent }
    ]
  }, {
    path: 'tipoproducto', component: TipoProductoComponent, children: [
      {path: 'nuevo', component: TipoProductoCreaditaComponent},
      { path: 'edicion/:id', component: TipoProductoCreaditaComponent },
      {path: 'cantidadproductostipo', component: TipoProductoResultadoqueryComponent}
    ]
  }, {
    path: 'producto', component: ProductoComponent, children: [
      { path: 'nuevo', component: ProductoCreaeditaComponent },
    { path: 'edicion/:id', component: ProductoCreaeditaComponent },
    { path: 'Cantidaddeproductosportienda', component: ResultadoProductoComponent }
    ]
  }, {
    path: 'compradorubicacion', component: CompradorUbicacionComponent, children: [
      { path: 'nuevo', component: CompradorubicacionCreaeditaComponent },
      { path: 'edicion/:id', component: CompradorubicacionCreaeditaComponent },
      { path: 'cantidadcompradorubicacion', component:QueryCompradorUbicacionComponent}
    ]
  }, {
    path: 'ubicacion', component: UbicacionComponent, children: [
      {path: 'nuevo', component: UbicacionCreaeditaComponent},
      { path: 'edicion/:id', component: UbicacionCreaeditaComponent }
    ]
  }, {
    path: 'tiendaproducto', component: TiendaProductoComponent, children: [
      {path: 'nuevo', component: tiendaproductoCreaeditaComponent},
      { path: 'edicion/:id', component: tiendaproductoCreaeditaComponent },
      {path: 'buscarcantidadpreciosDeterminados', component:QueryCantidadPrecioDeterminadComponent}
    ]
  }, {
    path: 'tienda', component: TiendaComponent, children: [
      {path: 'nuevo', component: tiendaCreaeditaComponent},
      { path: 'edicion/:id', component: tiendaCreaeditaComponent },
      {path:'buscarcantidadtiendasporcadaduenho', component:TiendaCantidadTiendasComponent}

    ]
  }, {
    path: 'duenho', component: DuenhoComponent, children: [
      {path: 'nuevo', component: DuenhoCreaeditaComponent},
      { path: 'edicion/:id', component: DuenhoCreaeditaComponent }

    ]
  }, {
    path: 'comprador', component: CompradorComponent, children: [
      { path: 'nuevo', component: CompradorCreaeditaComponent },
      { path: 'edicion/:id', component: CompradorCreaeditaComponent }
    ]
  },{
    path: 'stock', component: StockComponent, children: [
      { path: 'nuevo', component: StockCreaeditaComponent },
      { path: 'edicion/:id', component: StockCreaeditaComponent },
      {path :'buscarcantidadstcokporproducto', component:QueryStockProductoComponent},
      {path :'buscarcantidadstcokporproductomenor50', component:Querystockproductomenor50Component}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
