import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContentpageComponent } from './contentpage/contentpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  // {path:'',redirectTo:'sign-up', pathMatch:'full'},
  {path:'' ,component:HomePageComponent,},
  {path:'sign-up',component: SignUpComponent},
  {path:'reg',component:LoginComponent},
  {path:'login',component: LoginComponent},
  {path:'ab',component:ContentpageComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'contentpage',component:ContentpageComponent},
  {path:'mainpage',component:MainpageComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
