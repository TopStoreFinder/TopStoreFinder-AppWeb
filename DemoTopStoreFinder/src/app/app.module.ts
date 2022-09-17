import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './page/tienda/tienda.component';
import { TiendalistarComponent } from './page/tienda/tiendalistar/tiendalistar.component';
import { TiendaListarComponent } from './page/tienda/tienda-listar/tienda-listar.component';
import { TiendaProductoComponent } from './page/tienda-producto/tienda-producto.component';
import { TiendaprodudctoListarComponent } from './page/tienda-producto/tiendaprodudcto-listar/tiendaprodudcto-listar.component';
import { ProductoComponent } from './page/producto/producto.component';
import { ReseniaCalificacionComponent } from './page/resenia-calificacion/resenia-calificacion.component';
import { TipoPagoComponent } from './page/tipo-pago/tipo-pago.component';
import { ProductoListarComponent } from './page/producto/producto-listar/producto-listar.component';
import { ReseniacalificacionListarComponent } from './page/resenia-calificacion/reseniacalificacion-listar/reseniacalificacion-listar.component';
import { TipopagoListarComponent } from './page/tipo-pago/tipopago-listar/tipopago-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    TiendalistarComponent,
    TiendaListarComponent,
    TiendaProductoComponent,
    TiendaprodudctoListarComponent,
    ProductoComponent,
    ReseniaCalificacionComponent,
    TipoPagoComponent,
    ProductoListarComponent,
    ReseniacalificacionListarComponent,
    TipopagoListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
