import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateItemsComponent } from './create-items.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateItemsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CreateItemsComponent
  ]
})
export class CreateItemsModule { }
