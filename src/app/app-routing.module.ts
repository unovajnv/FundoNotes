import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PasswordComponent } from './password/password.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { ReminderComponent } from './reminder/reminder.component';
import { TrashComponent } from './trash/trash.component';
import { ArchiveComponent } from './archive/archive.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {
     path: 'home',
    component: HomeComponent,
   
    children: [
      {
        path: 'notes',
        component: NotesComponent,
        canActivate:[AuthGuard],
      },
      {
        path:'reminder',
        component: ReminderComponent
      },
      {
        path:'trash',
        component: TrashComponent
      },
      {
        path:'archive',
        component: ArchiveComponent
      }
  ]
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

