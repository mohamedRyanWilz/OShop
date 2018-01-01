import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuard } from './admin-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShopingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path:'' , component:HomeComponent},
      {path:'products' , component:ProductsComponent},
      {path:'shoping-cart' , component:ShopingCartComponent},
      {path:'check-out' , component:CheckOutComponent , canActivate:[AuthGuard]},
      {path:'order-success' , component:OrderSuccessComponent, canActivate:[AuthGuard] },
      {path:'login' , component:LoginComponent},
      {path:'admin/admin-products' , component:AdminProductsComponent , canActivate:[AuthGuard,AdminAuthGuard]},
      {path:'admin/admin-orders' , component:AdminOrdersComponent , canActivate:[AuthGuard,AdminAuthGuard]},
      {path:'my/my-orders' , component:MyOrdersComponent, canActivate:[AuthGuard]},
      {path:'**' , component:HomeComponent}

    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
