import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { routing } from './app.routing';


import { InicioComponent } from './components/inicio/inicio.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormularioCompraComponent } from './components/formulario-compra/formulario-compra.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TopbarComponent,
    RegisterComponent,
    FooterComponent,
    LoginComponent,
    ShopComponent,
    ProductoComponent,
    FormularioCompraComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing,
    NgbPaginationModule,
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
