import { MatSidenavModule } from '@angular/material/sidenav';

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
import { TipoProductoComponent } from './page/tipo-producto/tipo-producto.component';
import { TipoProductoListarComponent } from './page/tipo-producto/tipo-producto-listar/tipo-producto-listar.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TipopagoCreaeditaComponent } from './page/tipo-pago/tipopago-creaedita/tipopago-creaedita.component';
import { StockComponent } from './page/stock/stock.component';
import { StockListarComponent } from './page/stock/stock-listar/stock-listar.component';
import { ProductoCreaeditaComponent } from './page/producto/producto-creaedita/producto-creaedita.component';
import { ReseniacalificacionCreaeditaComponent } from './page/resenia-calificacion/reseniacalificacion-creaedita/reseniacalificacion-creaedita.component';
import { tiendaCreaeditaComponent } from './page/tienda/tienda-creaedita/tienda-creaedita.component';
import { CompradorCreaeditaComponent } from './page/comprador/comprador-creaedita/comprador-creaedita.component';
import { tiendaproductoCreaeditaComponent } from './page/tienda-producto/tiendaproducto-creaedita/tiendaproducto-creaedita.component';
import { DuenhoCreaeditaComponent } from './page/duenho/duenho-creaedita/duenho-creaedita.component';
import { StockCreaeditaComponent } from './page/stock/stock-creaedita/stock-creaedita.component';
import { TiendaDialogoComponent } from './page/tienda/tienda-listar/tienda-dialogo/tienda-dialogo.component';
import { TipopagoDialogoComponent } from './page/tipo-pago/tipopago-listar/tipopago-dialogo/tipopago-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductoDialogoComponent } from './page/producto/producto-listar/producto-dialogo/producto-dialogo.component';
import { ReseniacalificacionDialogoComponent } from './page/resenia-calificacion/reseniacalificacion-listar/reseniacalificacion-dialogo/reseniacalificacion-dialogo.component';
import { TiendaBuscarComponent } from './page/tienda/tienda-buscar/tienda-buscar.component';
import { TipopagoBuscarComponent } from './page/tipo-pago/tipopago-buscar/tipopago-buscar.component';
import { ProductoBuscarComponent } from './page/producto/producto-buscar/producto-buscar.component';
import { CompradorDialogoComponent } from './page/comprador/comprador-dialogo/comprador-dialogo.component';
import { DuenhoDialogoComponent } from './page/duenho/duenho-dialogo/duenho-dialogo.component';
import { CompradorBuscarComponent } from './page/comprador/comprador-buscar/comprador-buscar.component';
import { DuenhoBuscarComponent } from './page/duenho/duenho-buscar/duenho-buscar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './page/navbar/navbar.component';
import { TiendaproductoBuscarComponent } from './page/tienda-producto/tiendaproducto-buscar/tiendaproducto-buscar.component';
import { TiendaproductoDialogoComponent } from './page/tienda-producto/tiendaprodudcto-listar/tiendaproducto-dialogo/tiendaproducto-dialogo.component';
import { ReseniacalificacionBuscarComponent } from './page/resenia-calificacion/reseniacalificacion-buscar/reseniacalificacion-buscar.component';
import { UbicacionDialogoComponent } from './page/ubicacion/ubicacion-listar/ubicacion-dialogo/ubicacion-dialogo.component';
import { UbicacionBuscarComponent } from './page/ubicacion/ubicacion-buscar/ubicacion-buscar.component';
import { UbicacionCreaeditaComponent } from './page/ubicacion/ubicacion-creaedita/ubicacion-creaedita.component';
import { CompradorubicacionDialogoComponent } from './page/comprador-ubicacion/compradorubicacion-listar/compradorubicacion-dialogo/compradorubicacion-dialogo.component';
import { CompradorubicacionBuscarComponent } from './page/comprador-ubicacion/compradorubicacion-buscar/compradorubicacion-buscar.component';
import { CompradorubicacionCreaeditaComponent } from './page/comprador-ubicacion/compradorubicacion-creaedita/compradorubicacion-creaedita.component';
import { StockDialogoComponent } from './page/stock/stock-dialogo/stock-dialogo.component';
import { TipoProductoCreaditaComponent } from './page/tipo-producto/tipo-producto-creadita/tipo-producto-creadita.component';
import { TipoProductoDialogoComponent } from './page/tipo-producto/tipo-producto-dialogo/tipo-producto-dialogo.component';
import { TipoProductoBuscarComponent } from './page/tipo-producto/tipo-producto-buscar/tipo-producto-buscar.component';
import { StockBuscarComponent } from './page/stock/stock-buscar/stock-buscar.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './page/home/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './custom-adapter';
import { TipoPagoResultadoqueryComponent } from './page/tipo-pago/tipo-pago-resultadoquery/tipo-pago-resultadoquery.component';
import { TiendaCantidadTiendasComponent } from './page/tienda/tienda-cantidad-tiendas/tienda-cantidad-tiendas.component';
import { QueryCompradorUbicacionComponent } from './page/comprador-ubicacion/query-comprador-ubicacion/query-comprador-ubicacion.component';
import { ResultadoProductoComponent } from './page/producto/resultado-producto/resultado-producto.component';
import { ResultadoReseniaComponent } from './page/resenia-calificacion/resultado-resenia/resultado-resenia.component';
import { QueryCantidadPrecioDeterminadComponent } from './page/tienda-producto/query-cantidad-precio-determinad/query-cantidad-precio-determinad.component';
import { QueryStockProductoComponent } from './page/stock/query-stock-producto/query-stock-producto.component';


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
    CompradorubicacionListarComponent,
    TipoProductoComponent,
    TipoProductoListarComponent,
    TipopagoCreaeditaComponent,
    StockComponent,
    StockListarComponent,
    ProductoCreaeditaComponent,
    ReseniacalificacionCreaeditaComponent,
    tiendaCreaeditaComponent,
    CompradorCreaeditaComponent,
    tiendaproductoCreaeditaComponent,
    DuenhoCreaeditaComponent,
    StockCreaeditaComponent,
    TiendaDialogoComponent,
    TipopagoDialogoComponent,
    ProductoDialogoComponent,
    ReseniacalificacionDialogoComponent,
    TiendaBuscarComponent,
    TipopagoBuscarComponent,
    ProductoBuscarComponent,
    CompradorDialogoComponent,
    DuenhoDialogoComponent,
    CompradorBuscarComponent,
    DuenhoBuscarComponent,
    NavbarComponent,
    TiendaproductoBuscarComponent,
    TiendaproductoDialogoComponent,
    ReseniacalificacionBuscarComponent,
    UbicacionDialogoComponent,
    UbicacionBuscarComponent,
    UbicacionCreaeditaComponent,
    CompradorubicacionDialogoComponent,
    CompradorubicacionBuscarComponent,
    CompradorubicacionCreaeditaComponent,
    StockDialogoComponent,
    TipoProductoCreaditaComponent,
    TipoProductoDialogoComponent,
    TipoProductoBuscarComponent,
    StockBuscarComponent,
    HomeComponent,
    TipoPagoResultadoqueryComponent,
    TiendaCantidadTiendasComponent,
    QueryCompradorUbicacionComponent,
    ResultadoProductoComponent,
    ResultadoReseniaComponent,
    QueryCantidadPrecioDeterminadComponent,
    QueryStockProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  { provide: DateAdapter, useClass: CustomDateAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
