import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PasswordComponent } from './password/password.component';
const routes: Routes = [
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // }

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

