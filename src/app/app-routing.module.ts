import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'' ,component:HomePageComponent,},
  {path:'sign-up',component: SignUpComponent},
  {path:'login',component: LoginComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
