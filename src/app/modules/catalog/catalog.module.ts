import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CreateItemsComponent } from './create-items/create-items.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { CreateItemsModule } from './create-items/create-items.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CatalogComponent
      },
      {
        path: 'create',
        component: CreateItemsComponent
      }
    ]
  }
]


@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    CreateItemsModule
  ]
})
export class CatalogModule { }
