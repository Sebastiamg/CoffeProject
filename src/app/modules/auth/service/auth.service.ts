import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly apiUrl = "http://localhost:3000/auth/register";

  constructor(private readonly httpClient: HttpClient ) {}

  getAllUser() {
    return this.httpClient.get(this.apiUrl)
  }

  getUser(data: {email: string, password: string}) {
    return this.httpClient.post(`${this.apiUrl}/get`, data);
  }

  createUser(data: object) {
    return this.httpClient.post(this.apiUrl, data);
  }

}
