import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllbooksComponent } from './Component/allbooks/allbooks.component';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { CartComponent } from './Component/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AllbooksComponent,
    QuickviewComponent,
    WishlistComponent,
    CartComponent,
    DashboardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  schemas : [NO_ERRORS_SCHEMA]
})
export class AppModule { }
