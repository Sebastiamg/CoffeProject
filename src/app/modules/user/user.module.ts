import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { CreateUsersModule } from './create-users/create-users.module';
import { FormsModule } from '@angular/forms';
import { UserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CreateUsersModule,
    FormsModule,
    UserProfileModule
  ]
})
export class UserModule { }
