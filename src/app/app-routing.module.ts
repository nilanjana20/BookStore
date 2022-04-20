import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbooksComponent } from './Component/allbooks/allbooks.component';
import { CartComponent } from './Component/cart/cart.component';
import { LoginComponent } from './Component/login/login.component';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import { RegisterComponent } from './Component/register/register.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
      {path:'allbooks',component:AllbooksComponent},
      {path:'quickview/:id',component:QuickviewComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'cart',component:CartComponent}

    ],
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
