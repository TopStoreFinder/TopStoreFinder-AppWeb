import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './page/tienda/tienda.component';
import { TiendalistarComponent } from './page/tienda/tiendalistar/tiendalistar.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    TiendalistarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
