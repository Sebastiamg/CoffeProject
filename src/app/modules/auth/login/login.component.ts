import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(readonly authService: AuthService, readonly router: Router) {}

  readonly user = {
    "email": '',
    "password": ''
  }

  // find user and login
  loginUser(e: Event) {
    e.preventDefault()
    if(Object.values(this.user).includes("")) {
      return console.log("llena todos los campos")
    } else {
      return this.authService.getUser(this.user).subscribe( res => {
        if (res === null) {
          console.log("Ingresa tus datos nuevamente")
        } else {
          console.log("Logeado correctamente")
          localStorage.setItem("isLogged", "true")
          localStorage.setItem("userName", (res as any).name)
          localStorage.setItem("user", JSON.stringify(res))
          setTimeout(() => {
            window.location.href = "http://localhost:4200/";
          }, 1000);
        }
      })
    }
    return
  }

  resetStorage() {
    localStorage.setItem("isLogged", "false");
    localStorage.setItem("userName", " ");
    localStorage.setItem("user", "");
  }

  ngOnInit() {
    this.resetStorage();
  }
}
