import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [{
  // default layputComponent
  path: '',
  component: LayoutComponent,
  children: [
    // redirect to logIn
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'create'
    },
    {
      path: 'create',
      component: CreateUsersComponent
    },
    {
      path: 'profile',
      component: UserProfileComponent
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
