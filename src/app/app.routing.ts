import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';



const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
