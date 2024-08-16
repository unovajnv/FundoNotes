import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PasswordComponent } from './password/password.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
     path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'basic-info',
    component: BasicInfoComponent
  },
  {
    path:'password',
    component: PasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

