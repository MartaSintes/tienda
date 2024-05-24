import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormularioCompraComponent } from './components/formulario-compra/formulario-compra.component';



const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'compra', component: FormularioCompraComponent },
  { path: ':slug', component: ProductoComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
