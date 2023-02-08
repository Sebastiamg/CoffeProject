import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    // Home path
    {
      path: '',
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },

    // Auth routing module path
    {
      path: 'auth',
      loadChildren: () => import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule)
    },

    // catalog module
    {
      path: 'menu',
      loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule)
    },
    
    // User routing module
    {
      path: 'user',
      loadChildren: () => import('./modules/user/user-routing.module').then(m => m.UserRoutingModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
