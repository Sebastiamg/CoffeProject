import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        }
      })
    }
    return
  }

  ngOnInit() {
    localStorage.setItem("isLogged", "false")
  }
}
