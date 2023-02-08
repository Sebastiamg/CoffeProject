import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent {
  protected newUser = {
    name: "",
    email: "",
    password: "",
    status: true,
    profile: {
      role: "user",
      surname: "",
      phone: 1,
      photo: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
    }
  } 

  constructor(readonly authService: AuthService) {};

  consoleRegisre() {
    return this.authService.getAllUser().subscribe(res => console.log(res));
  }

  // register and add user in db
  registerUser(e: Event) {
    e.preventDefault()
    const p = document.createElement("p");
    p.classList.add("text-center");

    let data = this.newUser;
      data.name = data.name.trim()
      data.email = data.email.trim()
      data.password = data.password.trim()
      data.profile = data.profile;
    if (Object.values(data).map(x => x == "").find(find => find === true)) {
      console.log("llena todos los campos");

      p.textContent = "Llena todos los campos";
      p.classList.add("text-slate-800", "font-bold", "text-choc1")
      document.querySelector("#password")?.insertAdjacentElement("afterend", p);
      setTimeout(() => {
        p.remove()
      }, 1500);
    } else {
      console.log("bien")
      return this.authService.createUser(data).subscribe(res => {
        localStorage.setItem("isLogged", "true")
        localStorage.setItem("userName", (res as any).name)
        localStorage.setItem("user", JSON.stringify(res))
        setTimeout(() => {
          window.location.href = "http://localhost:4200/";
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


const p = document.createElement("p");
p.classList.add("text-center");

p.textContent = "Error: Llena todos los campos";
p.classList.add("text-slate-800")
document.querySelector(".links")?.insertAdjacentElement("afterend", p);
setTimeout(() => {
  p.remove()
}, 2500);