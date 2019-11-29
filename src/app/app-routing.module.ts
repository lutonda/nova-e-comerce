import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailsComponent } from './pages/user/details/details.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/details/:id', component: DetailsComponent },

  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuardService],
    data: {
   //   expectedRole: 'admin'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
