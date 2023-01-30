import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  protected newUser = {
    name: "",
    email: "",
    password: "",
    status: true
  } 

  constructor(readonly authService: AuthService, readonly router: Router) {}

  consoleRegisre() {
    return this.authService.getAllUser().subscribe(res => console.log(res))
  }

  registerUser(e: Event) {
    e.preventDefault()
    let data = this.newUser;
      data.name = data.name.trim()
      data.email = data.email.trim()
      data.password = data.password.trim()
    if (Object.values(data).map(x => x == "").find(find => find === true)) {
      console.log("llena todos")
    } else {
      console.log("bien")
      return this.authService.createUser(data).subscribe(res => {
        localStorage.setItem("isLogged", "true")
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
        console.log(res)
      })
    }
    return
  }

  ngOnInit() {
    this.consoleRegisre()
  }
}
