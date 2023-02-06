import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUsersComponent } from './create-users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateUsersComponent],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    CreateUsersComponent
  ]
})
export class CreateUsersModule { }
