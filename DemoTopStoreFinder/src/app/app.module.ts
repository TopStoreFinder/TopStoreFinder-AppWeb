
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
    NavbarComponent
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
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
