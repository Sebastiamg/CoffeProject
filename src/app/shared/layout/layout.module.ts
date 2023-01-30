import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component'



@NgModule({
  declarations: [LayoutComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [LayoutComponent, NavComponent, FooterComponent]
})
export class LayoutModule { }
