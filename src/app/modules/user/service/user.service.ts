import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../../auth/service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly apiUrl = "http://localhost:3000/auth/register";

  constructor(
    private readonly authService: AuthService ,
    private readonly httpclient: HttpClient
    ) {}

  // GET all user from db using auth service method
  getAllUsers() {
    return this.authService.getAllUser();
  }

  // DELETE one user from db
  deleteUser(id: number) {
    return this.httpclient.delete(`${this.apiUrl}/${id}`);
  }
  
  // CREATE one user using auth service method
  createUser(userData: object) {
    return this.authService.createUser(userData);
  }

  // UPDATE user and user prifile
  updateUserProfile(id: number, userData: object)  {
    return this.httpclient.put(`${this.apiUrl}/${id}/profile`, userData);
  }
}