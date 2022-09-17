import { MatTableDataSource } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './page/tienda/tienda.component';
import { TiendaListarComponent } from './page/tienda/tienda-listar/tienda-listar.component';
import { TiendaProductoComponent } from './page/tienda-producto/tienda-producto.component';
import { TiendaprodudctoListarComponent } from './page/tienda-producto/tiendaprodudcto-listar/tiendaprodudcto-listar.component';
import { ProductoComponent } from './page/producto/producto.component';
import { ReseniaCalificacionComponent } from './page/resenia-calificacion/resenia-calificacion.component';
import { TipoPagoComponent } from './page/tipo-pago/tipo-pago.component';
import { ProductoListarComponent } from './page/producto/producto-listar/producto-listar.component';
import { ReseniacalificacionListarComponent } from './page/resenia-calificacion/reseniacalificacion-listar/reseniacalificacion-listar.component';
import { TipopagoListarComponent } from './page/tipo-pago/tipopago-listar/tipopago-listar.component';
import { DuenhoComponent } from './page/duenho/duenho.component';
import { CompradorComponent } from './page/comprador/comprador.component';
import { DuenhoListarComponent } from './page/duenho/duenho-listar/duenho-listar.component';
import { CompradorListarComponent } from './page/comprador/comprador-listar/comprador-listar.component';
import { UbicacionComponent } from './page/ubicacion/ubicacion.component';
import { CompradorUbicacionComponent } from './page/comprador-ubicacion/comprador-ubicacion.component';
import { UbicacionListarComponent } from './page/ubicacion/ubicacion-listar/ubicacion-listar.component';
import { CompradorubicacionListarComponent } from './page/comprador-ubicacion/compradorubicacion-listar/compradorubicacion-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    TiendaListarComponent,
    TiendaProductoComponent,
    TiendaprodudctoListarComponent,
    ProductoComponent,
    ReseniaCalificacionComponent,
    TipoPagoComponent,
    ProductoListarComponent,
    ReseniacalificacionListarComponent,
    TipopagoListarComponent,
    DuenhoComponent,
    CompradorComponent,
    DuenhoListarComponent,
    CompradorListarComponent,
    UbicacionComponent,
    CompradorUbicacionComponent,
    UbicacionListarComponent,
    CompradorubicacionListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
