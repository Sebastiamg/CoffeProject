import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  // default layputComponent
  path: '',
  component: LayoutComponent,
  children: [
    // redirect to logIn
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    },
    // login path
    {
      path: 'login',
      component: LoginComponent
    },
    // register path
    {
      path: 'register',
      component: RegisterComponent
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
