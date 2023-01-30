import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SliderModule } from 'src/app/shared/components/slider/slider.module';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SliderModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
