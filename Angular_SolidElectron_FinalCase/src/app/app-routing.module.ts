import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { ShopProductsComponent } from './components/shop-products/shop-products.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full',},
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: 'products', component:ShopProductsComponent, canActivate:[AuthGuard]},
  {path: 'cart', component:ShopCartComponent},
  {path: 'detail/:id', component:DetailComponent, canActivate:[AuthGuard]},
  {path: '**', component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
